document.addEventListener('DOMContentLoaded', () => {
    console.log('velocity-time-graph-animator.js loaded and DOMContentLoaded fired.');

    const svgCanvas = document.getElementById('velocityTimeGraphCanvas');
    if (!svgCanvas) {
        console.error('SVG element with ID "velocityTimeGraphCanvas" not found. Script cannot proceed.');
        return;
    }

    const motionTypeSelect = document.getElementById('motionTypeSelect');
    const calculationOverlaySelect = document.getElementById('calculationOverlaySelect');
    const accelerationValueDisplay = document.getElementById('accelerationValue');
    const displacementValueDisplay = document.getElementById('displacementValue');
    const resetVTGraphButton = document.getElementById('resetVTGraphButton');

    // Get references to SVG elements for the graph line and overlays
    const vtGraphLine = document.getElementById('vtGraphLine');

    const slopeOverlayGroup = document.getElementById('slopeOverlayGroup');
    const slopeHorizontalLine = document.getElementById('slopeHorizontalLine');
    const slopeVerticalLine = document.getElementById('slopeVerticalLine');
    const slopeHypotenuse = document.getElementById('slopeHypotenuse');
    const deltaTLabel = document.getElementById('deltaTLabel');
    const deltaVLabel = document.getElementById('deltaVLabel');

    const areaOverlayGroup = document.getElementById('areaOverlayGroup');
    const areaPathSvg = document.getElementById('areaPath');

    // References to existing static SVG axis labels and lines (if needed for dynamic adjustment)
    const xAxisLine = svgCanvas.querySelector('line[y1="200"][y2="200"]');
    const yAxisLine = svgCanvas.querySelector('line[x1="50"][x2="50"]');
    const timeAxisLabel = svgCanvas.querySelector('text[x="300"][y="220"]');
    const velocityAxisLabel = svgCanvas.querySelector('text[transform*="rotate(-90"]');

    // Assuming viewBox is 600x350
    const SVG_WIDTH = 600; // Fixed width from viewBox
    const SVG_HEIGHT = 350; // Fixed height from viewBox

    // Graph Parameters (now relative to SVG coordinates directly)
    const MAX_TIME = 10; // seconds
    const MIN_VELOCITY = -20; // m/s
    const MAX_VELOCITY = 20; // m/s
    const ORIGIN_X = 50; // X-coordinate of graph origin in SVG
    const ORIGIN_Y = 200; // Y-coordinate of graph origin (0 velocity) in SVG

    // Scale factors: pixels per unit
    const X_SCALE = (550 - ORIGIN_X) / MAX_TIME; // SVG width for time axis / max time
    const Y_SCALE = (ORIGIN_Y - 50) / MAX_VELOCITY; // SVG height for positive velocity / max velocity (50 is top y-axis bound)

    let currentMotionType = 'constantVelocity';
    let showSlopeOverlay = false;
    let showAreaOverlay = false;
    let currentMotionPoints = [];

    const motionPaths = {
        constantVelocity: [
            { time: 0, velocity: 10 },
            { time: 10, velocity: 10 }
        ],
        constantPositiveAcc: [
            { time: 0, velocity: -10 },
            { time: 10, velocity: 10 }
        ],
        constantNegativeAcc: [
            { time: 0, velocity: 10 },
            { time: 10, velocity: -10 }
        ],
        multiSegment: [
            { time: 0, velocity: 0 },
            { time: 3, velocity: 15 },
            { time: 7, velocity: 15 },
            { time: 10, velocity: 0 }
        ]
    };

    // Enhanced check for essential elements
    if (!svgCanvas || !motionTypeSelect || !calculationOverlaySelect || !accelerationValueDisplay || !displacementValueDisplay || !resetVTGraphButton || !vtGraphLine || !slopeOverlayGroup || !areaOverlayGroup || !slopeHorizontalLine || !slopeVerticalLine || !slopeHypotenuse || !deltaTLabel || !deltaVLabel || !areaPathSvg) {
        console.error('One or more essential HTML/SVG elements for the Velocity-Time Graph Animator were NOT found. Script cannot proceed.');
        const missingElements = [];
        if (!svgCanvas) missingElements.push('svgCanvas');
        if (!motionTypeSelect) missingElements.push('motionTypeSelect');
        if (!calculationOverlaySelect) missingElements.push('calculationOverlaySelect');
        if (!accelerationValueDisplay) missingElements.push('accelerationValueDisplay');
        if (!displacementValueDisplay) missingElements.push('displacementValueDisplay');
        if (!resetVTGraphButton) missingElements.push('resetVTGraphButton');
        if (!vtGraphLine) missingElements.push('vtGraphLine');
        if (!slopeOverlayGroup) missingElements.push('slopeOverlayGroup');
        if (!areaOverlayGroup) missingElements.push('areaOverlayGroup');
        if (!slopeHorizontalLine) missingElements.push('slopeHorizontalLine');
        if (!slopeVerticalLine) missingElements.push('slopeVerticalLine');
        if (!slopeHypotenuse) missingElements.push('slopeHypotenuse');
        if (!deltaTLabel) missingElements.push('deltaTLabel');
        if (!deltaVLabel) missingElements.push('deltaVLabel');
        if (!areaPathSvg) missingElements.push('areaPathSvg');
        
        console.error('Missing elements:', missingElements.join(', '));

        const errorDiv = document.createElement('div');
        errorDiv.style.color = 'red';
        errorDiv.style.fontWeight = 'bold';
        errorDiv.textContent = 'Error: Interactive elements not found. Check browser console for details.';
        const animatorContainer = document.querySelector('.animator-container');
        if (animatorContainer) {
            animatorContainer.appendChild(errorDiv);
        } else {
            document.body.appendChild(errorDiv);
        }
        return;
    }


    // Function to update the main graph line (SVG path)
    function updateGraphLine() {
        if (currentMotionPoints.length === 0) {
            vtGraphLine.setAttribute('d', ''); // Clear path if no points
            return;
        }

        let pathData = `M ${ORIGIN_X + currentMotionPoints[0].time * X_SCALE} ${ORIGIN_Y - currentMotionPoints[0].velocity * Y_SCALE}`;
        for (let i = 1; i < currentMotionPoints.length; i++) {
            const x = ORIGIN_X + currentMotionPoints[i].time * X_SCALE;
            const y = ORIGIN_Y - currentMotionPoints[i].velocity * Y_SCALE;
            pathData += ` L ${x} ${y}`;
        }
        vtGraphLine.setAttribute('d', pathData);
        console.log(`Graph line updated for type: ${currentMotionType}`);
    }

    // Function to update the slope overlay (SVG lines and text)
    function updateSlopeOverlay() {
        if (!showSlopeOverlay) {
            slopeOverlayGroup.setAttribute('opacity', 0); // Hide the entire group
            return;
        }
        slopeOverlayGroup.setAttribute('opacity', 1); // Show the group

        let p1, p2;
        let segmentFound = false;
        for (let i = 0; i < currentMotionPoints.length - 1; i++) {
            const tempP1 = currentMotionPoints[i];
            const tempP2 = currentMotionPoints[i + 1];
            if ((tempP2.time - tempP1.time) > 0) { // Ensure deltaT is positive
                p1 = tempP1;
                p2 = tempP2;
                segmentFound = true;
                break;
            }
        }
        if (!segmentFound && currentMotionPoints.length >= 2) {
             p1 = currentMotionPoints[0];
             p2 = currentMotionPoints[1];
        } else if (!segmentFound) {
             console.warn("Could not find a suitable segment for slope calculation.");
             slopeOverlayGroup.setAttribute('opacity', 0);
             accelerationValueDisplay.textContent = `--- m/s²`;
             return;
        }

        const x1 = ORIGIN_X + p1.time * X_SCALE;
        const y1 = ORIGIN_Y - p1.velocity * Y_SCALE;
        const x2 = ORIGIN_X + p2.time * X_SCALE;
        const y2 = ORIGIN_Y - p2.velocity * Y_SCALE;

        slopeHorizontalLine.setAttribute('x1', x1);
        slopeHorizontalLine.setAttribute('y1', y1);
        slopeHorizontalLine.setAttribute('x2', x2);
        slopeHorizontalLine.setAttribute('y2', y1);

        slopeVerticalLine.setAttribute('x1', x2);
        slopeVerticalLine.setAttribute('y1', y1);
        slopeVerticalLine.setAttribute('x2', x2);
        slopeVerticalLine.setAttribute('y2', y2);

        slopeHypotenuse.setAttribute('d', `M ${x1} ${y1} L ${x2} ${y2}`);

        const deltaV = p2.velocity - p1.velocity;
        const deltaT = p2.time - p1.time;
        const acceleration = (deltaT === 0) ? 0 : (deltaV / deltaT);

        deltaTLabel.textContent = `Δt = ${deltaT.toFixed(1)}s`;
        deltaTLabel.setAttribute('x', (x1 + x2) / 2 - (deltaTLabel.getComputedTextLength() / 2));
        deltaTLabel.setAttribute('y', y1 + 20);

        deltaVLabel.textContent = `Δv = ${deltaV.toFixed(1)}m/s`;
        deltaVLabel.setAttribute('x', x2 + 10);
        deltaVLabel.setAttribute('y', (y1 + y2) / 2 + 5);

        accelerationValueDisplay.textContent = `${acceleration.toFixed(2)} m/s²`;
        console.log(`Slope overlay updated. Accel: ${acceleration.toFixed(2)} m/s²`);
    }

    // Function to update the area overlay (SVG path)
    function updateAreaOverlay() {
        if (!showAreaOverlay) {
            areaOverlayGroup.setAttribute('opacity', 0); // Hide the entire group
            return;
        }
        areaOverlayGroup.setAttribute('opacity', 1); // Show the group

        let totalDisplacement = 0;
        let areaPathData = `M ${ORIGIN_X} ${ORIGIN_Y}`; // Start at graph origin

        // Build path data for the area shape
        for (let i = 0; i < currentMotionPoints.length; i++) {
            const x = ORIGIN_X + currentMotionPoints[i].time * X_SCALE;
            const y = ORIGIN_Y - currentMotionPoints[i].velocity * Y_SCALE;
            areaPathData += ` L ${x} ${y}`;
        }

        // Close the path by returning to the x-axis
        if (currentMotionPoints.length > 0) {
            areaPathData += ` L ${ORIGIN_X + currentMotionPoints[currentMotionPoints.length - 1].time * X_SCALE} ${ORIGIN_Y} Z`;
        } else {
             areaPathData = ''; // No path if no points
        }
        
        areaPathSvg.setAttribute('d', areaPathData);

        // Calculate total displacement
        for (let i = 0; i < currentMotionPoints.length - 1; i++) {
            const p1 = currentMotionPoints[i];
            const p2 = currentMotionPoints[i + 1];
            const base = p2.time - p1.time;
            const segmentArea = 0.5 * (p1.velocity + p2.velocity) * base;
            totalDisplacement += segmentArea;
        }

        displacementValueDisplay.textContent = `${totalDisplacement.toFixed(2)} m`;
        accelerationValueDisplay.textContent = `--- m/s²`; // Clear acceleration when showing area
        console.log(`Area overlay updated. Disp: ${totalDisplacement.toFixed(2)} m`);
    }

    // Main redraw function
    function redrawVisuals() {
        console.log('redrawVisuals called.');
        updateGraphLine();
        updateSlopeOverlay();
        updateAreaOverlay();
    }

    // Resets all visual overlays and values to initial state
    function resetVisual() {
        console.log('resetVisual called.');
        showSlopeOverlay = false;
        showAreaOverlay = false;
        
        accelerationValueDisplay.textContent = `--- m/s²`;
        displacementValueDisplay.textContent = `--- m`;

        slopeOverlayGroup.setAttribute('opacity', 0);
        areaOverlayGroup.setAttribute('opacity', 0);

        // Reset dropdowns to initial states (if not already there)
        motionTypeSelect.value = 'constantVelocity';
        calculationOverlaySelect.value = 'none';

        // Update motion type to reset the graph and then redraw all
        updateMotionType(motionTypeSelect.value); // This call triggers redrawVisuals internally
    }

    // Updates the current motion type and redraws the graph
    function updateMotionType(type) {
        console.log(`updateMotionType called with type: ${type}`);
        currentMotionType = type;
        currentMotionPoints = motionPaths[currentMotionType].slice(); // Use slice to copy array
        redrawVisuals();
    }

    // Updates which calculation overlay is shown
    function updateCalculationOverlay(overlayType) {
        console.log(`updateCalculationOverlay called with type: ${overlayType}`);
        showSlopeOverlay = (overlayType === 'slope');
        showAreaOverlay = (overlayType === 'area');
        
        // Reset HTML display values if overlays are turned off
        if (!showSlopeOverlay) accelerationValueDisplay.textContent = `--- m/s²`;
        if (!showAreaOverlay) displacementValueDisplay.textContent = `--- m`;

        redrawVisuals();
    }


    // --- Event Listeners ---
    motionTypeSelect.addEventListener('change', (event) => {
        console.log('Motion Type selected: ' + event.target.value);
        updateMotionType(event.target.value);
        // Also reset calculation overlay when motion type changes for clarity
        calculationOverlaySelect.value = 'none';
        updateCalculationOverlay('none');
    });

    calculationOverlaySelect.addEventListener('change', (event) => {
        console.log('Calculation Overlay selected: ' + event.target.value);
        updateCalculationOverlay(event.target.value);
    });

    resetVTGraphButton.addEventListener('click', () => {
        console.log('Reset Visual button clicked.');
        resetVisual();
    });

    // Initial setup
    // Set initial dropdown values and trigger their updates
    motionTypeSelect.value = 'constantVelocity'; // Ensure the dropdown reflects the initial state
    calculationOverlaySelect.value = 'none';
    
    updateMotionType(motionTypeSelect.value); // This will call redrawVisuals initially
});
