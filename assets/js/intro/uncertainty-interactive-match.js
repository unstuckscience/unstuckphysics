// assets/js/intro/uncertainty-interactive-match.js
// Specific data for the Uncertainty Interactive Match.

// Define the unique vocabulary data for this interactive
const vocabDataUncertainty = [
    { term: 'Uncertainty', definition: 'The amount of doubt or "wiggle room" in a measurement.' },
    { term: 'Absolute Uncertainty', definition: 'The uncertainty of a measurement, expressed in the same units.' },
    { term: 'Relative Uncertainty', definition: 'The uncertainty of a measurement, expressed as a percentage.' },
    { term: 'Measured Value', definition: 'The number you read directly from a measuring tool.' },
    { term: 'Known Value', definition: 'A standard or accepted number to which a measurement is compared.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsUncertainty = {
    vocabData: vocabDataUncertainty,
    termsContainerId: 'uncertaintyTerms',
    definitionsContainerId: 'uncertaintyDefinitions',
    feedbackMessageId: 'uncertaintyFeedback',
    resetButtonId: 'uncertaintyResetButton'
};

// Initialize the interactive match using the common base function
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsUncertainty);
});