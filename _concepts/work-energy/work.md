---
title: 📘 Work
summary: Understand how energy is transferred when a force acts upon an object over a distance, and learn the mathematical relationship between force, displacement, and angles.
permalink: /concepts/work-energy/work/
layout: single
collection: concepts
topic: work-energy
tags: [work, energy, force, displacement, physics, joules]
order: 1
sidebar:
  nav: work-energy-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3

---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
In physics, **work** is done when a **force** acts upon an object to cause a **displacement**. It is the measure of energy transfer that occurs when an object is moved by an external force.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of the concept of work.</p>
<audio controls class="audio-player" aria-label="Audio summary of work">
  <source src="/assets/audio/energy/work-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**

<svg
    width="480"
    height="240"
    viewBox="0 0 480 240"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="workTitle workDesc">

  <desc id="workDesc">
    A diagram showing a block being pulled by a force at an angle θ, moving across a horizontal displacement d.
  </desc>

  <rect x="0" y="0" width="480" height="240" fill="white"/>

  <line x1="40" y1="200" x2="440" y2="200" stroke="#333" stroke-width="3"/>

  <rect x="80" y="140" width="60" height="60" fill="#1f77b4" opacity="0.3" stroke="#1f77b4" stroke-dasharray="4,2"/>
  
  <rect x="300" y="140" width="60" height="60" fill="#1f77b4" stroke="#0b4a7a" stroke-width="2"/>

  <line x1="330" y1="170" x2="410" y2="100"
        stroke="#d62728"
        stroke-width="4"
        marker-end="url(#arrowheadRed)"/>
  <text x="415" y="95" font-size="16" font-weight="bold" fill="#d62728">F</text>

  <path d="M 370 170 A 40 40 0 0 0 365 140" fill="none" stroke="#333" stroke-width="1.5"/>
  <text x="375" y="160" font-size="14" fill="#333">θ</text>
  <line x1="330" y1="170" x2="400" y2="170" stroke="#333" stroke-width="1" stroke-dasharray="2,2"/>

  <line x1="110" y1="220" x2="330" y2="220"
        stroke="#000"
        stroke-width="2"
        marker-end="url(#arrowheadBlack)"/>
  <text x="210" y="235" font-size="14" fill="#000" text-anchor="middle">displacement (d)</text>

  <defs>
    <marker id="arrowheadRed" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#d62728"/>
    </marker>
    <marker id="arrowheadBlack" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#000"/>
    </marker>
  </defs>
</svg>

---

## **What is Work?**

For **work** to be done in the scientific sense, two things must happen:

1. A force must be applied to the object.
2. The object must move (be displaced) because of that force.

If you push against a brick wall with all your might but the wall doesn't move, you have done **zero work** on the wall!

---

## **The Math of Work**

The amount of work done depends on the magnitude of the force, the displacement, and the angle between them.

The standard formula is:
$$W = F d \cos(\theta)$$

* **$W$**: Work (measured in **Joules**, J)
* **$F$**: Force (measured in Newtons, N)
* **$d$**: Displacement (measured in meters, m)
* **$\theta$**: The angle between the force and the direction of motion.

---

## **Interactive Work Visualizer**

Adjust the angle of the applied force and the displacement to see how the total work done changes. Notice how pushing straight ahead (0°) is more efficient than pushing at a steep angle.

<div class="animator-container work-animator-container">
    <h3 class="animator-title">Work Calculator & Visualizer</h3>

    <div class="control-group">
        <label for="forceRange">Force (N): </label>
        <input type="range" id="forceRange" min="0" max="100" value="50">
        <span id="forceValue">50 N</span>
    </div>

    <div class="control-group">
        <label for="angleRange">Angle (θ): </label>
        <input type="range" id="angleRange" min="0" max="90" value="0">
        <span id="angleValue">0°</span>
    </div>

    <canvas id="workCanvas" width="500" height="250"></canvas>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Calculation:</p>
            <p id="workFormulaDisplay" class="value-display">W = F × d × cos(θ)</p>
        </div>
        <div class="info-box">
            <p class="info-label">Total Work:</p>
            <p id="totalWorkValue" class="value-display">--- J</p>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="resetWorkButton" class="animator-button reset-button">Reset Simulation</button>
    </div>
</div>

<script src="{{ '/assets/js/energy/work-animator.js' | relative_url }}"></script>

---

## **Positive, Negative, and Zero Work**

The angle ($\theta$) determines the "type" of work being done:

* **Positive Work ($0^\circ \le \theta < 90^\circ$):** The force helps the motion. The object speeds up.
* **Zero Work ($\theta = 90^\circ$):** The force is perpendicular to the motion (like carrying a bucket while walking). No work is done!
* **Negative Work ($90^\circ < \theta \le 180^\circ$):** The force opposes the motion (like friction slowing a car). The object loses energy.

---

## **Interactive Match: Work & Energy**

Test your knowledge of the components that make up the Work-Energy theorem.

<div class="vocab-matching-interactive-wrapper work-energy">
    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vocabTermsWork">
                    </div>
            </div>
            <div class="vocab-card-column">
                <div id="vocabDefinitionsWork">
                    </div>
            </div>
        </div>
        <div id="vocabFeedbackWork"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonWork" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/energy/work-interactive-match.js"></script>

---

## **Why Should I Care?**

Work is the bridge between **Force** and **Energy**. Understanding work allows you to:

* Calculate the energy needed to run machines or move vehicles.
* Understand how pulleys and ramps (simple machines) make tasks "easier" by changing the force vs. distance trade-off.
* Explain how your body uses chemical energy to perform physical tasks.

---

{% capture work_question %}If a waiter carries a tray of food at a constant height while walking across a room at a constant speed, is the waiter doing work on the tray?{% endcapture %}
{% capture work_answer %}Scientifically, **no**. The force the waiter applies is **upward** (to counteract gravity), but the displacement is **horizontal**. Since the angle between the force and displacement is $90^\circ$, and $\cos(90^\circ) = 0$, the work done on the tray is zero.{% endcapture %}
{% include quick-concept-question.html question=work_question answer=work_answer %}