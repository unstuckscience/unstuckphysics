// assets/js/motion-2d/vectors-scalars-interactive-match.js
// Specific data for the Vectors and Scalars Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataVectorsScalars = [
    { term: 'Scalar', definition: 'A quantity with only magnitude (size).' },
    { term: 'Vector', definition: 'A quantity with both magnitude and direction.' },
    { term: 'Magnitude', definition: 'The size or amount of a quantity.' },
    { term: 'Direction', definition: 'The orientation or path of a quantity.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsVectorsScalars = {
    vocabData: vocabDataVectorsScalars,
    termsContainerId: 'vocabTermsVectorsScalars',
    definitionsContainerId: 'vocabDefinitionsVectorsScalars',
    feedbackMessageId: 'vocabFeedbackVectorsScalars',
    resetButtonId: 'vocabResetButtonVectorsScalars'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsVectorsScalars);
});