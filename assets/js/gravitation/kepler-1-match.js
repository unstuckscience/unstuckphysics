// assets/js/gravitation/kepler-1-match.js
// Specific data for the Kepler's First Law Interactive Match.
// This file leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataKepler = [
    { term: "Ellipse", definition: "A geometric shape representing a flattened circle." },
    { term: "Focus", definition: "One of two central points that define an ellipse; the Sun sits here." },
    { term: "Eccentricity", definition: "The value (0 to 1) describing how circular or stretched an orbit is." },
    { term: "Semi-major Axis", definition: "Half of the longest diameter of an ellipse; the average orbital distance." }
];

// Define the unique element IDs for this interactive
// Ensure these match the IDs in your Kepler's First Law Markdown file.
const interactiveOptionsKepler = {
    vocabData: vocabDataKepler,
    termsContainerId: 'vocabTermsKepler',
    definitionsContainerId: 'vocabDefinitionsKepler',
    feedbackMessageId: 'vocabFeedbackKepler',
    resetButtonId: 'vocabResetButtonKepler'
};

// Initialize the interactive match using the common base function
// This function will be loaded BEFORE this script in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof initInteractiveMatch === 'function') {
        initInteractiveMatch(interactiveOptionsKepler);
    } else {
        console.error("initInteractiveMatch function not found. Ensure interactive-match-base.js is loaded.");
    }
});