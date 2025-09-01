document.addEventListener('DOMContentLoaded', () => {
    const solutionSteps = [
        document.getElementById('step1'),
        document.getElementById('step2'),
        document.getElementById('step3'),
        document.getElementById('step4')
    ];
    const prevStepBtn = document.getElementById('prevStepBtn');
    const nextStepBtn = document.getElementById('nextStepBtn');
    const resetInteractiveBtn = document.getElementById('resetInteractiveBtn');

    let currentStepIndex = -1; // -1 means only problem statement is visible

    /**
     * Shows a specific solution step and updates button visibility.
     * @param {number} indexToShow The index of the step to show.
     */
    function showStep(indexToShow) {
        // Hide all steps first
        solutionSteps.forEach(step => step.classList.add('hidden'));

        // Show the requested step if it's valid
        if (indexToShow >= 0 && indexToShow < solutionSteps.length) {
            solutionSteps[indexToShow].classList.remove('hidden');
            currentStepIndex = indexToShow;
        } else {
            // If index is out of bounds (e.g., before first step), hide all
            currentStepIndex = -1;
        }

        // Update button visibility
        updateButtonVisibility();
    }

    /**
     * Updates the visibility of Previous, Next, and Reset buttons based on currentStepIndex.
     */
    function updateButtonVisibility() {
        // Previous button
        if (currentStepIndex <= 0) { // Hidden on first step (index 0) or before any steps shown (index -1)
            prevStepBtn.classList.add('hidden');
        } else {
            prevStepBtn.classList.remove('hidden');
        }

        // Next button
        if (currentStepIndex === solutionSteps.length - 1) { // Hidden on last step
            nextStepBtn.classList.add('hidden');
        } else {
            nextStepBtn.classList.remove('hidden');
        }

        // Reset button (always shown when all steps have been revealed, or if user is at the last step)
        if (currentStepIndex === solutionSteps.length - 1) {
             resetInteractiveBtn.classList.remove('hidden');
        } else {
             resetInteractiveBtn.classList.add('hidden');
        }
    }

    /**
     * Advances to the next step.
     */
    function goToNextStep() {
        if (currentStepIndex < solutionSteps.length - 1) {
            showStep(currentStepIndex + 1);
        }
    }

    /**
     * Goes back to the previous step.
     */
    function goToPreviousStep() {
        if (currentStepIndex > -1) { // Allow going back from step 0 to -1 (problem statement only)
            showStep(currentStepIndex - 1);
        }
    }

    /**
     * Resets the interactive to its initial state (only problem statement visible).
     */
    function resetInteractive() {
        showStep(-1); // Go back to the state where no solution steps are visible
    }

    // Event Listeners
    nextStepBtn.addEventListener('click', goToNextStep);
    prevStepBtn.addEventListener('click', goToPreviousStep);
    resetInteractiveBtn.addEventListener('click', resetInteractive);

    // Initial state setup: Hide all steps and set button visibility
    resetInteractive();
});