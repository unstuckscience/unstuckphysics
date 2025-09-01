document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('circularMotionCanvas');
    const ctx = canvas.getContext('2d');
    const currentSpeedValueDisplay = document.getElementById('currentSpeedValue');
    const currentVelocityValueDisplay = document.getElementById('currentVelocityValue');
    const resetCircularMotionButton = document.getElementById('resetCircularMotionButton');

    // Canvas Dimensions
    const CANVAS_WIDTH = canvas.width;
    const CANVAS_HEIGHT = canvas.height;

    // Animation Parameters
    const CIRCLE_RADIUS = 100;
    const OBJECT_RADIUS = 8;
    const CENTER_X = CANVAS_WIDTH / 2;
    const CENTER_Y = CANVAS_HEIGHT / 2;
    const ANGULAR_SPEED = (2 * Math.PI) / 10;
    const CONSTANT_SPEED_MAGNITUDE = (2 * Math.PI * CIRCLE_RADIUS) / 10;
    const VELOCITY_ARROW_LENGTH = 30;

    let animationTime = 0;
    let animationFrameId = null;
    let lastTimestamp = 0;

    function drawArrowhead(ctx, x, y, angle, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-10, -5);
        ctx.lineTo(-10, 5);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    }

    function getCardinalDirection(angleRad) {
        let angleDeg = (angleRad * 180 / Math.PI + 360) % 360;
        // Adjusted for canvas coordinates (y increases downward)
        const directions = ["Right", "Down-Right", "Down", "Down-Left", "Left", "Up-Left", "Up", "Up-Right"];
        const index = Math.round(angleDeg / 45) % 8;
        return directions[index];
    }

    function draw() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        ctx.beginPath();
        ctx.arc(CENTER_X, CENTER_Y, CIRCLE_RADIUS, 0, Math.PI * 2);
        ctx.strokeStyle = '#607D8B';
        ctx.lineWidth = 2;
        ctx.stroke();

        const currentAngle = (ANGULAR_SPEED * animationTime) % (2 * Math.PI);
        const objectX = CENTER_X + CIRCLE_RADIUS * Math.cos(currentAngle);
        const objectY = CENTER_Y + CIRCLE_RADIUS * Math.sin(currentAngle);

        ctx.beginPath();
        ctx.arc(objectX, objectY, OBJECT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = '#FF5722';
        ctx.fill();
        ctx.strokeStyle = '#D84315';
        ctx.lineWidth = 1;
        ctx.stroke();

        const velocityAngle = currentAngle + Math.PI / 2;
        const arrowEndX = objectX + VELOCITY_ARROW_LENGTH * Math.cos(velocityAngle);
        const arrowEndY = objectY + VELOCITY_ARROW_LENGTH * Math.sin(velocityAngle);

        ctx.beginPath();
        ctx.moveTo(objectX, objectY);
        ctx.lineTo(arrowEndX, arrowEndY);
        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 3;
        ctx.stroke();
        drawArrowhead(ctx, arrowEndX, arrowEndY, velocityAngle, '#007bff');

        currentSpeedValueDisplay.textContent = `${CONSTANT_SPEED_MAGNITUDE.toFixed(1)} m/s`;
        const velocityDirection = getCardinalDirection(velocityAngle);
        currentVelocityValueDisplay.textContent = `${CONSTANT_SPEED_MAGNITUDE.toFixed(1)} m/s (${velocityDirection})`;
    }

    function animate(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        animationTime += deltaTime / 1000;

        draw();
        animationFrameId = requestAnimationFrame(animate);
    }

    function resetAnimation() {
        cancelAnimationFrame(animationFrameId);
        animationTime = 0;
        lastTimestamp = 0;
        draw();
        animationFrameId = requestAnimationFrame(animate);
    }

    resetCircularMotionButton.addEventListener('click', resetAnimation);
    resetAnimation();
});
