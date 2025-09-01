---
title: 📘 Accuracy vs. Precision
summary: Learn the difference between accuracy and precision in scientific measurements, and why both are crucial for reliable data.
permalink: /concepts/intro/accuracy-vs-precision/
layout: single
collection: concepts
topic: intro
tags: [measurement, accuracy, precision, data, error]
order: 4
sidebar:
  nav: intro-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">In science, understanding the difference between **accuracy** and **precision** is crucial for reliable data. This page will define what each term means and show you why both are necessary for good scientific practice.</p>

---

## **What is Accuracy?**

**Accuracy** is how close a measurement is to the **true** or **actual** value. Think of it like hitting the bullseye on a dartboard. If your dart hits the very center, you are accurate. 

* **Example:** If a ruler is actually 30 cm long, and you measure it with another ruler and get exactly 30 cm, your measurement is accurate.
* **Analogy:** Hitting the bullseye.

---

## **What is Precision?**

**Precision** is how close repeated measurements are to **each other**. It's about how consistent and reproducible your measurements are. If your darts land very close together, even if they're not on the bullseye, you are precise. 

* **Example:** You measure the same ruler five times and get 29.8 cm, 29.9 cm, 29.8 cm, 29.9 cm, and 29.8 cm. These measurements are very close to each other, so they are precise. They might not be accurate if the true value is 30 cm, but they are consistent.
* **Analogy:** All darts landing in the same small area, even if it's not the bullseye.

---

## **Accuracy vs. Precision: The Difference**

It's important to understand that a measurement can be:

* **Accurate and Precise:** All measurements are close to the true value AND close to each other. (Darts all in the bullseye).
* **Precise but Not Accurate:** Measurements are close to each other, but not close to the true value. (Darts all grouped together, but far from the bullseye). This often means there's a problem with your measuring tool or method.
* **Accurate but Not Precise:** Measurements are spread out, but their average might be close to the true value. (Darts scattered, but some hit the bullseye, and others are equally spread around it). This usually means you're not being consistent.
* **Neither Accurate nor Precise:** Measurements are spread out and not close to the true value. (Darts scattered all over the board).

---

## **Interactive: Target Practice**

Let's see how accuracy and precision play out on a target!

<div class="animator-container accuracy-precision-animator">
    <div style="margin-bottom: 1rem;">
        <button id="showAccuratePrecise" class="animator-button btn-accurate-precise" aria-label="Show Accurate and Precise darts">Accurate & Precise</button>
        <button id="showPreciseNotAccurate" class="animator-button btn-precise-not-accurate" aria-label="Show Precise but Not Accurate darts">Precise but Not Accurate</button>
        <button id="showAccurateNotPrecise" class="animator-button btn-accurate-not-precise" aria-label="Show Accurate but Not Precise darts">Accurate but Not Precise</button>
        <button id="showNeither" class="animator-button btn-neither" aria-label="Show Neither Accurate nor Precise darts">Neither</button>
        <button id="resetAnimation" class="animator-button btn-reset" aria-label="Reset animation">Reset</button>
    </div>

    <svg id="accuracyPrecisionSVG" width="100%" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="accuracyPrecisionSVGTitle accuracyPrecisionSVGDesc">
        <title id="accuracyPrecisionSVGTitle">Accuracy vs. Precision Target Animation</title>
        <desc id="accuracyPrecisionSVGDesc">An animation illustrating accuracy and precision using dartboard targets.</desc>

        <defs>
            <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#007bff" />
            </marker>
            <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#28a745" />
            </marker>
            <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22" />
            </marker>
            <marker id="arrowhead-purple" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6f42c1" />
            </marker>
            <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#A00000" />
            </marker>
        </defs>

        <circle cx="200" cy="125" r="100" fill="#eee" stroke="#ccc" stroke-width="2" />
        <circle cx="200" cy="125" r="70" fill="#ddd" stroke="#ccc" stroke-width="2" />
        <circle cx="200" cy="125" r="40" fill="#bbb" stroke="#ccc" stroke-width="2" />
        <circle cx="200" cy="125" r="10" fill="#999" stroke="#ccc" stroke-width="2" />

        <g id="dartsGroup">
            <circle class="dart accurate-precise" cx="200" cy="125" r="5" fill="black" opacity="0" />
            <circle class="dart accurate-precise" cx="205" cy="120" r="5" fill="black" opacity="0" />
            <circle class="dart accurate-precise" cx="195" cy="130" r="5" fill="black" opacity="0" />

            <circle class="dart precise-not-accurate" cx="100" cy="50" r="5" fill="black" opacity="0" />
            <circle class="dart precise-not-accurate" cx="105" cy="55" r="5" fill="black" opacity="0" />
            <circle class="dart precise-not-accurate" cx="95" cy="45" r="5" fill="black" opacity="0" />

            <circle class="dart accurate-not-precise" cx="200" cy="125" r="5" fill="black" opacity="0" />
            <circle class="dart accurate-not-precise" cx="150" cy="100" r="5" fill="black" opacity="0" />
            <circle class="dart accurate-not-precise" cx="250" cy="150" r="5" fill="black" opacity="0" />

            <circle class="dart neither" cx="50" cy="200" r="5" fill="black" opacity="0" />
            <circle class="dart neither" cx="350" cy="50" r="5" fill="black" opacity="0" />
            <circle class="dart neither" cx="200" cy="20" r="5" fill="black" opacity="0" />
        </g>
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Click a button above to see how accuracy and precision look on the target!</p>
    </div>
