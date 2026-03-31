// assets/js/gravitation/kepler-2-match.js
// Specific data for the Kepler's Second Law Interactive Match.
// This file leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataKepler2 = [
    { term: "Perihelion Speed", definition: "The point where the planet's orbital velocity is at its maximum." },
    { term: "Aphelion Speed", definition: "The point where the planet's orbital velocity is at its minimum." },
    { term: "Orbital Period", definition: "The time it takes for a planet to sweep the entire area of its ellipse." }
];

// Define the unique element IDs for this interactive
const interactiveOptionsKepler2 = {
    vocabData: vocabDataKepler2,
    termsContainerId: 'kepler2Terms',
    definitionsContainerId: 'kepler2Definitions',
    feedbackMessageId: 'kepler2Feedback',
    resetButtonId: 'kepler2ResetButton'
};

// Initialize the interactive match using the common base function
document.addEventListener('DOMContentLoaded', () => {
    if (typeof initInteractiveMatch === 'function') {
        initInteractiveMatch(interactiveOptionsKepler2);
    } else {
        console.error("initInteractiveMatch not found. Ensure interactive-match-base.js is loaded.");
    }
});