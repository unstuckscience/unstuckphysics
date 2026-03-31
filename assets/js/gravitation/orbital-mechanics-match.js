// assets/js/gravitation/orbital-mechanics-match.js
// Specific data for the Orbital Speed and Period Interactive Match.

(function() {
    // Define the unique vocabulary data for this interactive
    const vocabDataOrbit = [
        { term: 'v = √(GM/r)', definition: 'The formula for the speed required to maintain a circular orbit.' },
        { term: 'Centripetal Force', definition: 'In an orbit, this is provided entirely by the force of gravity.' },
        { term: 'Satellite Mass (m)', definition: 'This variable cancels out and does not affect the required orbital speed.' },
        { term: 'Geostationary', definition: 'An orbit where the period is exactly equal to the planet\'s rotation period.' },
        { term: 'T = 2π√(r³/GM)', definition: 'The formula used to calculate the time for one full orbital revolution.' },
        { term: 'Altitude', definition: 'The height above the surface; must be added to the planet\'s radius to get "r".' }
    ];

    // Define the unique element IDs for this interactive
    const interactiveOptionsOrbit = {
        vocabData: vocabDataOrbit,
        termsContainerId: 'orbitTerms',
        definitionsContainerId: 'orbitDefinitions',
        feedbackMessageId: 'orbitFeedback',
        resetButtonId: 'orbitResetButton'
    };

    // Initialize the interactive match using the common base function
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof initInteractiveMatch === 'function') {
            initInteractiveMatch(interactiveOptionsOrbit);
        } else {
            console.error("initInteractiveMatch not found. Ensure interactive-match-base.js is loaded.");
        }
    });
})();