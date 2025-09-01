document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('freeFallCanvas');
    if (!canvas) {
        console.error('Canvas element with ID "freeFallCanvas" not found.');
        return;
    }
    const ctx = canvas.getContext('2d');

    const airResistanceToggle = document.getElementById('airResistanceToggle');
    const airResistanceLabel = document.getElementById('airResistanceLabel');
    const ballAccelerationValueDisplay = document.getElementById('ballAccelerationValue');
    const featherAccelerationValueDisplay = document.getElementById('featherAccelerationValue');
    const resetFreeFallButton = document.getElementById('resetFreeFallButton');

    // Canvas Dimensions
    const CANVAS_WIDTH = canvas.width;
    const CANVAS_HEIGHT = canvas.height;

    // Physics Constants
    const G_ACCELERATION = 9.8; // m/s^2 (positive downwards)
    const INITIAL_HEIGHT_PX = 50; // Starting Y-position on canvas (from top)
    const GROUND_Y_PX = CANVAS_HEIGHT - 30; // Y-position of the ground on canvas

    // Object Properties (simplified drag: a_drag = k_drag * v^2 / m)
    const ball = {
        name: "Ball",
        color: "#42A5F5", // Blue
        radius: 15,
        mass: 5.0, // kg
        k_drag: 0.0005, // Simplified drag coefficient * area / (2 * rho_air)
        y: INITIAL_HEIGHT_PX,
        vy: 0, // initial velocity
        ay: G_ACCELERATION, // current acceleration
        landed: false,
        x_offset: -50 // Position relative to center
    };

    const feather = {
        name: "Feather",
        color: "#8BC34A", // Light Green
        radius: 10,
        mass: 0.01, // kg
        k_drag: 0.02, // Higher drag for feather
        y: INITIAL_HEIGHT_PX,
        vy: 0,
        ay: G_ACCELERATION,
        landed: false,
        x_offset: 50 // Position relative to center
    };

    // Animation Parameters
    let animationTime = 0; // Time elapsed since simulation start
    let animationFrameId = null;
    let lastTimestamp = 0;
    const TIME_STEP = 1 / 60; // seconds per frame (approx 60 FPS)

    let airResistanceEnabled = false;

    // --- Drawing Functions ---
    function drawGround() {
        ctx.beginPath();
        ctx.moveTo(0, GROUND_Y_PX);
        ctx.lineTo(CANVAS_WIDTH, GROUND_Y_PX);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#333';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Ground', CANVAS_WIDTH / 2, GROUND_Y_PX + 20);
    }

    function drawObject(obj) {
        // Draw object
        ctx.beginPath();
        ctx.arc(CANVAS_WIDTH / 2 + obj.x_offset, obj.y, obj.radius, 0, Math.PI * 2);
        ctx.fillStyle = obj.color;
        ctx.fill();
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw acceleration vector (always downwards for free fall)
        const arrowLength = Math.min(Math.abs(obj.ay) / G_ACCELERATION * 30, 30); // Scale arrow length
        const arrowY = obj.y + obj.radius + 10; // Start below object
        const arrowX = CANVAS_WIDTH / 2 + obj.x_offset;

        ctx.strokeStyle = '#dc3545'; // Red for acceleration
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(arrowX, arrowY);
        ctx.lineTo(arrowX, arrowY + arrowLength);
        ctx.stroke();
        drawArrowhead(ctx, arrowX, arrowY + arrowLength, Math.PI / 2, '#dc3545'); // Arrow pointing down

        // If air resistance is enabled and object is moving, draw drag force arrow
        if (airResistanceEnabled && obj.vy > 0 && !obj.landed) {
            const dragForce = obj.k_drag * obj.vy * obj.vy; // Simplified
            const dragAcceleration = dragForce / obj.mass;
            const dragArrowLength = Math.min(dragAcceleration / G_ACCELERATION * 20, 20); // Scale drag arrow length

            ctx.strokeStyle = '#007bff'; // Blue for drag force
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(arrowX, obj.y - obj.radius - 10); // Start above object
            ctx.lineTo(arrowX, obj.y - obj.radius - 10 - dragArrowLength);
            ctx.stroke();
            drawArrowhead(ctx, arrowX, obj.y - obj.radius - 10 - dragArrowLength, -Math.PI / 2, '#007bff'); // Arrow pointing up
        }
    }

    // Function to draw an arrow head
    function drawArrowhead(ctx, x, y, angle, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-8, -4);
        ctx.lineTo(-8, 4);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    }

    // --- Physics Update ---
    function updatePhysics(obj, dt, airResistanceOn) {
        if (obj.landed) {
            obj.ay = 0; // No acceleration once landed
            return;
        }

        let currentAy = G_ACCELERATION; // Start with gravity

        if (airResistanceOn) {
            const dragForce = obj.k_drag * obj.vy * obj.vy; // F_drag = k * v^2
            const dragAcceleration = dragForce / obj.mass;
            currentAy = G_ACCELERATION - dragAcceleration; // Net acceleration (down positive)
            if (currentAy < 0) currentAy = 0; // Prevent upward acceleration from drag
        }

        obj.ay = currentAy; // Update object's acceleration for display

        // Update velocity
        obj.vy += obj.ay * dt;

        // Update position
        obj.y += obj.vy * dt;

        // Check for ground collision
        if (obj.y + obj.radius >= GROUND_Y_PX) {
            obj.y = GROUND_Y_PX - obj.radius; // Set to ground level
            obj.vy = 0; // Stop vertical motion
            obj.landed = true;
            obj.ay = 0; // No acceleration after landing
        }
    }

    // --- Animation Loop ---
    function animate(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = (timestamp - lastTimestamp) / 1000; // Convert to seconds
        lastTimestamp = timestamp;

        // Only update physics if not all objects have landed
        if (!ball.landed || !feather.landed) {
            updatePhysics(ball, deltaTime, airResistanceEnabled);
            updatePhysics(feather, deltaTime, airResistanceEnabled);
        } else {
            // All landed, stop animation
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }

        // Clear and redraw
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        drawGround();
        drawObject(ball);
        drawObject(feather);

        // Update display values
        ballAccelerationValueDisplay.textContent = `${ball.ay.toFixed(1)} m/s²`;
        featherAccelerationValueDisplay.textContent = `${feather.ay.toFixed(1)} m/s²`;

        if (animationFrameId) { // Only request next frame if not stopped
            animationFrameId = requestAnimationFrame(animate);
        }
    }

    function resetSimulation() {
        cancelAnimationFrame(animationFrameId);
        animationTime = 0;
        lastTimestamp = 0;

        // Reset object states
        ball.y = INITIAL_HEIGHT_PX;
        ball.vy = 0;
        ball.ay = G_ACCELERATION;
        ball.landed = false;

        feather.y = INITIAL_HEIGHT_PX;
        feather.vy = 0;
        feather.ay = G_ACCELERATION;
        feather.landed = false;

        // Reset toggle label
        airResistanceLabel.textContent = airResistanceEnabled ? "Air Resistance: ON" : "Air Resistance: OFF (Vacuum)";

        // Initial draw and start animation
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        drawGround();
        drawObject(ball);
        drawObject(feather);

        // Update display values to initial state
        ballAccelerationValueDisplay.textContent = `${ball.ay.toFixed(1)} m/s²`;
        featherAccelerationValueDisplay.textContent = `${feather.ay.toFixed(1)} m/s²`;

        animationFrameId = requestAnimationFrame(animate);
    }

    // --- Event Listeners ---
    airResistanceToggle.addEventListener('change', () => {
        airResistanceEnabled = airResistanceToggle.checked;
        airResistanceLabel.textContent = airResistanceEnabled ? "Air Resistance: ON" : "Air Resistance: OFF (Vacuum)";
        resetSimulation(); // Reset and restart with new air resistance setting
    });

    resetFreeFallButton.addEventListener('click', resetSimulation);

    // Initial setup
    resetSimulation();
});