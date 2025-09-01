// assets/js/motion-2d/uniform-circular-motion-interactive-match.js
// Specific data for the Uniform Circular Motion Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataUCM = [
    { term: 'Centripetal Acceleration', definition: 'The acceleration directed towards the center of the circle, causing UCM.' },
    { term: 'Constant Speed (in UCM)', definition: 'The magnitude of the object\'s velocity does not change.' },
    { term: 'Changing Velocity (in UCM)', definition: 'Occurs because the object\'s direction of motion is continuously changing.' },
    { term: 'Centripetal Force', definition: 'The net force that causes centripetal acceleration, directed towards the center.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsUCM = {
    vocabData: vocabDataUCM,
    termsContainerId: 'ucmTerms',
    definitionsContainerId: 'ucmDefinitions',
    feedbackMessageId: 'ucmFeedback',
    resetButtonId: 'ucmResetButton'
};

// Initialize the interactive match using the common base function
// This function will be loaded BEFORE this script in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsUCM);
});