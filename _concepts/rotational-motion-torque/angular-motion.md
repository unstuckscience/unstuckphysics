---
title: 📘 Angular Motion
summary: Learn about angular displacement, velocity, and acceleration—the rotational counterparts to linear motion.
permalink: /concepts/rotational-motion/angular-motion/
layout: single
collection: concepts
topic: rotational-motion
tags: [angular motion, rotation, angular velocity, angular acceleration, kinematics]
order: 1
sidebar:
  nav: rotational-motion-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3

---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
**Angular motion** describes the movement of an object as it rotates around a fixed axis. Just as we use distance and speed for straight-line movement, we use **angles** and **rotational rates** to describe spinning.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of angular motion basics.</p>
<audio controls class="audio-player" aria-label="Audio summary of angular displacement, velocity, and acceleration">
  <source src="/assets/audio/rotational-motion/angular-motion-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**

<svg
    width="480"
    height="320"
    viewBox="0 0 480 320"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="title desc">

  <desc id="desc">
    A diagram of a rotating disk showing angular displacement (theta), angular velocity (omega), and angular acceleration (alpha).
  </desc>

  <rect x="0" y="0" width="480" height="320" fill="white"/>

  <circle cx="240" cy="160" r="100" stroke="#000000" stroke-width="2" fill="#f0f0f0" />
  <circle cx="240" cy="160" r="4" fill="#000000" /> <line x1="240" y1="160" x2="340" y2="160" stroke="#000000" stroke-width="1" stroke-dasharray="4,4" />
  
  <line x1="240" y1="160" x2="310" y2="90" stroke="#1f77b4" stroke-width="3" />
  
  <path d="M 290 160 A 50 50 0 0 0 275 125" fill="none" stroke="#1f77b4" stroke-width="2" />
  <text x="300" y="140" font-size="16" fill="#1f77b4">θ</text>

  <path d="M 240 40 A 120 120 0 0 1 340 100" fill="none" stroke="#2ca02c" stroke-width="4" marker-end="url(#arrowheadGreen)" />
  <text x="310" y="60" font-size="16" fill="#2ca02c" font-weight="bold">ω</text>

  <path d="M 240 20 A 140 140 0 0 1 370 120" fill="none" stroke="#d62728" stroke-width="2" marker-end="url(#arrowheadRed)" />
  <text x="350" y="40" font-size="16" fill="#d62728" font-weight="bold">α</text>

  <defs>
    <marker id="arrowheadGreen" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#2ca02c"/>
    </marker>
    <marker id="arrowheadRed" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#d62728"/>
    </marker>
  </defs>
</svg>

---

## **The Big Three of Angular Motion**

1.  **Angular Displacement ($\theta$):** The angle through which an object has rotated. While we often use degrees ($360^\circ$), in physics, we almost always use **radians**.
2.  **Angular Velocity ($\omega$):** How fast the object is spinning. It is the rate of change of angular displacement. Measured in **radians per second (rad/s)**.
3.  **Angular Acceleration ($\alpha$):** How fast the spin is speeding up or slowing down. Measured in **radians per second squared (rad/s²)**.

---

## **Key Comparison: Linear vs. Angular**

Angular motion follows the exact same logical patterns as linear motion. If you know your 1D kinematics, you already know angular kinematics!

| Linear Variable | Angular Variable | Relationship |
| :--- | :--- | :--- |
| Displacement ($s$) | Displacement ($\theta$) | $s = r\theta$ |
| Velocity ($v$) | Velocity ($\omega$) | $v = r\omega$ |
| Acceleration ($a$) | Acceleration ($\alpha$) | $a = r\alpha$ |

---

## **Interactive Angular Motion Simulator**

Adjust the angular acceleration of the wheel and see how it affects the angular velocity over time. Switch between degrees and radians to see the mathematical difference.

<div class="animator-container angular-motion-animator-container">
    <h3 class="animator-title">Spinning Wheel Kinematics</h3>

    <div class="control-group">
        <label for="alphaSlider">Angular Acceleration ($\alpha$): </label>
        <input type="range" id="alphaSlider" min="-2" max="2" step="0.1" value="0.5">
        <span id="alphaValue">0.5 rad/s²</span>
    </div>

    <canvas id="angularMotionCanvas" width="500" height="300"></canvas>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Angular Velocity ($\omega$):</p>
            <p id="omegaValue" class="value-display">0.00 rad/s</p>
        </div>
        <div class="info-box">
            <p class="info-label">Total Displacement ($\theta$):</p>
            <p id="thetaValue" class="value-display">0.00 rad</p>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="resetRotationButton" class="animator-button reset-button">Reset Rotation</button>
    </div>
</div>

<script src="{{ '/assets/js/rotational-motion/angular-motion-animator.js' | relative_url }}"></script>

---

## **Angular Kinematic Equations**

Just like free fall or constant acceleration in a line, we have equations for **constant angular acceleration**:

1.  $\omega_f = \omega_i + \alpha t$
2.  $\theta = \omega_i t + \frac{1}{2}\alpha t^2$
3.  $\omega_f^2 = \omega_i^2 + 2\alpha\theta$

---

## **Interactive Match: Angular Terms**

Test your understanding of the Greek symbols and units used in rotational physics.

<div class="vocab-matching-interactive-wrapper angular-motion">
    <div class="animator-explanation">
        <p>Match the symbol/term to its correct unit or definition.</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vocabTermsAngular">
                    </div>
            </div>
            <div class="vocab-card-column">
                <div id="vocabDefinitionsAngular">
                    </div>
            </div>
        </div>
        <div id="vocabFeedbackAngular"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonAngular" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/rotational-motion/angular-interactive-match.js"></script>

---

## **Why Should I Care?**

Angular motion is the foundation for understanding:
* How engines and turbines generate power.
* The orbital mechanics of planets and satellites.
* How gymnasts and divers control their bodies during flips and twists.

---

{% capture angular_question %}If two people are on a merry-go-round, one near the center and one near the outer edge, which one has a higher angular velocity ($\omega$)?{% endcapture %}
{% capture angular_answer %}They both have the **same angular velocity**. Because the merry-go-round is a rigid body, every point on it rotates through the same angle in the same amount of time. However, the person on the outer edge has a higher **linear velocity** ($v$) because they travel a larger distance (circumference) in that same time.{% endcapture %}
{% include quick-concept-question.html question=angular_question answer=angular_answer %}