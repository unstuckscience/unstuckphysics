document.addEventListener('DOMContentLoaded', () => {
    // Get references to SVG elements
    const relativeVelocitySVG = document.getElementById('relativeVelocitySVG');
    const sidewalk = document.getElementById('sidewalk');
    const person = document.getElementById('person');
    const vPersonSidewalkLabel = document.getElementById('vPersonSidewalk');
    const vSidewalkGroundLabel = document.getElementById('vSidewalkGround');
    const vPersonGroundLabel = document.getElementById('vPersonGround');
    const animationExplanation = document.getElementById('animationExplanation');

    // Get references to control elements
    const personSpeedInput = document.getElementById('personSpeed');
    const sidewalkSpeedInput = document.getElementById('sidewalkSpeed');
    const walkForwardBtn = document.getElementById('walkForwardBtn');
    const walkBackwardBtn = document.getElementById('walkBackwardBtn');
    const toggleSidewalkBtn = document.getElementById('toggleSidewalkBtn');
    const resetBtn = document.getElementById('resetAnimation');

    // Check if all essential elements are found
    if (!relativeVelocitySVG || !sidewalk || !person || !vPersonSidewalkLabel || !vSidewalkGroundLabel ||
        !vPersonGroundLabel || !animationExplanation || !personSpeedInput || !sidewalkSpeedInput ||
        !walkForwardBtn || !walkBackwardBtn || !toggleSidewalkBtn || !resetBtn) {
        console.error('One or more essential elements for the Relative Velocity Animator were not found. Script cannot proceed.');
        return;
    }

    // Animation parameters
    const SVG_WIDTH = 700;
    const PERSON_START_X = 350; // Center of the person initially
    const PERSON_WIDTH = 30;
    const SIDEWALK_WIDTH = 700; // Sidewalk covers full SVG width

    let animationFrameId = null;
    let lastTimestamp = 0;

    let personVelocityRelativeSidewalk = 0; // V_PS
    let sidewalkVelocityRelativeGround = 0; // V_SG
    let personPositionRelativeSidewalk = PERSON_START_X; // Person's X relative to sidewalk's left edge
    let sidewalkPositionRelativeGround = 0; // Sidewalk's X relative to ground's left edge

    let isSidewalkMoving = false; // State for toggle button

    // Function to update positions and labels
    function updateAnimation(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const deltaTime = (timestamp - lastTimestamp) / 1000; // Convert to seconds
        lastTimestamp = timestamp;

        // Update sidewalk position
        sidewalkPositionRelativeGround += sidewalkVelocityRelativeGround * deltaTime;
        // Wrap sidewalk around if it goes off screen
        if (sidewalkVelocityRelativeGround > 0 && sidewalkPositionRelativeGround >= SIDEWALK_WIDTH) {
            sidewalkPositionRelativeGround -= SIDEWALK_WIDTH;
        } else if (sidewalkVelocityRelativeGround < 0 && sidewalkPositionRelativeGround <= -SIDEWALK_WIDTH) {
            sidewalkPositionRelativeGround += SIDEWALK_WIDTH;
        }
        sidewalk.setAttribute('x', sidewalkPositionRelativeGround);

        // Update person's position relative to sidewalk
        personPositionRelativeSidewalk += personVelocityRelativeSidewalk * deltaTime;
        // Keep person within sidewalk bounds (simplified)
        const personMinX = 0 + PERSON_WIDTH / 2; // Left edge of SVG
        const personMaxX = SIDEWALK_WIDTH - PERSON_WIDTH / 2; // Right edge of SVG
        if (personPositionRelativeSidewalk < personMinX) {
            personPositionRelativeSidewalk = personMinX;
            personVelocityRelativeSidewalk = 0; // Stop if hitting edge
            animationExplanation.innerHTML = `<p>Reached left edge of sidewalk.</p>`;
        } else if (personPositionRelativeSidewalk > personMaxX) {
            personPositionRelativeSidewalk = personMaxX;
            personVelocityRelativeSidewalk = 0; // Stop if hitting edge
            animationExplanation.innerHTML = `<p>Reached right edge of sidewalk.</p>`;
        }

        // Calculate person's absolute position on SVG (relative to ground)
        // Person's X = (Sidewalk's X relative to ground) + (Person's X relative to sidewalk)
        // Adjust for person's initial centering on sidewalk
        const personAbsX = (sidewalkPositionRelativeGround + personPositionRelativeSidewalk) % SIDEWALK_WIDTH;
        person.setAttribute('x', personAbsX - PERSON_WIDTH / 2); // Center person rect

        // Calculate V_person/ground
        const personVelocityRelativeGround = personVelocityRelativeSidewalk + sidewalkVelocityRelativeGround; // V_PG = V_PS + V_SG

        // Update labels
        vPersonSidewalkLabel.textContent = `V_person/sidewalk: ${personVelocityRelativeSidewalk.toFixed(1)} m/s`;
        vSidewalkGroundLabel.textContent = `V_sidewalk/ground: ${sidewalkVelocityRelativeGround.toFixed(1)} m/s`;
        vPersonGroundLabel.textContent = `V_person/ground: ${personVelocityRelativeGround.toFixed(1)} m/s`;

        animationFrameId = requestAnimationFrame(updateAnimation);
    }

    function startAnimation() {
        if (!animationFrameId) {
            lastTimestamp = performance.now(); // Reset lastTimestamp to prevent jump
            animationFrameId = requestAnimationFrame(updateAnimation);
            updateButtonStates();
        }
    }

    function stopAnimation() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
            updateButtonStates();
        }
    }

    function resetSimulation() {
        stopAnimation();
        personVelocityRelativeSidewalk = 0;
        sidewalkVelocityRelativeGround = 0;
        personPositionRelativeSidewalk = PERSON_START_X;
        sidewalkPositionRelativeGround = 0;
        isSidewalkMoving = false;

        sidewalk.setAttribute('x', sidewalkPositionRelativeGround);
        person.setAttribute('x', PERSON_START_X - PERSON_WIDTH / 2); // Reset person's visual X

        vPersonSidewalkLabel.textContent = `V_person/sidewalk: 0.0 m/s`;
        vSidewalkGroundLabel.textContent = `V_sidewalk/ground: 0.0 m/s`;
        vPersonGroundLabel.textContent = `V_person/ground: 0.0 m/s`;
        animationExplanation.innerHTML = `<p>Adjust speeds and click buttons to see how relative velocity works!</p>`;
        updateButtonStates();
    }

    function updateButtonStates() {
        // Enable/disable buttons based on current state
        walkForwardBtn.disabled = false;
        walkBackwardBtn.disabled = false;
        toggleSidewalkBtn.disabled = false;
        resetBtn.disabled = false;

        // If sidewalk is off, disable person movement buttons (optional, but makes sense)
        // if (!isSidewalkMoving && personVelocityRelativeSidewalk === 0) {
        //     walkForwardBtn.disabled = true;
        //     walkBackwardBtn.disabled = true;
        // }
    }

    // Event Listeners
    walkForwardBtn.addEventListener('click', () => {
        personVelocityRelativeSidewalk = parseFloat(personSpeedInput.value);
        animationExplanation.innerHTML = `<p>You are walking forward on the sidewalk.</p>`;
        startAnimation();
    });

    walkBackwardBtn.addEventListener('click', () => {
        personVelocityRelativeSidewalk = -parseFloat(personSpeedInput.value);
        animationExplanation.innerHTML = `<p>You are walking backward on the sidewalk.</p>`;
        startAnimation();
    });

    toggleSidewalkBtn.addEventListener('click', () => {
        isSidewalkMoving = !isSidewalkMoving;
        if (isSidewalkMoving) {
            sidewalkVelocityRelativeGround = parseFloat(sidewalkSpeedInput.value);
            animationExplanation.innerHTML = `<p>Sidewalk is now moving.</p>`;
        } else {
            sidewalkVelocityRelativeGround = 0;
            animationExplanation.innerHTML = `<p>Sidewalk is now stopped.</p>`;
        }
        startAnimation(); // Ensure animation updates
    });

    resetBtn.addEventListener('click', resetSimulation);

    // Initial setup
    resetSimulation(); // Set initial state on page load
});