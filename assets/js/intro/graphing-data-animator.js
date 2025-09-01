// assets/js/intro/graphing-data-animator.js

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const svg = document.getElementById('graphingDataSVG');
    if (!svg) {
        console.error('SVG element with ID "graphingDataSVG" not found.');
        return;
    }

    // Get references to interactive elements
    const relationshipSelect = document.getElementById('relationshipSelect');
    // Removed resetGraphBtn as it's no longer in HTML

    // Get references to SVG elements for the graph
    const graphPath = document.getElementById('graphPath');
    const graphArea = svg.querySelector('rect'); // The background rect of the graph area
    const xAxis = svg.querySelector('line[x1="50"][y1="300"]'); // X-axis line
    const yAxis = svg.querySelector('line[x1="50"][y1="50"]'); // Y-axis line
    const xAxisLabel = svg.querySelector('text[x="350"][y="320"]'); // X-axis label
    const yAxisLabel = svg.querySelector('text[x="20"][y="175"]'); // Y-axis label
    const originLabel = svg.querySelector('text[x="40"][y="315"]'); // Origin label

    // --- Constants and Initial State ---
    const MARGIN_LEFT = 50;
    const MARGIN_BOTTOM = 50;
    const MARGIN_TOP = 50;
    const MARGIN_RIGHT = 50;

    let currentRelationship = relationshipSelect.value;

    // Dynamic graph dimensions based on SVG viewBox
    let graphWidth;
    let graphHeight;
    let xMin = 0, xMax = 10; // Default data range for X
    let yMin = 0, yMax = 10; // Default data range for Y (will be adjusted dynamically)

    // --- Helper Functions ---

    /**
     * Updates the explanation text.
     * @param {string} text - The new explanation text.
     */
    function updateExplanation(text) {
        document.getElementById('animationExplanation').querySelector('p').textContent = text;
    }

    /**
     * Maps a data x-value to an SVG x-coordinate.
     * @param {number} x - Data x-value.
     * @returns {number} SVG x-coordinate.
     */
    function mapXToSvg(x) {
        return MARGIN_LEFT + (x - xMin) / (xMax - xMin) * graphWidth;
    }

    /**
     * Maps a data y-value to an SVG y-coordinate (inverted for SVG).
     * @param {number} y - Data y-value.
     * @returns {number} SVG y-coordinate.
     */
    function mapYToSvg(y) {
        return (MARGIN_TOP + graphHeight) - (y - yMin) / (yMax - yMin) * graphHeight;
    }

    /**
     * Calculates the y-value for a given x based on the selected relationship.
     * Coefficients are now fixed for simplicity.
     * @param {number} x - Independent variable value.
     * @returns {number} Dependent variable value.
     */
    function calculateY(x) {
        switch (currentRelationship) {
            case 'linear':
                // y = x
                return x;
            case 'quadratic':
                // y = 0.5 * x^2
                return 0.5 * x * x;
            case 'inverse':
                // y = 10 / x
                // Handle x near zero for inverse relationship to prevent extreme values
                if (x < 0.1 && x > -0.1) { // If x is very close to zero
                    if (x >= 0) return 10 / 0.1; // Cap value for small positive x
                    else return 10 / -0.1; // Cap value for small negative x
                }
                return 10 / x;
            default:
                return 0;
        }
    }

    /**
     * Updates the graph based on current parameters.
     */
    function updateGraph() {
        // Get current SVG viewBox dimensions
        const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
        const svgWidth = viewBox[2];
        const svgHeight = viewBox[3];

        graphWidth = svgWidth - MARGIN_LEFT - MARGIN_RIGHT;
        graphHeight = svgHeight - MARGIN_TOP - MARGIN_BOTTOM;

        // Update graph area and axis positions based on new dimensions
        graphArea.setAttribute('x', MARGIN_LEFT);
        graphArea.setAttribute('y', MARGIN_TOP);
        graphArea.setAttribute('width', graphWidth);
        graphArea.setAttribute('height', graphHeight);

        xAxis.setAttribute('x1', MARGIN_LEFT);
        xAxis.setAttribute('y1', MARGIN_TOP + graphHeight);
        xAxis.setAttribute('x2', MARGIN_LEFT + graphWidth);
        xAxis.setAttribute('y2', MARGIN_TOP + graphHeight);

        yAxis.setAttribute('x1', MARGIN_LEFT);
        yAxis.setAttribute('y1', MARGIN_TOP);
        yAxis.setAttribute('x2', MARGIN_LEFT);
        yAxis.setAttribute('y2', MARGIN_TOP + graphHeight);

        xAxisLabel.setAttribute('x', MARGIN_LEFT + graphWidth / 2);
        xAxisLabel.setAttribute('y', MARGIN_TOP + graphHeight + 30); // Adjust label position

        yAxisLabel.setAttribute('x', MARGIN_LEFT - 20); // Adjust label position
        yAxisLabel.setAttribute('y', MARGIN_TOP + graphHeight / 2);
        yAxisLabel.setAttribute('transform', `rotate(-90 ${MARGIN_LEFT - 20} ${MARGIN_TOP + graphHeight / 2})`);

        originLabel.setAttribute('x', MARGIN_LEFT - 10);
        originLabel.setAttribute('y', MARGIN_TOP + graphHeight + 15);

        // Adjust xMin/xMax based on relationship for better display
        if (currentRelationship === 'inverse') {
            xMin = 0.5; // Start x away from 0 for inverse (positive side)
            xMax = 10;
        } else {
            xMin = 0;
            xMax = 10;
        }

        // Calculate Y-axis range dynamically
        let points = [];
        const numPointsForRange = 100; // Sample points to determine range
        for (let i = 0; i <= numPointsForRange; i++) {
            const xData = xMin + (i / numPointsForRange) * (xMax - xMin);
            const yData = calculateY(xData);
            if (isFinite(yData)) { // Only consider finite values for range
                points.push(yData);
            }
        }

        // Set a default range if points array is empty or too narrow
        if (points.length === 0) {
            yMin = -5; yMax = 15; // Default fallback range
        } else {
            yMin = Math.min(...points);
            yMax = Math.max(...points);

            // Add padding to y-axis range
            const padding = (yMax - yMin) * 0.1; // 10% padding
            yMin -= padding;
            yMax += padding;

            // Ensure y-axis crosses 0 if range includes it
            if (yMin > 0 && yMax > 0) yMin = 0;
            if (yMin < 0 && yMax < 0) yMax = 0;

            // Ensure minimum range to avoid division by zero if yMin == yMax
            if (Math.abs(yMax - yMin) < 0.1) {
                yMin -= 0.5;
                yMax += 0.5;
            }
        }

        // Generate path data
        let pathData = '';
        const numSegments = 200; // More segments for smoother curves
        let lastPointValid = false;

        for (let i = 0; i <= numSegments; i++) {
            const xData = xMin + (i / numSegments) * (xMax - xMin);
            const yData = calculateY(xData);

            const svgX = mapXToSvg(xData);
            const svgY = mapYToSvg(yData);

            // Check if point is within reasonable visual bounds and is finite
            const isCurrentPointValid = isFinite(yData) && svgY >= MARGIN_TOP && svgY <= (MARGIN_TOP + graphHeight);

            if (isCurrentPointValid) {
                if (!lastPointValid) { // Start a new subpath if previous was invalid or this is the first point
                    pathData += `M ${svgX} ${svgY}`;
                } else {
                    pathData += ` L ${svgX} ${svgY}`;
                }
                lastPointValid = true;
            } else {
                lastPointValid = false; // Mark current point as invalid
            }
        }
        graphPath.setAttribute('d', pathData);
    }

    /**
     * Resets the graph to its initial state.
     * Since the reset button is removed, this function is only called on initial load
     * to set up the default state.
     */
    function resetGraph() {
        relationshipSelect.value = 'linear';
        currentRelationship = 'linear';
        updateGraph();
        updateExplanation("Choose a relationship type and see how the graph changes!");
    }

    // --- Event Listeners ---
    relationshipSelect.addEventListener('change', () => {
        currentRelationship = relationshipSelect.value;
        updateGraph();
    });

    // Removed resetGraphBtn.addEventListener('click', resetGraph); as the button is gone

    // Initial setup
    resetGraph(); // Call once to draw initial graph and set default state
    // Add a resize listener to make it truly responsive
    window.addEventListener('resize', updateGraph);
});
