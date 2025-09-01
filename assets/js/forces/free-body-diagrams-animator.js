// assets/js/forces/free-body-diagrams-animator.js

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const svg = document.getElementById('fbdAnimatorSVG');
    if (!svg) {
        console.error('SVG element with ID "fbdAnimatorSVG" not found.');
        return;
    }

    // Get references to interactive elements
    const scenarioBoxOnTableBtn = document.getElementById('scenarioBoxOnTable');
    const scenarioBoxPulledBtn = document.getElementById('scenarioBoxPulled');
    const scenarioBoxOnRampBtn = document.getElementById('scenarioBoxOnRamp');
    const resetAnimationBtn = document.getElementById('resetAnimation');

    // Speed control buttons (added in animator_wrapper.html)
    const speedSlowBtn = document.getElementById('speedSlowBtn');
    const speedNormalBtn = document.getElementById('speedNormalBtn');
    const speedFastBtn = document.getElementById('speedFastBtn');

    // Get references to SVG elements for the FBD
    const fbdObject = document.getElementById('fbdObject');
    const xAxis = document.getElementById('xAxis');
    const yAxis = document.getElementById('yAxis');
    const forceGravity = document.getElementById('forceGravity');
    const labelGravity = document.getElementById('labelGravity');
    const forceNormal = document.getElementById('forceNormal');
    const labelNormal = document.getElementById('labelNormal');
    const forceApplied = document.getElementById('forceApplied');
    const labelApplied = document.getElementById('labelApplied');
    const forceFriction = document.getElementById('forceFriction');
    const labelFriction = document.getElementById('labelFriction');

    // Visual elements for ramp scenario
    const rampVisual = document.getElementById('rampVisual');
    const boxOnRampVisual = document.getElementById('boxOnRampVisual');
    const xAxisLabel = document.querySelector('#xAxis + text'); // +X label
    const yAxisLabel = document.querySelector('#yAxis + text'); // +Y label

    // Explanation text element
    const animationExplanation = document.getElementById('animationExplanation');

    // Initial state variables
    let animationSpeed = 1; // 1x normal speed

    // Initial positions for FBD object and forces (relative to SVG viewBox)
    const objectX = 350;
    const objectY = 125;
    const forceLength = 50; // Standard length for force vectors

    // Set initial position of the FBD object
    fbdObject.setAttribute('cx', objectX);
    fbdObject.setAttribute('cy', objectY);

    // --- Helper Functions ---

    /**
     * Sets the visibility (opacity) of an SVG element and its label.
     * @param {SVGElement} element - The SVG line element.
     * @param {SVGElement} label - The SVG text label element.
     * @param {number} opacity - The desired opacity (0 for hidden, 1 for visible).
     */
    function setForceVisibility(element, label, opacity) {
        if (element) element.style.opacity = opacity;
        if (label) label.style.opacity = opacity;
    }

    /**
     * Hides all force vectors and labels.
     */
    function hideAllForces() {
        setForceVisibility(forceGravity, labelGravity, 0);
        setForceVisibility(forceNormal, labelNormal, 0);
        setForceVisibility(forceApplied, labelApplied, 0);
        setForceVisibility(forceFriction, labelFriction, 0);
        if (xAxis) xAxis.style.opacity = 0;
        if (yAxis) yAxis.style.opacity = 0;
        if (xAxisLabel) xAxisLabel.style.opacity = 0;
        if (yAxisLabel) yAxisLabel.style.opacity = 0;
        if (rampVisual) rampVisual.style.opacity = 0;
        if (boxOnRampVisual) boxOnRampVisual.style.opacity = 0;
    }

    /**
     * Updates the explanation text.
     * @param {string} text - The new explanation text.
     */
    function updateExplanation(text) {
        animationExplanation.querySelector('p').textContent = text;
    }

    /**
     * Resets the animator to its initial state.
     */
    function resetAnimator() {
        hideAllForces();
        updateExplanation("Click a scenario button to see the forces acting on the object and build its free-body diagram!");

        // Reset FBD object position and rotation if it was moved/rotated for ramp
        fbdObject.setAttribute('cx', objectX);
        fbdObject.setAttribute('cy', objectY);
        fbdObject.removeAttribute('transform'); // Remove any rotation

        // Reset force vector positions/rotations to default (centered on object)
        // Gravity
        forceGravity.setAttribute('x1', objectX);
        forceGravity.setAttribute('y1', objectY);
        forceGravity.setAttribute('x2', objectX);
        forceGravity.setAttribute('y2', objectY + forceLength);
        labelGravity.setAttribute('x', objectX + 10);
        labelGravity.setAttribute('y', objectY + forceLength + 5);
        forceGravity.removeAttribute('transform');
        labelGravity.removeAttribute('transform');

        // Normal
        forceNormal.setAttribute('x1', objectX);
        forceNormal.setAttribute('y1', objectY);
        forceNormal.setAttribute('x2', objectX);
        forceNormal.setAttribute('y2', objectY - forceLength);
        labelNormal.setAttribute('x', objectX + 10);
        labelNormal.setAttribute('y', objectY - forceLength - 5);
        forceNormal.removeAttribute('transform');
        labelNormal.removeAttribute('transform');

        // Applied
        forceApplied.setAttribute('x1', objectX);
        forceApplied.setAttribute('y1', objectY);
        forceApplied.setAttribute('x2', objectX + forceLength);
        forceApplied.setAttribute('y2', objectY);
        labelApplied.setAttribute('x', objectX + forceLength + 10);
        labelApplied.setAttribute('y', objectY - 10);
        forceApplied.removeAttribute('transform');
        labelApplied.removeAttribute('transform');

        // Friction
        forceFriction.setAttribute('x1', objectX);
        forceFriction.setAttribute('y1', objectY);
        forceFriction.setAttribute('x2', objectX - forceLength);
        forceFriction.setAttribute('y2', objectY);
        labelFriction.setAttribute('x', objectX - forceLength - 10);
        labelFriction.setAttribute('y', objectY - 10);
        forceFriction.removeAttribute('transform');
        labelFriction.removeAttribute('transform');

        // Reset axis labels to default positions
        xAxis.setAttribute('x1', objectX);
        xAxis.setAttribute('x2', objectX + 100);
        xAxis.setAttribute('y1', objectY);
        xAxis.setAttribute('y2', objectY);
        yAxis.setAttribute('x1', objectX);
        yAxis.setAttribute('x2', objectX);
        yAxis.setAttribute('y1', objectY);
        yAxis.setAttribute('y2', objectY - 100);
        xAxis.removeAttribute('transform');
        yAxis.removeAttribute('transform');
        xAxisLabel.removeAttribute('transform');
        yAxisLabel.removeAttribute('transform');
        xAxisLabel.setAttribute('x', objectX + 105);
        xAxisLabel.setAttribute('y', objectY - 5);
        yAxisLabel.setAttribute('x', objectX + 5);
        yAxisLabel.setAttribute('y', objectY - 105);
    }

    /**
     * Animates the appearance of forces for a given scenario.
     * @param {Array<Array<SVGElement>>} forcesToShow - Array of [element, label] pairs to show.
     * @param {string} explanation - The explanation text for this scenario.
     * @param {boolean} showAxes - Whether to show coordinate axes.
     * @param {function} [transformFn] - Optional function to apply transformations (e.g., for ramp).
     */
    function animateForces(forcesToShow, explanation, showAxes = false, transformFn = null) {
        resetAnimator(); // Start from a clean slate
        updateExplanation(explanation);

        if (showAxes) {
            xAxis.style.opacity = 1;
            yAxis.style.opacity = 1;
            xAxisLabel.style.opacity = 1;
            yAxisLabel.style.opacity = 1;

            if (transformFn) {
                // Apply transformations to axes and labels if provided
                transformFn(xAxis, yAxis, xAxisLabel, yAxisLabel);
            }
        }

        let delay = 0;
        forcesToShow.forEach(([element, label]) => {
            setTimeout(() => {
                setForceVisibility(element, label, 1);
                if (transformFn) {
                    transformFn(element, label); // Apply transformations to force vectors and labels
                }
            }, delay * 500 / animationSpeed); // Adjust delay by animation speed
            delay++;
        });
    }

    // --- Scenario Functions ---

    function showBoxOnTable() {
        hideAllForces(); // Ensure all are hidden first
        animateForces(
            [
                [forceGravity, labelGravity],
                [forceNormal, labelNormal]
            ],
            "A box at rest on a table. Gravity pulls it down, and the normal force from the table pushes it up. These forces are balanced."
        );
    }

    function showBoxPulled() {
        hideAllForces(); // Ensure all are hidden first
        animateForces(
            [
                [forceGravity, labelGravity],
                [forceNormal, labelNormal],
                [forceApplied, labelApplied],
                [forceFriction, labelFriction] // Assume friction is present when pulled
            ],
            "A box being pulled horizontally across a surface. Applied force pulls it forward, friction opposes motion, and gravity/normal forces act vertically."
        );
    }

    function showBoxOnRamp() {
        hideAllForces();

        // Show ramp visual
        rampVisual.style.opacity = 1;
        boxOnRampVisual.style.opacity = 1;

        // Angle of the ramp (e.g., 30 degrees)
        const rampAngle = -30; // Negative for clockwise rotation in SVG

        // Rotate the object and coordinate system
        fbdObject.setAttribute('transform', `rotate(${rampAngle}, ${objectX}, ${objectY})`);

        // Function to apply rotation to elements
        const applyRotation = (element, label) => {
            if (element) {
                element.setAttribute('transform', `rotate(${rampAngle}, ${objectX}, ${objectY})`);
            }
            if (label) {
                // Adjust label position slightly after rotation for readability
                const currentX = parseFloat(label.getAttribute('x'));
                const currentY = parseFloat(label.getAttribute('y'));
                // Simple adjustment: rotate around object center and then offset
                const rotatedPoint = rotatePoint(currentX, currentY, objectX, objectY, rampAngle);
                label.setAttribute('x', rotatedPoint.x + (rampAngle === -30 ? -10 : 10)); // Adjust text offset
                label.setAttribute('y', rotatedPoint.y + (rampAngle === -30 ? 10 : -10)); // Adjust text offset
                label.setAttribute('transform', `rotate(${rampAngle}, ${rotatedPoint.x}, ${rotatedPoint.y})`);
            }
        };

        // Rotate axes and their labels
        xAxis.setAttribute('transform', `rotate(${rampAngle}, ${objectX}, ${objectY})`);
        yAxis.setAttribute('transform', `rotate(${rampAngle}, ${objectX}, ${objectY})`);

        // Need to manually adjust label positions for rotated axes
        // This is a simplified approach, for precise rotation, calculate new coordinates
        xAxisLabel.setAttribute('transform', `rotate(${rampAngle}, ${objectX + 105}, ${objectY - 5})`);
        yAxisLabel.setAttribute('transform', `rotate(${rampAngle}, ${objectX + 5}, ${objectY - 105})`);


        // Adjust force vector attributes for ramp
        // Gravity is always straight down, so its coordinates are fixed relative to SVG
        forceGravity.setAttribute('x1', objectX);
        forceGravity.setAttribute('y1', objectY);
        forceGravity.setAttribute('x2', objectX);
        forceGravity.setAttribute('y2', objectY + forceLength);
        labelGravity.setAttribute('x', objectX + 10);
        labelGravity.setAttribute('y', objectY + forceLength + 5);
        forceGravity.removeAttribute('transform'); // Gravity does not rotate with the ramp

        // Normal force is perpendicular to the ramp (along rotated Y-axis)
        forceNormal.setAttribute('x1', objectX);
        forceNormal.setAttribute('y1', objectY);
        forceNormal.setAttribute('x2', objectX);
        forceNormal.setAttribute('y2', objectY - forceLength); // Points along rotated Y
        labelNormal.setAttribute('x', objectX + 10);
        labelNormal.setAttribute('y', objectY - forceLength - 5);
        applyRotation(forceNormal, labelNormal); // Apply rotation to normal force

        // Friction force is parallel to the ramp (along rotated -X axis)
        forceFriction.setAttribute('x1', objectX);
        forceFriction.setAttribute('y1', objectY);
        forceFriction.setAttribute('x2', objectX - forceLength); // Points along rotated -X
        labelFriction.setAttribute('x', objectX - forceLength - 10);
        labelFriction.setAttribute('y', objectY - 10);
        applyRotation(forceFriction, labelFriction); // Apply rotation to friction force

        // Applied force (if any) would also be relative to ramp or horizontal
        // For simplicity, let's assume it's along the ramp for this scenario
        forceApplied.setAttribute('x1', objectX);
        forceApplied.setAttribute('y1', objectY);
        forceApplied.setAttribute('x2', objectX + forceLength); // Points along rotated +X
        labelApplied.setAttribute('x', objectX + forceLength + 10);
        labelApplied.setAttribute('y', objectY - 10);
        applyRotation(forceApplied, labelApplied); // Apply rotation to applied force

        // Animate forces specific to ramp
        animateForces(
            [
                [forceGravity, labelGravity],
                [forceNormal, labelNormal],
                [forceFriction, labelFriction] // Assuming friction for a box on a ramp
            ],
            "A box on an inclined ramp. Gravity acts straight down. Normal force is perpendicular to the ramp. Friction acts parallel to the ramp, opposing potential motion.",
            true, // Show axes
            (element, label) => {
                // This function is passed to animateForces to apply specific transformations
                // It will be called for each element/label pair being animated
                if (element === forceNormal || element === forceFriction || element === forceApplied) {
                    applyRotation(element, label);
                }
                // For axes, apply their rotation
                if (element === xAxis || element === yAxis) {
                     element.setAttribute('transform', `rotate(${rampAngle}, ${objectX}, ${objectY})`);
                }
                if (element === xAxisLabel) {
                    element.setAttribute('transform', `rotate(${rampAngle}, ${objectX + 105}, ${objectY - 5})`);
                }
                if (element === yAxisLabel) {
                    element.setAttribute('transform', `rotate(${rampAngle}, ${objectX + 5}, ${objectY - 105})`);
                }
            }
        );
    }

    // Helper for rotating points (used for label positioning)
    function rotatePoint(px, py, cx, cy, angle) {
        angle = angle * Math.PI / 180; // Convert to radians
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const nx = (cos * (px - cx)) + (sin * (py - cy)) + cx;
        const ny = (cos * (py - cy)) - (sin * (px - cx)) + cy;
        return { x: nx, y: ny };
    }


    // --- Event Listeners ---

    scenarioBoxOnTableBtn.addEventListener('click', showBoxOnTable);
    scenarioBoxPulledBtn.addEventListener('click', showBoxPulled);
    scenarioBoxOnRampBtn.addEventListener('click', showBoxOnRamp);
    resetAnimationBtn.addEventListener('click', resetAnimator);

    // Speed control event listeners
    speedSlowBtn.addEventListener('click', () => {
        animationSpeed = 0.5;
        updateExplanation(`Animation speed set to Slow (0.5x). ${animationExplanation.querySelector('p').textContent}`);
    });
    speedNormalBtn.addEventListener('click', () => {
        animationSpeed = 1;
        updateExplanation(`Animation speed set to Normal (1x). ${animationExplanation.querySelector('p').textContent}`);
    });
    speedFastBtn.addEventListener('click', () => {
        animationSpeed = 2;
        updateExplanation(`Animation speed set to Fast (2x). ${animationExplanation.querySelector('p').textContent}`);
    });

    // Initial setup
    resetAnimator();
});
