document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const vectorDirectionSVG = document.getElementById('vectorDirectionSVG');
    const mainVector = document.getElementById('mainVector');
    const vectorMagnitudeLabel = document.getElementById('vectorMagnitudeLabel');
    const xDirectionVectorGroup = document.getElementById('xDirectionVectorGroup');
    const angleRepresentation = document.getElementById('angleRepresentation');
    const angleArc = document.getElementById('angleArc');
    const angleLabel = document.getElementById('angleLabel');
    const componentRepresentation = document.getElementById('componentRepresentation');
    const animationExplanation = document.getElementById('animationExplanation');

    // Get references to control buttons
    const prevStepBtn = document.getElementById('prevStep');
    const nextStepBtn = document.getElementById('nextStep');
    const resetBtn = document.getElementById('resetAnimation');

    // Check if all essential elements are found
    if (!vectorDirectionSVG || !mainVector || !vectorMagnitudeLabel || !xDirectionVectorGroup || !angleRepresentation || !angleArc || !angleLabel || !componentRepresentation || !animationExplanation || !prevStepBtn || !nextStepBtn || !resetBtn) {
        console.error('One or more essential elements for the Vector Direction Animator were not found. Script cannot proceed.');
        return;
    }

    // Define SVG coordinates for the main vector (Origin at 350,125)
    const originX = 350;
    const originY = 125;
    const vectorEndX = 450; // X-coordinate of vector end
    const vectorEndY = 50;  // Y-coordinate of vector end (Y decreases upwards in SVG)

    // Calculate vector components and angle for the main vector
    const deltaX = vectorEndX - originX;
    const deltaY = originY - vectorEndY; // Positive deltaY for upward movement in Cartesian
    const angleRad = Math.atan2(deltaY, deltaX); // Angle in radians from positive X-axis

    // Function to draw the arc for the angle
    function drawAngleArc(radius, angleRad) {
        const startXArc = originX + radius;
        const startYArc = originY;

        const endXArc = originX + radius * Math.cos(angleRad);
        const endYArc = originY - radius * Math.sin(angleRad); // SVG Y is inverted

        // For angles in Q1 (0 to 90 degrees), largeArcFlag is 0, sweepFlag is 1 (counter-clockwise)
        const largeArcFlag = 0;
        const sweepFlag = 1;

        // Construct the SVG path data for the arc
        const pathData = `M ${startXArc} ${startYArc} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endXArc} ${endYArc}`;
        angleArc.setAttribute('d', pathData);

        // Position the angle label (adjust as needed for visual appeal)
        const labelRadius = radius * 0.7; // Place label closer to origin
        angleLabel.setAttribute('x', originX + labelRadius * Math.cos(angleRad / 2));
        angleLabel.setAttribute('y', originY - labelRadius * Math.sin(angleRad / 2) - 5); // Adjust Y slightly for text
    }

    // Define animation steps and their explanations
    const steps = [
        { // Step 0: Initial state - Basic Vector (Main Vector)
            elementsToShow: [mainVector, vectorMagnitudeLabel],
            elementsToHide: [xDirectionVectorGroup, angleRepresentation, componentRepresentation],
            explanation: "A vector has both magnitude (size) and direction. Here's our vector 'V'."
        },
        { // Step 1: Positive/Negative Axes (Specific +X example)
            elementsToShow: [xDirectionVectorGroup], // Show the +X vector
            elementsToHide: [mainVector, vectorMagnitudeLabel, angleRepresentation, componentRepresentation],
            explanation: "Direction can be described using positive (+) and negative (-) directions along the X and Y axes. This vector points in the **+X direction**."
        },
        { // Step 2: Angle from Positive X-axis (Main Vector + Angle)
            elementsToShow: [mainVector, vectorMagnitudeLabel, angleRepresentation],
            elementsToHide: [xDirectionVectorGroup, componentRepresentation],
            explanation: "We can also represent direction as an angle ($\\theta$) measured counter-clockwise from the positive X-axis."
        },
        { // Step 3: Components (Main Vector + Components)
            elementsToShow: [mainVector, vectorMagnitudeLabel, componentRepresentation],
            elementsToHide: [xDirectionVectorGroup, angleRepresentation],
            explanation: "Finally, we can break a vector into its X and Y components. These describe its movement along each axis."
        }
    ];

    let currentStep = 0; // Tracks the current step of the animation

    // Function to update the animation based on the current step
    function updateAnimation() {
        // Hide all specific step elements first
        mainVector.style.opacity = 0;
        vectorMagnitudeLabel.style.opacity = 0;
        xDirectionVectorGroup.style.opacity = 0;
        angleRepresentation.style.opacity = 0;
        componentRepresentation.style.opacity = 0;

        // Show elements for the current step
        steps[currentStep].elementsToShow.forEach(el => {
            el.style.opacity = 1;
        });

        // Hide elements not needed for the current step
        steps[currentStep].elementsToHide.forEach(el => {
            el.style.opacity = 0;
        });

        // Specific actions for steps
        if (currentStep === 2) { // Angle step
            drawAngleArc(50, angleRad); // Draw arc with radius 50
        }

        // Update explanation text (using innerHTML to allow MathJax rendering)
        animationExplanation.innerHTML = `<p>${steps[currentStep].explanation}</p>`;

        // Trigger MathJax re-render if needed (for the angle symbol)
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
            MathJax.typesetPromise([animationExplanation]).catch((err) => console.log('MathJax typeset failed: ' + err.message));
        }

        // Update button states
        prevStepBtn.disabled = currentStep === 0;
        nextStepBtn.disabled = currentStep === steps.length - 1;
    }

    // Event Listeners
    nextStepBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateAnimation();
        }
    });

    prevStepBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateAnimation();
        }
    });

    resetBtn.addEventListener('click', () => {
        currentStep = 0;
        updateAnimation();
    });

    // Initial setup
    updateAnimation();
});