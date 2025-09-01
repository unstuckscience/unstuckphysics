document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const projectileMotionSVG = document.getElementById('projectileMotionSVG');
    const projectile = document.getElementById('projectile');
    const projectilePath = document.getElementById('projectilePath');
    const timeLabel = document.getElementById('timeLabel');
    const rangeLabel = document.getElementById('rangeLabel');
    const heightLabel = document.getElementById('heightLabel');
    const animationExplanation = document.getElementById('animationExplanation');

    // Get references to control elements
    const initialVelocityInput = document.getElementById('initialVelocity');
    const launchAngleInput = document.getElementById('launchAngle');
    const launchBtn = document.getElementById('launchBtn');
    const resetBtn = document.getElementById('resetAnimation');

    // Check if all essential elements are found
    if (!projectileMotionSVG || !projectile || !projectilePath || !timeLabel || !rangeLabel || !heightLabel ||
        !animationExplanation || !initialVelocityInput || !launchAngleInput || !launchBtn || !resetBtn) {
        console.error('One or more essential elements for the Projectile Motion Animator were not found. Script cannot proceed.');
        return;
    }

    // Physics constants and SVG mapping
    const G = 9.81; // Acceleration due to gravity (m/s^2)
    const SVG_SCALE = 5; // Pixels per meter (adjust as needed for visual scale)
    const GROUND_Y_SVG = 380; // Y-coordinate of the ground in SVG
    const LAUNCH_X_SVG = 50;  // X-coordinate of the launch point in SVG

    let animationFrameId = null;
    let startTime = 0;
    let currentPhysicsTime = 0;
    let initialVx, initialVy;
    let maxCalculatedHeight = 0;
    let pathData = `M ${LAUNCH_X_SVG} ${GROUND_Y_SVG}`; // Start path at launch point

    // Function to map physics meters to SVG pixels (Y-axis is inverted in SVG)
    function mapPhysicsToSVGX(meters) {
        return LAUNCH_X_SVG + (meters * SVG_SCALE);
    }

    function mapPhysicsToSVGY(meters) {
        return GROUND_Y_SVG - (meters * SVG_SCALE);
    }

    function calculateProjectilePosition(time) {
        // Horizontal position (constant velocity)
        const x = initialVx * time;

        // Vertical position (constant acceleration due to gravity)
        const y = (initialVy * time) - (0.5 * G * time * time);

        return { x, y };
    }

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        currentPhysicsTime = (timestamp - startTime) / 1000; // Time in seconds

        const { x, y } = calculateProjectilePosition(currentPhysicsTime);

        // Map to SVG coordinates
        const svgX = mapPhysicsToSVGX(x);
        const svgY = mapPhysicsToSVGY(y);

        // Update projectile position
        projectile.setAttribute('cx', svgX);
        projectile.setAttribute('cy', svgY);

        // Update path
        pathData += ` L ${svgX} ${svgY}`;
        projectilePath.setAttribute('d', pathData);

        // Update labels
        timeLabel.textContent = `Time: ${currentPhysicsTime.toFixed(1)} s`;
        rangeLabel.textContent = `Range: ${x.toFixed(1)} m`;
        heightLabel.textContent = `Max Height: ${maxCalculatedHeight.toFixed(1)} m`; // Max height is calculated once

        // Check if projectile has hit the ground or gone off screen
        if (svgY >= GROUND_Y_SVG || svgX >= projectileMotionSVG.width.baseVal.value + 50) { // +50 to allow it to go slightly off
            stopAnimation();
            projectile.setAttribute('cy', GROUND_Y_SVG); // Snap to ground
            animationExplanation.innerHTML = `<p>Projectile landed! Adjust values and launch again.</p>`;
            enableButtons();
        } else {
            animationFrameId = requestAnimationFrame(animate);
        }
    }

    function launchProjectile() {
        stopAnimation(); // Stop any previous animation

        const initialVelocity = parseFloat(initialVelocityInput.value);
        const launchAngleDeg = parseFloat(launchAngleInput.value);

        if (isNaN(initialVelocity) || isNaN(launchAngleDeg) || initialVelocity <= 0) {
            animationExplanation.innerHTML = `<p style="color: red;">Please enter valid positive numbers for velocity and angle (0-90).</p>`;
            return;
        }

        // Convert angle to radians
        const launchAngleRad = launchAngleDeg * Math.PI / 180;

        // Calculate initial velocity components
        initialVx = initialVelocity * Math.cos(launchAngleRad);
        initialVy = initialVelocity * Math.sin(launchAngleRad);

        // Calculate theoretical max height (occurs when Vy = 0)
        const timeToPeak = initialVy / G;
        maxCalculatedHeight = (initialVy * timeToPeak) - (0.5 * G * timeToPeak * timeToPeak);
        if (maxCalculatedHeight < 0) maxCalculatedHeight = 0; // Ensure it's not negative if angle is 0

        // Reset animation state
        startTime = 0;
        currentPhysicsTime = 0;
        pathData = `M ${LAUNCH_X_SVG} ${GROUND_Y_SVG}`; // Reset path to launch point
        projectilePath.setAttribute('d', pathData);
        projectile.setAttribute('cx', LAUNCH_X_SVG);
        projectile.setAttribute('cy', GROUND_Y_SVG);
        timeLabel.textContent = `Time: 0.0 s`;
        rangeLabel.textContent = `Range: 0.0 m`;
        heightLabel.textContent = `Max Height: ${maxCalculatedHeight.toFixed(1)} m`; // Display initial max height
        animationExplanation.innerHTML = `<p>Launching projectile...</p>`;

        disableButtons();
        animationFrameId = requestAnimationFrame(animate);
    }

    function stopAnimation() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    }

    function resetSimulation() {
        stopAnimation();
        initialVelocityInput.value = "30";
        launchAngleInput.value = "45";
        currentPhysicsTime = 0;
        maxCalculatedHeight = 0;
        pathData = `M ${LAUNCH_X_SVG} ${GROUND_Y_SVG}`;
        projectilePath.setAttribute('d', pathData);
        projectile.setAttribute('cx', LAUNCH_X_SVG);
        projectile.setAttribute('cy', GROUND_Y_SVG);
        timeLabel.textContent = `Time: 0.0 s`;
        rangeLabel.textContent = `Range: 0.0 m`;
        heightLabel.textContent = `Max Height: 0.0 m`;
        animationExplanation.innerHTML = `<p>Enter initial velocity and launch angle, then click "Launch" to simulate projectile motion!</p>`;
        enableButtons();
    }

    function disableButtons() {
        launchBtn.disabled = true;
        resetBtn.disabled = true;
        initialVelocityInput.disabled = true;
        launchAngleInput.disabled = true;
    }

    function enableButtons() {
        launchBtn.disabled = false;
        resetBtn.disabled = false;
        initialVelocityInput.disabled = false;
        launchAngleInput.disabled = false;
    }

    // Event Listeners
    launchBtn.addEventListener('click', launchProjectile);
    resetBtn.addEventListener('click', resetSimulation);

    // Initial setup
    resetSimulation(); // Set initial state on page load
});