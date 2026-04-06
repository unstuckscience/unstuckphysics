---
title: 📘 Weight and Apparent Weight
summary: Learn the difference between true weight and apparent weight, especially in elevators and other situations with acceleration.
permalink: /concepts/forces/weight-apparent-weight/
layout: single
collection: concepts
topic: forces
tags: [weight, apparent weight, gravity, normal force, elevator, acceleration, newtons second law]
order: 6
sidebar:
 nav: forces-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
**True weight** is the force of gravity pulling you downward. **Apparent weight** is the support force pushing up on you, like the force from a floor or scale. They are often the same, but they can be different when you are accelerating.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of weight and apparent weight.</p>
<audio controls class="audio-player" aria-label="Audio summary of weight and apparent weight">
  <source src="/assets/audio/forces/weight-apparent-weight-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **What is True Weight?**

Your **true weight** is the force of gravity acting on you.

* **Formula:** $W = mg$

  * $W$ = weight in newtons (N)
  * $m$ = mass in kilograms (kg)
  * $g$ = gravitational field strength, about $9.8 \text{ m/s}^2$

Your true weight usually stays the same unless your mass changes or you move far from Earth.

---

## **What is Apparent Weight?**

Your **apparent weight** is the normal force pushing up on you.

This is the force you feel when you stand on the ground, stand on a scale, or ride in an elevator.

* A bathroom scale measures your apparent weight.
* Apparent weight depends on acceleration.
* Apparent weight can be greater than, less than, or equal to true weight.

---

## **Interactive: Elevator Ride**

Step into the elevator and observe how your apparent weight changes with different accelerations.

<div class="animator-container">
    <div class="input-controls">
        <label for="personMassInput">Your Mass (kg):</label>
        <input type="number" id="personMassInput" value="70" min="10" max="150" step="5">
    </div>
    <div style="margin-bottom: 0.8rem;">
        <button id="elevatorUpAccelBtn" class="animator-button btn-green" aria-label="Elevator accelerates upward">Accelerate Up</button>
        <button id="elevatorDownAccelBtn" class="animator-button btn-red" aria-label="Elevator accelerates downward">Accelerate Down</button>
        <button id="elevatorConstantBtn" class="animator-button btn-blue" aria-label="Elevator moves at constant velocity">Constant Velocity</button>
        <button id="elevatorFreeFallBtn" class="animator-button btn-dark-purple" aria-label="Elevator is in free fall">Free Fall</button>
        <button id="resetAnimation" class="animator-button btn-orange" aria-label="Reset simulation">Reset</button>
    </div>

```
<svg id="weightApparentWeightSVG" width="100%" height="400" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="weightApparentWeightSVGTitle weightApparentWeightSVGDesc">
    <title id="weightApparentWeightSVGTitle">Weight and Apparent Weight Elevator Simulator</title>
    <desc id="weightApparentWeightSVGDesc">A simulation showing a person on a scale in an elevator, demonstrating how apparent weight changes with acceleration.</desc>

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

    <rect x="100" y="0" width="200" height="400" fill="#f0f0f0" stroke="#ccc" stroke-width="2" />
    <line x1="100" y1="0" x2="100" y2="400" stroke="#999" stroke-width="2" />
    <line x1="300" y1="0" x2="300" y2="400" stroke="#999" stroke-width="2" />

    <rect id="elevatorCar" x="105" y="250" width="190" height="140" fill="#add8e6" rx="5" ry="5" />
    <text x="200" y="320" text-anchor="middle" class="animator-svg-text" style="font-size: 18px; fill: #007bff;">Elevator</text>

    <rect id="personBody" x="185" y="280" width="30" height="60" fill="#28a745" rx="5" ry="5" />
    <circle cx="200" cy="280" r="10" fill="#28a745" />
    <rect id="scale" x="170" y="340" width="60" height="10" fill="#555" rx="3" ry="3" />

    <text id="trueWeightDisplay" x="550" y="50" text-anchor="end" class="animator-svg-text" style="font-size: 18px; font-weight: bold; fill: #333;">True Weight: 0.0 N</text>
    <text id="apparentWeightDisplay" x="550" y="80" text-anchor="end" class="animator-svg-text" style="font-size: 20px; font-weight: bold; fill: #e67e22;">Apparent Weight: 0.0 N</text>
    <text id="accelerationDisplay" x="550" y="110" text-anchor="end" class="animator-svg-text" style="font-size: 16px; fill: #007bff;">Acceleration: 0.0 m/s²</text>
</svg>

<div id="animationExplanation" class="animation-explanation" aria-live="polite">
    <p>Choose an elevator motion to see how the scale reading changes.</p>
</div>
```

