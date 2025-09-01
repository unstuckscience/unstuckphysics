// assets/js/intro/dimensional-analysis-interactive-match.js
// Specific data for the Dimensional Analysis Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataDimensionalAnalysis = [
    { term: 'Dimension', definition: 'A fundamental physical quantity like length (L), mass (M), or time (T).' },
    { term: 'Unit', definition: 'A standardized measure of a dimension (e.g., meter for length, kilogram for mass).' },
    { term: 'Dimensional Consistency', definition: 'The principle that both sides of an equation must have the same fundamental dimensions.' },
    { term: 'Derived Dimension', definition: 'A dimension formed by combining fundamental dimensions (e.g., velocity is L/T, force is ML/T²).' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsDimensionalAnalysis = {
    vocabData: vocabDataDimensionalAnalysis,
    termsContainerId: 'vocabTerms', // Matches the ID in the markdown
    definitionsContainerId: 'vocabDefinitions', // Matches the ID in the markdown
    feedbackMessageId: 'vocabFeedback', // Matches the ID in the markdown
    resetButtonId: 'vocabResetButton' // Matches the ID in the markdown
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsDimensionalAnalysis);
});