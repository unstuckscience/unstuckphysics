// assets/js/motion-1d/speed-velocity-interactive-match.js
// Specific data for the Speed and Velocity Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataSpeedVelocity = [
    { term: 'Speed', definition: 'The rate at which an object covers distance (a scalar quantity).' },
    { term: 'Velocity', definition: 'The rate at which an object changes position in a specific direction (a vector quantity).' },
    { term: 'Scalar', definition: 'A physical quantity that has magnitude but no direction.' },
    { term: 'Vector', definition: 'A physical quantity that has both magnitude and direction.' },
    { term: 'Magnitude', definition: 'The size or numerical value of a physical quantity.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsSpeedVelocity = {
    vocabData: vocabDataSpeedVelocity,
    termsContainerId: 'vocabTermsSpeedVelocity',
    definitionsContainerId: 'vocabDefinitionsSpeedVelocity',
    feedbackMessageId: 'vocabFeedbackSpeedVelocity',
    resetButtonId: 'vocabResetButtonSpeedVelocity'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsSpeedVelocity);
});