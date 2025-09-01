document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const forceTypesSVG = document.getElementById('forceTypesSVG');
    const mainObject = document.getElementById('mainObject');
    const objectLabel = document.getElementById('objectLabel');
    const animationExplanation = document.getElementById('animationExplanation');

    // Force vectors and their labels
    const forceGravity = document.getElementById('forceGravity');
    const labelGravity = document.getElementById('labelGravity');
    const forceNormal = document.getElementById('forceNormal');
    const labelNormal = document.getElementById('labelNormal');
    const forceFriction = document.getElementById('forceFriction');
    const labelFriction = document.getElementById('labelFriction');
    const forceApplied = document.getElementById('forceApplied');
    const labelApplied = document.getElementById('labelApplied');
    const forceTension = document.getElementById('forceTension');
    const labelTension = document.getElementById('labelTension');
    const rope = document.getElementById('rope');
    const pulley = forceTypesSVG.querySelector('circle[cx="350"][cy="100"]'); // Select the pulley circle

    // Get references to control buttons
    const scenarioGravityBtn = document.getElementById('scenarioGravity');
    const scenarioNormalBtn = document.getElementById('scenarioNormal');
    const scenarioFrictionBtn = document.getElementById('scenarioFriction');
    const scenarioTensionBtn = document.getElementById('scenarioTension');
    const scenarioAppliedBtn = document.getElementById('scenarioApplied');
    const resetBtn = document.getElementById('resetAnimation');

    // Check if all essential elements are found
    if (!forceTypesSVG || !mainObject || !objectLabel || !animationExplanation ||
        !forceGravity || !labelGravity || !forceNormal || !labelNormal || !forceFriction || !labelFriction ||
        !forceApplied || !labelApplied || !forceTension || !labelTension || !rope || !pulley ||
        !scenarioGravityBtn || !scenarioNormalBtn || !scenarioFrictionBtn || !scenarioTensionBtn || !scenarioAppliedBtn || !resetBtn) {
        console.error('One or more essential elements for the Types of Forces Animator were not found. Script cannot proceed.');
        return;
    }

    // Array of all force elements and their labels for easy hiding/showing
    const allForceElements = [
        forceGravity, labelGravity,
        forceNormal, labelNormal,
        forceFriction, labelFriction,
        forceApplied, labelApplied,
        forceTension, labelTension, rope, pulley
    ];

    // Scenarios definition
    const scenarios = {
        'gravity': {
            elementsToShow: [forceGravity, labelGravity],
            explanation: "The **Gravitational Force (Weight)** pulls the object downwards towards the Earth's center."
        },
        'normal': {
            elementsToShow: [forceGravity, labelGravity, forceNormal, labelNormal],
            explanation: "The **Normal Force** is the support force from the surface, pushing upwards, perpendicular to the surface."
        },
        'friction': {
            elementsToShow: [forceGravity, labelGravity, forceNormal, labelNormal, forceApplied, labelApplied, forceFriction, labelFriction],
            explanation: "The **Friction Force** opposes the applied force, acting parallel to the surface."
        },
        'tension': {
            elementsToShow: [forceGravity, labelGravity, forceTension, labelTension, rope, pulley],
            explanation: "The **Tension Force** is a pulling force transmitted through a rope or cable."
        },
        'applied': {
            elementsToShow: [forceGravity, labelGravity, forceNormal, labelNormal, forceApplied, labelApplied],
            explanation: "An **Applied Force** is a direct push or pull on the object."
        }
    };

    function showScenario(scenarioId) {
        // Hide all force elements first
        allForceElements.forEach(el => el.style.opacity = 0);

        const scenario = scenarios[scenarioId];
        if (scenario) {
            // Show elements for the selected scenario
            scenario.elementsToShow.forEach(el => el.style.opacity = 1);
            animationExplanation.innerHTML = `<p>${scenario.explanation}</p>`;
        } else {
            animationExplanation.innerHTML = `<p>Click a button to see how different forces act on an object!</p>`;
        }
    }

    function resetAnimation() {
        allForceElements.forEach(el => el.style.opacity = 0);
        animationExplanation.innerHTML = `<p>Click a button to see how different forces act on an object!</p>`;
    }

    // Event Listeners
    scenarioGravityBtn.addEventListener('click', () => showScenario('gravity'));
    scenarioNormalBtn.addEventListener('click', () => showScenario('normal'));
    scenarioFrictionBtn.addEventListener('click', () => showScenario('friction'));
    scenarioTensionBtn.addEventListener('click', () => showScenario('tension'));
    scenarioAppliedBtn.addEventListener('click', () => showScenario('applied'));
    resetBtn.addEventListener('click', resetAnimation);

    // Initial setup
    resetAnimation(); // Start with all forces hidden
});