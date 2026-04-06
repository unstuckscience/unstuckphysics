---
title: 📘 Newton's Law of Universal Gravitation
summary: Explore the fundamental law that describes the gravitational attraction between all objects with mass.
permalink: /gravitation/universal-gravitation/
layout: single
collection: concepts
topic: gravitation
tags: [gravitation, newton, force, inverse-square]
order: 4
sidebar:
 nav: gravitation-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" style="border-left: 4px solid #6A5ACD; padding-left: 1rem;">
Newton's Law of Universal Gravitation states that every particle in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of Newton's Law of Universal Gravitation.</p>
<audio controls class="audio-player" aria-label="Audio summary of Newton's Law of Universal Gravitation">
  <source src="/assets/audio/gravitation/universal-gravitation-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **The Universal Attraction**

Before Isaac Newton, scientists thought the rules for motion on Earth were different from the rules for motion in the heavens. Newton's great insight was that the same force causing an apple to fall to the ground is the force that keeps the Moon in orbit around the Earth.

The Gravitational Equation

The magnitude of the gravitational force ($F_g$) between two objects can be calculated using the following formula:

$$F_G = G \frac{m_1 m_2}{r^2}$$

Where:

$F_G$ is the force of gravity (Newtons, N).

$G$ is the Universal Gravitational Constant ($6.674 \times 10^{-11} \text{ N}\cdot\text{m}^2/\text{kg}^2$).

$m_1$ and $m_2$ are the masses of the two objects (kilograms, kg).

$r$ is the distance between the centers of the two masses (meters, m).

The Inverse Square Law

One of the most critical aspects of this law is the inverse square relationship with distance. Because the distance ($r$) is squared in the denominator:

If you double the distance between two objects ($\times 2$), the force becomes one-fourth as strong ($1/2^2$).

If you triple the distance ($\times 3$), the force becomes one-ninth as strong ($1/3^2$).

If you cut the distance in half ($\times 0.5$), the force becomes four times stronger ($1/0.5^2$).

Interactive: Universal Gravitation Vocabulary

Test your knowledge of the variables and concepts that define the pull of gravity.

<div class="vocab-matching-interactive-wrapper newton-grav">
<div class="animator-explanation">
<p>Match the variables and concepts of Universal Gravitation to their correct descriptions.</p>
</div>

<div class="vocab-matching-container">
<div class="vocab-grid">
<div class="vocab-card-column">
<div id="newtonTerms">
<!-- Terms rendered by JS -->
</div>
</div>
<div class="vocab-card-column">
<div id="newtonDefinitions">
<!-- Definitions rendered by JS -->
</div>
</div>
</div>
<div id="newtonFeedback"></div>
</div>
<div class="button-controls">
<button id="newtonResetButton" class="animator-button btn-default">Reset Game</button>
</div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>

<script src="/assets/js/gravitation/universal-gravitation-match.js"></script>

{% include quick-concept-question.html
question="If the mass of one object is doubled and the distance between the objects is also doubled, what happens to the gravitational force?"
answer="The force is halved. Doubling one mass doubles the force ($\times 2$), but doubling the distance divides the force by four ($\div 4$). Combining these: $2/4 = 1/2$."
%}

<div>
<h3>Related Skills</h3>
<ul>
<li><a href="{{ '/skills/gravitation/calculating-gravitational-force/' | relative_url }}"><strong>Calculating Gravitational Force</strong></a></li>
<li><a href="{{ '/skills/gravitation/inverse-square-proportions/' | relative_url }}"><strong>Solving Inverse Square Proportions</strong></a></li>
</ul>
</div>