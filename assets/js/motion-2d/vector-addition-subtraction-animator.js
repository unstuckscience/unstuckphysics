document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const vectorAdditionSVG = document.getElementById('vectorAdditionSVG');
    const vectorA = document.getElementById('vectorA');
    const labelA = document.getElementById('labelA');
    const vectorB = document.getElementById('vectorB');
    const labelB = document.getElementById('labelB');
    const vectorB_moved = document.getElementById('vectorB_moved');
    const labelB_moved = document.getElementById('labelB_moved');
    const vectorR_add = document.getElementById('vectorR_add');
    const labelR_add = document.getElementById('labelR_add');
    const vectorNegB = document.getElementById('vectorNegB');
    const labelNegB = document.getElementById('labelNegB');
    const vectorNegB_moved = document.getElementById('vectorNegB_moved');
    const labelNegB_moved = document.getElementById('labelNegB_moved');
    const vectorR_sub = document.getElementById('vectorR_sub');
    const labelR_sub = document.getElementById('labelR_sub');
    const animationExplanation = document.getElementById('animationExplanation');

    // Get references to control buttons
    const prevStepBtn = document.getElementById('prevStepBtn');
    const nextStepBtn = document.getElementById('nextStepBtn');
    const resetBtn = document.getElementById('resetAnimation');

    // Check if all essential elements are found
    if (!vectorAdditionSVG || !vectorA || !labelA || !vectorB || !labelB || !vectorB_moved || !labelB_moved ||
        !vectorR_add || !labelR_add || !vectorNegB || !labelNegB || !vectorNegB_moved || !labelNegB_moved ||
        !vectorR_sub || !labelR_sub || !animationExplanation || !prevStepBtn || !nextStepBtn || !resetBtn) {
        console.error('One or more essential elements for the Vector Addition/Subtraction Animator were not found. Script cannot proceed.');
        return;
    }

    let currentStep = 0;

    // Define animation steps
    const steps = [
        { // Step 0: Initial state - Show A and B separately
            elementsToShow: [vectorA, labelA, vectorB, labelB],
            elementsToHide: [vectorB_moved, labelB_moved, vectorR_add, labelR_add, vectorNegB, labelNegB, vectorNegB_moved, labelNegB_moved, vectorR_sub, labelR_sub],
            explanation: "We have two vectors, A and B. Let's learn to add them first."
        },
        { // Step 1: Move B for addition (head-to-tail)
            elementsToShow: [vectorA, labelA, vectorB_moved, labelB_moved],
            elementsToHide: [vectorB, labelB, vectorR_add, labelR_add, vectorNegB, labelNegB, vectorNegB_moved, labelNegB_moved, vectorR_sub, labelR_sub],
            explanation: "To add vectors (A + B), move the tail of Vector B to the head of Vector A."
        },
        { // Step 2: Show Resultant (A + B)
            elementsToShow: [vectorA, labelA, vectorB_moved, labelB_moved, vectorR_add, labelR_add],
            elementsToHide: [vectorB, labelB, vectorNegB, labelNegB, vectorNegB_moved, labelNegB_moved, vectorR_sub, labelR_sub],
            explanation: "The resultant vector (A + B) goes from the tail of A to the head of B."
        },
        { // Step 3: Introduce Subtraction (A and B original)
            elementsToShow: [vectorA, labelA, vectorB, labelB],
            elementsToHide: [vectorB_moved, labelB_moved, vectorR_add, labelR_add, vectorNegB, labelNegB, vectorNegB_moved, labelNegB_moved, vectorR_sub, labelR_sub],
            explanation: "Now let's subtract vectors (A - B). This is the same as adding the negative of B (A + (-B))."
        },
        { // Step 4: Show -B
            elementsToShow: [vectorA, labelA, vectorB, labelB, vectorNegB, labelNegB],
            elementsToHide: [vectorB_moved, labelB_moved, vectorR_add, labelR_add, vectorNegB_moved, labelNegB_moved, vectorR_sub, labelR_sub],
            explanation: "The negative of Vector B (-B) has the same length but points in the opposite direction."
        },
        { // Step 5: Move -B for subtraction (head-to-tail)
            elementsToShow: [vectorA, labelA, vectorNegB_moved, labelNegB_moved],
            elementsToHide: [vectorB, labelB, vectorB_moved, labelB_moved, vectorR_add, labelR_add, vectorNegB, labelNegB, vectorR_sub, labelR_sub],
            explanation: "Now, move the tail of -B to the head of A, just like regular addition."
        },
        { // Step 6: Show Resultant (A - B)
            elementsToShow: [vectorA, labelA, vectorNegB_moved, labelNegB_moved, vectorR_sub, labelR_sub],
            elementsToHide: [vectorB, labelB, vectorB_moved, labelB_moved, vectorR_add, labelR_add, vectorNegB, labelNegB],
            explanation: "The resultant vector (A - B) goes from the tail of A to the head of -B."
        }
    ];

    function updateAnimation() {
        const currentStepData = steps[currentStep];

        // Hide all elements first
        const allElements = [vectorA, labelA, vectorB, labelB, vectorB_moved, labelB_moved, vectorR_add, labelR_add, vectorNegB, labelNegB, vectorNegB_moved, labelNegB_moved, vectorR_sub, labelR_sub];
        allElements.forEach(el => el.style.opacity = 0);

        // Show elements for the current step
        currentStepData.elementsToShow.forEach(el => el.style.opacity = 1);

        // Update explanation
        animationExplanation.innerHTML = `<p>${currentStepData.explanation}</p>`;

        // Update button states
        prevStepBtn.disabled = currentStep === 0;
        nextStepBtn.disabled = currentStep === steps.length - 1;

        // Trigger MathJax re-render if needed (for labels like A+B, A-B)
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
            MathJax.typesetPromise([animationExplanation, labelR_add, labelR_sub]).catch((err) => console.log('MathJax typeset failed: ' + err.message));
        }
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