// assets/js/common/interactive-match-base.js
// Common base JavaScript for all Interactive Match components on Unstuck Physics.
// This file contains the core logic for rendering, interaction, and accessibility.

/**
 * Initializes an interactive matching game.
 *
 * @param {Object} options - Configuration options for the interactive match.
 * @param {Array<Object>} options.vocabData - An array of objects, each with 'term' and 'definition' properties.
 * @param {string} options.termsContainerId - The ID of the HTML element where term cards will be rendered.
 * @param {string} options.definitionsContainerId - The ID of the HTML element where definition cards will be rendered.
 * @param {string} options.feedbackMessageId - The ID of the HTML element for displaying feedback messages.
 * @param {string} options.resetButtonId - The ID of the HTML element for the reset button.
 */
function initInteractiveMatch(options) {
    const { vocabData, termsContainerId, definitionsContainerId, feedbackMessageId, resetButtonId } = options;

    const termsContainer = document.getElementById(termsContainerId);
    const definitionsContainer = document.getElementById(definitionsContainerId);
    const feedbackMessage = document.getElementById(feedbackMessageId);
    const resetButton = document.getElementById(resetButtonId);

    // Critical check: Ensure all necessary elements are found before proceeding.
    // Provides a visual error message if elements are missing, aiding debugging.
    if (!termsContainer || !definitionsContainer || !feedbackMessage || !resetButton) {
        console.error(`Interactive Match Initialization Error: One or more required elements not found for ID group:
            Terms Container: #${termsContainerId} (${!!termsContainer})
            Definitions Container: #${definitionsContainerId} (${!!definitionsContainer})
            Feedback Message: #${feedbackMessageId} (${!!feedbackMessage})
            Reset Button: #${resetButtonId} (${!!resetButton})
            Stopping script execution for this interactive match.`);

        const errorDiv = document.createElement('div');
        errorDiv.style.color = 'red';
        errorDiv.style.fontWeight = 'bold';
        errorDiv.style.marginTop = '15px';
        errorDiv.textContent = 'Error: Interactive Match could not load. Missing HTML elements. Please report this issue if it persists.';

        // Find the parent wrapper to append the error message gracefully
        const parentWrapper = termsContainer ? termsContainer.closest('.vocab-matching-interactive-wrapper') : document.body;
        parentWrapper.appendChild(errorDiv);
        return; // Stop function execution
    }

    // Set ARIA live region attributes for screen reader announcements of feedback
    feedbackMessage.setAttribute('aria-live', 'polite');
    feedbackMessage.setAttribute('aria-atomic', 'true');

    let selectedTermCard = null;
    let selectedDefinitionCard = null;
    let matches = 0;

    /**
     * Shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
     * @param {Array} array - The array to shuffle.
     * @returns {Array} The shuffled array.
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /**
     * Renders or re-renders the vocabulary cards on the page.
     * Resets game state and shuffles cards for a new game.
     */
    function renderCards() {
        termsContainer.innerHTML = '';
        definitionsContainer.innerHTML = '';
        feedbackMessage.textContent = '';
        feedbackMessage.className = 'vocab-feedback'; // Reset class for styling

        matches = 0;
        selectedTermCard = null;
        selectedDefinitionCard = null;

        // Prepare terms and definitions for rendering, associating them with their original term ID for matching
        const termsToRender = vocabData.map(item => ({ value: item.term, type: 'term', id: item.term }));
        const definitionsToRender = vocabData.map(item => ({ value: item.definition, type: 'definition', id: vocabData.find(d => d.definition === item.definition).term }));

        // Render shuffled term cards
        shuffleArray(termsToRender).forEach(item => {
            const card = document.createElement('div');
            card.className = 'vocab-card term-card';
            card.textContent = item.value;
            card.dataset.id = item.id; // Store the original term as a data attribute for matching
            card.setAttribute('tabindex', '0'); // Make card focusable via keyboard
            card.setAttribute('role', 'option'); // ARIA role for selectable items
            card.setAttribute('aria-selected', 'false'); // ARIA state: not selected by default
            card.addEventListener('click', () => handleCardClick(card, 'term'));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { // Allow selection with Enter or Space keys
                    e.preventDefault(); // Prevent default spacebar action (scrolling)
                    handleCardClick(card, 'term');
                }
            });
            termsContainer.appendChild(card);
        });

        // Render shuffled definition cards
        shuffleArray(definitionsToRender).forEach(item => {
            const card = document.createElement('div');
            card.className = 'vocab-card definition-card';
            card.textContent = item.value;
            card.dataset.id = item.id; // Store the original term as a data attribute for matching
            card.setAttribute('tabindex', '0'); // Make card focusable via keyboard
            card.setAttribute('role', 'option'); // ARIA role for selectable items
            card.setAttribute('aria-selected', 'false'); // ARIA state: not selected by default
            card.addEventListener('click', () => handleCardClick(card, 'definition'));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { // Allow selection with Enter or Space keys
                    e.preventDefault(); // Prevent default spacebar action (scrolling)
                    handleCardClick(card, 'definition');
                }
            });
            definitionsContainer.appendChild(card);
        });

        // Set ARIA roles for the card containers, indicating they are groups of options
        termsContainer.setAttribute('role', 'group');
        definitionsContainer.setAttribute('role', 'group');
    }

    /**
     * Handles the click or keydown event on a vocabulary card.
     * Manages selection state, checks for matches, and provides feedback.
     * @param {HTMLElement} card - The clicked card element.
     * @param {string} type - The type of card ('term' or 'definition').
     */
    function handleCardClick(card, type) {
        // Do nothing if the card is already matched
        if (card.classList.contains('matched')) {
            return;
        }

        // Clear 'incorrect' state from previously selected cards if any, before making new selections
        if (selectedTermCard && selectedTermCard.classList.contains('incorrect')) {
            selectedTermCard.classList.remove('selected', 'incorrect');
            selectedTermCard.setAttribute('aria-selected', 'false');
        }
        if (selectedDefinitionCard && selectedDefinitionCard.classList.contains('incorrect')) {
            selectedDefinitionCard.classList.remove('selected', 'incorrect');
            selectedDefinitionCard.setAttribute('aria-selected', 'false');
        }

        // Manage selection for the current click/keydown
        if (type === 'term') {
            // If a different term card was already selected, deselect it
            if (selectedTermCard && selectedTermCard !== card) {
                selectedTermCard.classList.remove('selected');
                selectedTermCard.setAttribute('aria-selected', 'false');
            }
            selectedTermCard = card;
            selectedTermCard.classList.add('selected');
            selectedTermCard.setAttribute('aria-selected', 'true');
            // Update feedback for screen readers
            feedbackMessage.textContent = 'Selected ' + card.textContent + '. Now select a matching definition.';
            feedbackMessage.className = 'vocab-feedback'; // Reset class
        } else { // type === 'definition'
            // If a different definition card was already selected, deselect it
            if (selectedDefinitionCard && selectedDefinitionCard !== card) {
                selectedDefinitionCard.classList.remove('selected');
                selectedDefinitionCard.setAttribute('aria-selected', 'false');
            }
            selectedDefinitionCard = card;
            selectedDefinitionCard.classList.add('selected');
            selectedDefinitionCard.setAttribute('aria-selected', 'true');
            // Update feedback for screen readers
            feedbackMessage.textContent = 'Selected ' + card.textContent + '. Now select a matching term.';
            feedbackMessage.className = 'vocab-feedback'; // Reset class
        }

        // If both a term and a definition are selected, attempt a match
        if (selectedTermCard && selectedDefinitionCard) {
            if (selectedTermCard.dataset.id === selectedDefinitionCard.dataset.id) {
                // Correct match
                selectedTermCard.classList.remove('selected');
                selectedDefinitionCard.classList.remove('selected');
                selectedTermCard.setAttribute('aria-selected', 'false'); // State is now 'matched'
                selectedDefinitionCard.setAttribute('aria-selected', 'false'); // State is now 'matched'

                selectedTermCard.classList.add('matched');
                selectedDefinitionCard.classList.add('matched');
                selectedTermCard.removeAttribute('tabindex'); // Matched cards are no longer interactable
                selectedDefinitionCard.removeAttribute('tabindex'); // Matched cards are no longer interactable

                feedbackMessage.textContent = `Correct match: ${selectedTermCard.textContent} and ${selectedDefinitionCard.textContent}`;
                feedbackMessage.classList.add('correct');
                matches++;

                // Clear selections for the next match
                selectedTermCard = null;
                selectedDefinitionCard = null;

                // Check if all pairs are matched
                if (matches === vocabData.length) {
                    feedbackMessage.textContent = 'All matched! Great job!';
                    feedbackMessage.classList.add('correct');
                    // Move focus to the reset button for easy replay
                    resetButton.focus();
                }
            } else {
                // Incorrect match
                feedbackMessage.textContent = 'Incorrect match. Try again!';
                feedbackMessage.classList.add('incorrect');

                selectedTermCard.classList.add('incorrect');
                selectedDefinitionCard.classList.add('incorrect');

                // Briefly show incorrect state, then reset selection after a short delay
                setTimeout(() => {
                    if (selectedTermCard) {
                        selectedTermCard.classList.remove('selected', 'incorrect');
                        selectedTermCard.setAttribute('aria-selected', 'false');
                    }
                    if (selectedDefinitionCard) {
                        selectedDefinitionCard.classList.remove('selected', 'incorrect');
                        selectedDefinitionCard.setAttribute('aria-selected', 'false');
                    }
                    selectedTermCard = null;
                    selectedDefinitionCard = null;
                    feedbackMessage.textContent = ''; // Clear feedback message
                    feedbackMessage.className = 'vocab-feedback'; // Reset class
                }, 700); // Short delay to visually indicate incorrect match
            }
        }
    }

    // Event listener for the reset button
    resetButton.addEventListener('click', renderCards);
    resetButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            renderCards();
        }
    });

    // Initial rendering of cards when the page loads
    renderCards();
}