</div>

<script src="/assets/js/forces/weight-apparent-weight-animator.js"></script>

---

## **How Apparent Weight Changes**

There are two main forces acting on you in an elevator:

* **Weight ($W$):** Pulls downward
* **Normal Force ($F_N$):** Pushes upward

Newton's Second Law gives:

$$F_N - W = ma$$

So:

$$F_N = W + ma$$

---

## **Common Elevator Situations**

* **Elevator at Rest or Moving at Constant Velocity**

  * Acceleration is zero.
  * Apparent weight equals true weight.
  * You feel normal.

* **Elevator Accelerating Upward**

  * Apparent weight is greater than true weight.
  * The scale reading goes up.
  * You feel heavier.

* **Elevator Accelerating Downward**

  * Apparent weight is less than true weight.
  * The scale reading goes down.
  * You feel lighter.

* **Elevator in Free Fall**

  * Apparent weight becomes zero.
  * The scale would read zero.
  * You would feel weightless.

---

## **Why This Matters**

* It explains why you feel heavier or lighter in an elevator.
* It helps explain roller coaster sensations.
* It explains why astronauts seem weightless in space.
* It helps show the difference between gravity and support forces.

---

## **Interactive Match: Weight and Apparent Weight**

Test your understanding of the key terms.

<div class="vocab-matching-interactive-wrapper weight-apparent-weight">
    <div class="animator-explanation">
        <p>Click a term and then its matching meaning. Match all pairs to complete the activity.</p>
    </div>

```
<div class="vocab-matching-container">
    <div class="vocab-grid">
        <div class="vocab-card-column">
            <div id="weightApparentWeightTerms"></div>
        </div>
        <div class="vocab-card-column">
            <div id="weightApparentWeightDefinitions"></div>
        </div>
    </div>
    <div id="weightApparentWeightFeedback"></div>
</div>

<div class="button-controls">
    <button id="weightApparentWeightResetButton" class="animator-button btn-default">Reset</button>
</div>
```

</div>

<script src="/assets/js/common/interactive-match-base.js"></script>

<script src="/assets/js/forces/weight-apparent-weight-interactive-match.js"></script>

---

{% capture weight_apparent_weight_question %}A person stands on a scale in an elevator that is accelerating upward. Will the scale reading be greater than, less than, or equal to their true weight?{% endcapture %}
{% capture weight_apparent_weight_answer %}The scale reading will be **greater than** their true weight because the elevator is accelerating upward, so the normal force must be larger than the force of gravity.{% endcapture %}
{% include quick-concept-question.html question=weight_apparent_weight_question answer=weight_apparent_weight_answer %}

---

## **Related Skills**

Ready to put your understanding of weight and apparent weight into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/calculating-apparent-weight/"><strong>Calculating Apparent Weight in Elevators</strong></a></li>
    <li><a href="/skills/distinguishing-mass-weight/"><strong>Distinguishing Mass vs. Weight</strong></a></li>
  {%- endif -%}
</ul>

<hr>

<h2>Practice Problems</h2>
<p>Test your understanding and apply what you've learned with these problems.</p>
<ul>
  {%- assign related_problems = site.problems | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_problems.size > 0 -%}
    {%- for problem in related_problems -%}
      <li><a href="{{- problem.url | relative_url -}}"><strong>{{- problem.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No practice problems for this concept yet.</li>
    <li><a href="/problems/elevator-apparent-weight-problems/"><strong>Elevator Apparent Weight Problems</strong></a></li>
    <li><a href="/problems/apparent-weight-scenarios/"><strong>Apparent Weight Scenarios</strong></a></li>
  {%- endif -%}
</ul>

```javascript
// assets/js/forces/weight-apparent-weight-interactive-match.js

const vocabDataWeightApparentWeight = [
    { term: 'True Weight', definition: 'The force of gravity pulling on an object.' },
    { term: 'Apparent Weight', definition: 'The normal force pushing up on an object.' },
    { term: 'Normal Force', definition: 'The support force from a surface.' },
    { term: 'Free Fall', definition: 'Motion where gravity is the only force acting.' },
    { term: 'Acceleration', definition: 'A change in velocity over time.' },
    { term: 'Scale Reading', definition: 'The apparent weight shown by a scale.' }
];

const interactiveOptionsWeightApparentWeight = {
    vocabData: vocabDataWeightApparentWeight,
    termsContainerId: 'weightApparentWeightTerms',
    definitionsContainerId: 'weightApparentWeightDefinitions',
    feedbackMessageId: 'weightApparentWeightFeedback',
    resetButtonId: 'weightApparentWeightResetButton'
};

document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsWeightApparentWeight);
});
```
