// assets/js/motion-2d/projectile-motion-interactive-match.js
// Specific data for the Projectile Motion Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataProjectileMotion = [
    { term: 'Projectile Motion', definition: 'Motion of an object thrown into the air, subject only to gravity.' },
    { term: 'Trajectory', definition: 'The curved path a projectile takes, which is always a parabola.' },
    { term: 'Horizontal Motion', definition: 'Part of projectile motion with constant velocity and zero acceleration.' },
    { term: 'Vertical Motion', definition: 'Part of projectile motion with constant acceleration due to gravity.' },
    { term: 'Range', definition: 'The total horizontal distance traveled by a projectile from launch to landing.' },
    { term: 'Time of Flight', definition: 'The total time a projectile spends in the air from launch to landing.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsProjectileMotion = {
    vocabData: vocabDataProjectileMotion,
    termsContainerId: 'projectileMotionTerms',
    definitionsContainerId: 'projectileMotionDefinitions',
    feedbackMessageId: 'projectileMotionFeedback',
    resetButtonId: 'projectileMotionResetButton'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsProjectileMotion);
});