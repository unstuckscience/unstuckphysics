// assets/js/intro/si-units-interactive-match.js
// Specific data for the SI Units and Base Quantities Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataSIUnits = [
    { term: 'Meter (m)', definition: 'Length' },
    { term: 'Kilogram (kg)', definition: 'Mass' },
    { term: 'Second (s)', definition: 'Time' },
    { term: 'Ampere (A)', definition: 'Electric Current' },
    { term: 'Kelvin (K)', definition: 'Temperature' },
    { term: 'Mole (mol)', definition: 'Amount of Substance' },
    { term: 'Candela (cd)', definition: 'Light Brightness' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsSIUnits = {
    vocabData: vocabDataSIUnits,
    termsContainerId: 'vocabTerms',
    definitionsContainerId: 'vocabDefinitions',
    feedbackMessageId: 'vocabFeedback',
    resetButtonId: 'vocabResetButton'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsSIUnits);
});
