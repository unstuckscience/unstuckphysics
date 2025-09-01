document.addEventListener('DOMContentLoaded', () => {
    const numberSelect = document.getElementById('numberSelect');
    const numberDisplay = document.getElementById('numberDisplay');
    const checkAnswerBtn = document.getElementById('checkAnswerBtn');
    const resetBtn = document.getElementById('resetBtn');
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Data structure for numbers and their correct significant figures (indices)
    // Indices are 0-based, corresponding to the 'digitIndex' assigned in renderNumber,
    // which counts non-decimal characters sequentially.
    const numbersData = {
        '123.45': {
            display: '123.45',
            // String:   1 2 3 . 4 5
            // Logical:  0 1 2   3 4  <- `digitIndex` from JS logic
            sigFigs: [0, 1, 2, 3, 4], // 1, 2, 3, 4, 5 are significant
            count: 5
        },
        '1005': {
            display: '1005',
            // String:   1 0 0 5
            // Logical:  0 1 2 3
            sigFigs: [0, 1, 2, 3], // 1, 0, 0, 5 are significant
            count: 4
        },
        '0.0025': {
            display: '0.0025',
            // String:   0 . 0 0 2 5
            // Logical:  0   1 2 3 4
            sigFigs: [3, 4], // Leading zeros (0,1,2) are NOT significant. 2 (logical 3) and 5 (logical 4) ARE significant.
            count: 2
        },
        '1200.': {
            display: '1200.',
            // String:   1 2 0 0 .
            // Logical:  0 1 2 3
            sigFigs: [0, 1, 2, 3], // Trailing zeros WITH decimal are significant.
            count: 4
        },
        '1200_no_decimal': {
            display: '1200',
            // String:   1 2 0 0
            // Logical:  0 1 2 3
            sigFigs: [0, 1], // Trailing zeros WITHOUT decimal are NOT significant.
            count: 2
        },
        '2.00': {
            display: '2.00',
            // String:   2 . 0 0
            // Logical:  0   1 2
            sigFigs: [0, 1, 2], // Trailing zeros WITH decimal are significant.
            count: 3
        }
    };

    let currentNumberKey = numberSelect.value;
    let selectedDigits = new Set(); // Stores logical indices of digits selected by the user

    /**
     * Renders the current number into clickable digit spans with selection boxes.
     */
    function renderNumber() {
        numberDisplay.innerHTML = ''; // Clear previous number
        selectedDigits.clear(); // Clear previous selections
        feedbackMessage.textContent = ''; // Clear feedback
        feedbackMessage.classList.remove('correct', 'incorrect');

        const numberString = numbersData[currentNumberKey].display;
        let digitIndex = 0; // Logical index for significant figure counting

        for (let i = 0; i < numberString.length; i++) {
            const char = numberString[i];
            const digitContainer = document.createElement('div');
            digitContainer.classList.add('digit-container');

            const digitChar = document.createElement('div');
            digitChar.textContent = char;
            digitChar.classList.add('digit-char');

            digitContainer.appendChild(digitChar);

            if (char === '.') {
                digitContainer.classList.add('decimal-container');
                // No selection box for decimal points
            } else {
                const selectionBox = document.createElement('div');
                selectionBox.classList.add('selection-box');
                selectionBox.dataset.digitIndex = digitIndex; // Store the logical digit index
                selectionBox.addEventListener('click', toggleDigitSelection);
                digitContainer.appendChild(selectionBox);
                digitIndex++; // Increment logical index only for actual digits
            }
            numberDisplay.appendChild(digitContainer);
        }
    }

    /**
     * Toggles the 'selected' class on a clicked selection box.
     * @param {Event} event - The click event.
     */
    function toggleDigitSelection(event) {
        const selectionBox = event.target;
        const index = parseInt(selectionBox.dataset.digitIndex);

        if (selectedDigits.has(index)) {
            selectedDigits.delete(index);
            selectionBox.classList.remove('selected');
            // Also remove visual cue from digit-char
            selectionBox.previousElementSibling.classList.remove('selected-digit-char');
        } else {
            selectedDigits.add(index);
            selectionBox.classList.add('selected');
            // Also add visual cue to digit-char
            selectionBox.previousElementSibling.classList.add('selected-digit-char');
        }
        // Clear feedback message when user makes new selections
        feedbackMessage.textContent = '';
        feedbackMessage.classList.remove('correct', 'incorrect');
    }

    /**
     * Checks the user's selected digits against the correct significant figures.
     */
    function checkAnswer() {
        const correctSigFigs = new Set(numbersData[currentNumberKey].sigFigs);
        let allCorrect = true;

        // Iterate through all selection boxes to apply feedback
        const selectionBoxes = numberDisplay.querySelectorAll('.selection-box');
        selectionBoxes.forEach(box => {
            const index = parseInt(box.dataset.digitIndex);
            const isSelected = selectedDigits.has(index);
            const isCorrectSigFig = correctSigFigs.has(index);
            const digitChar = box.previousElementSibling; // Get the associated digit character

            box.classList.remove('correct', 'incorrect', 'missed-significant', 'selected'); // Clear all previous states
            digitChar.classList.remove('selected-digit-char', 'correct-digit-char', 'incorrect-digit-char', 'missed-digit-char'); // Clear all previous char states

            if (isSelected && isCorrectSigFig) {
                box.classList.add('correct');
                digitChar.classList.add('correct-digit-char');
            } else if (isSelected && !isCorrectSigFig) {
                box.classList.add('incorrect');
                digitChar.classList.add('incorrect-digit-char');
                allCorrect = false;
            } else if (!isSelected && isCorrectSigFig) {
                box.classList.add('missed-significant'); // User missed a significant figure
                digitChar.classList.add('missed-digit-char');
                allCorrect = false;
            }
        });

        // Check if all correct significant figures were selected AND no incorrect ones were selected
        const userSelectedCount = selectedDigits.size;
        const correctCount = correctSigFigs.size;

        // Final check for overall correctness:
        // 1. All selected digits must be truly significant (allCorrect remains true from loop)
        // 2. The count of user-selected significant digits must match the actual count of significant digits
        //    (This catches cases where user selects correct ones, but also misses some, or selects extra non-significant ones)
        const allCorrectlySelectedAndNoMisses = allCorrect && (userSelectedCount === correctCount);

        if (allCorrectlySelectedAndNoMisses) {
            feedbackMessage.textContent = 'Correct! All significant figures identified.';
            feedbackMessage.classList.add('correct');
        } else {
            feedbackMessage.textContent = 'Incorrect. Review the rules and try again.';
            feedbackMessage.classList.add('incorrect');
        }
    }

    /**
     * Resets the interactive to its initial state for the current number.
     */
    function resetInteractive() {
        renderNumber(); // Re-render to clear all selections and feedback
    }

    // Event Listeners
    numberSelect.addEventListener('change', (event) => {
        currentNumberKey = event.target.value;
        renderNumber();
    });

    checkAnswerBtn.addEventListener('click', checkAnswer);
    resetBtn.addEventListener('click', resetInteractive);

    // Initial render
    renderNumber();
});