// assets/js/forces/spring-force-animator.js

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const svg = document.getElementById('springForceSVG');
    if (!svg) {
        console.error('SVG element with ID "springForceSVG" not found.');
        return;
    }

    // Get references to interactive elements
    const springConstantInput = document.getElementById('springConstantInput');
    const stretchBtn = document.getElementById('stretchBtn');
    const compressBtn = document.getElementById('compressBtn');
    const resetAnimationBtn = document.getElementById('resetAnimation');

    // Speed control buttons (from animator_wrapper.html)
    const speedSlowBtn = document.getElementById('speedSlowBtn');
    const speedNormalBtn = document.getElementById('speedNormalBtn');
    const speedFastBtn = document.getElementById('speedFastBtn');

    // Get references to SVG elements for the animation
    const springPath = document.getElementById('springPath');
    const springMass = document.getElementById('springMass');
    const springForceVector = document.getElementById('springForceVector');
    const springForceLabel = document.getElementById('springForceLabel');

    // Get references to text displays
    const displacementDisplay = document.getElementById('displacementDisplay');
    const forceDisplay = document.getElementById('forceDisplay');
    const potentialEnergyDisplay = document.getElementById('potentialEnergyDisplay');
    const animationExplanation = document.getElementById('animationExplanation');

    // --- Constants and Initial State ---
    const EQUILIBRIUM_MASS_X = 200; // X position of mass when spring is at equilibrium
    const SPRING_FIXED_X = 60; // X position of the fixed end of the spring
    const SPRING_SEGMENTS = 20; // Number of coils for spring drawing
    const MAX_STRETCH = 100; // Max displacement in pixels
    const MAX_COMPRESS = -100; // Max displacement in pixels

    let animationSpeed = 1; // 1x normal speed
    let currentSpringConstant = parseFloat(springConstantInput.value);
    let currentDisplacement = 0; // Current displacement from equilibrium in pixels
    let targetDisplacement = 0; // Target displacement for animation
    let animationStartTime = null;
    let animationDuration = 1000; // ms for animation
    let animationFrameId = null;

    // --- Helper Functions ---

    /**
     * Updates the explanation text.
     * @param {string} text - The new explanation text.
     */
    function updateExplanation(text) {
        animationExplanation.querySelector('p').textContent = text;
    }

    /**
     * Converts pixel displacement to meters (example scaling).
     * Assuming 100 pixels = 0.1 meters for reasonable force values.
     * @param {number} pixels - Displacement in pixels.
     * @returns {number} Displacement in meters.
     */
    function pixelsToMeters(pixels) {
        return pixels / 1000; // 1000 pixels = 1 meter, so 100px = 0.1m
    }

    /**
     * Converts meters displacement to pixels.
     * @param {number} meters - Displacement in meters.
     * @returns {number} Displacement in pixels.
     */
    function metersToPixels(meters) {
        return meters * 1000;
    }

    /**
     * Calculates spring force using Hooke's Law.
     * @param {number} k - Spring constant (N/m).
     * @param {number} x_meters - Displacement in meters.
     * @returns {number} Spring force in Newtons.
     */
    function calculateSpringForce(k, x_meters) {
        return -k * x_meters; // Fs = -kx
    }

    /**
     * Calculates spring potential energy.
     * @param {number} k - Spring constant (N/m).
     * @param {number} x_meters - Displacement in meters.
     * @returns {number} Spring potential energy in Joules.
     */
    function calculateSpringPotentialEnergy(k, x_meters) {
        return 0.5 * k * Math.pow(x_meters, 2); // PE = 0.5kx^2
    }

    /**
     * Draws the spring SVG path based on current displacement.
     * @param {number} displacementPx - Current displacement in pixels.
     */
    function drawSpring(displacementPx) {
        const startX = SPRING_FIXED_X;
        const endX = EQUILIBRIUM_MASS_X + displacementPx;
        const springHeight = 20; // Height of the spring coils
        const segmentWidth = (endX - startX) / SPRING_SEGMENTS;

        let path = `M ${startX} 150 L ${startX + segmentWidth / 2} 150`; // Start straight part

        for (let i = 0; i < SPRING_SEGMENTS; i++) {
            const x1 = startX + i * segmentWidth + segmentWidth / 2;
            const y1 = 150 + (i % 2 === 0 ? springHeight / 2 : -springHeight / 2);
            const x2 = startX + (i + 1) * segmentWidth + segmentWidth / 2;
            const y2 = 150 + (i % 2 === 0 ? -springHeight / 2 : springHeight / 2);
            path += ` L ${x1} ${y1} L ${x2} ${y2}`;
        }
        path += ` L ${endX} 150`; // End straight part

        springPath.setAttribute('d', path);
    }

    /**
     * Updates the position of the mass and the force vector.
     * @param {number} displacementPx - Current displacement in pixels.
     */
    function updateMassAndForceVector(displacementPx) {
        const massX = EQUILIBRIUM_MASS_X + displacementPx;
        springMass.setAttribute('x', massX);

        const x_meters = pixelsToMeters(displacementPx);
        const Fs = calculateSpringForce(currentSpringConstant, x_meters);

        // Update force vector
        if (Fs !== 0) {
            springForceVector.style.opacity = 1;
            springForceLabel.style.opacity = 1;

            const vectorLength = Math.abs(Fs) * 2; // Scale force magnitude to vector length
            const vectorStartX = massX + springMass.getAttribute('width') / 2;
            const vectorEndX = vectorStartX + (Fs < 0 ? vectorLength : -vectorLength); // Opposite direction of force

            springForceVector.setAttribute('x1', vectorStartX);
            springForceVector.setAttribute('y1', 150);
            springForceVector.setAttribute('x2', vectorEndX);
            springForceVector.setAttribute('y2', 150);

            // Adjust label position relative to the vector
            springForceLabel.setAttribute('x', vectorStartX + (vectorEndX - vectorStartX) / 2);
            springForceLabel.setAttribute('y', 140); // Slightly above the vector
        } else {
            springForceVector.style.opacity = 0;
            springForceLabel.style.opacity = 0;
        }
    }

    /**
     * Updates the display labels.
     */
    function updateDisplays() {
        const x_meters = pixelsToMeters(currentDisplacement);
        const Fs = calculateSpringForce(currentSpringConstant, x_meters);
        const PEs = calculateSpringPotentialEnergy(currentSpringConstant, x_meters);

        displacementDisplay.textContent = `Displacement (x): ${x_meters.toFixed(2)} m`;
        forceDisplay.textContent = `Spring Force (Fs): ${Fs.toFixed(1)} N`;
        potentialEnergyDisplay.textContent = `Potential Energy (PEs): ${PEs.toFixed(2)} J`;
    }

    /**
     * Animation loop for stretching/compressing the spring.
     * @param {DOMHighResTimeStamp} timestamp - Current time provided by requestAnimationFrame.
     */
    function animateSpring(timestamp) {
        if (!animationStartTime) animationStartTime = timestamp;
        const elapsed = (timestamp - animationStartTime);
        const progress = Math.min(elapsed / (animationDuration / animationSpeed), 1); // Normalize progress 0-1

        currentDisplacement = targetDisplacement * progress;

        drawSpring(currentDisplacement);
        updateMassAndForceVector(currentDisplacement);
        updateDisplays();

        if (progress < 1) {
            animationFrameId = requestAnimationFrame(animateSpring);
        } else {
            // Animation finished, ensure final state is correct
            currentDisplacement = targetDisplacement;
            drawSpring(currentDisplacement);
            updateMassAndForceVector(currentDisplacement);
            updateDisplays();
            animationFrameId = null;
        }
    }

    /**
     * Starts the spring animation to a target displacement.
     * @param {number} targetPx - The target displacement in pixels.
     */
    function startSpringAnimation(targetPx) {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        targetDisplacement = targetPx;
        animationStartTime = null; // Reset start time for a new animation
        animationFrameId = requestAnimationFrame(animateSpring);
        updateExplanation("Spring is moving. Observe the force and energy changes!");
    }

    /**
     * Resets the animator to its initial state.
     */
    function resetAnimator() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        currentDisplacement = 0;
        targetDisplacement = 0;
        animationStartTime = null;
        drawSpring(currentDisplacement);
        updateMassAndForceVector(currentDisplacement);
        updateDisplays();
        updateExplanation("Adjust the spring constant, then stretch or compress the spring to see the force and energy changes!");
    }

    // --- Event Listeners ---

    springConstantInput.addEventListener('input', () => {
        currentSpringConstant = parseFloat(springConstantInput.value);
        if (isNaN(currentSpringConstant) || currentSpringConstant <= 0) {
            currentSpringConstant = 10; // Default to 10 N/m if invalid
            springConstantInput.value = 10;
        }
        updateDisplays(); // Update displays immediately on k change
        // If spring is already displaced, update force/energy for new k
        if (currentDisplacement !== 0) {
            drawSpring(currentDisplacement); // Redraw to ensure force vector scales correctly
            updateMassAndForceVector(currentDisplacement);
        }
    });

    stretchBtn.addEventListener('click', () => startSpringAnimation(MAX_STRETCH));
    compressBtn.addEventListener('click', () => startSpringAnimation(MAX_COMPRESS));
    resetAnimationBtn.addEventListener('click', resetAnimator);

    // Speed control event listeners
    speedSlowBtn.addEventListener('click', () => {
        animationSpeed = 0.5;
        updateExplanation(`Animation speed set to Slow (0.5x). ${animationExplanation.querySelector('p').textContent.split('. ')[1] || ''}`);
        if (animationFrameId) startSpringAnimation(targetDisplacement); // Restart animation with new speed
    });
    speedNormalBtn.addEventListener('click', () => {
        animationSpeed = 1;
        updateExplanation(`Animation speed set to Normal (1x). ${animationExplanation.querySelector('p').textContent.split('. ')[1] || ''}`);
        if (animationFrameId) startSpringAnimation(targetDisplacement); // Restart animation with new speed
    });
    speedFastBtn.addEventListener('click', () => {
        animationSpeed = 2;
        updateExplanation(`Animation speed set to Fast (2x). ${animationExplanation.querySelector('p').textContent.split('. ')[1] || ''}`);
        if (animationFrameId) startSpringAnimation(targetDisplacement); // Restart animation with new speed
    });

    // Initial setup
    resetAnimator();
});
