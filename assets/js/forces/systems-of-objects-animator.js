// assets/js/forces/systems-of-objects-animator.js

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const svg = document.getElementById('systemsOfObjectsSVG');
    if (!svg) {
        console.error('SVG element with ID "systemsOfObjectsSVG" not found.');
        return;
    }

    // Get references to interactive elements
    const mass1Input = document.getElementById('mass1Input');
    const mass2Input = document.getElementById('mass2Input');
    const muKInput = document.getElementById('muKInput');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const resetAnimationBtn = document.getElementById('resetAnimation');

    // Speed control buttons (from animator_wrapper.html)
    const speedSlowBtn = document.getElementById('speedSlowBtn');
    const speedNormalBtn = document.getElementById('speedNormalBtn');
    const speedFastBtn = document.getElementById('speedFastBtn');

    // Get references to SVG elements for the animation
    const mass1Block = document.getElementById('mass1Block');
    const mass1Label = document.getElementById('mass1Label');
    const mass2Block = document.getElementById('mass2Block');
    const mass2Label = document.getElementById('mass2Label');
    const stringPath = document.getElementById('stringPath');

    // Force vectors and labels for M1
    const m1Fg = document.getElementById('m1Fg');
    const m1FgLabel = document.getElementById('m1FgLabel');
    const m1Fn = document.getElementById('m1Fn');
    const m1FnLabel = document.getElementById('m1FnLabel');
    const m1Ft = document.getElementById('m1Ft');
    const m1FtLabel = document.getElementById('m1FtLabel');
    const m1Ff = document.getElementById('m1Ff');
    const m1FfLabel = document.getElementById('m1FfLabel');

    // Force vectors and labels for M2
    const m2Fg = document.getElementById('m2Fg');
    const m2FgLabel = document.getElementById('m2FgLabel');
    const m2Ft = document.getElementById('m2Ft');
    const m2FtLabel = document.getElementById('m2FtLabel');

    // Get references to text displays
    const accelerationDisplay = document.getElementById('accelerationDisplay');
    const tensionDisplay = document.getElementById('tensionDisplay');
    const stateDisplay = document.getElementById('stateDisplay');
    const animationExplanation = document.getElementById('animationExplanation');

    // --- Constants and Initial State ---
    const G = 9.8; // Acceleration due to gravity (m/s^2)
    const BLOCK1_INITIAL_X = 100; // Initial X position of M1
    const BLOCK1_Y = 200; // Y position of M1 (top edge)
    const BLOCK1_WIDTH = 60;
    const BLOCK1_HEIGHT = 50;

    const BLOCK2_INITIAL_Y = 250; // Initial Y position of M2 (top edge)
    const BLOCK2_X = 350; // X position of M2
    const BLOCK2_WIDTH = 50;
    const BLOCK2_HEIGHT = 50;

    const PULLEY_X = 380;
    const PULLEY_Y = 150;

    let animationSpeed = 1; // 1x normal speed
    let currentMass1 = parseFloat(mass1Input.value);
    let currentMass2 = parseFloat(mass2Input.value);
    let currentMuK = parseFloat(muKInput.value);

    let block1CurrentX = BLOCK1_INITIAL_X;
    let block2CurrentY = BLOCK2_INITIAL_Y;

    let systemAcceleration = 0; // m/s^2
    let stringTension = 0; // N

    let animationFrameId = null;
    let lastTimestamp = null;
    let animationState = 'paused'; // 'paused' or 'playing'

    // --- Helper Functions ---

    /**
     * Updates the explanation text.
     * @param {string} text - The new explanation text.
     */
    function updateExplanation(text) {
        animationExplanation.querySelector('p').textContent = text;
    }

    /**
     * Draws/updates an SVG line representing a force vector.
     * @param {SVGLineElement} lineElement - The SVG line element.
     * @param {SVGTextElement} labelElement - The SVG text label element.
     * @param {number} startX - X-coordinate of the vector's tail.
     * @param {number} startY - Y-coordinate of the vector's tail.
     * @param {number} forceMagnitude - Magnitude of the force.
     * @param {number} forceDirectionAngle - Angle of the force vector in degrees (0 = right, 90 = up).
     * @param {number} [vectorScale=1.5] - Multiplier for visual length of the vector.
     */
    function drawForceVector(lineElement, labelElement, startX, startY, forceMagnitude, forceDirectionAngle, vectorScale = 1.5) {
        if (forceMagnitude === 0) {
            lineElement.style.opacity = 0;
            labelElement.style.opacity = 0;
            return;
        }

        lineElement.style.opacity = 1;
        labelElement.style.opacity = 1;

        const scaledLength = forceMagnitude * vectorScale;
        const rad = forceDirectionAngle * (Math.PI / 180);
        const endX = startX + scaledLength * Math.cos(rad);
        const endY = startY - scaledLength * Math.sin(rad); // Y-axis is inverted in SVG

        lineElement.setAttribute('x1', startX);
        lineElement.setAttribute('y1', startY);
        lineElement.setAttribute('x2', endX);
        lineElement.setAttribute('y2', endY);

        // Position label near the tip of the arrow
        const labelOffsetX = 10 * Math.cos(rad + Math.PI / 2); // Offset perpendicular to vector
        const labelOffsetY = 10 * Math.sin(rad + Math.PI / 2);
        labelElement.setAttribute('x', endX + labelOffsetX);
        labelElement.setAttribute('y', endY + labelOffsetY);
    }

    /**
     * Hides all force vectors and labels.
     */
    function hideAllForces() {
        // M1 Forces
        m1Fg.style.opacity = 0; m1FgLabel.style.opacity = 0;
        m1Fn.style.opacity = 0; m1FnLabel.style.opacity = 0;
        m1Ft.style.opacity = 0; m1FtLabel.style.opacity = 0;
        m1Ff.style.opacity = 0; m1FfLabel.style.opacity = 0;
        // M2 Forces
        m2Fg.style.opacity = 0; m2FgLabel.style.opacity = 0;
        m2Ft.style.opacity = 0; m2FtLabel.style.opacity = 0;
    }

    /**
     * Calculates system acceleration and tension.
     */
    function calculateSystemDynamics() {
        const fg1 = currentMass1 * G;
        const fg2 = currentMass2 * G;
        const fn1 = fg1; // On horizontal surface

        const kineticFriction = currentMuK * fn1;

        // Sum of forces for the system:
        // Forces driving motion: Fg2 (down)
        // Forces opposing motion: Friction (left)
        // Net force on system = Fg2 - Ff1
        const netForceSystem = fg2 - kineticFriction;

        // If net force is positive, system accelerates. If negative, it might not move or accelerate in opposite direction (not possible with current setup)
        // If system is at rest and net force cannot overcome static friction, acceleration is 0.
        // For simplicity, let's assume kinetic friction applies if there's any tendency to move, or if already moving.
        // A more robust model would check static friction first.
        // For this animation, if fg2 > kineticFriction, it moves. If fg2 <= kineticFriction, it stays at rest.
        if (fg2 <= kineticFriction && block1CurrentX === BLOCK1_INITIAL_X) { // If hanging mass can't overcome friction
            systemAcceleration = 0;
            stringTension = fg2; // Tension balances hanging weight if at rest
            stateDisplay.textContent = "State: At Rest";
            blockVelocity = 0; // Ensure no drift
        } else {
            systemAcceleration = netForceSystem / (currentMass1 + currentMass2);
            // Calculate tension from M2: Fg2 - Ft = m2 * a => Ft = Fg2 - m2 * a
            stringTension = fg2 - (currentMass2 * systemAcceleration);
            stateDisplay.textContent = "State: Accelerating";
        }

        // Update displays
        accelerationDisplay.textContent = `Acceleration: ${systemAcceleration.toFixed(2)} m/s²`;
        tensionDisplay.textContent = `Tension: ${stringTension.toFixed(1)} N`;
    }

    /**
     * Updates the positions of blocks and draws string.
     */
    function updateBlockPositionsAndString() {
        mass1Block.setAttribute('x', block1CurrentX);
        mass1Label.setAttribute('x', block1CurrentX + BLOCK1_WIDTH / 2);

        mass2Block.setAttribute('y', block2CurrentY);
        mass2Label.setAttribute('y', block2CurrentY + BLOCK2_HEIGHT / 2);

        // Draw string path
        const stringM1X = block1CurrentX + BLOCK1_WIDTH;
        const stringM1Y = BLOCK1_Y + BLOCK1_HEIGHT / 2;
        const stringM2X = BLOCK2_X + BLOCK2_WIDTH / 2;
        const stringM2Y = block2CurrentY;

        const pathData = `M ${stringM1X} ${stringM1Y} L ${PULLEY_X} ${stringM1Y} L ${PULLEY_X} ${stringM2Y} L ${stringM2X} ${stringM2Y}`;
        stringPath.setAttribute('d', pathData);
    }

    /**
     * Updates all force vectors.
     */
    function updateForceVectors() {
        const m1CenterX = parseFloat(mass1Block.getAttribute('x')) + BLOCK1_WIDTH / 2;
        const m1CenterY = parseFloat(mass1Block.getAttribute('y')) + BLOCK1_HEIGHT / 2;
        const m2CenterX = parseFloat(mass2Block.getAttribute('x')) + BLOCK2_WIDTH / 2;
        const m2CenterY = parseFloat(mass2Block.getAttribute('y')) + BLOCK2_HEIGHT / 2;

        // M1 Forces
        drawForceVector(m1Fg, m1FgLabel, m1CenterX, m1CenterY, currentMass1 * G, -90); // Gravity down
        drawForceVector(m1Fn, m1FnLabel, m1CenterX, m1CenterY, currentMass1 * G, 90); // Normal up
        drawForceVector(m1Ft, m1FtLabel, m1CenterX, m1CenterY, stringTension, 0); // Tension right
        drawForceVector(m1Ff, m1FfLabel, m1CenterX, m1CenterY, currentMuK * currentMass1 * G, 180); // Friction left (kinetic)

        // M2 Forces
        drawForceVector(m2Fg, m2FgLabel, m2CenterX, m2CenterY, currentMass2 * G, -90); // Gravity down
        drawForceVector(m2Ft, m2FtLabel, m2CenterX, m2CenterY, stringTension, 90); // Tension up
    }

    /**
     * Main animation loop.
     * @param {DOMHighResTimeStamp} timestamp - Current time provided by requestAnimationFrame.
     */
    function animate(timestamp) {
        if (animationState === 'paused') {
            lastTimestamp = timestamp; // Reset lastTimestamp if paused
            animationFrameId = requestAnimationFrame(animate); // Keep loop running for updates
            return;
        }

        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = (timestamp - lastTimestamp) / 1000 * animationSpeed; // Time in seconds, adjusted by speed
        lastTimestamp = timestamp;

        calculateSystemDynamics(); // Recalculate acceleration and tension

        // Update positions based on acceleration
        // Assuming positive acceleration means M1 moves right, M2 moves down
        block1CurrentX += systemAcceleration * deltaTime * 10; // Scale for visual movement
        block2CurrentY += systemAcceleration * deltaTime * 10;

        // Boundary checks
        const maxBlock1X = PULLEY_X - BLOCK1_WIDTH - 10; // Stop before hitting pulley
        const minBlock2Y = 0; // Stop before going off screen top
        const maxBlock2Y = svg.clientHeight - BLOCK2_HEIGHT; // Stop before going off screen bottom

        if (block1CurrentX >= maxBlock1X) {
            block1CurrentX = maxBlock1X;
            block2CurrentY = BLOCK2_INITIAL_Y + (maxBlock1X - BLOCK1_INITIAL_X); // Keep in sync
            systemAcceleration = 0;
            updateExplanation("Blocks reached end of travel.");
            animationState = 'paused';
            playPauseBtn.textContent = 'Play';
        } else if (block2CurrentY >= maxBlock2Y) {
            block2CurrentY = maxBlock2Y;
            block1CurrentX = BLOCK1_INITIAL_X + (maxBlock2Y - BLOCK2_INITIAL_Y); // Keep in sync
            systemAcceleration = 0;
            updateExplanation("Blocks reached end of travel.");
            animationState = 'paused';
            playPauseBtn.textContent = 'Play';
        } else if (systemAcceleration <= 0 && block1CurrentX === BLOCK1_INITIAL_X) {
             // If acceleration is zero or negative (and at start), ensure it stays at rest
             systemAcceleration = 0;
             block1CurrentX = BLOCK1_INITIAL_X;
             block2CurrentY = BLOCK2_INITIAL_Y;
             updateExplanation("System is at rest. Hanging mass cannot overcome friction.");
             animationState = 'paused';
             playPauseBtn.textContent = 'Play';
        }


        updateBlockPositionsAndString();
        updateForceVectors();

        animationFrameId = requestAnimationFrame(animate);
    }

    /**
     * Resets the animator to its initial state.
     */
    function resetAnimator() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        lastTimestamp = null;
        animationState = 'paused';
        playPauseBtn.textContent = 'Play';

        // Reset inputs to default values
        mass1Input.value = 5;
        mass2Input.value = 10;
        muKInput.value = 0.2;

        // Update current values from inputs
        currentMass1 = parseFloat(mass1Input.value);
        currentMass2 = parseFloat(mass2Input.value);
        currentMuK = parseFloat(muKInput.value);

        block1CurrentX = BLOCK1_INITIAL_X;
        block2CurrentY = BLOCK2_INITIAL_Y;
        systemAcceleration = 0;
        stringTension = 0;

        updateBlockPositionsAndString();
        updateForceVectors(); // Draw initial forces
        calculateSystemDynamics(); // Calculate initial acceleration/tension for display

        updateExplanation("Adjust masses and friction, then click Play to see the system accelerate!");

        // Restart the animation loop to keep displays updated even when paused
        animationFrameId = requestAnimationFrame(animate);
    }

    // --- Event Listeners ---

    mass1Input.addEventListener('input', () => {
        currentMass1 = parseFloat(mass1Input.value);
        if (isNaN(currentMass1) || currentMass1 <= 0) { currentMass1 = 1; mass1Input.value = 1; }
        mass1Label.textContent = `M1 (${currentMass1}kg)`;
        calculateSystemDynamics();
        updateForceVectors();
    });

    mass2Input.addEventListener('input', () => {
        currentMass2 = parseFloat(mass2Input.value);
        if (isNaN(currentMass2) || currentMass2 <= 0) { currentMass2 = 1; mass2Input.value = 1; }
        mass2Label.textContent = `M2 (${currentMass2}kg)`;
        calculateSystemDynamics();
        updateForceVectors();
    });

    muKInput.addEventListener('input', () => {
        currentMuK = parseFloat(muKInput.value);
        if (isNaN(currentMuK) || currentMuK < 0) { currentMuK = 0; muKInput.value = 0; }
        calculateSystemDynamics();
        updateForceVectors();
    });

    playPauseBtn.addEventListener('click', () => {
        if (animationState === 'paused') {
            animationState = 'playing';
            playPauseBtn.textContent = 'Pause';
            lastTimestamp = null; // Reset lastTimestamp to avoid jump
            animationFrameId = requestAnimationFrame(animate); // Ensure animation loop is running
            updateExplanation("Animation playing. Watch the blocks move and forces change!");
        } else {
            animationState = 'paused';
            playPauseBtn.textContent = 'Play';
            updateExplanation("Animation paused. Adjust parameters or click Play to resume.");
        }
    });
    resetAnimationBtn.addEventListener('click', resetAnimator);

    // Speed control event listeners
    speedSlowBtn.addEventListener('click', () => {
        animationSpeed = 0.5;
        updateExplanation(`Animation speed set to Slow (0.5x). ${animationExplanation.querySelector('p').textContent.split('. ')[1] || ''}`);
    });
    speedNormalBtn.addEventListener('click', () => {
        animationSpeed = 1;
        updateExplanation(`Animation speed set to Normal (1x). ${animationExplanation.querySelector('p').textContent.split('. ')[1] || ''}`);
    });
    speedFastBtn.addEventListener('click', () => {
        animationSpeed = 2;
        updateExplanation(`Animation speed set to Fast (2x). ${animationExplanation.querySelector('p').textContent.split('. ')[1] || ''}`);
    });

    // Initial setup
    resetAnimator();
});
