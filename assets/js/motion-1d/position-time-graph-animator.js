// assets/js/motion-1d/position-time-graph-animator.js
// JavaScript for the Position-Time Graphs interactive.

document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const positionTimeGraphSVG = document.getElementById('positionTimeGraphSVG');
    const movingObject = document.getElementById('movingObject');
    const objectPositionLabel = document.getElementById('objectPositionLabel');
    const graphPath = document.getElementById('graphPath');
    const graphPoint = document.getElementById('graphPoint');
    const animationExplanation = document.getElementById('animationExplanation');

    // Get references to control buttons
    const prevExampleBtn = document.getElementById('prevExampleBtn');
    const nextExampleBtn = document.getElementById('nextExampleBtn');
    const resetAnimationBtn = document.getElementById('resetAnimation');

    // Check if all essential elements are found
    if (!positionTimeGraphSVG || !movingObject || !objectPositionLabel || !graphPath || !graphPoint || !animationExplanation || !prevExampleBtn || !nextExampleBtn || !resetAnimationBtn) {
        console.error('One or more essential elements for the Position-Time Graph Animator were not found. Script cannot proceed.');
        // Attempt to display an error message on the page if console is not available
        const errorDiv = document.createElement('div');
        errorDiv.style.color = 'red';
        errorDiv.style.fontWeight = 'bold';
        errorDiv.textContent = 'Error: Interactive elements not found. Please check your HTML and JavaScript IDs for Position-Time Graph Animator.';
        const animatorWrapper = document.querySelector('.animator-container'); // Try to find a generic animator wrapper
        if (animatorWrapper) {
            animatorWrapper.appendChild(errorDiv);
        } else {
            document.body.appendChild(errorDiv);
        }
        return;
    }

    // Animation state variables
    let currentExampleIndex = 0;
    let animationInterval;
    const totalTime = 10; // seconds for each animation segment
    const fps = 60;
    const frameDuration = 1000 / fps; // milliseconds per frame

    // Define motion scenarios
    const motionScenarios = [
        {
            name: "Object at Rest",
            description: "The object is not moving. Its position remains constant, resulting in a horizontal line on the graph.",
            motionFunction: (t) => 0, // Position always 0
            velocity: 0,
            graphColor: '#007bff'
        },
        {
            name: "Constant Positive Velocity",
            description: "The object moves at a steady speed in the positive direction. Its position increases linearly, creating a straight line with a positive slope on the graph.",
            motionFunction: (t) => t * 1, // Position increases linearly
            velocity: 1,
            graphColor: '#28a745'
        },
        {
            name: "Constant Negative Velocity",
            description: "The object moves at a steady speed in the negative direction. Its position decreases linearly, creating a straight line with a negative slope on the graph.",
            motionFunction: (t) => t * -1, // Position decreases linearly
            velocity: -1,
            graphColor: '#e67e22'
        },
        {
            name: "Constant Positive Acceleration (starts from rest)",
            description: "The object starts from rest and speeds up in the positive direction. Its position changes quadratically, resulting in an upward-curving line on the graph (parabolic).",
            motionFunction: (t) => 0.1 * t * t, // Position = 0.5 * a * t^2 (a = 0.2 m/s^2)
            velocity: null, // Variable velocity
            graphColor: '#6f42c1'
        },
        {
            name: "Constant Negative Acceleration (starts positive velocity)",
            description: "The object starts with positive velocity and slows down. Its position increases then decreases, resulting in a downward-curving line that eventually goes down.",
            motionFunction: (t) => (t * 2) - (0.1 * t * t), // Pos = v0*t - 0.5*a*t^2 (v0=2, a=0.2)
            velocity: null,
            graphColor: '#A00000'
        }
    ];

    // Helper to map object position (m) to SVG y-coordinate (pixels)
    // SVG Y: 175m is 0m, 100m is +10m, 250m is -10m
    const positionToSvgY = (position) => {
        // Map position -10 to +10 onto SVG y 250 to 100
        // (position - min_pos) / (max_pos - min_pos) = (svgY - min_svgY) / (max_svgY - min_svgY)
        // range of motion: -10 to 10. Max range is 20m.
        // range of SVG Y for motion: 100 to 250. Max range is 150px.
        // 0m maps to 175px (midpoint of 100 and 250)
        return 175 - (position * 7.5); // 150px / 20m = 7.5px/m
    };

    // Helper to map time (s) to SVG x-coordinate (pixels)
    // SVG X: 50px is 0s, 550px is 10s. Max range is 500px for 10s.
    const timeToSvgX = (time) => 50 + (time * 50); // 500px / 10s = 50px/s

    function animateScenario(scenarioIndex) {
        clearInterval(animationInterval); // Stop any existing animation
        const scenario = motionScenarios[scenarioIndex];
        animationExplanation.innerHTML = `<p class="font-bold">${scenario.name}:</p><p>${scenario.description}</p>`;

        let currentTime = 0;
        let pathData = `M ${timeToSvgX(0)} ${positionToSvgY(scenario.motionFunction(0))}`;

        // Reset object to initial position (0m at 0s)
        movingObject.setAttribute('cx', timeToSvgX(0)); // Object stays at its track position
        movingObject.setAttribute('cy', 50); // On the top track visual
        objectPositionLabel.setAttribute('x', timeToSvgX(0));
        objectPositionLabel.textContent = `Pos: 0m`;

        graphPoint.setAttribute('cx', timeToSvgX(0));
        graphPoint.setAttribute('cy', positionToSvgY(scenario.motionFunction(0)));

        graphPath.setAttribute('d', pathData);
        graphPath.setAttribute('stroke', scenario.graphColor);


        // Animation loop for current scenario
        animationInterval = setInterval(() => {
            currentTime += (frameDuration / 1000); // Increment time in seconds

            if (currentTime > totalTime) {
                currentTime = totalTime; // Cap at max time
                clearInterval(animationInterval); // Stop animation
            }

            const currentPosM = scenario.motionFunction(currentTime);
            const currentPosX = timeToSvgX(currentTime);
            const currentPosY = positionToSvgY(currentPosM);

            // Update path and point for graph
            pathData += ` L ${currentPosX} ${currentPosY}`;
            graphPath.setAttribute('d', pathData);
            graphPoint.setAttribute('cx', currentPosX);
            graphPoint.setAttribute('cy', currentPosY);

            // Update moving object on top track
            // The moving object's X position on the track reflects its actual position in meters
            // Track mapping: -10m (SVG x=50) to +10m (SVG x=550)
            const objectTrackX = 300 + (currentPosM * 25); // 500px range for 20m span (550-50 = 500, 10 - (-10) = 20. 500/20=25 px/m)
            movingObject.setAttribute('cx', objectTrackX);
            objectPositionLabel.setAttribute('x', objectTrackX);
            objectPositionLabel.textContent = `Pos: ${currentPosM.toFixed(1)}m`;

        }, frameDuration);
    }

    // Event Listeners for buttons
    prevExampleBtn.addEventListener('click', () => {
        currentExampleIndex = (currentExampleIndex - 1 + motionScenarios.length) % motionScenarios.length;
        animateScenario(currentExampleIndex);
    });

    nextExampleBtn.addEventListener('click', () => {
        currentExampleIndex = (currentExampleIndex + 1) % motionScenarios.length;
        animateScenario(currentExampleIndex);
    });

    resetAnimationBtn.addEventListener('click', () => {
        currentExampleIndex = 0; // Reset to the first scenario
        animateScenario(currentExampleIndex);
    });

    // Initial setup on page load
    animateScenario(currentExampleIndex);
});
