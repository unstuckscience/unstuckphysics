// assets/js/motion-2d/relative-velocity-interactive-match.js
// Specific data for the Relative Velocity Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataRelativeVelocity = [
    { term: 'Relative Velocity', definition: 'The velocity of an object as observed from a particular frame of reference.' },
    { term: 'Frame of Reference', definition: 'The viewpoint or system from which motion is observed.' },
    { term: 'Vector Addition for Relative Velocity', definition: 'Method to combine velocities when objects are moving relative to different frames.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsRelativeVelocity = {
    vocabData: vocabDataRelativeVelocity,
    termsContainerId: 'relativeVelocityTerms',
    definitionsContainerId: 'relativeVelocityDefinitions',
    feedbackMessageId: 'relativeVelocityFeedback',
    resetButtonId: 'relativeVelocityResetButton'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsRelativeVelocity);
});