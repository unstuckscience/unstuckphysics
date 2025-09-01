// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Font Size Adjustment ---
    const fontSizeDecreaseBtn = document.getElementById('font-size-decrease');
    const fontSizeIncreaseBtn = document.getElementById('font-size-increase');
    const htmlElement = document.documentElement; // The <html> tag

    const fontSizes = ['small', 'medium', 'large'];
    let currentFontSizeIndex = fontSizes.indexOf(htmlElement.getAttribute('data-font-size') || 'medium');

    function updateFontSize() {
        htmlElement.setAttribute('data-font-size', fontSizes[currentFontSizeIndex]);
        localStorage.setItem('fontSize', fontSizes[currentFontSizeIndex]);
    }

    if (fontSizeDecreaseBtn) {
        fontSizeDecreaseBtn.addEventListener('click', () => {
            if (currentFontSizeIndex > 0) {
                currentFontSizeIndex--;
                updateFontSize();
            }
        });
    }

    if (fontSizeIncreaseBtn) {
        fontSizeIncreaseBtn.addEventListener('click', () => {
            if (currentFontSizeIndex < fontSizes.length - 1) {
                currentFontSizeIndex++;
                updateFontSize();
            }
        });
    }

    // --- Dark Mode Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const lightModeIcon = document.querySelector('.light-mode-icon');
    const darkModeIcon = document.querySelector('.dark-mode-icon');

    function updateThemeIcons() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (lightModeIcon && darkModeIcon) {
            if (currentTheme === 'dark') {
                lightModeIcon.style.display = 'none';
                darkModeIcon.style.display = 'inline-block';
            } else {
                lightModeIcon.style.display = 'inline-block';
                darkModeIcon.style.display = 'none';
            }
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcons();
        });
    }

    // Initialize theme icons on load
    updateThemeIcons();
});