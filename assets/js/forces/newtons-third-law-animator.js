document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const newtonsThirdLawSVG = document.getElementById('newtonsThirdLawSVG');
    const objectA = document.getElementById('objectA');
    const labelA = document.getElementById('labelA');
    const objectB = document.getElementById('objectB');
    const labelB = document.getElementById('labelB');

    const forceAonB = document.getElementById('forceAonB');
    const labelAonB = document.getElementById('labelAonB');
    const forceBonA = document.getElementById('forceBonA');
    const labelBonA = document.getElementById('labelBonA');

    const accelADisplay = document.getElementById('accelADisplay');
    const accelBDisplay = document.getElementById('accelBDisplay');
    const animationExplanation = document.getElementById('animationExplanation');

    // Get references to control elements
    const massAInput = document.getElementById('massAInput');
    const massBInput = document.getElementById('massBInput');
    const pushAonBBtn = document.getElementById('pushAonBBtn');
    const resetBtn = document.getElementById('resetAnimation');

    // Animation parameters
    const OBJECT_WIDTH = 50;
    const TRACK_MIN_X = 50;
    const TRACK_MAX_X = 650;
    const INITIAL_GAP = 50; // Initial gap between objects
    const OBJECT_Y_CENTER = 150; // Y-position for objects and force arrows
    const OBJECT_START_X = 50; // Initial X position for object A

    // Check if all essential elements are found
    if (!newtonsThirdLawSVG || !objectA || !labelA || !objectB || !labelB ||
        !forceAonB || !labelAonB || !forceBonA || !labelBonA ||
        !accelADisplay || !accelBDisplay || !animationExplanation ||
        !massAInput || !massBInput || !pushAonBBtn || !resetBtn) {
        console.error('One or more essential elements for the Newton\'s Third Law Animator were not found. Script cannot proceed.');
        return;
    }


    let currentX_A = OBJECT_START_X;
    let currentX_B = OBJECT_START_X + OBJECT_WIDTH + INITIAL_GAP;
    let currentVelocity_A = 0;
    let currentVelocity_B = 0;
    let currentAcceleration_A = 0;
    let currentAcceleration_B = 0;
    let animationFrameId = null;
    let lastTimestamp = 0;

    const PUSH_FORCE_MAGNITUDE = 50; // N - Constant force applied during push
    const FORCE_DISPLAY_DURATION = 2000; // ms (2 seconds)

    let massA = parseFloat(massAInput.value);
    let massB = parseFloat(massBInput.value);

    // Function to update object positions, velocities, and accelerations
    function updatePhysics(deltaTime) {
        const dt = deltaTime / 1000; // Convert to seconds

        // Update velocities based on accelerations
        currentVelocity_A += currentAcceleration_A * dt;
        currentVelocity_B += currentAcceleration_B * dt;

        // Update positions based on velocities
        currentX_A += currentVelocity_A * dt * 30; // Scale for visual movement (pixels per meter)
        currentX_B += currentVelocity_B * dt * 30; // Scale for visual movement

        // Boundary checks: Stop objects if they hit the edges
        if (currentX_A < TRACK_MIN_X) {
            currentX_A = TRACK_MIN_X;
            currentVelocity_A = 0;
            currentAcceleration_A = 0;
        }
        if (currentX_B + OBJECT_WIDTH > TRACK_MAX_X) {
            currentX_B = TRACK_MAX_X - OBJECT_WIDTH;
            currentVelocity_B = 0;
            currentAcceleration_B = 0;
        }

        // Stop animation if both objects have stopped or reached boundaries
        if (Math.abs(currentVelocity_A) < 0.01 && Math.abs(currentVelocity_B) < 0.01 &&
            currentX_A <= TRACK_MIN_X + 0.1 && currentX_B + OBJECT_WIDTH >= TRACK_MAX_X - 0.1) {
            stopAnimationLoop();
            animationExplanation.innerHTML = `<p>Objects have stopped or reached boundaries. Reset to try again!</p>`;
        }
    }

    function draw() {
        // Update object positions
        objectA.setAttribute('x', currentX_A);
        labelA.setAttribute('x', currentX_A + OBJECT_WIDTH / 2);
        labelA.textContent = `A (${massA.toFixed(0)}kg)`;

        objectB.setAttribute('x', currentX_B);
        labelB.setAttribute('x', currentX_B + OBJECT_WIDTH / 2);
        labelB.textContent = `B (${massB.toFixed(0)}kg)`;

        // Update force arrows (only visible during the brief push)
        // Force A on B (pushing B right)
        forceAonB.setAttribute('x1', currentX_A + OBJECT_WIDTH);
        forceAonB.setAttribute('y1', OBJECT_Y_CENTER);
        forceAonB.setAttribute('x2', currentX_A + OBJECT_WIDTH + (PUSH_FORCE_MAGNITUDE * 0.5)); // Scale arrow length
        forceAonB.setAttribute('y2', OBJECT_Y_CENTER);
        labelAonB.setAttribute('x', currentX_A + OBJECT_WIDTH + (PUSH_FORCE_MAGNITUDE * 0.25));
        labelAonB.setAttribute('y', OBJECT_Y_CENTER - 10);

        // Force B on A (pushing A left)
        forceBonA.setAttribute('x1', currentX_B);
        forceBonA.setAttribute('y1', OBJECT_Y_CENTER);
        forceBonA.setAttribute('x2', currentX_B - (PUSH_FORCE_MAGNITUDE * 0.5)); // Scale arrow length
        forceBonA.setAttribute('y2', OBJECT_Y_CENTER);
        labelBonA.setAttribute('x', currentX_B - (PUSH_FORCE_MAGNITUDE * 0.25));
        labelBonA.setAttribute('y', OBJECT_Y_CENTER - 10);


        // Update acceleration displays (now with 3 decimal places)
        accelADisplay.textContent = `Acceleration A: ${currentAcceleration_A.toFixed(3)} m/s²`;
        accelBDisplay.textContent = `Acceleration B: ${currentAcceleration_B.toFixed(3)} m/s²`;
    }

    function animateLoop(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        updatePhysics(deltaTime);
        draw();

        animationFrameId = requestAnimationFrame(animateLoop);
    }

    function startAnimationLoop() {
        if (!animationFrameId) {
            lastTimestamp = performance.now();
            animationFrameId = requestAnimationFrame(animateLoop);
            disableInputButtons(); // Disable inputs while animation runs
        }
    }

    function stopAnimationLoop() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
            enableInputButtons(); // Enable inputs when animation stops
        }
    }

    function applyPush() {
        stopAnimationLoop(); // Stop any ongoing animation, which will enable buttons
        massA = parseFloat(massAInput.value);
        massB = parseFloat(massBInput.value);

        if (isNaN(massA) || massA <= 0 || isNaN(massB) || massB <= 0) {
            animationExplanation.innerHTML = `<p style="color: red;">Please enter valid positive numbers for both masses.</p>`;
            return;
        }

        // Reset positions and velocities for a fresh push
        currentX_A = OBJECT_START_X;
        currentX_B = OBJECT_START_X + OBJECT_WIDTH + INITIAL_GAP;
        currentVelocity_A = 0;
        currentVelocity_B = 0;

        // Calculate accelerations due to the push
        // Force A on B is PUSH_FORCE_MAGNITUDE (positive for right)
        // Force B on A is -PUSH_FORCE_MAGNITUDE (negative for left)
        currentAcceleration_A = -PUSH_FORCE_MAGNITUDE / massA; // A accelerates left
        currentAcceleration_B = PUSH_FORCE_MAGNITUDE / massB;  // B accelerates right

        // Show forces for the defined duration
        forceAonB.style.opacity = 1;
        labelAonB.style.opacity = 1;
        forceBonA.style.opacity = 1;
        labelBonA.style.opacity = 1;

        animationExplanation.innerHTML = `<p>Object A pushes B with ${PUSH_FORCE_MAGNITUDE} N (Action). Object B pushes A with ${PUSH_FORCE_MAGNITUDE} N (Reaction)!</p>`;

        draw(); // Draw initial state with forces and calculated accelerations
        startAnimationLoop(); // Start the motion

        // Hide force arrows and set accelerations to zero after the defined duration
        setTimeout(() => {
            forceAonB.style.opacity = 0;
            labelAonB.style.opacity = 0;
            forceBonA.style.opacity = 0;
            labelBonA.style.opacity = 0;
            // After push, acceleration becomes 0 unless other forces are present (which they aren't in this simplified model)
            currentAcceleration_A = 0;
            currentAcceleration_B = 0;
            animationExplanation.innerHTML = `<p>Forces are gone. Objects continue with constant velocity (due to inertia).</p>`;
        }, FORCE_DISPLAY_DURATION); // Use the constant duration
    }

    function resetAnimation() {
        stopAnimationLoop(); // This will also call enableInputButtons()
        currentX_A = OBJECT_START_X;
        currentX_B = OBJECT_START_X + OBJECT_WIDTH + INITIAL_GAP;
        currentVelocity_A = 0;
        currentVelocity_B = 0;
        currentAcceleration_A = 0;
        currentAcceleration_B = 0;

        // Reset inputs to default values
        massAInput.value = "5";
        massBInput.value = "10";

        // Re-read values from inputs after resetting them
        massA = parseFloat(massAInput.value);
        massB = parseFloat(massBInput.value);

        // Hide all arrows and labels
        forceAonB.style.opacity = 0;
        labelAonB.style.opacity = 0;
        forceBonA.style.opacity = 0;
        labelBonA.style.opacity = 0;

        accelADisplay.textContent = `Acceleration A: 0.000 m/s²`;
        accelBDisplay.textContent = `Acceleration B: 0.000 m/s²`;
        animationExplanation.innerHTML = `<p>Adjust masses, then click "Push A on B" to see the action-reaction forces and resulting accelerations!</p>`;
        draw(); // Initial draw to show reset state
    }

    function disableInputButtons() {
        pushAonBBtn.disabled = true;
        // resetBtn.disabled = true; // DO NOT DISABLE RESET BUTTON
        massAInput.disabled = true;
        massBInput.disabled = true;
    }

    function enableInputButtons() {
        pushAonBBtn.disabled = false;
        // resetBtn.disabled = false; // RESET BUTTON IS ALWAYS ENABLED
        massAInput.disabled = false;
        massBInput.disabled = false;
    }

    // Event Listeners for buttons
    pushAonBBtn.addEventListener('click', applyPush);
    resetBtn.addEventListener('click', resetAnimation); // Reset button always works

    // Event listeners for input changes: reset animation state when inputs change
    massAInput.addEventListener('input', () => {
        massA = parseFloat(massAInput.value);
        if (isNaN(massA) || massA <= 0) massA = 1;
        massAInput.value = massA;
        resetAnimation();
    });

    massBInput.addEventListener('input', () => {
        massB = parseFloat(massBInput.value);
        if (isNaN(massB) || massB <= 0) massB = 1;
        massBInput.value = massB;
        resetAnimation();
    });

    // Initial setup
    resetAnimation(); // Set initial state on page load
});