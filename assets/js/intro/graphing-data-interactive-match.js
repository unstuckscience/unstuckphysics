// assets/js/intro/graphing-data-interactive-match.js
// Specific data for the Graphing Data and Relationships Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataGraphingData = [
    { term: 'Independent Variable', definition: 'The variable that is changed or controlled in an experiment (usually on the x-axis).' },
    { term: 'Dependent Variable', definition: 'The variable that changes in response to the independent variable (usually on the y-axis).' },
    { term: 'Linear Relationship', definition: 'A relationship where the dependent variable changes by a constant amount for every constant change in the independent variable, forming a straight line.' },
    { term: 'Line of Best Fit', definition: 'A smooth line or curve drawn on a graph to best represent the overall trend of the data points.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsGraphingData = {
    vocabData: vocabDataGraphingData,
    termsContainerId: 'vocabTermsGraphingData',
    definitionsContainerId: 'vocabDefinitionsGraphingData',
    feedbackMessageId: 'vocabFeedbackGraphingData',
    resetButtonId: 'vocabResetButtonGraphingData'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsGraphingData);
});