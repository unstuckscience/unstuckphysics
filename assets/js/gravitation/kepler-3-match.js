// assets/js/gravitation/kepler-3-match.js
// Specific data for the Kepler's Third Law Interactive Match.
// This file leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataKepler3 = [
    { term: "T", definition: "The symbol representing the orbital period (time for one orbit)." },
    { term: "a", definition: "The symbol representing the semi-major axis (average distance)." },
    { term: "AU", definition: "Astronomical Unit; the average distance between Earth and the Sun." }
];

// Define the unique element IDs for this interactive
const interactiveOptionsKepler3 = {
    vocabData: vocabDataKepler3,
    termsContainerId: 'kepler3Terms',
    definitionsContainerId: 'kepler3Definitions',
    feedbackMessageId: 'kepler3Feedback',
    resetButtonId: 'kepler3ResetButton'
};

// Initialize the interactive match using the common base function
document.addEventListener('DOMContentLoaded', () => {
    if (typeof initInteractiveMatch === 'function') {
        initInteractiveMatch(interactiveOptionsKepler3);
    } else {
        console.error("initInteractiveMatch not found. Ensure interactive-match-base.js is loaded.");
    }
});