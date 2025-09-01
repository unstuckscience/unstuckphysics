// assets/js/forces/weight-apparent-weight-animator.js

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const svg = document.getElementById('weightApparentWeightSVG');
    if (!svg) {
        console.error('SVG element with ID "weightApparentWeightSVG" not found.');
        return;
    }

    // Get references to interactive elements
    const personMassInput = document.getElementById('personMassInput');
    const elevatorUpAccelBtn = document.getElementById('elevatorUpAccelBtn');
    const elevatorDownAccelBtn = document.getElementById('elevatorDownAccelBtn');
    const elevatorConstantBtn = document.getElementById('elevatorConstantBtn');
    const elevatorFreeFallBtn = document.getElementById('elevatorFreeFallBtn');
    const resetAnimationBtn = document.getElementById('resetAnimation');

    // Speed control buttons (from animator_wrapper.html)
    const speedSlowBtn = document.getElementById('speedSlowBtn');
    const speedNormalBtn = document.getElementById('speedNormalBtn');
    const speedFastBtn = document.getElementById('speedFastBtn');

    // Get references to SVG elements for the animation
    const elevatorCar = document.getElementById('elevatorCar');
    const personBody = document.getElementById('personBody');
    const personHead = personBody.previousElementSibling; // Circle for head
    const scale = document.getElementById('scale');

    // Get references to text displays
    const trueWeightDisplay = document.getElementById('trueWeightDisplay');
    const apparentWeightDisplay = document.getElementById('apparentWeightDisplay');
    const accelerationDisplay = document.getElementById('accelerationDisplay');
    const animationExplanation = document.getElementById('animationExplanation');

    // --- Constants and Initial State ---
    const G = 9.8; // Acceleration due to gravity (m/s^2)
    const ELEVATOR_HEIGHT = 140; // Height of the elevator car SVG element
    const ELEVATOR_SHAFT_MAX_Y = 250; // Max Y position for elevator car (bottom of shaft)
    const ELEVATOR_SHAFT_MIN_Y = 10; // Min Y position for elevator car (top of shaft)
    const INITIAL_ELEVATOR_Y = 250; // Initial Y position of the elevator car (bottom of shaft)

    let animationSpeed = 1; // 1x normal speed
    let currentMass = parseFloat(personMassInput.value);
    let animationFrameId = null; // To store requestAnimationFrame ID
    let startTime = null;
    let scenario = 'rest'; // 'rest', 'up-accel', 'down-accel', 'constant', 'free-fall'
    let currentAcceleration = 0; // m/s^2

    // --- Helper Functions ---

    /**
     * Updates the explanation text.
     * @param {string} text - The new explanation text.
     */
    function updateExplanation(text) {
        animationExplanation.querySelector('p').textContent = text;
    }

    /**
     * Calculates true weight.
     * @param {number} mass - The mass of the person.
     * @returns {number} True weight in Newtons.
     */
    function calculateTrueWeight(mass) {
        return mass * G;
    }

    /**
     * Calculates apparent weight based on mass and elevator acceleration.
     * @param {number} mass - The mass of the person.
     * @param {number} acceleration - The elevator's acceleration (positive for up, negative for down).
     * @returns {number} Apparent weight in Newtons.
     */
    function calculateApparentWeight(mass, acceleration) {
        // F_N - W = ma => F_N = W + ma
        return calculateTrueWeight(mass) + (mass * acceleration);
    }

    /**
     * Updates the display labels.
     */
    function updateDisplays() {
        const trueWeight = calculateTrueWeight(currentMass);
        const apparentWeight = calculateApparentWeight(currentMass, currentAcceleration);

        trueWeightDisplay.textContent = `True Weight: ${trueWeight.toFixed(1)} N`;
        apparentWeightDisplay.textContent = `Apparent Weight: ${apparentWeight.toFixed(1)} N`;
        accelerationDisplay.textContent = `Acceleration: ${currentAcceleration.toFixed(1)} m/s²`;
    }

    /**
     * Animates the elevator movement based on scenario.
     * @param {DOMHighResTimeStamp} timestamp - Current time provided by requestAnimationFrame.
     */
    function animateElevator(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000; // Time in seconds

        let newY = INITIAL_ELEVATOR_Y;
        let newAcceleration = 0;
        let explanationText = "";

        switch (scenario) {
            case 'up-accel':
                newAcceleration = 2; // Example upward acceleration
                newY = INITIAL_ELEVATOR_Y - (0.5 * newAcceleration * Math.pow(elapsed, 2) * animationSpeed);
                explanationText = `Elevator accelerating UP. You feel HEAVIER. Apparent Weight > True Weight.`;
                break;
            case 'down-accel':
                newAcceleration = -2; // Example downward acceleration
                newY = INITIAL_ELEVATOR_Y - (0.5 * newAcceleration * Math.pow(elapsed, 2) * animationSpeed);
                explanationText = `Elevator accelerating DOWN. You feel LIGHTER. Apparent Weight < True Weight.`;
                break;
            case 'constant':
                newAcceleration = 0;
                // Simulate some movement for constant velocity
                const velocity = 1; // m/s
                newY = INITIAL_ELEVATOR_Y - (velocity * elapsed * animationSpeed);
                explanationText = `Elevator moving at CONSTANT VELOCITY. You feel NORMAL. Apparent Weight = True Weight.`;
                break;
            case 'free-fall':
                newAcceleration = -G; // Free fall acceleration
                newY = INITIAL_ELEVATOR_Y - (0.5 * newAcceleration * Math.pow(elapsed, 2) * animationSpeed);
                explanationText = `Elevator in FREE FALL. You feel WEIGHTLESS. Apparent Weight = 0.`;
                break;
            case 'rest':
            default:
                newAcceleration = 0;
                newY = INITIAL_ELEVATOR_Y;
                explanationText = `Elevator is at REST. You feel NORMAL. Apparent Weight = True Weight.`;
                break;
        }

        // Clamp elevator position within shaft boundaries
        newY = Math.max(ELEVATOR_SHAFT_MIN_Y, Math.min(ELEVATOR_SHAFT_MAX_Y, newY));

        // Update positions of elevator and person/scale
        elevatorCar.setAttribute('y', newY);
        personBody.setAttribute('y', newY + (ELEVATOR_HEIGHT - personBody.getAttribute('height')) / 2 - 10); // Adjust person Y relative to elevator
        personHead.setAttribute('cy', parseFloat(personBody.getAttribute('y')) + 10); // Adjust head Y
        scale.setAttribute('y', newY + ELEVATOR_HEIGHT - scale.getAttribute('height') - 5); // Adjust scale Y

        currentAcceleration = newAcceleration; // Update acceleration for display
        updateDisplays();
        updateExplanation(explanationText);

        // Continue animation if not at rest and not at the very top/bottom
        if (scenario !== 'rest' && newY > ELEVATOR_SHAFT_MIN_Y && newY < ELEVATOR_SHAFT_MAX_Y) {
            animationFrameId = requestAnimationFrame(animateElevator);
        } else if (scenario !== 'rest' && (newY <= ELEVATOR_SHAFT_MIN_Y || newY >= ELEVATOR_SHAFT_MAX_Y)) {
            // If it hits top or bottom, stop animation and set acceleration to 0
            currentAcceleration = 0;
            updateDisplays();
            updateExplanation(`Elevator reached end of travel. ${explanationText}`);
        }
    }

    /**
     * Starts a new animation scenario.
     * @param {string} newScenario - The scenario to start.
     */
    function startScenario(newScenario) {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        startTime = null; // Reset start time for new animation
        scenario = newScenario;
        // Reset elevator to initial position before starting new animation
        elevatorCar.setAttribute('y', INITIAL_ELEVATOR_Y);
        personBody.setAttribute('y', INITIAL_ELEVATOR_Y + (ELEVATOR_HEIGHT - personBody.getAttribute('height')) / 2 - 10);
        personHead.setAttribute('cy', parseFloat(personBody.getAttribute('y')) + 10);
        scale.setAttribute('y', INITIAL_ELEVATOR_Y + ELEVATOR_HEIGHT - scale.getAttribute('height') - 5);

        animationFrameId = requestAnimationFrame(animateElevator);
    }

    /**
     * Resets the animator to its initial state.
     */
    function resetAnimator() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        startTime = null;
        scenario = 'rest';
        currentAcceleration = 0;
        elevatorCar.setAttribute('y', INITIAL_ELEVATOR_Y);
        personBody.setAttribute('y', INITIAL_ELEVATOR_Y + (ELEVATOR_HEIGHT - personBody.getAttribute('height')) / 2 - 10);
        personHead.setAttribute('cy', parseFloat(personBody.getAttribute('y')) + 10);
        scale.setAttribute('y', INITIAL_ELEVATOR_Y + ELEVATOR_HEIGHT - scale.getAttribute('height') - 5);
        updateDisplays();
        updateExplanation("Adjust your mass, then click an elevator scenario to see how your apparent weight changes!");
    }

    // --- Event Listeners ---

    personMassInput.addEventListener('input', () => {
        currentMass = parseFloat(personMassInput.value);
        if (isNaN(currentMass) || currentMass <= 0) {
            currentMass = 1; // Default to 1kg if invalid
            personMassInput.value = 1;
        }
        updateDisplays(); // Update displays immediately on mass change
        // If an animation is running, restart it to apply new mass/acceleration
        if (scenario !== 'rest') {
            startScenario(scenario);
        }
    });

    elevatorUpAccelBtn.addEventListener('click', () => startScenario('up-accel'));
    elevatorDownAccelBtn.addEventListener('click', () => startScenario('down-accel'));
    elevatorConstantBtn.addEventListener('click', () => startScenario('constant'));
    elevatorFreeFallBtn.addEventListener('click', () => startScenario('free-fall'));
    resetAnimationBtn.addEventListener('click', resetAnimator);

    // Speed control event listeners
    speedSlowBtn.addEventListener('click', () => {
        animationSpeed = 0.5;
        updateExplanation(`Animation speed set to Slow (0.5x). ${animationExplanation.querySelector('p').textContent.split('. ')[1] || ''}`);
        if (scenario !== 'rest') startScenario(scenario); // Restart animation with new speed
    });
    speedNormalBtn.addEventListener('click', () => {
        animationSpeed = 1;
        updateExplanation(`Animation speed set to Normal (1x). ${animationExplanation.querySelector('p').textContent.split('. ')[1] || ''}`);
        if (scenario !== 'rest') startScenario(scenario); // Restart animation with new speed
    });
    speedFastBtn.addEventListener('click', () => {
        animationSpeed = 2;
        updateExplanation(`Animation speed set to Fast (2x). ${animationExplanation.querySelector('p').textContent.split('. ')[1] || ''}`);
        if (scenario !== 'rest') startScenario(scenario); // Restart animation with new speed
    });


    // Initial setup
    resetAnimator();
});
