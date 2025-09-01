document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const newtonsSecondLawSVG = document.getElementById('newtonsSecondLawSVG');
    const movingObject = document.getElementById('movingObject');
    const objectLabel = document.getElementById('objectLabel');

    const forceRightArrow = document.getElementById('forceRightArrow');
    const forceRightLabel = document.getElementById('forceRightLabel');
    const forceLeftArrow = document.getElementById('forceLeftArrow');
    const forceLeftLabel = document.getElementById('forceLeftLabel');

    const currentVelocityDisplay = document.getElementById('currentVelocityDisplay');
    const currentNetForceDisplay = document.getElementById('currentNetForceDisplay');
    const currentAccelerationDisplay = document.getElementById('currentAccelerationDisplay');
    const animationExplanation = document.getElementById('animationExplanation');

    // Get references to control elements
    const forceRightInput = document.getElementById('forceRightInput');
    const forceLeftInput = document.getElementById('forceLeftInput');
    const objectMassInput = document.getElementById('objectMassInput');
    const applyForcesBtn = document.getElementById('applyForcesBtn');
    const resetBtn = document.getElementById('resetAnimation');

    // Check if all essential elements are found
    if (!newtonsSecondLawSVG || !movingObject || !objectLabel || !forceRightArrow || !forceRightLabel ||
        !forceLeftArrow || !forceLeftLabel || !currentVelocityDisplay || !currentNetForceDisplay ||
        !currentAccelerationDisplay || !animationExplanation || !forceRightInput || !forceLeftInput ||
        !objectMassInput || !applyForcesBtn || !resetBtn) {
        console.error('One or more essential elements for the Newton\'s Second Law Animator were not found. Script cannot proceed.');
        return;
    }

    // Animation parameters
    const OBJECT_START_X = 50; // Initial X position of the object (left edge of rect)
    const OBJECT_Y_CENTER = 150; // Y-position of the object's center on the track
    const OBJECT_WIDTH = 50;   // Width of the object rect
    const TRACK_MIN_X = 50; // Left boundary for object's left edge
    const TRACK_MAX_X = 650;   // Right boundary of the track for object's right edge

    let currentX = OBJECT_START_X;
    let currentVelocity = 0; // m/s
    let currentAcceleration = 0; // m/s^2
    let netForce = 0; // N (calculated from applied forces)
    let animationFrameId = null;
    let lastTimestamp = 0;

    let appliedForceRight = parseFloat(forceRightInput.value);
    let appliedForceLeft = parseFloat(forceLeftInput.value);
    let objectMass = parseFloat(objectMassInput.value);

    // Function to update object position, velocity, and acceleration
    function updatePhysics(deltaTime) {
        const dt = deltaTime / 1000; // Convert to seconds

        // Calculate net force
        netForce = appliedForceRight - appliedForceLeft; // Positive for right, negative for left

        // Calculate acceleration based on F_net = ma
        currentAcceleration = netForce / objectMass;

        // Update velocity and position
        currentVelocity += currentAcceleration * dt;
        currentX += currentVelocity * dt * 30; // Scale for visual movement (pixels per meter)

        // Stop at boundaries
        if (currentX < TRACK_MIN_X) {
            currentX = TRACK_MIN_X;
            currentVelocity = 0;
            currentAcceleration = 0;
            netForce = 0;
            stopAnimationLoop();
            animationExplanation.innerHTML = `<p>Object reached the left end of the track and stopped. Reset to try again!</p>`;
        } else if (currentX + OBJECT_WIDTH > TRACK_MAX_X) {
            currentX = TRACK_MAX_X - OBJECT_WIDTH;
            currentVelocity = 0;
            currentAcceleration = 0;
            netForce = 0;
            stopAnimationLoop();
            animationExplanation.innerHTML = `<p>Object reached the right end of the track and stopped. Reset to try again!</p>`;
        }

        // If net force is zero and velocity is very small, snap to stop
        // This also handles the case where net force becomes zero during motion
        if (Math.abs(netForce) < 0.001 && Math.abs(currentVelocity) < 0.01 && animationFrameId) { // Increased tolerance for netForce
            currentVelocity = 0;
            currentAcceleration = 0;
            netForce = 0;
            stopAnimationLoop();
            animationExplanation.innerHTML = `<p>Net Force: 0 N. Object is at rest or moving at a constant velocity.</p>`;
        }
    }

    function draw() {
        // Update object position
        movingObject.setAttribute('x', currentX);
        objectLabel.setAttribute('x', currentX + OBJECT_WIDTH / 2);
        objectLabel.textContent = `${objectMass.toFixed(0)} kg`;

        // Update force right arrow
        if (appliedForceRight > 0) {
            const arrowLength = appliedForceRight * 5; // Scale force to arrow length
            forceRightArrow.setAttribute('x1', currentX + OBJECT_WIDTH); // Start at right edge of object
            forceRightArrow.setAttribute('y1', OBJECT_Y_CENTER);
            forceRightArrow.setAttribute('x2', currentX + OBJECT_WIDTH + arrowLength);
            forceRightArrow.setAttribute('y2', OBJECT_Y_CENTER);
            forceRightArrow.style.opacity = 1;
            forceRightLabel.setAttribute('x', currentX + OBJECT_WIDTH + arrowLength / 2);
            forceRightLabel.setAttribute('y', OBJECT_Y_CENTER - 10);
            forceRightLabel.textContent = `${appliedForceRight.toFixed(0)} N`;
            forceRightLabel.style.opacity = 1;
        } else {
            forceRightArrow.style.opacity = 0;
            forceRightLabel.style.opacity = 0;
        }

        // Update force left arrow
        if (appliedForceLeft > 0) {
            const arrowLength = appliedForceLeft * 5; // Scale force to arrow length
            forceLeftArrow.setAttribute('x1', currentX); // Start at left edge of object
            forceLeftArrow.setAttribute('y1', OBJECT_Y_CENTER);
            forceLeftArrow.setAttribute('x2', currentX - arrowLength);
            forceLeftArrow.setAttribute('y2', OBJECT_Y_CENTER);
            forceLeftArrow.style.opacity = 1;
            forceLeftLabel.setAttribute('x', currentX - arrowLength / 2);
            forceLeftLabel.setAttribute('y', OBJECT_Y_CENTER - 10);
            forceLeftLabel.textContent = `${appliedForceLeft.toFixed(0)} N`;
            forceLeftLabel.style.opacity = 1;
        } else {
            forceLeftArrow.style.opacity = 0;
            forceLeftLabel.style.opacity = 0;
        }

        // Update velocity, net force, and acceleration displays
        currentVelocityDisplay.textContent = `Velocity: ${currentVelocity.toFixed(1)} m/s`;
        currentNetForceDisplay.textContent = `Net Force: ${netForce.toFixed(1)} N`;
        currentAccelerationDisplay.textContent = `Acceleration: ${currentAcceleration.toFixed(3)} m/s²`; // Increased precision
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

    function applyForces() {
        stopAnimationLoop(); // Stop any ongoing animation, which will enable buttons
        appliedForceRight = parseFloat(forceRightInput.value);
        appliedForceLeft = parseFloat(forceLeftInput.value);
        objectMass = parseFloat(objectMassInput.value);

        if (isNaN(appliedForceRight) || appliedForceRight < 0 || isNaN(appliedForceLeft) || appliedForceLeft < 0 ||
            isNaN(objectMass) || objectMass <= 0) {
            animationExplanation.innerHTML = `<p style="color: red;">Please enter valid non-negative numbers for Forces and positive for Mass.</p>`;
            return;
        }

        // Recalculate net force and acceleration for the start of the new simulation
        netForce = appliedForceRight - appliedForceLeft;
        currentAcceleration = netForce / objectMass;

        // Reset object to start for new simulation
        currentX = OBJECT_START_X;
        currentVelocity = 0;


        updateExplanationMessage(); // Set initial explanation message
        startAnimationLoop(); // Start the animation, which will disable inputs
    }

    function resetAnimation() {
        stopAnimationLoop(); // This will also call enableInputButtons()
        currentX = OBJECT_START_X;
        currentVelocity = 0;
        netForce = 0;
        currentAcceleration = 0;

        // Reset inputs to default values
        forceRightInput.value = "10";
        forceLeftInput.value = "0";
        objectMassInput.value = "5";

        // Re-read values from inputs after resetting them
        appliedForceRight = parseFloat(forceRightInput.value);
        appliedForceLeft = parseFloat(forceLeftInput.value);
        objectMass = parseFloat(objectMassInput.value);

        movingObject.setAttribute('x', currentX);
        objectLabel.textContent = `${objectMass.toFixed(0)} kg`;

        // Hide all arrows and labels
        forceRightArrow.style.opacity = 0;
        forceRightLabel.style.opacity = 0;
        forceLeftArrow.style.opacity = 0;
        forceLeftLabel.style.opacity = 0;

        currentVelocityDisplay.textContent = `Velocity: 0.0 m/s`;
        currentNetForceDisplay.textContent = `Net Force: 0.0 N`;
        currentAccelerationDisplay.textContent = `Acceleration: 0.000 m/s²`; // Initial precision
        animationExplanation.innerHTML = `<p>Adjust forces and mass, then click "Apply Forces" to see the resulting net force and acceleration!</p>`;
        draw(); // Initial draw to show reset state
    }

    function disableInputButtons() {
        applyForcesBtn.disabled = true;
        // resetBtn.disabled = true; // DO NOT DISABLE RESET BUTTON
        forceRightInput.disabled = true;
        forceLeftInput.disabled = true;
        objectMassInput.disabled = true;
    }

    function enableInputButtons() {
        applyForcesBtn.disabled = false;
        // resetBtn.disabled = false; // RESET BUTTON IS ALWAYS ENABLED
        forceRightInput.disabled = false;
        forceLeftInput.disabled = false;
        objectMassInput.disabled = false;
    }

    // Dynamic explanation message based on net force
    function updateExplanationMessage() {
        if (Math.abs(netForce) < 0.001) { // Effectively zero net force
            animationExplanation.innerHTML = `<p>Net Force: 0 N. Object will move at **constant velocity** (or stay at rest).</p>`;
        } else if (netForce > 0) {
            animationExplanation.innerHTML = `<p>Net Force: ${netForce.toFixed(1)} N to the RIGHT. Object will **accelerate to the RIGHT**.</p>`;
        } else { // netForce < 0
            animationExplanation.innerHTML = `<p>Net Force: ${Math.abs(netForce).toFixed(1)} N to the LEFT. Object will **accelerate to the LEFT**.</p>`;
        }
    }

    // Event Listeners for buttons
    applyForcesBtn.addEventListener('click', applyForces);
    resetBtn.addEventListener('click', resetAnimation); // Reset button always works

    // Event listeners for input changes: reset animation state when inputs change
    // Using 'input' event for immediate feedback when typing/changing values
    forceRightInput.addEventListener('input', () => {
        // Update the internal variable immediately
        appliedForceRight = parseFloat(forceRightInput.value);
        if (isNaN(appliedForceRight) || appliedForceRight < 0) appliedForceRight = 0;
        forceRightInput.value = appliedForceRight; // Ensure input value is clean

        // Update the display without starting animation
        netForce = appliedForceRight - appliedForceLeft;
        currentAcceleration = netForce / objectMass; // Recalculate acceleration
        updateExplanationMessage(); // Update message based on new potential net force
        draw(); // Redraw arrows based on new input values
        stopAnimationLoop(); // Ensure animation is stopped and buttons enabled
        applyMassCap(); // Apply mass cap after force changes
    });

    forceLeftInput.addEventListener('input', () => {
        // Update the internal variable immediately
        appliedForceLeft = parseFloat(forceLeftInput.value);
        if (isNaN(appliedForceLeft) || appliedForceLeft < 0) appliedForceLeft = 0;
        forceLeftInput.value = appliedForceLeft; // Ensure input value is clean

        // Update the display without starting animation
        netForce = appliedForceRight - appliedForceLeft;
        currentAcceleration = netForce / objectMass; // Recalculate acceleration
        updateExplanationMessage(); // Update message based on new potential net force
        draw(); // Redraw arrows based on new input values
        stopAnimationLoop(); // Ensure animation is stopped and buttons enabled
        applyMassCap(); // Apply mass cap after force changes
    });

    objectMassInput.addEventListener('input', () => {
        // Update the internal variable immediately
        objectMass = parseFloat(objectMassInput.value);
        if (isNaN(objectMass) || objectMass <= 0) objectMass = 1; // Mass must be positive
        objectMassInput.value = objectMass; // Ensure input value is clean

        // Apply mass cap immediately after user input
        applyMassCap();

        // Update the display without starting animation
        netForce = appliedForceRight - appliedForceLeft; // Recalculate net force (no change)
        currentAcceleration = netForce / objectMass; // Recalculate acceleration
        updateExplanationMessage(); // Update message based on new potential net force
        draw(); // Redraw object label
        stopAnimationLoop(); // Ensure animation is stopped and buttons enabled
    });

    // Function to apply the dynamic mass cap
    function applyMassCap() {
        const currentNetForceMagnitude = Math.abs(appliedForceRight - appliedForceLeft);
        let maxAllowedMass = 50; // Default reasonable max if net force is zero or very small

        if (currentNetForceMagnitude > 0.01) { // Only apply dynamic cap if there's a significant net force
            maxAllowedMass = currentNetForceMagnitude * 50;
            // Ensure a minimum practical mass cap even with very small net forces
            if (maxAllowedMass < 10) maxAllowedMass = 10;
        }

        // Cap the input's max attribute and the current objectMass variable
        objectMassInput.max = maxAllowedMass.toFixed(0); // Set max attribute for UI feedback

        if (objectMass > maxAllowedMass) {
            objectMass = maxAllowedMass;
            objectMassInput.value = objectMass.toFixed(0);
            animationExplanation.innerHTML = `<p style="color: orange;">Mass capped to ${objectMass.toFixed(0)} kg (50x Net Force) for better simulation visibility.</p>`;
        }
    }


    // Initial setup
    resetAnimation(); // Set initial state on page load
    applyMassCap(); // Apply initial mass cap based on default forces
});