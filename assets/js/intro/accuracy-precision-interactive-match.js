// assets/js/intro/accuracy-precision-interactive-match.js
// Specific data for the Accuracy vs. Precision Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataAccuracyPrecision = [
    { term: 'Accuracy', definition: 'How close a measurement is to the true or actual value.' },
    { term: 'Precision', definition: 'How close repeated measurements are to each other; consistency.' },
    { term: 'True Value', definition: 'The actual, accepted value of a quantity being measured.' },
    { term: 'Repeated Measurements', definition: 'Multiple measurements taken of the same quantity, used to assess precision.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsAccuracyPrecision = {
    vocabData: vocabDataAccuracyPrecision,
    termsContainerId: 'vocabTermsAccuracyPrecision',
    definitionsContainerId: 'vocabDefinitionsAccuracyPrecision',
    feedbackMessageId: 'vocabFeedbackAccuracyPrecision',
    resetButtonId: 'vocabResetButtonAccuracyPrecision'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsAccuracyPrecision);
});