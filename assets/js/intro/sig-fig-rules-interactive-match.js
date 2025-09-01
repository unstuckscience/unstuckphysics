// assets/js/intro/sig-fig-rules-interactive-match.js
// Specific data for the Significant Figures Rules Interactive Match.
// This file leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataSigFigRules = [
    { term: 'Significant Figures', definition: 'Digits in a measurement that carry meaning and contribute to its precision.' },
    { term: 'Non-zero Digits', definition: 'Always significant (e.g., 1, 2, 3, 4, 5, 6, 7, 8, 9).' },
    { term: 'Sandwich Zeros', definition: 'Zeros between non-zero digits; always significant (e.g., the zeros in 1005).' },
    { term: 'Leading Zeros', definition: 'Zeros before non-zero digits; never significant (e.g., the zeros in 0.0025).' },
    { term: 'Trailing Zeros (with decimal)', definition: 'Zeros at the end of a number that contains a decimal point; always significant (e.g., the zeros in 2.00 or 1200.).' },
    { term: 'Trailing Zeros (no decimal)', definition: 'Zeros at the end of a number without a decimal point; never significant (e.g., the zeros in 1200).' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsSigFigRules = {
    vocabData: vocabDataSigFigRules,
    termsContainerId: 'vocabTermsSigFigRules',
    definitionsContainerId: 'vocabDefinitionsSigFigRules',
    feedbackMessageId: 'vocabFeedbackSigFigRules',
    resetButtonId: 'vocabResetButtonSigFigRules'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsSigFigRules);
});
