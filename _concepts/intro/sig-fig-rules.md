---
title: 📘 Significant Figures Rules
summary: Learn the rules for identifying and counting significant figures in any measurement.
layout: single
collection: concepts
permalink: /concepts/intro/sig-fig-rules/
topic: intro
tags: [measurement, precision, accuracy, calculations]
difficulty: beginner
order: 6
sidebar:
  nav: intro-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
Significant figures are a way to show how precise a measurement is. Knowing which digits are "significant" helps us avoid pretending our measurements are more accurate than they really are.
</p>

---

## **What are Significant Figures?**

Significant figures (often called "sig figs") are the digits in a measurement that carry meaning and contribute to its precision. They include all the digits you are certain of, plus one estimated digit.

For example, if you measure a length as 5.2 cm with a ruler, the '5' is certain, and the '2' is your best estimate between the marks. Both are significant. If you then measure it with a more precise tool as 5.23 cm, the '3' becomes the estimated digit, and you have more significant figures.

---

## **Rules for Counting Significant Figures**

Here are the main rules to determine which digits in a number are significant:

1.  **Non-zero digits are always significant.**
    * Example: `23.45` has 4 significant figures.
2.  **Zeros between non-zero digits are significant (called "sandwich zeros").**
    * Example: `1005` has 4 significant figures.
3.  **Leading zeros (zeros before non-zero digits) are NOT significant.** They are just placeholders.
    * Example: `0.0025` has 2 significant figures. (The zeros before '2' are not significant).
4.  **Trailing zeros (zeros at the end of the number):**
    * **Significant if the number contains a decimal point.**
        * Example: `1200.` has 4 significant figures.
        * Example: `2.00` has 3 significant figures.
    * **NOT significant if the number does NOT contain a decimal point.**
        * Example: `1200` has 2 significant figures. (The zeros are just placeholders).

---

## **Interactive: Identify Significant Figures**

Click on the boxes below the digits you think are significant. Then, click "Check Answer" to see how you did!

<div class="sig-fig-interactive-wrapper">
    <div class="input-controls">
        <label for="numberSelect">Choose Number:</label>
        <select id="numberSelect">
            <option value="123.45">123.45</option>
            <option value="1005">1005</option>
            <option value="0.0025">0.0025</option>
            <option value="1200.">1200.</option>
            <option value="1200_no_decimal">1200 (no decimal)</option>
            <option value="2.00">2.00</option>
        </select>
    </div>
    <div class="number-display-area">
        <div id="numberDisplay" class="number-display-digits">
            </div>
    </div>
    <div class="button-controls">
        <button id="checkAnswerBtn" class="animator-button btn-green" aria-label="Check my significant figures selection">Check Answer</button>
        <button id="resetBtn" class="animator-button btn-red" aria-label="Reset the interactive">Reset</button>
    </div>
    <div id="feedbackMessage" class="feedback-message"></div>
</div>

<script src="/assets/js/intro/sig-fig-rules-animator.js"></script>

---

## **Interactive Match: Significant Figures**

Test your understanding of the key terms and rules for significant figures.

<div class="vocab-matching-interactive-wrapper sig-fig-rules">
    <div class="animator-explanation">
        <p>Click a term and then its matching meaning. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vocabTermsSigFigRules">
                    </div>
            </div>
            <div class="vocab-card-column">
                <div id="vocabDefinitionsSigFigRules">
                    </div>
            </div>
        </div>
        <div id="vocabFeedbackSigFigRules"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonSigFigRules" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/intro/sig-fig-rules-interactive-match.js"></script>

---

## **The Link to Uncertainty**

At its core, the reason we use significant figures is to show the **uncertainty** of a measurement. The last significant digit is always the one you are estimating, and it tells us exactly how precise the tool was.

For example, a measurement of $12.3 \text{ cm}$ (with 3 sig figs) suggests your ruler was precise to about $0.1 \text{ cm}$. The last digit, the `3`, is the one you estimated. It's really a quick way to say the measurement is $12.3 \pm 0.1 \text{ cm}$. .

Using significant figures is a common shortcut for reporting uncertainty in science.

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of significant figures rules.</p>
<audio controls class="audio-player" aria-label="Audio summary of significant figures rules">
  <source src="/assets/audio/intro/sig-fig-rules-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% include quick-concept-question.html
  question="How many significant figures are in the measurement 0.004050 meters?"
  answer="There are **four** significant figures. The leading zeros (0.00) are not significant. The '4' and '5' are significant. The zero between '4' and '5' is a sandwich zero, so it's significant. The trailing zero after '5' is significant because there's a decimal point in the number."
%}

---

## **Related Skills**

Ready to apply your understanding of significant figures? Check out these related skills:

* <a href="{{ '/skills/intro/uncertainty/' | relative_url }}">Measuring Uncertainty</a>
<hr>

<h2>Practice Problems</h2>

Test your understanding with these problems: