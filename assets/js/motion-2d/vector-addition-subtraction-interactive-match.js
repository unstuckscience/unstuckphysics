// assets/js/motion-2d/vector-addition-subtraction-interactive-match.js
// Specific data for the Vector Addition and Subtraction Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Vocab data for the interactive: Vector Addition and Subtraction terms
const vocabDataVectorAddSub = [
    { term: 'Vector Addition', definition: 'Combining two or more vectors to find their combined effect.' },
    { term: 'Head-to-Tail Method', definition: 'A graphical method for adding vectors by placing the tail of one vector at the head of the previous one.' },
    { term: 'Resultant Vector', definition: 'The single vector that represents the sum or combined effect of two or more vectors.' },
    { term: 'Vector Subtraction', definition: 'Performed by adding the negative of the vector to be subtracted.' },
    { term: 'Negative of a Vector', definition: 'A vector with the same magnitude but pointing in the exact opposite direction.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsVectorAddSub = {
    vocabData: vocabDataVectorAddSub,
    termsContainerId: 'vectorAddSubTerms',
    definitionsContainerId: 'vectorAddSubDefinitions',
    feedbackMessageId: 'vectorAddSubFeedback',
    resetButtonId: 'vectorAddSubResetButton'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsVectorAddSub);
});