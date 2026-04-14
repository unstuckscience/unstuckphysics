---
title: 📘 Simple Harmonic Motion (SHM)
summary: Understand Simple Harmonic Motion—a special type of periodic motion where a restoring force is proportional to displacement.
permalink: /concepts/waves-sound/shm/
layout: single
collection: concepts
topic: waves-sound
tags: [shm, simple harmonic motion, hookes law, restoring force, oscillations]
order: 2
sidebar:
  nav: waves-sound-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3

---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
**Simple Harmonic Motion (SHM)** is a specific type of periodic motion. It occurs when an object is moved away from an equilibrium position and experiences a **restoring force** that pulls it back, where that force is directly proportional to how far the object was moved.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a breakdown of the "simple" part of simple harmonic motion.</p>
<audio controls class="audio-player" aria-label="Audio summary of simple harmonic motion">
  <source src="/assets/audio/waves-sound/shm-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**



<svg
    width="480"
    height="280"
    viewBox="0 0 480 280"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="shmTitle shmDesc">

  <desc id="shmDesc">
    A diagram of a mass-spring system showing the relationship between displacement (x) and the restoring force (F).
  </desc>

  <rect x="0" y="0" width="480" height="280" fill="white"/>

  <rect x="0" y="40" width="20" height="120" fill="#999"/>
  
  <line x1="0" y1="160" x2="480" y2="160" stroke="#333" stroke-width="2"/>

  <path d="M 20 100 L 40 80 L 60 120 L 80 80 L 100 120 L 120 80 L 140 120 L 160 80 L 180 120 L 200 100" fill="none" stroke="#666" stroke-width="2"/>

  <rect x="200" y="70" width="60" height="60" rx="4" fill="#1f77b4" stroke="#333"/>
  <text x="230" y="105" font-size="14" text-anchor="middle" fill="white" font-weight="bold">m</text>

  <line x1="100" y1="190" x2="230" y2="190" stroke="#333" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="230" y1="190" x2="280" y2="190" stroke="#2ca02c" stroke-width="3" marker-end="url(#arrowheadGreen)"/>
  <text x="255" y="215" font-size="14" fill="#2ca02c" text-anchor="middle">Displacement (x)</text>

  <line x1="200" y1="50" x2="120" y2="50" stroke="#d62728" stroke-width="3" marker-end="url(#arrowheadRed)"/>
  <text x="160" y="40" font-size="14" fill="#d62728" text-anchor="middle">Force (F)</text>

  <text x="360" y="110" font-size="22" font-weight="bold" text-anchor="middle" fill="#2A52BE">F = -kx</text>

  <defs>
    <marker id="arrowheadRed" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#d62728"/>
    </marker>
    <marker id="arrowheadGreen" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#2ca02c"/>
    </marker>
  </defs>
</svg>

---

## **The Conditions for SHM**

For an object's motion to be considered "Simple Harmonic," it must meet two criteria:
1.  **Restoring Force:** There must be a force that always points back toward the center (equilibrium).
2.  **Proportionality:** The force must get stronger the further you move away.

This is best described by **Hooke's Law**:
$$F = -kx$$

* **$F$:** The restoring force.
* **$k$:** The spring constant (stiffness).
* **$x$:** The displacement from equilibrium.
* **The Negative Sign:** Indicates the force is always *opposite* to the direction of displacement.

---

## **Interactive SHM Lab**

Experiment with a mass on a spring. Change the stiffness of the spring ($k$) or the amount of mass ($m$) to see how it affects the period of oscillation. 



<div class="animator-container shm-animator-container">
    <h3 class="animator-title">Mass-Spring Oscillator</h3>

    <div class="control-group">
        <label for="massSlider">Mass (kg): </label>
        <input type="range" id="massSlider" min="0.5" max="5.0" step="0.5" value="2.0">
        <span id="massVal">2.0 kg</span>
    </div>

    <div class="control-group">
        <label for="kSlider">Spring Constant (N/m): </label>
        <input type="range" id="kSlider" min="10" max="100" step="10" value="50">
        <span id="kVal">50 N/m</span>
    </div>

    <canvas id="shmCanvas" width="500" height="300"></canvas>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Calculated Period (T):</p>
            <p id="calcPeriod" class="value-display">--- s</p>
        </div>
        <div class="info-box">
            <p class="info-label">Current Velocity:</p>
            <p id="currentVel" class="value-display">--- m/s</p>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="startSHMButton" class="animator-button">Release Mass</button>
        <button id="resetSHMButton" class="animator-button reset-button">Reset</button>
    </div>
</div>

<script src="{{ '/assets/js/waves-sound/shm-animator.js' | relative_url }}"></script>

---

## **The Period of an Oscillator**

The time it takes for one full "swing" depends only on the physical properties of the system, not how far you stretch it (the amplitude).

### **Mass on a Spring**
$$T = 2\pi\sqrt{\frac{m}{k}}$$

### **Simple Pendulum**
$$T = 2\pi\sqrt{\frac{L}{g}}$$

---

## **Interactive Match: SHM Relationships**

How do changes to the system affect the timing?

<div class="vocab-matching-interactive-wrapper shm-match">
    <div class="vocab-matching-container">
        <div id="vocabGridSHM" class="vocab-grid">
            </div>
        <div id="vocabFeedbackSHM"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonSHM" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/waves-sound/shm-match.js"></script>

---

## **Why Should I Care?**

SHM is the mathematical "engine" behind almost everything that vibrates:
* **Engineering:** Engineers study the SHM of skyscrapers and bridges to ensure they don't collapse during high winds or earthquakes.
* **Timekeeping:** Mechanical watches use a balance wheel undergoing SHM to keep precise time.
* **Molecular Physics:** Atoms in a solid vibrate in a way that is modeled almost perfectly by SHM.

---

{% capture shm_question %}If you take a grandfather clock (a pendulum) from Earth to the Moon, will it run fast or slow?{% endcapture %}
{% capture shm_answer %}It will run **slow**. Since the gravity on the Moon ($g$) is much weaker than on Earth, and the period of a pendulum is $T = 2\pi\sqrt{L/g}$, a smaller $g$ results in a larger $T$. Each "tick" takes longer, so the clock loses time.{% endcapture %}
{% include quick-concept-question.html question=shm_question answer=shm_answer %}