</div>

<script src="/assets/js/intro/accuracy-precision-animator.js"></script>

---

## **Why do Accuracy and Precision Matter?**

In science, both accuracy and precision are super important:

* **Reliable Results:** If your measurements aren't accurate, your conclusions might be wrong. If they're not precise, you can't trust that you'd get the same result again.
* **Finding Mistakes:** If your measurements are precise but not accurate, it tells you that your equipment might be off, or there's a consistent error in how you're doing things.
* **Good Science:** Good scientists always try to be both accurate and precise to get the best and most trustworthy data.

---

## **Interactive Match: Accuracy vs. Precision**

Test your understanding of key terms related to accuracy and precision by matching them with their definitions.

<div class="vocab-matching-interactive-wrapper accuracy-precision">
    <div class="animator-explanation">
        <p>Click a term and then its matching definition. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vocabTermsAccuracyPrecision">
                    </div>
            </div>
            <div class="vocab-card-column">
                <div id="vocabDefinitionsAccuracyPrecision">
                    </div>
            </div>
        </div>
        <div id="vocabFeedbackAccuracyPrecision"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonAccuracyPrecision" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/intro/accuracy-precision-interactive-match.js"></script>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of accuracy vs. precision.</p>
<audio controls class="audio-player" aria-label="Audio summary of accuracy vs. precision">
    <source src="/assets/audio/intro/accuracy-precision-audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

---

{% include quick-concept-question.html
    question="If you weigh a 10 kg bag of sugar five times and get 8.1 kg, 8.2 kg, 8.1 kg, 8.2 kg, and 8.1 kg, are your measurements accurate, precise, both, or neither?"
    answer="Your measurements are precise but not accurate. They are close to each other (precise), but they are not close to the true value of 10 kg (not accurate)."
%}

---

## **Related Concepts & Skills**

* <a href="{{ '/skills/intro/judge-accuracy-precision/' | relative_url }}">Judge Accuracy and Precision (Skill)</a>
* <a href="{{ '/skills/intro/sig-fig-calculations/' | relative_url }}">Significant Figures in Calculations (Skill)</a>
* <a href="{{ '/skills/intro/unit-conversions/' | relative_url }}">Unit Conversions (Skill)</a>