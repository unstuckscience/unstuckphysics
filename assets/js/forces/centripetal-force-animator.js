// assets/js/forces/centripetal-force-animator.js

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const svg = document.getElementById('centripetalForceSVG');
    if (!svg) {
        console.error('SVG element with ID "centripetalForceSVG" not found.');
        return;
    }

    // Get references to interactive elements
    const massInput = document.getElementById('massInput');
    const speedInput = document.getElementById('speedInput');
    const radiusInput = document.getElementById('radiusInput');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const resetAnimationBtn = document.getElementById('resetAnimation');

    // Speed control buttons (from animator_wrapper.html)
    const speedSlowBtn = document.getElementById('speedSlowBtn');
    const speedNormalBtn = document.getElementById('speedNormalBtn');
    const speedFastBtn = document.getElementById('speedFastBtn');

    // Get references to SVG elements for the animation
    const circularPath = document.getElementById('circularPath');
    const movingObject = document.getElementById('movingObject');
    const velocityVector = document.getElementById('velocityVector');
    const velocityLabel = document.getElementById('velocityLabel');
    const centripetalForceVector = document.getElementById('centripetalForceVector');
    const centripetalForceLabel = document.getElementById('centripetalForceLabel');

    // Get references to text displays
    const currentSpeedDisplay = document.getElementById('currentSpeedDisplay');
    const currentRadiusDisplay = document.getElementById('currentRadiusDisplay');
    const currentAcclDisplay = document.getElementById('currentAcclDisplay');
    const currentForceDisplay = document.getElementById('currentForceDisplay');
    const animationExplanation = document.getElementById('animationExplanation');

    // --- Constants and Initial State ---
    const CENTER_X = 350;
    const CENTER_Y = 200;
    const SVG_RADIUS_SCALE = 10; // Pixels per meter of radius

    let animationSpeed = 1; // 1x normal speed
    let currentMass = parseFloat(massInput.value);
    let currentSpeed = parseFloat(speedInput.value);
    let currentRadius = parseFloat(radiusInput.value); // In meters, scaled to pixels for SVG

    let currentAngle = 0; // Current angle of the object in radians
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
     * Calculates centripetal acceleration.
     * @param {number} speed - Object's speed.
     * @param {number} radius - Radius of circular path.
     * @returns {number} Centripetal acceleration in m/s^2.
     */
    function calculateCentripetalAcceleration(speed, radius) {
        return (speed * speed) / radius;
    }

    /**
     * Calculates centripetal force.
     * @param {number} mass - Object's mass.
     * @param {number} speed - Object's speed.
     * @param {number} radius - Radius of circular path.
     * @returns {number} Centripetal force in Newtons.
     */
    function calculateCentripetalForce(mass, speed, radius) {
        return mass * calculateCentripetalAcceleration(speed, radius);
    }

    /**
     * Draws/updates an SVG line representing a vector.
     * @param {SVGLineElement} lineElement - The SVG line element.
     * @param {SVGTextElement} labelElement - The SVG text label element.
     * @param {number} startX - X-coordinate of the vector's tail.
     * @param {number} startY - Y-coordinate of the vector's tail.
     * @param {number} magnitude - Magnitude of the vector.
     * @param {number} directionAngleRad - Angle of the vector in radians (0 = right, PI/2 = up).
     * @param {number} [vectorScale=5] - Multiplier for visual length of the vector.
     */
    function drawVector(lineElement, labelElement, startX, startY, magnitude, directionAngleRad, vectorScale = 5) {
        if (magnitude === 0) {
            lineElement.style.opacity = 0;
            labelElement.style.opacity = 0;
            return;
        }

        lineElement.style.opacity = 1;
        labelElement.style.opacity = 1;

        const scaledLength = magnitude * vectorScale;
        const endX = startX + scaledLength * Math.cos(directionAngleRad);
        const endY = startY - scaledLength * Math.sin(directionAngleRad); // Y-axis is inverted in SVG

        lineElement.setAttribute('x1', startX);
        lineElement.setAttribute('y1', startY);
        lineElement.setAttribute('x2', endX);
        lineElement.setAttribute('y2', endY);

        // Position label slightly offset from the tip
        const labelOffset = 15;
        labelElement.setAttribute('x', endX + labelOffset * Math.cos(directionAngleRad + Math.PI / 4));
        labelElement.setAttribute('y', endY + labelOffset * Math.sin(directionAngleRad + Math.PI / 4));
    }

    /**
     * Updates the position of the object and all vectors/displays.
     */
    function updateVisualization() {
        const scaledRadius = currentRadius * SVG_RADIUS_SCALE;
        circularPath.setAttribute('r', scaledRadius);

        // Calculate object position
        const objectX = CENTER_X + scaledRadius * Math.cos(currentAngle);
        const objectY = CENTER_Y - scaledRadius * Math.sin(currentAngle); // Y-axis inverted

        movingObject.setAttribute('cx', objectX);
        movingObject.setAttribute('cy', objectY);

        // Calculate centripetal acceleration and force
        const ac = calculateCentripetalAcceleration(currentSpeed, currentRadius);
        const fc = calculateCentripetalForce(currentMass, currentSpeed, currentRadius);

        // Update displays
        currentSpeedDisplay.textContent = `Speed: ${currentSpeed.toFixed(1)} m/s`;
        currentRadiusDisplay.textContent = `Radius: ${currentRadius.toFixed(1)} m`;
        currentAcclDisplay.textContent = `Acceleration: ${ac.toFixed(2)} m/s²`;
        currentForceDisplay.textContent = `Centripetal Force: ${fc.toFixed(1)} N`;

        // Update Velocity Vector (tangential)
        const velocityDirectionRad = currentAngle + Math.PI / 2; // Tangential, 90 deg counter-clockwise from radius
        drawVector(velocityVector, velocityLabel, objectX, objectY, currentSpeed, velocityDirectionRad, 5);

        // Update Centripetal Force Vector (towards center)
        const forceDirectionRad = currentAngle + Math.PI; // Towards center, 180 deg from radius
        drawVector(centripetalForceVector, centripetalForceLabel, objectX, objectY, fc, forceDirectionRad, 0.5); // Smaller scale for force vector
    }

    /**
     * Animation loop for circular motion.
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

        // Update angle based on speed and radius
        // Angular speed (omega) = v / r
        const angularSpeed = currentSpeed / currentRadius; // rad/s
        currentAngle += angularSpeed * deltaTime;

        updateVisualization();

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
        massInput.value = 1;
        speedInput.value = 5;
        radiusInput.value = 10;

        // Update current values from inputs
        currentMass = parseFloat(massInput.value);
        currentSpeed = parseFloat(speedInput.value);
        currentRadius = parseFloat(radiusInput.value);

        currentAngle = 0; // Reset angle
        updateVisualization(); // Draw initial state
        updateExplanation("Adjust mass, speed, and radius, then click Play to see centripetal force in action!");

        // Restart the animation loop to keep displays updated even when paused
        animationFrameId = requestAnimationFrame(animate);
    }

    // --- Event Listeners ---

    massInput.addEventListener('input', () => {
        currentMass = parseFloat(massInput.value);
        if (isNaN(currentMass) || currentMass <= 0) { currentMass = 0.1; massInput.value = 0.1; }
        updateVisualization();
    });

    speedInput.addEventListener('input', () => {
        currentSpeed = parseFloat(speedInput.value);
        if (isNaN(currentSpeed) || currentSpeed <= 0) { currentSpeed = 1; speedInput.value = 1; }
        updateVisualization();
    });

    radiusInput.addEventListener('input', () => {
        currentRadius = parseFloat(radiusInput.value);
        if (isNaN(currentRadius) || currentRadius <= 0) { currentRadius = 1; radiusInput.value = 1; }
        updateVisualization();
    });

    playPauseBtn.addEventListener('click', () => {
        if (animationState === 'paused') {
            animationState = 'playing';
            playPauseBtn.textContent = 'Pause';
            lastTimestamp = null; // Reset lastTimestamp to avoid jump
            animationFrameId = requestAnimationFrame(animate); // Ensure animation loop is running
            updateExplanation("Animation playing. Watch the object move and forces change!");
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
