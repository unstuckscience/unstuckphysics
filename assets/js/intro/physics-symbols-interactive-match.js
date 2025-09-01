// assets/js/intro/physics-symbols-interactive-match.js
// Specific data for the Physics Symbols and Notation Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataPhysicsSymbols = [
    { term: 'x, y, z', definition: 'Represent Position or displacement.' },
    { term: 't', definition: 'Represents Time or duration.' },
    { term: 'v', definition: 'Represents Velocity or speed.' },
    { term: 'a', definition: 'Represents Acceleration.' },
    { term: 'm', definition: 'Represents Mass.' },
    { term: 'F', definition: 'Represents Force (a push or a pull).' },
    { term: 'E', definition: 'Represents Energy.' },
    { term: 'Δ (Delta)', definition: 'Means "change in" a quantity (e.g., Δt is change in time).' },
    { term: 'Σ (Sigma)', definition: 'Means to "sum" or "add up" many quantities.' },
    { term: 'θ (Theta)', definition: 'Commonly represents an angle.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsPhysicsSymbols = {
    vocabData: vocabDataPhysicsSymbols,
    termsContainerId: 'vocabTerms', // Matches the ID in the markdown
    definitionsContainerId: 'vocabDefinitions', // Matches the ID in the markdown
    feedbackMessageId: 'vocabFeedback', // Matches the ID in the markdown
    resetButtonId: 'vocabResetButton' // Matches the ID in the markdown
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsPhysicsSymbols);
});