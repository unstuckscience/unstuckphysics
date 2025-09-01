// assets/js/motion-1d/position-time-graphs-interactive-match.js
// Specific data for the Position-Time Graphs Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataPositionTimeGraphs = [
    { term: 'Slope (on P-T Graph)', definition: 'Represents the object\'s velocity.' },
    { term: 'Horizontal Line (on P-T Graph)', definition: 'Indicates the object is at rest (not moving).' },
    { term: 'Straight Sloped Line (on P-T Graph)', definition: 'Indicates constant velocity.' },
    { term: 'Curved Line (on P-T Graph)', definition: 'Indicates changing velocity, or acceleration.' },
    { term: 'Position', definition: 'The object\'s location relative to an origin.' },
    { term: 'Time', definition: 'The independent variable, shown on the horizontal axis.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsPositionTimeGraphs = {
    vocabData: vocabDataPositionTimeGraphs,
    termsContainerId: 'vocabTermsPositionTimeGraphs',
    definitionsContainerId: 'vocabDefinitionsPositionTimeGraphs',
    feedbackMessageId: 'vocabFeedbackPositionTimeGraphs',
    resetButtonId: 'vocabResetButtonPositionTimeGraphs'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsPositionTimeGraphs);
});