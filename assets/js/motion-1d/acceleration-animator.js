document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('numberLineMotionCanvas');
    if (!canvas) {
        console.error('Canvas element with ID "numberLineMotionCanvas" not found.');
        return;
    }
    const ctx = canvas.getContext('2d');

    const motionTypeControls = document.querySelector('.motion-type-controls');
    const motionButtons = document.querySelectorAll('.motion-button');
    const currentPositionValueDisplay = document.getElementById('currentPositionValue');
    const currentVelocityValueDisplay = document.getElementById('currentVelocityValue');
    const currentAccelerationValueDisplay = document.getElementById('currentAccelerationValue');
    const resetMotionButton = document.getElementById('resetMotionButton');

    // Canvas Dimensions
    const CANVAS_WIDTH = canvas.width;
    const CANVAS_HEIGHT = canvas.height;

    // Number Line Parameters
    const MIN_POS = -100; // meters
    const MAX_POS = 100; // meters
    const LINE_Y = CANVAS_HEIGHT / 2; // Y-coordinate of the number line
    const NL_ORIGIN_X = CANVAS_WIDTH / 2; // X-coordinate of 0m on the number line
    const NL_SCALE = (CANVAS_WIDTH / 2 - 20) / MAX_POS; // Pixels per meter

    // Object and Vector Drawing Parameters
    const DOT_RADIUS = 8;
    const ARROW_HEAD_LENGTH = 10;
    const VELOCITY_ARROW_OFFSET_Y = -25; // Y offset for velocity arrow above dot
    const ACCELERATION_ARROW_OFFSET_Y = 25; // Y offset for acceleration arrow below dot
    const MAX_VELOCITY_DISPLAY = 20; // Max velocity for scaling arrow length
    const MAX_ACCELERATION_DISPLAY = 5; // Max acceleration for scaling arrow length

    // Animation Parameters
    const ANIMATION_DURATION_SECONDS = 5; // Duration for each scenario
    let animationTime = 0; // Current time in the animation cycle
    let animationFrameId = null;
    let lastTimestamp = 0;

    // Motion Scenarios (x0 = initial position, v0 = initial velocity, a = constant acceleration)
    const motionScenarios = {
        speedUpRight: { x0: -80, v0: 5, a: 2 }, // Starts left, moves right, speeds up (V and A both right)
        slowDownRight: { x0: -80, v0: 15, a: -2 }, // Starts left, moves right, slows down (V right, A left)
        speedUpLeft: { x0: 80, v0: -5, a: -2 }, // Starts right, moves left, speeds up (V and A both left)
        slowDownLeft: { x0: 80, v0: -15, a: 2 }, // Starts right, moves left, slows down (V left, A right)
        constantVelocityRight: { x0: -80, v0: 10, a: 0 } // Starts left, moves right, constant velocity
    };

    let currentScenario = motionScenarios.speedUpRight; // Default scenario

    // --- Helper Functions ---
    function getXCoord(position) {
        return NL_ORIGIN_X + position * NL_SCALE;
    }

    function getPosition(t, x0, v0, a) {
        return x0 + v0 * t + 0.5 * a * t * t;
    }

    function getVelocity(t, v0, a) {
        return v0 + a * t;
    }

    // Function to draw an arrow head
    function drawArrowhead(ctx, x, y, angle, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-ARROW_HEAD_LENGTH, -ARROW_HEAD_LENGTH / 2);
        ctx.lineTo(-ARROW_HEAD_LENGTH, ARROW_HEAD_LENGTH / 2);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    }

    // Function to draw a vector (arrow)
    function drawVector(xPos, yPos, value, color, maxScaleValue, label) {
        if (value === 0) return; // Don't draw if value is zero

        const arrowLength = Math.min(Math.abs(value) / maxScaleValue * 50, 50); // Scale length, cap at 50px
        const angle = value > 0 ? 0 : Math.PI; // 0 for right, PI for left

        const startX = xPos;
        const startY = yPos;
        const endX = startX + arrowLength * Math.cos(angle);
        const endY = startY + arrowLength * Math.sin(angle);

        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        drawArrowhead(ctx, endX, endY, angle, color);

        // Optional: Draw label near arrow
        ctx.fillStyle = color;
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, startX + arrowLength / 2 * Math.cos(angle), startY + arrowLength / 2 * Math.sin(angle) - 15);
    }

    // --- Drawing Functions ---
    function drawNumberLine() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Draw the line
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(10, LINE_Y);
        ctx.lineTo(CANVAS_WIDTH - 10, LINE_Y);
        ctx.stroke();

        // Draw ticks and labels
        ctx.font = '12px Inter';
        ctx.fillStyle = '#333';
        for (let p = MIN_POS; p <= MAX_POS; p += 20) { // Label every 20m
            const x = getXCoord(p);
            ctx.beginPath();
            ctx.moveTo(x, LINE_Y - 5);
            ctx.lineTo(x, LINE_Y + 5);
            ctx.stroke();
            ctx.fillText(p.toString(), x, LINE_Y + 20);
        }
    }

    function drawScene(currentPos, currentVel, currentAcc) {
        drawNumberLine();

        const dotX = getXCoord(currentPos);

        // Draw Velocity Vector (above dot)
        drawVector(dotX, LINE_Y + VELOCITY_ARROW_OFFSET_Y, currentVel, '#28a745', MAX_VELOCITY_DISPLAY, `V: ${currentVel.toFixed(1)}m/s`);

        // Draw Acceleration Vector (below dot)
        if (currentAcc !== 0) {
            drawVector(dotX, LINE_Y + ACCELERATION_ARROW_OFFSET_Y, currentAcc, '#dc3545', MAX_ACCELERATION_DISPLAY, `A: ${currentAcc.toFixed(1)}m/s²`);
        }

        // Draw the moving dot
        ctx.beginPath();
        ctx.arc(dotX, LINE_Y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = '#FF5722'; // Red-orange dot
        ctx.fill();
        ctx.strokeStyle = '#D84315';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // --- Animation Loop ---
    function animate(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        animationTime += deltaTime / 1000; // Convert deltaTime to seconds

        // Loop animation
        if (animationTime > ANIMATION_DURATION_SECONDS) {
            animationTime = 0; // Reset time to loop
        }

        const { x0, v0, a } = currentScenario;
        const currentPos = getPosition(animationTime, x0, v0, a);
        const currentVel = getVelocity(animationTime, v0, a);
        const currentAcc = a; // Acceleration is constant for these scenarios

        // Update display values
        currentPositionValueDisplay.textContent = `${currentPos.toFixed(0)} m`;
        currentVelocityValueDisplay.textContent = `${currentVel.toFixed(1)} m/s`;
        currentAccelerationValueDisplay.textContent = `${currentAcc.toFixed(1)} m/s²`;

        drawScene(currentPos, currentVel, currentAcc);

        animationFrameId = requestAnimationFrame(animate);
    }

    function resetSimulation() {
        cancelAnimationFrame(animationFrameId);
        animationTime = 0;
        lastTimestamp = 0;

        // Set initial display values
        const { x0, v0, a } = currentScenario;
        currentPositionValueDisplay.textContent = `${x0.toFixed(0)} m`;
        currentVelocityValueDisplay.textContent = `${v0.toFixed(1)} m/s`;
        currentAccelerationValueDisplay.textContent = `${a.toFixed(1)} m/s²`;

        drawScene(x0, v0, a); // Draw initial state
        animationFrameId = requestAnimationFrame(animate); // Start animation
    }

    // --- Event Listeners ---
    motionTypeControls.addEventListener('click', (event) => {
        if (event.target.classList.contains('motion-button')) {
            motionButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            currentScenario = motionScenarios[event.target.dataset.motionType];
            resetSimulation(); // Reset and start animation with new scenario
        }
    });

    resetMotionButton.addEventListener('click', resetSimulation);

    // Initial setup
    // Set the initial active button and scenario
    const initialButton = document.querySelector('[data-motion-type="speedUpRight"]');
    if (initialButton) {
        initialButton.classList.add('active');
        currentScenario = motionScenarios.speedUpRight;
    } else {
        // Fallback if initial button not found
        currentScenario = motionScenarios.speedUpRight;
    }
    resetSimulation(); // Start the initial animation
});