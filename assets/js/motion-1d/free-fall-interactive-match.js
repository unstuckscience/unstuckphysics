// assets/js/motion-1d/free-fall-interactive-match.js
// Specific data for the Free Fall Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataFreeFall = [
    { term: 'Free Fall', definition: 'Motion solely under the influence of gravity, ignoring air resistance.' },
    { term: 'Acceleration due to Gravity (g)', definition: 'The constant rate objects speed up or slow down when falling near Earth\'s surface (approx. 9.8 m/s²).' },
    { term: 'Air Resistance', definition: 'A force that opposes the motion of an object through the air.' },
    { term: 'Vacuum', definition: 'A space completely devoid of matter, including air, where objects fall equally.' },
    { term: 'Constant Acceleration', definition: 'When velocity changes by the same amount in every equal time interval, characteristic of free fall.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsFreeFall = {
    vocabData: vocabDataFreeFall,
    termsContainerId: 'vocabTermsFreeFall',
    definitionsContainerId: 'vocabDefinitionsFreeFall',
    feedbackMessageId: 'vocabFeedbackFreeFall',
    resetButtonId: 'vocabResetButtonFreeFall'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsFreeFall);
});