// assets/js/gravitation/universal-gravitation-match.js
// Specific data for the Newton's Law of Universal Gravitation Interactive Match.

// Define the unique vocabulary data for this interactive
const vocabDataNewton = [
    { term: 'G', definition: 'The Universal Gravitational Constant (6.67 x 10⁻¹¹).' },
    { term: 'm₁ and m₂', definition: 'The masses of the two interacting objects.' },
    { term: 'r', definition: 'The distance between the centers of mass of the two objects.' },
    { term: 'Inverse Square Law', definition: 'The principle that force decreases as the square of distance increases.' },
    { term: 'Direct Proportionality', definition: 'The relationship where force increases as the product of masses increases.' },
    { term: 'Center of Mass', definition: 'The point from which "r" must be measured for spherical objects.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsNewton = {
    vocabData: vocabDataNewton,
    termsContainerId: 'newtonTerms',
    definitionsContainerId: 'newtonDefinitions',
    feedbackMessageId: 'newtonFeedback',
    resetButtonId: 'newtonResetButton'
};

// Initialize the interactive match using the common base function
document.addEventListener('DOMContentLoaded', () => {
    if (typeof initInteractiveMatch === 'function') {
        initInteractiveMatch(interactiveOptionsNewton);
    } else {
        console.error("initInteractiveMatch not found. Ensure interactive-match-base.js is loaded.");
    }
});