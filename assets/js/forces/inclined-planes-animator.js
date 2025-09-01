// assets/js/forces/inclined-planes-animator.js

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const svg = document.getElementById('inclinedPlanesSVG');
    if (!svg) {
        console.error('SVG element with ID "inclinedPlanesSVG" not found.');
        return;
    }

    // Get references to interactive elements
    const rampAngleInput = document.getElementById('rampAngleInput');
    const rampAngleValueSpan = document.getElementById('rampAngleValue');
    const massInput = document.getElementById('massInput');
    const muSInput = document.getElementById('muSInput');
    const muKInput = document.getElementById('muKInput');
    const appliedForceInput = document.getElementById('appliedForceInput');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const resetAnimationBtn = document.getElementById('resetAnimation');

    // Speed control buttons (from animator_wrapper.html)
    const speedSlowBtn = document.getElementById('speedSlowBtn');
    const speedNormalBtn = document.getElementById('speedNormalBtn');
    const speedFastBtn = document.getElementById('speedFastBtn');

    // Get references to SVG elements for the animation
    const rampSurface = document.getElementById('rampSurface');
    const rampAngleLabel = document.getElementById('rampAngleLabel');
    const block = document.getElementById('block');

    // Force vectors and labels
    const forceGravity = document.getElementById('forceGravity');
    const labelGravity = document.getElementById('labelGravity');
    const forceGravityX = document.getElementById('forceGravityX');
    const labelGravityX = document.getElementById('labelGravityX');
    const forceGravityY = document.getElementById('forceGravityY');
    const labelGravityY = document.getElementById('labelGravityY');
    const forceNormal = document.getElementById('forceNormal');
    const labelNormal = document.getElementById('labelNormal');
    const forceFriction = document.getElementById('forceFriction');
    const labelFriction = document.getElementById('labelFriction');
    const forceApplied = document.getElementById('forceApplied');
    const labelApplied = document.getElementById('labelApplied');

    // Get references to text displays
    const currentVelocityDisplay = document.getElementById('currentVelocityDisplay');
    const currentAccelerationDisplay = document.getElementById('currentAccelerationDisplay');
    const currentFrictionDisplay = document.getElementById('currentFrictionDisplay');
    const currentNormalDisplay = document.getElementById('currentNormalDisplay');
    const currentFgXDisplay = document.getElementById('currentFgXDisplay');
    const currentFgYDisplay = document.getElementById('currentFgYDisplay');
    const stateDisplay = document.getElementById('stateDisplay');
    const animationExplanation = document.getElementById('animationExplanation');

    // --- Constants and Initial State ---
    const G = 9.8; // Acceleration due to gravity (m/s^2)
    const RAMP_BASE_Y = 350; // Y-coordinate of the bottom of the ramp
    const RAMP_LEFT_X = 50; // X-coordinate of the left end of the ramp
    const RAMP_WIDTH = 600; // Total horizontal length of the ramp
    const BLOCK_WIDTH = 50;
    const BLOCK_HEIGHT = 50;
    const BLOCK_INITIAL_POS_ALONG_RAMP = 50; // Initial position of block along the ramp (from ramp's left end)

    let animationSpeed = 1; // 1x normal speed
    let currentRampAngle = parseFloat(rampAngleInput.value);
    let currentMass = parseFloat(massInput.value);
    let currentMuS = parseFloat(muSInput.value);
    let currentMuK = parseFloat(muKInput.value);
    let currentAppliedForce = parseFloat(appliedForceInput.value);

    let blockPositionAlongRamp = BLOCK_INITIAL_POS_ALONG_RAMP; // Position in pixels along the ramp
    let blockVelocity = 0; // m/s
    let blockAcceleration = 0; // m/s^2
    let animationFrameId = null;
    let lastTimestamp = null;
    let animationState = 'paused'; // 'paused' or 'playing'

    // --- Helper Functions ---

    /**
     * Converts degrees to radians.
     * @param {number} degrees - Angle in degrees.
     * @returns {number} Angle in radians.
     */
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    /**
     * Updates the explanation text.
     * @param {string} text - The new explanation text.
     */
    function updateExplanation(text) {
        animationExplanation.querySelector('p').textContent = text;
    }

    /**
     * Calculates the position of a point on the ramp.
     * @param {number} distanceAlongRamp - Distance from the ramp's left end.
     * @param {number} angle - Ramp angle in degrees.
     * @returns {{x: number, y: number}} - X and Y coordinates in SVG space.
     */
    function getPointOnRamp(distanceAlongRamp, angle) {
        const rad = toRadians(angle);
        const x = RAMP_LEFT_X + distanceAlongRamp * Math.cos(rad);
        const y = RAMP_BASE_Y - distanceAlongRamp * Math.sin(rad);
        return { x, y };
    }

    /**
     * Draws/updates an SVG line representing a force vector.
     * @param {SVGLineElement} lineElement - The SVG line element.
     * @param {SVGTextElement} labelElement - The SVG text label element.
     * @param {number} startX - X-coordinate of the vector's tail.
     * @param {number} startY - Y-coordinate of the vector's tail.
     * @param {number} forceMagnitude - Magnitude of the force.
     * @param {number} forceDirectionAngle - Angle of the force vector in degrees (0 = right, 90 = up).
     * @param {number} [vectorScale=2] - Multiplier for visual length of the vector.
     * @param {boolean} [rotateWithRamp=false] - If true, vector rotates with ramp angle.
     */
    function drawForceVector(lineElement, labelElement, startX, startY, forceMagnitude, forceDirectionAngle, vectorScale = 2, rotateWithRamp = false) {
        if (forceMagnitude === 0) {
            lineElement.style.opacity = 0;
            labelElement.style.opacity = 0;
            return;
        }

        lineElement.style.opacity = 1;
        labelElement.style.opacity = 1;

        const scaledLength = forceMagnitude * vectorScale;
        const rad = toRadians(forceDirectionAngle);
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

        // If rotating with ramp, apply a transform to the label for readability
        if (rotateWithRamp) {
             labelElement.setAttribute('transform', `rotate(${-currentRampAngle} ${labelElement.getAttribute('x')} ${labelElement.getAttribute('y')})`);
        } else {
             labelElement.removeAttribute('transform');
        }
    }

    /**
     * Calculates and updates all forces and displays.
     */
    function updateForcesAndDisplays() {
        const rad = toRadians(currentRampAngle);
        const normalForce = currentMass * G * Math.cos(rad);
        const fgX = currentMass * G * Math.sin(rad); // Component down the ramp
        const fgY = currentMass * G * Math.cos(rad); // Component into the ramp (magnitude)

        let frictionForce = 0;
        const maxStaticFriction = currentMuS * normalForce;
        const kineticFriction = currentMuK * normalForce;

        let netForce = 0; // Net force along the incline (positive = down the ramp)
        let state = "At Rest";

        // Determine friction and net force
        if (animationState === 'playing' && blockVelocity !== 0) {
            // If already moving, use kinetic friction
            frictionForce = kineticFriction;
            // Friction opposes velocity
            const frictionDirection = blockVelocity > 0 ? -1 : 1; // -1 if block moving down, 1 if block moving up
            netForce = fgX + currentAppliedForce + (frictionDirection * frictionForce);
            state = "Sliding";
        } else {
            // Object is at rest or just starting
            const forceTryingToMoveDown = fgX + currentAppliedForce; // Sum of forces trying to move it down the ramp
            if (Math.abs(forceTryingToMoveDown) > maxStaticFriction) {
                // Will start sliding
                frictionForce = kineticFriction; // Once it starts, it's kinetic
                netForce = forceTryingToMoveDown - (Math.sign(forceTryingToMoveDown) * frictionForce); // Friction opposes direction of net force
                state = "Sliding";
            } else {
                // Remains at rest, static friction matches applied/gravity component
                frictionForce = Math.abs(forceTryingToMoveDown);
                netForce = 0;
                blockVelocity = 0; // Ensure no drift
                state = "At Rest";
            }
        }

        blockAcceleration = netForce / currentMass;

        // --- Update Displays ---
        rampAngleValueSpan.textContent = `${currentRampAngle}°`;
        currentVelocityDisplay.textContent = `Velocity: ${blockVelocity.toFixed(2)} m/s`;
        currentAccelerationDisplay.textContent = `Acceleration: ${blockAcceleration.toFixed(2)} m/s²`;
        currentFrictionDisplay.textContent = `Friction: ${frictionForce.toFixed(1)} N`;
        currentNormalDisplay.textContent = `Normal Force: ${normalForce.toFixed(1)} N`;
        currentFgXDisplay.textContent = `Fg,x: ${fgX.toFixed(1)} N`;
        currentFgYDisplay.textContent = `Fg,y: ${fgY.toFixed(1)} N`;
        stateDisplay.textContent = `State: ${state}`;

        // --- Update SVG Vectors ---
        const blockCenterX = parseFloat(block.getAttribute('x')) + BLOCK_WIDTH / 2;
        const blockCenterY = parseFloat(block.getAttribute('y')) + BLOCK_HEIGHT / 2;

        // Gravity (always straight down)
        drawForceVector(forceGravity, labelGravity, blockCenterX, blockCenterY, currentMass * G, -90); // -90 for straight down

        // Gravity Components (rotated with ramp)
        // FgX: down the ramp (angle = -currentRampAngle - 90 for perpendicular, or -currentRampAngle for parallel)
        // FgY: into the ramp (angle = -currentRampAngle - 180 for perpendicular, or -currentRampAngle - 90 for perpendicular)
        // The angles here are relative to the SVG's standard 0-degree (rightward) axis.
        // FgX is down the ramp, so its direction is -currentRampAngle - 90 (if 0 is horizontal)
        // No, FgX is along the ramp, so its direction is -currentRampAngle.
        // FgY is perpendicular into the ramp, so its direction is -currentRampAngle - 90.
        drawForceVector(forceGravityX, labelGravityX, blockCenterX, blockCenterY, fgX, -currentRampAngle, 2, true);
        drawForceVector(forceGravityY, labelGravityY, blockCenterX, blockCenterY, fgY, -currentRampAngle - 90, 2, true);


        // Normal Force (perpendicular to ramp, out from surface)
        drawForceVector(forceNormal, labelNormal, blockCenterX, blockCenterY, normalForce, -currentRampAngle + 90, 2, true);

        // Friction Force (parallel to ramp, opposes motion/tendency)
        let frictionVectorDirection = 0; // Angle relative to horizontal
        if (state === "Sliding") {
            frictionVectorDirection = blockVelocity > 0 ? -currentRampAngle + 180 : -currentRampAngle; // Oppose velocity
        } else {
            // Static friction opposes the force trying to cause motion
            const forceTryingToMoveDown = fgX + currentAppliedForce;
            if (forceTryingToMoveDown > 0) { // Trying to move down, friction up
                frictionVectorDirection = -currentRampAngle + 180;
            } else if (forceTryingToMoveDown < 0) { // Trying to move up, friction down
                frictionVectorDirection = -currentRampAngle;
            } else { // No tendency to move
                frictionForce = 0; // Hide friction if no tendency
            }
        }
        drawForceVector(forceFriction, labelFriction, blockCenterX, blockCenterY, frictionForce, frictionVectorDirection, 2, true);


        // Applied Force (parallel to ramp, direction based on sign of currentAppliedForce)
        let appliedVectorDirection = 0;
        if (currentAppliedForce > 0) { // Positive applied force is down the ramp
            appliedVectorDirection = -currentRampAngle;
        } else if (currentAppliedForce < 0) { // Negative applied force is up the ramp
            appliedVectorDirection = -currentRampAngle + 180;
        }
        drawForceVector(forceApplied, labelApplied, blockCenterX, blockCenterY, Math.abs(currentAppliedForce), appliedVectorDirection, 2, true);

        // Update ramp visual
        const rampEndX = RAMP_LEFT_X + RAMP_WIDTH * Math.cos(rad);
        const rampEndY = RAMP_BASE_Y - RAMP_WIDTH * Math.sin(rad);
        rampSurface.setAttribute('x2', rampEndX);
        rampSurface.setAttribute('y2', rampEndY);
        rampAngleLabel.setAttribute('x', RAMP_LEFT_X + 50 * Math.cos(toRadians(currentRampAngle / 2))); // Position angle label
        rampAngleLabel.setAttribute('y', RAMP_BASE_Y - 50 * Math.sin(toRadians(currentRampAngle / 2)) - 10);
        rampAngleLabel.setAttribute('transform', `rotate(${-currentRampAngle} ${rampAngleLabel.getAttribute('x')} ${rampAngleLabel.getAttribute('y')})`);

        // Update block position on ramp
        const blockX = RAMP_LEFT_X + blockPositionAlongRamp * Math.cos(rad);
        const blockY = RAMP_BASE_Y - blockPositionAlongRamp * Math.sin(rad) - BLOCK_HEIGHT; // Subtract block height to place top edge on ramp
        block.setAttribute('x', blockX);
        block.setAttribute('y', blockY);
    }

    /**
     * Animation loop for block movement.
     * @param {DOMHighResTimeStamp} timestamp - Current time provided by requestAnimationFrame.
     */
    function animate(timestamp) {
        if (animationState === 'paused') {
            lastTimestamp = timestamp; // Reset lastTimestamp if paused, so no jump when unpausing
            animationFrameId = requestAnimationFrame(animate); // Keep loop running for updates
            return;
        }

        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = (timestamp - lastTimestamp) / 1000 * animationSpeed; // Time in seconds, adjusted by speed
        lastTimestamp = timestamp;

        // Update velocity and position based on acceleration
        blockVelocity += blockAcceleration * deltaTime;
        blockPositionAlongRamp += blockVelocity * deltaTime * 10; // Scale for pixel movement

        // Boundary checks: Stop if block goes off either end of the ramp
        const rampLengthPx = RAMP_WIDTH / Math.cos(toRadians(currentRampAngle)); // Actual length of the ramp
        if (blockPositionAlongRamp < 0) {
            blockPositionAlongRamp = 0;
            blockVelocity = 0;
            blockAcceleration = 0;
            animationState = 'paused';
            updateExplanation("Block reached bottom of ramp and stopped.");
        } else if (blockPositionAlongRamp + BLOCK_WIDTH > rampLengthPx) {
            blockPositionAlongRamp = rampLengthPx - BLOCK_WIDTH;
            blockVelocity = 0;
            blockAcceleration = 0;
            animationState = 'paused';
            updateExplanation("Block reached top of ramp and stopped.");
        }

        updateForcesAndDisplays(); // Update all displays and vectors based on new position/state

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
        blockPositionAlongRamp = BLOCK_INITIAL_POS_ALONG_RAMP;
        blockVelocity = 0;
        blockAcceleration = 0;

        // Reset inputs to default values
        rampAngleInput.value = 30;
        massInput.value = 10;
        muSInput.value = 0.5;
        muKInput.value = 0.3;
        appliedForceInput.value = 0;

        // Update current values from inputs
        currentRampAngle = parseFloat(rampAngleInput.value);
        currentMass = parseFloat(massInput.value);
        currentMuS = parseFloat(muSInput.value);
        currentMuK = parseFloat(muKInput.value);
        currentAppliedForce = parseFloat(appliedForceInput.value);

        updateForcesAndDisplays(); // Recalculate and draw everything
        updateExplanation("Adjust the ramp angle, mass, friction, and applied force, then click Play!");

        // Restart the animation loop to keep displays updated even when paused
        animationFrameId = requestAnimationFrame(animate);
    }

    // --- Event Listeners ---

    rampAngleInput.addEventListener('input', () => {
        currentRampAngle = parseFloat(rampAngleInput.value);
        updateForcesAndDisplays();
        // If block is moving, restart animation to apply new angle physics immediately
        if (animationState === 'playing') {
            lastTimestamp = null; // Reset timestamp to avoid jump
            blockVelocity = 0; // Reset velocity to avoid weird jumps on angle change
            blockPositionAlongRamp = BLOCK_INITIAL_POS_ALONG_RAMP; // Reset position
        }
    });
    massInput.addEventListener('input', () => {
        currentMass = parseFloat(massInput.value);
        if (isNaN(currentMass) || currentMass <= 0) { currentMass = 1; massInput.value = 1; }
        updateForcesAndDisplays();
    });
    muSInput.addEventListener('input', () => {
        currentMuS = parseFloat(muSInput.value);
        if (isNaN(currentMuS) || currentMuS < 0) { currentMuS = 0; muSInput.value = 0; }
        updateForcesAndDisplays();
    });
    muKInput.addEventListener('input', () => {
        currentMuK = parseFloat(muKInput.value);
        if (isNaN(currentMuK) || currentMuK < 0) { currentMuK = 0; muKInput.value = 0; }
        updateForcesAndDisplays();
    });
    appliedForceInput.addEventListener('input', () => {
        currentAppliedForce = parseFloat(appliedForceInput.value);
        updateForcesAndDisplays();
    });

    playPauseBtn.addEventListener('click', () => {
        if (animationState === 'paused') {
            animationState = 'playing';
            playPauseBtn.textContent = 'Pause';
            lastTimestamp = null; // Reset lastTimestamp to avoid jump
            animationFrameId = requestAnimationFrame(animate); // Ensure animation loop is running
            updateExplanation("Animation playing. Observe the block's motion and force changes!");
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
