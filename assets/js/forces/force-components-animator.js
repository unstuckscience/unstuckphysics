// assets/js/forces/force-components-animator.js

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const svg = document.getElementById('forceComponentsSVG');
    if (!svg) {
        console.error('SVG element with ID "forceComponentsSVG" not found.');
        return;
    }

    // Get references to interactive elements
    const forceMagnitudeInput = document.getElementById('forceMagnitudeInput');
    const forceAngleInput = document.getElementById('forceAngleInput');
    const resetVisualizationBtn = document.getElementById('resetVisualization');

    // Get references to SVG elements for the visualization
    const forceVector = document.getElementById('forceVector');
    const forceLabel = document.getElementById('forceLabel');
    const fxVector = document.getElementById('fxVector');
    const fxLabel = document.getElementById('fxLabel');
    const fyVector = document.getElementById('fyVector');
    const fyLabel = document.getElementById('fyLabel');
    const fxProjection = document.getElementById('fxProjection');
    const fyProjection = document.getElementById('fyProjection');
    const angleArc = document.getElementById('angleArc');
    const angleLabel = document.getElementById('angleLabel');

    // Get references to text displays
    const forceMagnitudeValueSpan = document.getElementById('forceMagnitudeValue');
    const forceAngleValueSpan = document.getElementById('forceAngleValue');
    const displayMagnitude = document.getElementById('displayMagnitude');
    const displayAngle = document.getElementById('displayAngle');
    const displayFx = document.getElementById('displayFx');
    const displayFy = document.getElementById('displayFy');
    const animationExplanation = document.getElementById('animationExplanation');

    // --- Constants and Initial State ---
    const ORIGIN_X = 350; // Center of the SVG for the origin (0,0)
    const ORIGIN_Y = 200; // Center of the SVG for the origin (0,0)
    const VECTOR_SCALE = 2; // Pixels per Newton for visual representation

    let currentMagnitude = parseFloat(forceMagnitudeInput.value);
    let currentAngle = parseFloat(forceAngleInput.value); // In degrees

    // --- Helper Functions ---

    /**
     * Converts degrees to radians.
     * @param {number} degrees - Angle in degrees.
     * @returns {number} Angle in radians.
     */
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    /**
     * Updates the explanation text.
     * @param {string} text - The new explanation text.
     */
    function updateExplanation(text) {
        animationExplanation.querySelector('p').textContent = text;
    }

    /**
     * Updates the visualization based on current magnitude and angle.
     */
    function updateVisualization() {
        const rad = toRadians(currentAngle);

        // Calculate components
        const fx = currentMagnitude * Math.cos(rad);
        const fy = currentMagnitude * Math.sin(rad);

        // --- Update Displays ---
        forceMagnitudeValueSpan.textContent = `${currentMagnitude.toFixed(0)} N`;
        forceAngleValueSpan.textContent = `${currentAngle.toFixed(0)}°`;
        displayMagnitude.textContent = `Magnitude: ${currentMagnitude.toFixed(1)} N`;
        displayAngle.textContent = `Angle: ${currentAngle.toFixed(0)}°`;
        displayFx.textContent = `Fx: ${fx.toFixed(1)} N`;
        displayFy.textContent = `Fy: ${fy.toFixed(1)} N`;

        // --- Update SVG Vectors ---
        const endX = ORIGIN_X + fx * VECTOR_SCALE;
        const endY = ORIGIN_Y - fy * VECTOR_SCALE; // Y-axis is inverted in SVG

        // Original Force Vector
        forceVector.setAttribute('x2', endX);
        forceVector.setAttribute('y2', endY);
        forceLabel.setAttribute('x', endX + (fx >= 0 ? 10 : -10)); // Offset label slightly from arrow tip
        forceLabel.setAttribute('y', endY + (fy >= 0 ? -10 : 10));

        // Horizontal (Fx) Component
        fxVector.setAttribute('x2', ORIGIN_X + fx * VECTOR_SCALE);
        fxVector.setAttribute('y2', ORIGIN_Y);
        fxLabel.setAttribute('x', ORIGIN_X + fx * VECTOR_SCALE / 2);
        fxLabel.setAttribute('y', ORIGIN_Y + (fx > 0 ? 20 : -10)); // Adjust label position for visibility

        // Vertical (Fy) Component
        fyVector.setAttribute('x2', ORIGIN_X);
        fyVector.setAttribute('y2', ORIGIN_Y - fy * VECTOR_SCALE);
        fyLabel.setAttribute('x', ORIGIN_X + (fy > 0 ? 20 : -10));
        fyLabel.setAttribute('y', ORIGIN_Y - fy * VECTOR_SCALE / 2);

        // Projection Lines (dashed)
        fxProjection.setAttribute('x1', endX);
        fxProjection.setAttribute('y1', ORIGIN_Y);
        fxProjection.setAttribute('x2', endX);
        fxProjection.setAttribute('y2', endY);

        fyProjection.setAttribute('x1', ORIGIN_X);
        fyProjection.setAttribute('y1', endY);
        fyProjection.setAttribute('x2', endX);
        fyProjection.setAttribute('y2', endY);

        // Hide components/projections if magnitude is zero
        const showComponents = currentMagnitude > 0;
        fxVector.style.opacity = showComponents ? 1 : 0;
        fxLabel.style.opacity = showComponents ? 1 : 0;
        fyVector.style.opacity = showComponents ? 1 : 0;
        fyLabel.style.opacity = showComponents ? 1 : 0;
        fxProjection.style.opacity = showComponents ? 1 : 0;
        fyProjection.style.opacity = showComponents ? 1 : 0;

        // Angle Arc
        if (currentMagnitude > 0) {
            angleArc.style.opacity = 1;
            angleLabel.style.opacity = 1;

            const radius = Math.min(Math.abs(fx), Math.abs(fy), 50); // Smaller radius for arc
            const startAngle = 0;
            const endAngle = currentAngle;

            // Arc path calculation (simplified for positive x-axis origin)
            // M starting point (ORIGIN_X + r, ORIGIN_Y)
            // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
            let pathData = `M ${ORIGIN_X + radius} ${ORIGIN_Y}`;
            pathData += ` A ${radius} ${radius} 0 0 ${endAngle < 0 ? 0 : 1} ${ORIGIN_X + radius * Math.cos(rad)} ${ORIGIN_Y - radius * Math.sin(rad)}`;
            angleArc.setAttribute('d', pathData);

            // Angle label position (halfway along the arc)
            const midAngleRad = toRadians(currentAngle / 2);
            angleLabel.setAttribute('x', ORIGIN_X + (radius + 15) * Math.cos(midAngleRad));
            angleLabel.setAttribute('y', ORIGIN_Y - (radius + 15) * Math.sin(midAngleRad));

        } else {
            angleArc.style.opacity = 0;
            angleLabel.style.opacity = 0;
        }
    }

    /**
     * Resets the visualization to its initial state.
     */
    function resetVisualization() {
        forceMagnitudeInput.value = 50;
        forceAngleInput.value = 30;
        currentMagnitude = 50;
        currentAngle = 30;
        updateVisualization();
        updateExplanation("Adjust the force's magnitude and angle to see its components dynamically change.");
    }

    // --- Event Listeners ---
    forceMagnitudeInput.addEventListener('input', () => {
        currentMagnitude = parseFloat(forceMagnitudeInput.value);
        updateVisualization();
    });

    forceAngleInput.addEventListener('input', () => {
        currentAngle = parseFloat(forceAngleInput.value);
        updateVisualization();
    });

    resetVisualizationBtn.addEventListener('click', resetVisualization);

    // Initial setup
    resetVisualization(); // Call once to set initial state
});
