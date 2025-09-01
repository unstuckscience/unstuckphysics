// assets/js/motion-1d/kinematics-interactive-match.js
// Specific data for the Kinematics Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataKinematics = [
    { term: 'Kinematics', definition: 'The study of how objects move, without considering why.' },
    { term: 'Position', definition: 'Where an object is located relative to a reference point.' },
    { term: 'Displacement', definition: 'The change in an object\'s position from its starting to ending point (vector).' },
    { term: 'Velocity', definition: 'How fast an object moves and in what direction (vector).' },
    { term: 'Acceleration', definition: 'How quickly an object\'s velocity changes (vector).' },
    { term: 'Constant Acceleration', definition: 'When velocity changes at a steady rate, allowing the use of kinematic equations.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsKinematics = {
    vocabData: vocabDataKinematics,
    termsContainerId: 'vocabTermsKinematics',
    definitionsContainerId: 'vocabDefinitionsKinematics',
    feedbackMessageId: 'vocabFeedbackKinematics',
    resetButtonId: 'vocabResetButtonKinematics'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsKinematics);
});