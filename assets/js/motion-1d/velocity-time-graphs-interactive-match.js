// assets/js/motion-1d/velocity-time-graphs-interactive-match.js
// Specific data for the Velocity-Time Graphs Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataVTGraph = [
    { term: 'Velocity-Time Graph', definition: 'A graph plotting velocity on the y-axis against time on the x-axis.' },
    { term: 'Slope (on V-T Graph)', definition: 'Represents the object\'s acceleration.' },
    { term: 'Area Under Curve (on V-T Graph)', definition: 'Represents the object\'s displacement.' },
    { term: 'Horizontal Line (on V-T Graph)', definition: 'Shows the object moving at a constant velocity.' },
    { term: 'Straight Sloped Line (on V-T Graph)', definition: 'Shows the object undergoing constant acceleration.' },
    { term: 'Curved Line (on V-T Graph)', definition: 'Shows the object undergoing non-constant acceleration.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsVTGraph = {
    vocabData: vocabDataVTGraph,
    termsContainerId: 'vocabTermsVTGraph',
    definitionsContainerId: 'vocabDefinitionsVTGraph',
    feedbackMessageId: 'vocabFeedbackVTGraph',
    resetButtonId: 'vocabResetButtonVTGraph'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsVTGraph);
});