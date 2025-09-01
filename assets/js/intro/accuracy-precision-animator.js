// assets/js/intro/accuracy-precision-animator.js
// JavaScript for the Accuracy vs. Precision interactive on the Dimensional Analysis page.

document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const accuracyPrecisionSVG = document.getElementById('accuracyPrecisionSVG');
    const dartsGroup = document.getElementById('dartsGroup'); // Parent group for all darts

    // Get references to specific dart groups
    // Use Array.from for NodeList to array conversion if you need array methods, otherwise direct iteration is fine
    const accuratePreciseDarts = document.querySelectorAll('.dart.accurate-precise');
    const preciseNotAccurateDarts = document.querySelectorAll('.dart.precise-not-accurate');
    const accurateNotPreciseDarts = document.querySelectorAll('.dart.accurate-not-precise');
    const neitherDarts = document.querySelectorAll('.dart.neither');

    // Get references to control buttons (using their correct IDs from HTML)
    const showAccuratePreciseBtn = document.getElementById('showAccuratePrecise');
    const showPreciseNotAccurateBtn = document.getElementById('showPreciseNotAccurate');
    const showAccurateNotPreciseBtn = document.getElementById('showAccurateNotPrecise');
    const showNeitherBtn = document.getElementById('showNeither');
    const resetBtn = document.getElementById('resetAnimation');

    // Find the specific animator wrapper by its class, then query for the explanation within it.
    // This is more robust as it doesn't rely on parentNode directly from the SVG.
    const animatorWrapper = document.querySelector('.animator-container.accuracy-precision-animator');
    const animationExplanation = animatorWrapper ? animatorWrapper.querySelector('.animation-explanation') : null;


    // Check if all essential elements are found
    if (!accuracyPrecisionSVG || !dartsGroup || !showAccuratePreciseBtn || !showPreciseNotAccurateBtn || !showAccurateNotPreciseBtn || !showNeitherBtn || !resetBtn || !animationExplanation) {
        console.error('One or more essential elements for the Accuracy/Precision Animator were not found. Script cannot proceed.');
        // Attempt to display an error message on the page if console is not available
        const errorDiv = document.createElement('div');
        errorDiv.style.color = 'red';
        errorDiv.style.fontWeight = 'bold';
        errorDiv.textContent = 'Error: Interactive elements not found. Please check your HTML and JavaScript IDs.';
        // Append error message to the body or a visible parent if possible
        if (animatorWrapper) { // If the wrapper itself is found, append error inside it
            animatorWrapper.appendChild(errorDiv);
        } else { // Fallback to body if even the wrapper isn't found
            document.body.appendChild(errorDiv);
        }
        return;
    }

    // Define scenarios with dart groups and explanations
    const scenarios = {
        'accuratePrecise': {
            dartGroupsToShow: accuratePreciseDarts,
            explanation: "This is Accurate & Precise: All darts are close to the bullseye AND close to each other. This is the ideal result!"
        },
        'preciseNotAccurate': {
            dartGroupsToShow: preciseNotAccurateDarts,
            explanation: "This is Precise but Not Accurate: Darts are close to each other, but consistently far from the bullseye. There's a steady mistake."
        },
        'accurateNotPrecise': {
            dartGroupsToShow: accurateNotPreciseDarts,
            explanation: "This is Accurate but Not Precise: Darts are spread out, but their average is close to the bullseye. Your results are inconsistent."
        },
        'neither': {
            dartGroupsToShow: neitherDarts,
            explanation: "This is Neither Accurate nor Precise: Darts are scattered everywhere. Your results are unreliable."
        }
    };

    // Function to update the animation based on the selected scenario
    function updateAnimation(scenarioId) {
        // Hide all dart groups first
        [accuratePreciseDarts, preciseNotAccurateDarts, accurateNotPreciseDarts, neitherDarts].forEach(group => {
            group.forEach(dart => dart.style.opacity = 0);
        });

        // Show darts for the selected scenario
        const selectedScenario = scenarios[scenarioId];
        if (selectedScenario) {
            selectedScenario.dartGroupsToShow.forEach(dart => dart.style.opacity = 1);
            animationExplanation.innerHTML = `<p>${selectedScenario.explanation}</p>`;
        } else {
            // Default state or error state if no scenario is selected
            animationExplanation.innerHTML = `<p>Click a button above to see how accuracy and precision look on the target!</p>`;
        }
    }

    // Event Listeners for scenario buttons
    showAccuratePreciseBtn.addEventListener('click', () => updateAnimation('accuratePrecise'));
    showPreciseNotAccurateBtn.addEventListener('click', () => updateAnimation('preciseNotAccurate'));
    showAccurateNotPreciseBtn.addEventListener('click', () => updateAnimation('accurateNotPrecise'));
    showNeitherBtn.addEventListener('click', () => updateAnimation('neither'));

    // Event Listener for reset button
    resetBtn.addEventListener('click', () => {
        // Hide all darts
        [accuratePreciseDarts, preciseNotAccurateDarts, accurateNotPreciseDarts, neitherDarts].forEach(group => {
            group.forEach(dart => dart.style.opacity = 0);
        });
        animationExplanation.innerHTML = `<p>Click a button above to see how accuracy and precision look on the target!</p>`;
    });

    // Initial setup: Start with no darts visible
    resetBtn.click(); // Programmatically click reset to set initial state
});