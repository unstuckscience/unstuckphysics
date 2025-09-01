document.addEventListener('DOMContentLoaded', () => {
    const expressionSelect = document.getElementById('expressionSelect');
    const currentProblemExpressionLatex = document.getElementById('currentProblemExpressionLatex');
    const userInput = document.getElementById('userInput');
    const checkInputBtn = document.getElementById('checkInputBtn');
    const resetInteractiveBtn = document.getElementById('resetInteractiveBtn');
    const feedbackResultsContainer = document.getElementById('feedbackResultsContainer');

    // Define problems with LaTeX display and correct JS input string
    const problems = {
        'problem1': {
            latexDisplay: '$$\\frac{10 + 5}{2}$$',
            correctInputString: '(10 + 5) / 2'
        },
        'problem2': {
            latexDisplay: '$$\\frac{20}{4 \\times 5}$$',
            correctInputString: '20 / (4 * 5)'
        },
        'problem3': { // New problem replacing the exponent one
            latexDisplay: '$$(5 + 3) \\times (6 - 2)$$',
            correctInputString: '(5 + 3) * (6 - 2)'
        }
    };

    let currentProblemKey = expressionSelect.value;

    /**
     * Renders the current problem's LaTeX expression using MathJax.
     */
    function renderProblemLatex() {
        const problem = problems[currentProblemKey];
        currentProblemExpressionLatex.innerHTML = problem.latexDisplay;
        // Tell MathJax to typeset the new content
        if (window.MathJax) {
            window.MathJax.typesetPromise([currentProblemExpressionLatex]);
        }
    }

    /**
     * Loads the selected problem into the interactive.
     */
    function loadProblem() {
        renderProblemLatex();
        userInput.value = ''; // Clear user input
        clearResults();
    }

    /**
     * Clears the result displays and feedback message.
     */
    function clearResults() {
        feedbackResultsContainer.classList.remove('visible', 'correct', 'incorrect');
        feedbackResultsContainer.innerHTML = '';
    }

    /**
     * Safely evaluates a mathematical expression string.
     * @param {string} expr The expression string to evaluate.
     * @returns {number|string} The result of the evaluation or an error message.
     */
    function safeEval(expr) {
        // Basic sanitization: only allow numbers, operators, parentheses, and spaces
        const allowedChars = /^[0-9+\-*/().\s]+$/;
        if (!allowedChars.test(expr)) {
            return 'Invalid characters';
        }

        try {
            // Replace common math symbols for eval compatibility
            let cleanExpr = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
            // Use Function constructor for a slightly safer eval context than direct eval()
            return new Function('return ' + cleanExpr)();
        } catch (e) {
            return 'Syntax Error';
        }
    }

    /**
     * Checks the user's input against the correct expression and displays results.
     */
    function checkInput() {
        const problem = problems[currentProblemKey];
        const userInputValue = userInput.value.trim();

        // Calculate correct result
        const correctResult = safeEval(problem.correctInputString);
        const userResult = safeEval(userInputValue);

        let feedbackHtml = '';
        let isCorrect = false;

        // Determine if the numerical result is correct (allowing for float precision)
        const resultIsNumeric = typeof correctResult === 'number' && typeof userResult === 'number';
        const numericalMatch = resultIsNumeric && Math.abs(correctResult - userResult) < 1e-9;

        // Build the feedback HTML
        feedbackHtml += `<p><strong>Your Input:</strong> <span class="expression-code">${userInputValue || 'No input'}</span></p>`;
        feedbackHtml += `<p><strong>Your Result:</strong> <span class="expression-code">${userResult}</span></p>`;
        feedbackHtml += `<p><strong>Correct Input:</strong> <span class="expression-code">${problem.correctInputString}</span></p>`;
        feedbackHtml += `<p><strong>Correct Result:</strong> <span class="expression-code">${correctResult}</span></p>`;

        if (numericalMatch && userInputValue === problem.correctInputString) {
            feedbackHtml += `<p class="main-feedback-message correct">Excellent! You used parentheses correctly and got the right answer!</p>`;
            isCorrect = true;
        } else if (numericalMatch && userInputValue !== problem.correctInputString) {
             feedbackHtml += `<p class="main-feedback-message correct">You got the right answer.</p>`; // Simplified message
             isCorrect = true;
        }
        else {
            feedbackHtml += `<p class="main-feedback-message incorrect">Not quite. See how parentheses change the result! Compare your input and result with the correct ones.</p>`;
            isCorrect = false;
        }

        feedbackResultsContainer.innerHTML = feedbackHtml;
        feedbackResultsContainer.classList.add('visible');
        if (isCorrect) {
            feedbackResultsContainer.classList.add('correct');
            feedbackResultsContainer.classList.remove('incorrect');
        } else {
            feedbackResultsContainer.classList.add('incorrect');
            feedbackResultsContainer.classList.remove('correct');
        }
    }

    /**
     * Resets the interactive to its initial state for the current problem.
     */
    function resetInteractive() {
        loadProblem();
    }

    // Event Listeners
    expressionSelect.addEventListener('change', (event) => {
        currentProblemKey = event.target.value;
        loadProblem();
    });

    checkInputBtn.addEventListener('click', checkInput);
    resetInteractiveBtn.addEventListener('click', resetInteractive);

    // Initial load of the first problem
    loadProblem();
});