// assets/js/motion-1d/acceleration-interactive-match.js
// Specific data for the Acceleration Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataAcceleration = [
    { term: 'Acceleration', definition: 'The rate at which an object\'s velocity changes.' },
    { term: 'Velocity', definition: 'Speed and direction of motion.' },
    { term: 'Speeding Up', definition: 'Acceleration is in the same direction as velocity.' },
    { term: 'Slowing Down', definition: 'Acceleration is in the opposite direction to velocity.' },
    { term: 'Constant Velocity', definition: 'Motion with zero acceleration.' },
    { term: 'm/s²', definition: 'The SI unit for acceleration.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsAcceleration = {
    vocabData: vocabDataAcceleration,
    termsContainerId: 'vocabTermsAcceleration',
    definitionsContainerId: 'vocabDefinitionsAcceleration',
    feedbackMessageId: 'vocabFeedbackAcceleration',
    resetButtonId: 'vocabResetButtonAcceleration'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsAcceleration);
});