document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const inertiaSVG = document.getElementById('inertiaSVG');
    const movingObject = document.getElementById('movingObject');
    const objectLabel = document.getElementById('objectLabel');
    const forceArrow = document.getElementById('forceArrow');
    const forceLabel = document.getElementById('forceLabel');
    const velocityDisplay = document.getElementById('velocityDisplay');
    const animationExplanation = document.getElementById('animationExplanation');

    // Get references to control buttons
    const startRestScenarioBtn = document.getElementById('startRestScenarioBtn');
    const startMotionScenarioBtn = document.getElementById('startMotionScenarioBtn');
    const applySmallForceBtn = document.getElementById('applySmallForceBtn');
    const applyLargeForceBtn = document.getElementById('applyLargeForceBtn');
    const resetBtn = document.getElementById('resetAnimation');

    // Check if all essential elements are found
    if (!inertiaSVG || !movingObject || !objectLabel || !forceArrow || !forceLabel ||
        !velocityDisplay || !animationExplanation || !startRestScenarioBtn ||
        !startMotionScenarioBtn || !applySmallForceBtn || !applyLargeForceBtn || !resetBtn) {
        console.error('One or more essential elements for the Newton\'s First Law Animator were not found. Script cannot proceed.');
        return;
    }

    // Animation parameters
    const OBJECT_START_X = 350; // Center X of the object
    const OBJECT_Y = 150;      // Y-position of the object's center on the track
    const OBJECT_WIDTH = 50;   // Width of the object rect
    const TRACK_MIN_X = 50 + OBJECT_WIDTH / 2; // Left boundary for object center
    const TRACK_MAX_X = 650 - OBJECT_WIDTH / 2; // Right boundary for object center

    let currentX = OBJECT_START_X;
    let currentVelocity = 0; // m/s
    let currentForce = 0;    // N
    let currentScenario = null; // 'rest' or 'motion'
    let animationFrameId = null;
    let lastTimestamp = 0;

    const objectMass = 10; // kg (for F=ma calculation)
    const frictionCoefficient = 0.05; // Simplified friction
    const staticFrictionThreshold = 0.5; // N (force needed to overcome static friction)

    const smallForceMagnitude = 2; // N
    const largeForceMagnitude = 10; // N

    // Function to update object position and velocity based on forces
    function updatePhysics(deltaTime) {
        const dt = deltaTime / 1000; // Convert to seconds

        let netForce = currentForce;
        let frictionForce = 0;

        if (Math.abs(currentVelocity) < 0.01 && Math.abs(netForce) < staticFrictionThreshold && currentScenario === 'rest') {
            // Static friction (object at rest, small force applied, not enough to move)
            netForce = 0; // Effectively, the applied force is balanced by static friction
            currentVelocity = 0; // Ensure it stays at rest
        } else if (Math.abs(currentVelocity) > 0.01) {
            // Kinetic friction (object is moving)
            frictionForce = frictionCoefficient * objectMass * 9.8; // F_friction = mu * F_normal
            netForce -= Math.sign(currentVelocity) * frictionForce; // Friction opposes motion
        } else if (Math.abs(currentVelocity) < 0.01 && Math.abs(netForce) >= staticFrictionThreshold && currentScenario === 'rest') {
            // Overcoming static friction: initial push
            // No additional friction force subtracted here, as the netForce is overcoming static threshold
        } else {
            // Object is at rest, no force or force below threshold, no motion
            currentVelocity = 0;
            netForce = 0;
        }


        const acceleration = netForce / objectMass;
        currentVelocity += acceleration * dt;

        // Apply deceleration due to friction if no force is applied and moving
        if (currentForce === 0 && Math.abs(currentVelocity) > 0.01) {
             const deceleration = frictionForce / objectMass;
             if (currentVelocity > 0) {
                 currentVelocity = Math.max(0, currentVelocity - deceleration * dt);
             } else {
                 currentVelocity = Math.min(0, currentVelocity + deceleration * dt);
             }
        } else if (Math.abs(currentVelocity) < 0.01) {
            currentVelocity = 0; // Snap to zero if very small
        }


        currentX += currentVelocity * dt * 30; // Scale for visual movement (pixels per meter)

        // Boundary checks
        if (currentX < TRACK_MIN_X) {
            currentX = TRACK_MIN_X;
            currentVelocity = 0; // Stop at boundary
        } else if (currentX > TRACK_MAX_X) {
            currentX = TRACK_MAX_X;
            currentVelocity = 0; // Stop at boundary
        }
    }

    function draw() {
        // Update object position
        movingObject.setAttribute('x', currentX - OBJECT_WIDTH / 2);
        objectLabel.setAttribute('x', currentX);

        // Update force arrow
        if (currentForce !== 0) {
            const arrowLength = Math.abs(currentForce) * 10; // Scale force to arrow length
            const arrowStartX = currentX + (Math.sign(currentForce) * OBJECT_WIDTH / 2);
            const arrowEndX = arrowStartX + (Math.sign(currentForce) * arrowLength);
            forceArrow.setAttribute('x1', arrowStartX);
            forceArrow.setAttribute('y1', OBJECT_Y);
            forceArrow.setAttribute('x2', arrowEndX);
            forceArrow.setAttribute('y2', OBJECT_Y);
            forceArrow.style.opacity = 1;
            forceArrow.setAttribute('transform', `rotate(${currentForce < 0 ? 180 : 0}, ${arrowStartX}, ${OBJECT_Y})`); // Rotate for direction

            forceLabel.setAttribute('x', arrowEndX + (Math.sign(currentForce) * 10)); // Label slightly past arrow
            forceLabel.setAttribute('y', OBJECT_Y - 10);
            forceLabel.style.opacity = 1;

        } else {
            forceArrow.style.opacity = 0;
            forceLabel.style.opacity = 0;
        }

        // Update velocity display
        velocityDisplay.textContent = `Velocity: ${currentVelocity.toFixed(1)} m/s`;
    }

    function animate(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        updatePhysics(deltaTime);
        draw();

        animationFrameId = requestAnimationFrame(animate);
    }

    function startAnimationLoop() {
        if (!animationFrameId) {
            lastTimestamp = performance.now();
            animationFrameId = requestAnimationFrame(animate);
        }
    }

    function stopAnimationLoop() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    }

    function setScenario(scenarioType) {
        stopAnimationLoop();
        currentScenario = scenarioType;
        currentForce = 0; // Clear any applied force

        if (scenarioType === 'rest') {
            currentX = OBJECT_START_X;
            currentVelocity = 0;
            animationExplanation.innerHTML = `<p>The object is at rest. Apply a force to try and move it!</p>`;
        } else if (scenarioType === 'motion') {
            currentX = OBJECT_START_X;
            currentVelocity = 5; // Start moving right
            animationExplanation.innerHTML = `<p>The object is in motion. Apply a force to try and stop it or change its speed!</p>`;
            startAnimationLoop(); // Start motion immediately
        }
        draw(); // Initial draw for scenario
        updateButtonStates();
    }

    function applyForce(magnitude) {
        currentForce = magnitude; // Force applied
        animationExplanation.innerHTML = `<p>Force applied! Observe the object's motion. Remember, only an unbalanced force changes velocity.</p>`;
        startAnimationLoop(); // Ensure animation is running
        // Force will be cleared after a short delay or on next button click
        setTimeout(() => {
            currentForce = 0; // Clear force after a brief application
            draw();
            updateButtonStates();
            if (Math.abs(currentVelocity) < 0.01 && currentScenario === 'rest') {
                 animationExplanation.innerHTML = `<p>Object at rest: It resisted the change in motion. Was the force large enough?</p>`;
            }
        }, 500); // Apply force for 0.5 seconds
    }

    function resetAnimation() {
        stopAnimationLoop();
        currentX = OBJECT_START_X;
        currentVelocity = 0;
        currentForce = 0;
        currentScenario = null; // No active scenario
        forceArrow.style.opacity = 0;
        forceLabel.style.opacity = 0;
        movingObject.setAttribute('x', currentX - OBJECT_WIDTH / 2);
        velocityDisplay.textContent = `Velocity: 0.0 m/s`;
        animationExplanation.innerHTML = `<p>Choose a scenario to see Newton's First Law in action!</p>`;
        updateButtonStates();
    }

    function updateButtonStates() {
        // Disable force buttons if no scenario is active
        const scenarioActive = currentScenario !== null;
        applySmallForceBtn.disabled = !scenarioActive;
        applyLargeForceBtn.disabled = !scenarioActive;

        // Adjust force direction based on current velocity/scenario
        if (currentScenario === 'rest' || currentVelocity >= 0) { // If at rest or moving right, push right
            applySmallForceBtn.textContent = "Apply Small Push (Right)";
            applyLargeForceBtn.textContent = "Apply Large Push (Right)";
            // Force values remain positive
        } else { // If moving left, push right to slow down
            applySmallForceBtn.textContent = "Apply Small Push (Right)";
            applyLargeForceBtn.textContent = "Apply Large Push (Right)";
            // Force values remain positive, but will oppose negative velocity
        }
        // For simplicity, let's just apply positive forces for now, and rely on the sign(currentForce) for arrow direction
        // The physics calculation handles acceleration correctly regardless of arrow direction.
        // If we want to apply force in the *opposite* direction of motion for "stop", we'd need more buttons or logic.
        // For this simplified version, let's assume forces are always applied to the right.
        // If we want to stop a left-moving object, we need a "Apply Stop Force" button
        // Let's simplify and make small/large forces just apply rightward.
        // The user can then see how it affects leftward motion.

        // Re-enable scenario buttons
        startRestScenarioBtn.disabled = false;
        startMotionScenarioBtn.disabled = false;
        resetBtn.disabled = false;
    }


    // Event Listeners
    startRestScenarioBtn.addEventListener('click', () => setScenario('rest'));
    startMotionScenarioBtn.addEventListener('click', () => setScenario('motion'));
    applySmallForceBtn.addEventListener('click', () => applyForce(smallForceMagnitude));
    applyLargeForceBtn.addEventListener('click', () => applyForce(largeForceMagnitude));
    resetBtn.addEventListener('click', resetAnimation);

    // Initial setup
    resetAnimation(); // Set initial state
});