// assets/js/motion-1d/distance-displacement-interactive-match.js
// Specific data for the Distance and Displacement Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataDistanceDisplacement = [
    { term: 'Distance', definition: 'The total length of the path an object travels.' },
    { term: 'Displacement', definition: 'The change in an object\'s position from its starting point to its ending point.' },
    { term: 'Scalar', definition: 'A physical quantity that has magnitude but no direction.' },
    { term: 'Vector', definition: 'A physical quantity that has both magnitude and direction.' },
    { term: 'Magnitude', definition: 'The size or numerical value of a physical quantity.' },
    { term: 'Position', definition: 'The location of an object relative to a reference point.' }
    // 'Kinematics' was removed for improved focus and reduced cognitive load
];

// Define the unique element IDs for this interactive
const interactiveOptionsDistanceDisplacement = {
    vocabData: vocabDataDistanceDisplacement,
    termsContainerId: 'vocabTermsDistanceDisplacement',
    definitionsContainerId: 'vocabDefinitionsDistanceDisplacement',
    feedbackMessageId: 'vocabFeedbackDistanceDisplacement',
    resetButtonId: 'vocabResetButtonDistanceDisplacement'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsDistanceDisplacement);
});