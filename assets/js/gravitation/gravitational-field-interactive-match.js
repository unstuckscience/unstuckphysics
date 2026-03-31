// assets/js/forces/gravitational-field-interactive-match.js
// Specific data for the Gravitational Field Strength Interactive Match.
// This file leverages the shared interactive-match-base.js logic.

// Define the unique vocabulary data for this interactive
const vocabDataGravitationalField = [
    {
        term: 'Gravitational Field Strength',
        definition: 'The gravitational force per unit mass at a point in space.'
    },
    {
        term: 'Gravitational Field',
        definition: 'A region of space where an object with mass experiences a gravitational force.'
    },
    {
        term: 'Weight',
        definition: 'The force on an object due to gravity, calculated as mass times gravitational field strength.'
    },
    {
        term: 'Mass',
        definition: 'The amount of matter in an object, which does not change with location.'
    },
    {
        term: 'Field Lines',
        definition: 'Lines used to represent the direction and strength of a gravitational field.'
    },
    {
        term: 'Newton per kilogram (N/kg)',
        definition: 'The unit used to measure gravitational field strength.'
    }
];

// Define the unique element IDs for this interactive
const interactiveOptionsGravitationalField = {
    vocabData: vocabDataGravitationalField,
    termsContainerId: 'gravitationalFieldTerms',
    definitionsContainerId: 'gravitationalFieldDefinitions',
    feedbackMessageId: 'gravitationalFieldFeedback',
    resetButtonId: 'gravitationalFieldResetButton'
};

// Initialize the interactive match once the DOM is fully loaded
// interactive-match-base.js must be loaded before this file.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsGravitationalField);
});
