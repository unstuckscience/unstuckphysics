document.addEventListener('DOMContentLoaded', () => {
    const svg = document.getElementById('dimensionalAnalysisSVG');
    if (!svg) {
        console.error('SVG element with ID "dimensionalAnalysisSVG" not found.');
        return;
    }

    const equationSelect = document.getElementById('equationSelect');
    const equationDisplay = document.getElementById('equationDisplay');
    const leftDimDisplay = document.getElementById('leftDimDisplay');
    const rightDimDisplay = document.getElementById('rightDimDisplay');
    const consistencyMessage = document.getElementById('consistencyMessage');

    const dimensions = {
        'L': [1, 0, 0],
        'M': [0, 1, 0],
        'T': [0, 0, 1],
        'distance': [1, 0, 0],
        'time': [0, 0, 1],
        'velocity': [1, 0, -1],
        'acceleration': [1, 0, -2],
        'mass': [0, 1, 0]
    };

    const equations = {
        'velocity_correct': {
            equation_latex: '$v = \\frac{d}{t}$',
            left_side_dims: dimensions['velocity'],
            right_side_components: [
                { quantity: 'distance', power: 1 },
                { quantity: 'time', power: -1 }
            ]
        },
        'velocity_incorrect': {
            equation_latex: '$v = d \\times t$',
            left_side_dims: dimensions['velocity'],
            right_side_components: [
                { quantity: 'distance', power: 1 },
                { quantity: 'time', power: 1 }
            ]
        }
    };

    function calculateCombinedDimensions(components) {
        let combined = [0, 0, 0];
        components.forEach(comp => {
            const dim = dimensions[comp.quantity];
            if (dim) {
                combined[0] += dim[0] * comp.power;
                combined[1] += dim[1] * comp.power;
                combined[2] += dim[2] * comp.power;
            } else {
                console.warn(`Unknown quantity dimension: ${comp.quantity}`);
            }
        });
        return combined;
    }

    function formatDimensions(dimArray) {
        let numerator = [];
        let denominator = [];

        if (dimArray[0] !== 0) {
            if (dimArray[0] > 0) numerator.push(`L${dimArray[0] === 1 ? '' : `^{${dimArray[0]}}`}`);
            else denominator.push(`L${dimArray[0] === -1 ? '' : `^{${Math.abs(dimArray[0])}}`}`);
        }
        if (dimArray[1] !== 0) {
            if (dimArray[1] > 0) numerator.push(`M${dimArray[1] === 1 ? '' : `^{${dimArray[1]}}`}`);
            else denominator.push(`M${dimArray[1] === -1 ? '' : `^{${Math.abs(dimArray[1])}}`}`);
        }
        if (dimArray[2] !== 0) {
            if (dimArray[2] > 0) numerator.push(`T${dimArray[2] === 1 ? '' : `^{${dimArray[2]}}`}`);
            else denominator.push(`T${dimArray[2] === -1 ? '' : `^{${Math.abs(dimArray[2])}}`}`);
        }

        const numStr = numerator.length > 0 ? numerator.join('') : '1';
        const denStr = denominator.length > 0 ? denominator.join('') : '';

        if (denStr) {
            return `\\frac{${numStr}}{${denStr}}`;
        } else {
            return numStr;
        }
    }

    function updateDisplay() {
        const selectedEquationKey = equationSelect.value;
        const eq = equations[selectedEquationKey];

        if (!eq) {
            console.error('Selected equation not found:', selectedEquationKey);
            return;
        }

        equationDisplay.innerHTML = eq.equation_latex;

        const rightSideCalculatedDims = calculateCombinedDimensions(eq.right_side_components);
        const rightSideFormatted = formatDimensions(rightSideCalculatedDims);
        rightDimDisplay.innerHTML = `$${rightSideFormatted}$`;

        const leftSideFormatted = formatDimensions(eq.left_side_dims);
        leftDimDisplay.innerHTML = `$${leftSideFormatted}$`;

        const isConsistent = eq.left_side_dims[0] === rightSideCalculatedDims[0] &&
                             eq.left_side_dims[1] === rightSideCalculatedDims[1] &&
                             eq.left_side_dims[2] === rightSideCalculatedDims[2];

        if (isConsistent) {
            consistencyMessage.textContent = 'Dimensionally Consistent!';
            consistencyMessage.style.color = '#28a745';
        } else {
            consistencyMessage.textContent = 'Dimensionally INCONSISTENT!';
            consistencyMessage.style.color = '#dc3545';
        }

        if (typeof MathJax !== 'undefined') {
            MathJax.typesetPromise([
                equationDisplay,
                leftDimDisplay,
                rightDimDisplay
            ]);
        }
    }

    equationSelect.addEventListener('change', updateDisplay);

    if (typeof MathJax !== 'undefined') {
        MathJax.startup.promise.then(() => {
            updateDisplay();
        });
    } else {
        updateDisplay();
    }
});