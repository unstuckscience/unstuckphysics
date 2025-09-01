document.addEventListener('DOMContentLoaded', () => {
    console.log('kinematics-solver.js loaded and DOMContentLoaded fired.');

    const canvas = document.getElementById('kinematicsProblemCanvas');
    if (!canvas) {
        console.error('Canvas element with ID "kinematicsProblemCanvas" not found. Script cannot proceed.');
        return;
    }
    const ctx = canvas.getContext('2d');
    console.log('Canvas and context initialized.');

    const prevStepButton = document.getElementById('prevStepButton');
    const nextStepButton = document.getElementById('nextStepButton');
    const resetSolverButton = document.getElementById('resetSolverButton');
    const stepExplanationDisplay = document.getElementById('stepExplanation');
    const equationDisplay = document.getElementById('equationDisplay');
    const resultDisplay = document.getElementById('resultDisplay');

    // Log element existence
    console.log('Buttons:', { prevStepButton, nextStepButton, resetSolverButton });
    console.log('Displays:', { stepExplanationDisplay, equationDisplay, resultDisplay });

    // Problem Definition
    const problem = {
        question: "A car starts from rest and accelerates uniformly at 2.0 m/s² for 5.0 s. What is its final velocity?",
        knowns: {
            v0: { value: 0, unit: "m/s", label: "Initial Velocity (v₀)" }, // "starts from rest"
            a: { value: 2.0, unit: "m/s²", label: "Acceleration (a)" },
            t: { value: 5.0, unit: "s", label: "Time (t)" }
        },
        unknown: {
            symbol: "v",
            label: "Final Velocity (v)",
            unit: "m/s" // Correct unit definition
        },
        solution: null // Will be calculated
    };

    // Kinematic Equations (as strings for display)
    const equations = {
        v_v0_at: "v = v₀ + at",
        deltaX_v0t_halfat2: "Δx = v₀t + ½at²",
        v2_v02_2aDeltaX: "v² = v₀² + 2aΔx",
        deltaX_avgv_t: "Δx = ½(v₀ + v)t"
    };

    // Solution Steps
    const steps = [
        {
            explanation: "Let's identify what we know and what we need to find.",
            canvasDraw: (ctx, problem, currentStep) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = '20px Inter';
                ctx.fillStyle = '#333';
                ctx.textAlign = 'left';
                ctx.fillText("Knowns:", 50, 50);
                ctx.fillText("Unknown:", 350, 50);

                let y = 80;
                for (const key in problem.knowns) {
                    const known = problem.knowns[key];
                    ctx.fillStyle = '#0056b3'; // Blue for knowns
                    ctx.fillText(`${known.label}: ${known.value} ${known.unit}`, 70, y);
                    y += 30;
                }
                ctx.fillStyle = '#dc3545'; // Red for unknown
                ctx.fillText(`${problem.unknown.label}: ?`, 370, 80);
            },
            equation: "",
            result: ""
        },
        {
            explanation: "We need an equation that relates initial velocity ($v_0$), acceleration ($a$), time ($t$), and final velocity ($v$). The equation $v = v_0 + at$ is perfect for this.",
            canvasDraw: (ctx, problem, currentStep) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = '24px "Times New Roman", serif'; // For math
                ctx.fillStyle = '#28a745'; // Green for chosen equation
                ctx.textAlign = 'center';
                ctx.fillText(equations.v_v0_at, canvas.width / 2, canvas.height / 2);
            },
            equation: equations.v_v0_at,
            result: ""
        },
        {
            explanation: "Now, let's substitute the known values into the chosen equation.",
            canvasDraw: (ctx, problem, currentStep) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = '24px "Times New Roman", serif';
                ctx.fillStyle = '#333';
                ctx.textAlign = 'center';

                // Draw equation with placeholders
                ctx.fillText("v = v₀ + at", canvas.width / 2, canvas.height / 2 - 30);

                // Draw substituted values
                ctx.font = '24px "Times New Roman", serif';
                ctx.fillStyle = '#0056b3'; // Blue for substituted values
                ctx.fillText(`v = ${problem.knowns.v0.value} + (${problem.knowns.a.value})(${problem.knowns.t.value})`, canvas.width / 2, canvas.height / 2 + 30);
            },
            equation: `v = ${problem.knowns.v0.value} ${problem.knowns.v0.unit} + (${problem.knowns.a.value} ${problem.knowns.a.unit})(${problem.knowns.t.value} ${problem.knowns.t.unit})`,
            result: ""
        },
        {
            explanation: "Perform the calculation.",
            canvasDraw: (ctx, problem, currentStep) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = '24px "Times New Roman", serif';
                ctx.fillStyle = '#333';
                ctx.textAlign = 'center';

                // Show calculation
                ctx.fillText(`v = ${problem.knowns.v0.value} + ${problem.knowns.a.value * problem.knowns.t.value}`, canvas.width / 2, canvas.height / 2 - 30);
                ctx.fillText(`v = ${problem.knowns.v0.value + (problem.knowns.a.value * problem.knowns.t.value)}`, canvas.width / 2, canvas.height / 2 + 30);
            },
            equation: `v = ${problem.knowns.v0.value + (problem.knowns.a.value * problem.knowns.t.value)} m/s`,
            result: ""
        },
        {
            explanation: "The final velocity of the car is:",
            canvasDraw: (ctx, problem, currentStep) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = '36px Inter';
                ctx.fillStyle = '#28a745'; // Green for final answer
                ctx.textAlign = 'center';
                ctx.fillText(`v = ${problem.solution} ${problem.unknown.unit}`, canvas.width / 2, canvas.height / 2);
            },
            equation: "",
            result: `Final Velocity (v): ${problem.solution} ${problem.unknown.unit}`
        }
    ];

    let currentStepIndex = 0;

    // --- Calculation ---
    problem.solution = problem.knowns.v0.value + (problem.knowns.a.value * problem.knowns.t.value);
    console.log('Problem solution calculated:', problem.solution);

    // --- UI Update Functions ---
    function updateUI() {
        const step = steps[currentStepIndex];
        console.log(`updateUI called for step index: ${currentStepIndex}`);
        console.log('Step object:', step);
        console.log('Step explanation text:', step.explanation);

        // Update text content for explanation, equation, and result displays
        // These should be correctly referenced and updated here
        if (stepExplanationDisplay) {
            stepExplanationDisplay.textContent = step.explanation;
            console.log('stepExplanationDisplay updated with:', step.explanation);
        } else {
            console.error('stepExplanationDisplay element not found!');
        }

        if (equationDisplay) {
            equationDisplay.textContent = step.equation;
            console.log('equationDisplay updated with:', step.equation);
        } else {
            console.error('equationDisplay element not found!');
        }

        if (resultDisplay) {
            resultDisplay.textContent = step.result;
            console.log('resultDisplay updated with:', step.result);
        } else {
            console.error('resultDisplay element not found!');
        }

        // Draw on canvas
        if (step.canvasDraw && ctx) {
            step.canvasDraw(ctx, problem, currentStepIndex);
        } else {
            console.warn('canvasDraw function or context is missing for current step.');
        }

        // Update button states
        if (prevStepButton) prevStepButton.disabled = (currentStepIndex === 0);
        if (nextStepButton) nextStepButton.disabled = (currentStepIndex === steps.length - 1);
    }

    function goToNextStep() {
        console.log('Next Step button clicked. Current index:', currentStepIndex);
        if (currentStepIndex < steps.length - 1) {
            currentStepIndex++;
            updateUI();
        }
    }

    function goToPrevStep() {
        console.log('Previous Step button clicked. Current index:', currentStepIndex);
        if (currentStepIndex > 0) {
            currentStepIndex--;
            updateUI();
        }
    }

    function resetSolver() {
        console.log('Reset button clicked. Resetting to step 0.');
        currentStepIndex = 0;
        updateUI();
    }

    // --- Event Listeners ---
    if (nextStepButton) nextStepButton.addEventListener('click', goToNextStep);
    if (prevStepButton) prevStepButton.addEventListener('click', goToPrevStep);
    if (resetSolverButton) resetSolverButton.addEventListener('click', resetSolver);

    // Initial setup
    console.log('Initial setup calling resetSolver.');
    resetSolver();
});