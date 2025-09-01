document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const circularMotionSVG = document.getElementById('circularMotionSVG');
    const movingObject = document.getElementById('movingObject');
    const circularPath = document.getElementById('circularPath');
    const velocityVector = document.getElementById('velocityVector');
    const accelerationVector = document.getElementById('accelerationVector');
    const velocityLabel = document.getElementById('velocityLabel');
    const accelerationLabel = document.getElementById('accelerationLabel');
    const currentSpeedLabel = document.getElementById('currentSpeedLabel');
    const currentAcclLabel = document.getElementById('currentAcclLabel');
    const animationExplanation = document.getElementById('animationExplanation');

    // Get references to control elements
    const speedInput = document.getElementById('speedInput');
    const radiusInput = document.getElementById('radiusInput');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetAnimation');

    // Check if all essential elements are found
    if (!circularMotionSVG || !movingObject || !circularPath || !velocityVector || !accelerationVector ||
        !velocityLabel || !accelerationLabel || !currentSpeedLabel || !currentAcclLabel || !animationExplanation ||
        !speedInput || !radiusInput || !playBtn || !pauseBtn || !resetBtn) {
        console.error('One or more essential elements for the Uniform Circular Motion Animator were not found. Script cannot proceed.');
        return;
    }

    // Animation parameters and SVG mapping
    const SVG_CENTER_X = 300;
    const SVG_CENTER_Y = 175;
    const SVG_SCALE_FACTOR = 10; // Pixels per meter for radius, and for vector lengths

    let animationFrameId = null;
    let lastTimestamp = 0;
    let currentAngle = 0; // Radians
    let currentSpeed = parseFloat(speedInput.value);
    let currentRadius = parseFloat(radiusInput.value);

    // Function to calculate object position
    function getObjectPosition(angle, radius) {
        const x = SVG_CENTER_X + (radius * SVG_SCALE_FACTOR) * Math.cos(angle);
        const y = SVG_CENTER_Y + (radius * SVG_SCALE_FACTOR) * Math.sin(angle);
        return { x, y };
    }

    // Function to update the animation
    function updateAnimation(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = (timestamp - lastTimestamp) / 1000; // Convert to seconds
        lastTimestamp = timestamp;

        // Update angle based on speed and radius (angular velocity: omega = v/r)
        const angularVelocity = currentSpeed / currentRadius; // rad/s
        currentAngle += angularVelocity * deltaTime;

        // Keep angle within 0 to 2*PI
        currentAngle %= (2 * Math.PI);

        // Get object position
        const { x: objX, y: objY } = getObjectPosition(currentAngle, currentRadius);
        movingObject.setAttribute('cx', objX);
        movingObject.setAttribute('cy', objY);

        // Calculate centripetal acceleration
        const centripetalAcceleration = (currentSpeed * currentSpeed) / currentRadius;

        // Update velocity vector (tangent to circle)
        // Velocity vector direction is 90 degrees counter-clockwise from radius vector
        const velVectorLength = currentSpeed * SVG_SCALE_FACTOR * 0.5; // Scale velocity vector for visibility
        const velAngle = currentAngle + Math.PI / 2; // Add 90 degrees (pi/2 radians)
        const velX2 = objX + velVectorLength * Math.cos(velAngle);
        const velY2 = objY + velVectorLength * Math.sin(velAngle);
        velocityVector.setAttribute('x1', objX);
        velocityVector.setAttribute('y1', objY);
        velocityVector.setAttribute('x2', velX2);
        velocityVector.setAttribute('y2', velY2);
        velocityVector.style.opacity = 1; // Make visible
        velocityLabel.setAttribute('x', velX2 + (velVectorLength * 0.1 * Math.cos(velAngle))); // Label slightly past arrow
        velocityLabel.setAttribute('y', velY2 + (velVectorLength * 0.1 * Math.sin(velAngle)));
        velocityLabel.style.opacity = 1;

        // Update acceleration vector (points towards center)
        const acclVectorLength = centripetalAcceleration * SVG_SCALE_FACTOR * 0.5; // Scale acceleration vector
        const acclAngle = currentAngle + Math.PI; // Add 180 degrees (pi radians) from current object angle
        const acclX2 = objX + acclVectorLength * Math.cos(acclAngle);
        const acclY2 = objY + acclVectorLength * Math.sin(acclAngle);
        accelerationVector.setAttribute('x1', objX);
        accelerationVector.setAttribute('y1', objY);
        accelerationVector.setAttribute('x2', acclX2);
        accelerationVector.setAttribute('y2', acclY2);
        accelerationVector.style.opacity = 1; // Make visible
        accelerationLabel.setAttribute('x', acclX2 + (acclVectorLength * 0.1 * Math.cos(acclAngle))); // Label slightly past arrow
        accelerationLabel.setAttribute('y', acclY2 + (acclVectorLength * 0.1 * Math.sin(acclAngle)));
        accelerationLabel.style.opacity = 1;


        // Update labels
        currentSpeedLabel.textContent = `Speed: ${currentSpeed.toFixed(1)} m/s`;
        currentAcclLabel.textContent = `Acc: ${centripetalAcceleration.toFixed(1)} m/s²`;
        animationExplanation.innerHTML = `<p>Object moving at constant speed. Velocity direction and centripetal acceleration always change!</p>`;


        animationFrameId = requestAnimationFrame(updateAnimation);
    }

    function playAnimation() {
        if (!animationFrameId) {
            lastTimestamp = performance.now(); // Reset lastTimestamp to prevent jump
            animationFrameId = requestAnimationFrame(updateAnimation);
            updateButtonStates();
        }
    }

    function pauseAnimation() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
            updateButtonStates();
        }
    }

    function resetSimulation() {
        pauseAnimation();
        currentAngle = 0;
        currentSpeed = parseFloat(speedInput.value);
        currentRadius = parseFloat(radiusInput.value);

        // Reset object position to initial (rightmost point)
        movingObject.setAttribute('cx', SVG_CENTER_X + (currentRadius * SVG_SCALE_FACTOR));
        movingObject.setAttribute('cy', SVG_CENTER_Y);

        // Hide vectors and labels
        velocityVector.style.opacity = 0;
        accelerationVector.style.opacity = 0;
        velocityLabel.style.opacity = 0;
        accelerationLabel.style.opacity = 0;

        // Update labels to initial values
        currentSpeedLabel.textContent = `Speed: ${currentSpeed.toFixed(1)} m/s`;
        const initialAccl = (currentSpeed * currentSpeed) / currentRadius;
        currentAcclLabel.textContent = `Acc: ${initialAccl.toFixed(1)} m/s²`;
        animationExplanation.innerHTML = `<p>Adjust speed and radius, then click "Play" to see uniform circular motion!</p>`;

        // Update circular path radius
        circularPath.setAttribute('r', currentRadius * SVG_SCALE_FACTOR);

        updateButtonStates();
    }

    function updateButtonStates() {
        playBtn.disabled = animationFrameId !== null;
        pauseBtn.disabled = animationFrameId === null;
        resetBtn.disabled = false;
        speedInput.disabled = animationFrameId !== null;
        radiusInput.disabled = animationFrameId !== null;
    }

    // Event Listeners for buttons
    playBtn.addEventListener('click', playAnimation);
    pauseBtn.addEventListener('click', pauseAnimation);
    resetBtn.addEventListener('click', resetSimulation);

    // Event Listeners for input changes
    speedInput.addEventListener('change', () => {
        currentSpeed = parseFloat(speedInput.value);
        if (isNaN(currentSpeed) || currentSpeed <= 0) currentSpeed = 1; // Default to 1 if invalid
        speedInput.value = currentSpeed;
        resetSimulation();
    });

    radiusInput.addEventListener('change', () => {
        currentRadius = parseFloat(radiusInput.value);
        if (isNaN(currentRadius) || currentRadius <= 0) currentRadius = 5; // Default to 5 if invalid
        radiusInput.value = currentRadius;
        resetSimulation();
    });

    // Initial setup
    resetSimulation(); // Set initial state on page load
});