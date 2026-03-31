document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetAnimation');
    const movingObject = document.getElementById('movingObject');
    const velocityVector = document.getElementById('velocityVector');
    const velocityLabel = document.getElementById('velocityLabel');
    const currentSpeedLabel = document.getElementById('currentSpeedLabel');
    const speedInput = document.getElementById('speedInput');
    const radiusInput = document.getElementById('radiusInput');

    // SVG coordinates for the center of the circle
    const centerX = 300;
    const centerY = 175;

    // Animation state variables
    let animationFrameId = null;
    let angle = 0; // Current angle in radians
    let lastTimestamp = null;
    let currentSpeed = parseFloat(speedInput.value);
    let currentRadius = parseFloat(radiusInput.value);

    // Function to get the cardinal direction from an angle
    function getCardinalDirection(angleRad) {
        let angleDeg = (angleRad * 180 / Math.PI + 360) % 360;
        const directions = ["Right", "Down-Right", "Down", "Down-Left", "Left", "Up-Left", "Up", "Up-Right"];
        const index = Math.round(angleDeg / 45) % 8;
        return directions[index];
    }

    // The main animation loop
    function animate(timestamp) {
        if (!lastTimestamp) {
            lastTimestamp = timestamp;
        }
        const deltaTime = (timestamp - lastTimestamp) / 1000;
        lastTimestamp = timestamp;

        // Calculate the angular speed
        const angularSpeed = currentSpeed / currentRadius;
        
        // Update the angle based on time and speed
        angle += angularSpeed * deltaTime;
        
        // Calculate the object's new position
        const objectX = centerX + currentRadius * Math.cos(angle);
        const objectY = centerY + currentRadius * Math.sin(angle);
        
        // Calculate velocity vector direction (tangent to the circle)
        const velocityAngle = angle + Math.PI / 2;
        const vectorLength = 50;
        const velocityVectorEndX = objectX + vectorLength * Math.cos(velocityAngle);
        const velocityVectorEndY = objectY + vectorLength * Math.sin(velocityAngle);

        // Update SVG element positions and values
        movingObject.setAttribute('cx', objectX);
        movingObject.setAttribute('cy', objectY);

        velocityVector.setAttribute('x1', objectX);
        velocityVector.setAttribute('y1', objectY);
        velocityVector.setAttribute('x2', velocityVectorEndX);
        velocityVector.setAttribute('y2', velocityVectorEndY);
        velocityVector.setAttribute('opacity', 1);

        // Move the velocity label next to the vector
        velocityLabel.setAttribute('x', velocityVectorEndX + (15 * Math.cos(velocityAngle)));
        velocityLabel.setAttribute('y', velocityVectorEndY + (15 * Math.sin(velocityAngle)));

        // Update the display labels
        currentSpeedLabel.textContent = `Speed: ${currentSpeed.toFixed(1)} m/s`;
        const velocityDirection = getCardinalDirection(velocityAngle);
        velocityLabel.textContent = `Velocity: ${currentSpeed.toFixed(1)} m/s (${velocityDirection})`;

        animationFrameId = requestAnimationFrame(animate);
    }

    // Play button functionality
    playBtn.addEventListener('click', () => {
        if (!animationFrameId) {
            lastTimestamp = null; // Reset timestamp to prevent a jump
            animationFrameId = requestAnimationFrame(animate);
        }
    });

    // Pause button functionality
    pauseBtn.addEventListener('click', () => {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    });

    // Reset button functionality
    resetBtn.addEventListener('click', () => {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
        angle = 0; // Reset angle to the starting point
        movingObject.setAttribute('cx', centerX + currentRadius);
        movingObject.setAttribute('cy', centerY);
        velocityVector.setAttribute('opacity', 0); // Hide velocity vector
        currentSpeedLabel.textContent = `Speed: 0.0 m/s`;
        velocityLabel.textContent = `Velocity: 0.0 m/s`;
    });

    // Event listeners for input fields to update parameters
    speedInput.addEventListener('change', () => {
        currentSpeed = parseFloat(speedInput.value);
    });

    radiusInput.addEventListener('change', () => {
        currentRadius = parseFloat(radiusInput.value);
        resetBtn.click(); // Reset the animation to reflect the new radius
    });

    // Initial setup
    resetBtn.click();
});