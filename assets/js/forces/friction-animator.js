// assets/js/forces/friction-animator.js

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const svg = document.getElementById('frictionAnimatorSVG');
    if (!svg) {
        console.error('SVG element with ID "frictionAnimatorSVG" not found.');
        return;
    }

    // Get references to interactive elements
    const appliedForceInput = document.getElementById('appliedForceInput');
    const appliedForceValueSpan = document.getElementById('appliedForceValue');
    const massInput = document.getElementById('massInput');
    const muSInput = document.getElementById('muSInput');
    const muKInput = document.getElementById('muKInput');
    const resetAnimationBtn = document.getElementById('resetAnimation');

    // Speed control buttons (from animator_wrapper.html)
    const speedSlowBtn = document.getElementById('speedSlowBtn');
    const speedNormalBtn = document.getElementById('speedNormalBtn');
    const speedFastBtn = document.getElementById('speedFastBtn');

    // Get references to SVG elements for the animation
    const block = document.getElementById('block');
    const appliedForceVector = document.getElementById('appliedForceVector');
    const appliedForceLabel = document.getElementById('appliedForceLabel');
    const frictionForceVector = document.getElementById('frictionForceVector');
    const frictionForceLabel = document.getElementById('frictionForceLabel');

    // Get references to text displays
    const currentAppliedForceDisplay = document.getElementById('currentAppliedForceDisplay');
    const currentFrictionForceDisplay = document.getElementById('currentFrictionForceDisplay');
    const maxStaticFrictionDisplay = document.getElementById('maxStaticFrictionDisplay');
    const netForceDisplay = document.getElementById('netForceDisplay');
    const accelerationDisplay = document.getElementById('accelerationDisplay');
    const stateDisplay = document.getElementById('stateDisplay');
    const animationExplanation = document.getElementById('animationExplanation');

    // --- Constants and Initial State ---
    const G = 9.8; // Acceleration due to gravity (m/s^2)
    const BLOCK_INITIAL_X = 100; // Initial X position of the block
    const BLOCK_Y = 200; // Y position of the block (top edge)
    const BLOCK_WIDTH = 80;
    const BLOCK_HEIGHT = 50;
    const VECTOR_OFFSET_Y = BLOCK_Y + BLOCK_HEIGHT / 2; // Y-coordinate for force vectors

    let animationSpeed = 1; // 1x normal speed
    let currentAppliedForce = parseFloat(appliedForceInput.value);
    let currentMass = parseFloat(massInput.value);
    let currentMuS = parseFloat(muSInput.value);
    let currentMuK = parseFloat(muKInput.value);

    let blockCurrentX = BLOCK_INITIAL_X;
    let blockVelocity = 0; // m/s
    let animationFrameId = null;
    let lastTimestamp = null;

    // --- Helper Functions ---

    /**
     * Updates the explanation text.
     * @param {string} text - The new explanation text.
     */
    function updateExplanation(text) {
        animationExplanation.querySelector('p').textContent = text;
    }

    /**
     * Calculates the normal force.
     * On a horizontal surface, Normal Force = Weight (mg).
     * @param {number} mass - Mass of the object.
     * @returns {number} Normal force in Newtons.
     */
    function calculateNormalForce(mass) {
        return mass * G;
    }

    /**
     * Calculates the maximum static friction force.
     * @param {number} muS - Coefficient of static friction.
     * @param {number} normalForce - Normal force.
     * @returns {number} Maximum static friction force in Newtons.
     */
    function calculateMaxStaticFriction(muS, normalForce) {
        return muS * normalForce;
    }

    /**
     * Calculates the kinetic friction force.
     * @param {number} muK - Coefficient of kinetic friction.
     * @param {number} normalForce - Normal force.
     * @returns {number} Kinetic friction force in Newtons.
     */
    function calculateKineticFriction(muK, normalForce) {
        return muK * normalForce;
    }

    /**
     * Updates the force vectors and display values.
     */
    function updateAnimatorState() {
        const normalForce = calculateNormalForce(currentMass);
        const maxStaticFriction = calculateMaxStaticFriction(currentMuS, normalForce);
        const kineticFriction = calculateKineticFriction(currentMuK, normalForce);

        let frictionForce = 0;
        let netForce = 0;
        let acceleration = 0;
        let state = "At Rest";

        if (Math.abs(currentAppliedForce) > maxStaticFriction) {
            // Object is sliding
            frictionForce = kineticFriction; // Kinetic friction acts
            netForce = currentAppliedForce - frictionForce;
            acceleration = netForce / currentMass;
            state = "Sliding";
        } else {
            // Object is at rest or not yet sliding
            if (currentAppliedForce === 0) {
                frictionForce = 0;
            } else {
                frictionForce = currentAppliedForce; // Static friction matches applied force
            }
            netForce = 0;
            acceleration = 0;
            blockVelocity = 0; // Ensure velocity is zero if at rest
            state = "At Rest";
        }

        // --- Update Displays ---
        appliedForceValueSpan.textContent = `${currentAppliedForce.toFixed(0)} N`;
        currentAppliedForceDisplay.textContent = `Applied Force: ${currentAppliedForce.toFixed(1)} N`;
        currentFrictionForceDisplay.textContent = `Friction Force: ${frictionForce.toFixed(1)} N`;
        maxStaticFrictionDisplay.textContent = `Max Static Friction: ${maxStaticFriction.toFixed(1)} N`;
        netForceDisplay.textContent = `Net Force: ${netForce.toFixed(1)} N`;
        accelerationDisplay.textContent = `Acceleration: ${acceleration.toFixed(2)} m/s²`;
        stateDisplay.textContent = `State: ${state}`;

        // --- Update SVG Vectors ---
        // Applied Force Vector
        if (currentAppliedForce > 0) {
            appliedForceVector.style.opacity = 1;
            appliedForceLabel.style.opacity = 1;
            const vectorLength = currentAppliedForce * 2; // Scale for visual representation
            appliedForceVector.setAttribute('x1', blockCurrentX + BLOCK_WIDTH);
            appliedForceVector.setAttribute('y1', VECTOR_OFFSET_Y);
            appliedForceVector.setAttribute('x2', blockCurrentX + BLOCK_WIDTH + vectorLength);
            appliedForceVector.setAttribute('y2', VECTOR_OFFSET_Y);
            appliedForceLabel.setAttribute('x', blockCurrentX + BLOCK_WIDTH + vectorLength / 2);
            appliedForceLabel.setAttribute('y', VECTOR_OFFSET_Y - 10);
        } else {
            appliedForceVector.style.opacity = 0;
            appliedForceLabel.style.opacity = 0;
        }

        // Friction Force Vector
        if (frictionForce > 0) {
            frictionForceVector.style.opacity = 1;
            frictionForceLabel.style.opacity = 1;
            const vectorLength = frictionForce * 2; // Scale for visual representation
            frictionForceVector.setAttribute('x1', blockCurrentX);
            frictionForceVector.setAttribute('y1', VECTOR_OFFSET_Y);
            frictionForceVector.setAttribute('x2', blockCurrentX - vectorLength);
            frictionForceVector.setAttribute('y2', VECTOR_OFFSET_Y);
            frictionForceLabel.setAttribute('x', blockCurrentX - vectorLength / 2);
            frictionForceLabel.setAttribute('y', VECTOR_OFFSET_Y - 10);
        } else {
            frictionForceVector.style.opacity = 0;
            frictionForceLabel.style.opacity = 0;
        }

        // Update global variables for animation loop
        currentFrictionForce = frictionForce;
        currentNetForce = netForce;
        currentAcceleration = acceleration;
    }

    /**
     * Animation loop for block movement.
     * @param {DOMHighResTimeStamp} timestamp - Current time provided by requestAnimationFrame.
     */
    function animateBlock(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = (timestamp - lastTimestamp) / 1000 * animationSpeed; // Time in seconds, adjusted by speed
        lastTimestamp = timestamp;

        if (currentAcceleration !== 0) {
            blockVelocity += currentAcceleration * deltaTime;
            blockCurrentX += blockVelocity * deltaTime * 10; // Scale velocity to pixels for visual movement

            // Keep block within reasonable bounds
            if (blockCurrentX < 0) {
                blockCurrentX = 0;
                blockVelocity = 0;
                currentAcceleration = 0; // Stop acceleration
                updateExplanation("Block hit left boundary and stopped.");
            } else if (blockCurrentX > svg.clientWidth - BLOCK_WIDTH) { // Use clientWidth for dynamic sizing
                blockCurrentX = svg.clientWidth - BLOCK_WIDTH;
                blockVelocity = 0;
                currentAcceleration = 0; // Stop acceleration
                updateExplanation("Block hit right boundary and stopped.");
            }
        } else {
            blockVelocity = 0; // Ensure no drift if acceleration is zero
        }

        block.setAttribute('x', blockCurrentX);
        updateAnimatorState(); // Update all displays and vectors based on new position/state

        animationFrameId = requestAnimationFrame(animateBlock);
    }

    /**
     * Resets the animator to its initial state.
     */
    function resetAnimator() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        lastTimestamp = null;
        blockCurrentX = BLOCK_INITIAL_X;
        blockVelocity = 0;
        currentAcceleration = 0; // Reset acceleration
        block.setAttribute('x', BLOCK_INITIAL_X);
        appliedForceInput.value = 0; // Reset slider
        currentAppliedForce = 0; // Reset current applied force
        updateAnimatorState(); // Update all displays and vectors
        updateExplanation("Adjust applied force, mass, and coefficients to see how friction behaves!");
        stateDisplay.textContent = "State: At Rest"; // Explicitly set state
    }

    // --- Event Listeners ---

    appliedForceInput.addEventListener('input', () => {
        currentAppliedForce = parseFloat(appliedForceInput.value);
        updateAnimatorState(); // Update displays and vectors immediately
        // Start animation if not already running and force is applied
        if (currentAppliedForce > 0 && !animationFrameId) {
            animationFrameId = requestAnimationFrame(animateBlock);
        } else if (currentAppliedForce === 0 && blockVelocity === 0) {
            // If applied force is zero and block is at rest, stop animation
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
            lastTimestamp = null;
        }
    });

    massInput.addEventListener('input', () => {
        currentMass = parseFloat(massInput.value);
        if (isNaN(currentMass) || currentMass <= 0) {
            currentMass = 1;
            massInput.value = 1;
        }
        updateAnimatorState();
    });

    muSInput.addEventListener('input', () => {
        currentMuS = parseFloat(muSInput.value);
        if (isNaN(currentMuS) || currentMuS < 0) {
            currentMuS = 0.1;
            muSInput.value = 0.1;
        }
        updateAnimatorState();
    });

    muKInput.addEventListener('input', () => {
        currentMuK = parseFloat(muKInput.value);
        if (isNaN(currentMuK) || currentMuK < 0) {
            currentMuK = 0.1;
            muKInput.value = 0.1;
        }
        updateAnimatorState();
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
    // Start animation loop only when applied force is non-zero
    // It will be started by the appliedForceInput listener
});
