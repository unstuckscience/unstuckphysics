document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const movingObject = document.getElementById('movingObject');
    const distanceLabel = document.getElementById('distanceLabel');
    const displacementLabel = document.getElementById('displacementLabel');
    const animationExplanation = document.getElementById('animationExplanation');

    // Get references to control buttons
    const moveRightBtn = document.getElementById('moveRight');
    const moveLeftBtn = document.getElementById('moveLeft');
    const resetPositionBtn = document.getElementById('resetPosition'); // Corrected ID

    // Check if all essential elements are found
    if (!movingObject || !distanceLabel || !displacementLabel || !animationExplanation || !moveRightBtn || !moveLeftBtn || !resetPositionBtn) {
        console.error('One or more essential elements for the Distance/Displacement Animator were not found. Script cannot proceed.');
        return;
    }

    // Animation state variables
    let currentPosition = 50; // SVG X-coordinate of the object (start at 50)
    let totalDistance = 0;
    let displacement = 0;
    const stepSize = 50; // How many pixels the object moves per click

    // Function to update the object's position and labels
    function updateAnimation() {
        movingObject.setAttribute('cx', currentPosition);
        distanceLabel.textContent = `Distance: ${totalDistance}m`;
        displacementLabel.textContent = `Displacement: ${displacement}m`;

        // Update explanation based on state
        if (totalDistance === 0 && displacement === 0) {
            animationExplanation.innerHTML = `<p>Move the green circle to see how distance and displacement change!</p>`;
        } else {
            animationExplanation.innerHTML = `<p>You moved. Distance is the total path covered. Displacement is how far you are from the start.</p>`;
        }
    }

    // Event Listeners
    moveRightBtn.addEventListener('click', () => {
        currentPosition += stepSize;
        totalDistance += stepSize / 10; // Assuming 10px = 1m for labels
        displacement += stepSize / 10;
        updateAnimation();
    });

    moveLeftBtn.addEventListener('click', () => {
        currentPosition -= stepSize;
        totalDistance += stepSize / 10; // Distance always increases
        displacement -= stepSize / 10; // Displacement can be negative
        updateAnimation();
    });

    resetPositionBtn.addEventListener('click', () => {
        currentPosition = 50;
        totalDistance = 0;
        displacement = 0;
        updateAnimation();
    });

    // Initial setup
    updateAnimation();
});