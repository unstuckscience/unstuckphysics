---
title: 📘 Energy
summary: Explore the fundamental ability to do work, the various forms energy takes, and the principle of conservation that governs the universe.
permalink: /concepts/work-energy/energy/
layout: single
collection: concepts
topic: work-energy
tags: [energy, kinetic energy, potential energy, conservation of energy, physics, joules]
order: 2
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
**Energy** is defined as the **capacity to do work**. It is a scalar quantity that comes in many forms—such as motion, position, heat, and light—but it can never be created or destroyed.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of the nature of energy.</p>
<audio controls class="audio-player" aria-label="Audio summary of energy">
  <source src="/assets/audio/work-energy/energy-audio.mp3" type="audio/mpeg">
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
    aria-labelledby="energyTitle energyDesc">

  <desc id="energyDesc">
    A diagram showing the transformation between Potential Energy (at the top of a hill) and Kinetic Energy (at the bottom of a hill).
  </desc>

  <rect x="0" y="0" width="480" height="280" fill="white"/>

  <path d="M 40 80 Q 150 80, 240 180 T 440 240" stroke="#8c564b" stroke-width="4" fill="none"/>

  <circle cx="80" cy="65" r="15" fill="#2ca02c" stroke="#1a631a" stroke-width="2"/>
  <text x="105" y="60" font-size="14" font-weight="bold" fill="#2ca02c">High Potential Energy (PE)</text>
  <text x="105" y="75" font-size="12" fill="#666">Energy of Position</text>

  <circle cx="340" cy="210" r="15" fill="#ff7f0e" stroke="#cc660b" stroke-width="2"/>
  <text x="250" y="245" font-size="14" font-weight="bold" fill="#ff7f0e" text-anchor="middle">High Kinetic Energy (KE)</text>
  <text x="250" y="260" font-size="12" fill="#666" text-anchor="middle">Energy of Motion</text>

  <path d="M 120 110 Q 180 130, 220 170" stroke="#333" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
  <text x="130" y="150" font-size="12" fill="#333" transform="rotate(25 130,150)">PE → KE</text>

  <defs>
    <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#333"/>
    </marker>
  </defs>
</svg>

---

## **The Two Main Categories**

While energy exists in many forms, most can be grouped into two main types:

1. **Kinetic Energy ($KE$):** The energy an object has because it is **moving**. 
   * *Formula:* $KE = \frac{1}{2}mv^2$
2. **Potential Energy ($PE$):** The energy an object has because of its **position** or condition.
   * *Gravitational Potential Energy:* $PE_g = mgh$

---

## **Conservation of Energy**

The **Law of Conservation of Energy** states that the total energy of an isolated system remains constant. Energy can be transformed from one form to another (like a battery turning chemical energy into electrical energy), but it cannot be created or destroyed.

$$E_{initial} = E_{final}$$

---

## **Interactive Energy Skate Park**

Adjust the height of the ramp and the mass of the skater to see how Potential Energy converts into Kinetic Energy. Watch the energy bar charts respond in real-time.

<div class="animator-container energy-animator-container">
    <h3 class="animator-title">Kinetic vs. Potential Energy</h3>

    <div class="control-group">
        <label for="massRange">Mass (kg): </label>
        <input type="range" id="massRange" min="1" max="100" value="50">
        <span id="massValue">50 kg</span>
    </div>

    <div class="control-group">
        <label for="heightRange">Drop Height (m): </label>
        <input type="range" id="heightRange" min="1" max="10" value="5">
        <span id="heightValue">5 m</span>
    </div>

    <canvas id="energyCanvas" width="500" height="300"></canvas>

    <div class="info-container">
        <div class="info-box" style="border-top: 4px solid #2ca02c;">
            <p class="info-label">Potential Energy:</p>
            <p id="peValue" class="value-display">--- J</p>
        </div>
        <div class="info-box" style="border-top: 4px solid #ff7f0e;">
            <p class="info-label">Kinetic Energy:</p>
            <p id="keValue" class="value-display">--- J</p>
        </div>
        <div class="info-box" style="border-top: 4px solid #333;">
            <p class="info-label">Total Energy:</p>
            <p id="totalEValue" class="value-display">--- J</p>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="resetEnergyButton" class="animator-button reset-button">Reset Skater</button>
    </div>
</div>

<script src="{{ '/assets/js/energy/energy-animator.js' | relative_url }}"></script>

---

## **Forms of Energy**

* **Mechanical:** The sum of KE and PE in a system.
* **Thermal:** The internal energy of an object due to the kinetic energy of its atoms.
* **Chemical:** Energy stored in the bonds of chemical compounds (like food or fuel).
* **Electrical:** Energy caused by the movement of electrons.

---

## **Interactive Match: Energy Forms**

Can you identify the different forms of energy based on their descriptions?

<div class="vocab-matching-interactive-wrapper energy-forms">
    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vocabTermsEnergy">
                    </div>
            </div>
            <div class="vocab-card-column">
                <div id="vocabDefinitionsEnergy">
                    </div>
            </div>
        </div>
        <div id="vocabFeedbackEnergy"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonEnergy" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/energy/energy-interactive-match.js"></script>

---

## **Why Should I Care?**

Energy is the "currency" of the universe. Understanding it allows us to:
* Efficiently power our homes and transportation.
* Understand biological processes, from how we digest food to how plants grow.
* Predict the behavior of everything from subatomic particles to colliding galaxies.

---

{% capture energy_question %}If energy cannot be created or destroyed, why do people say we are "running out of energy"?{% endcapture %}
{% capture energy_answer %}While the **total amount** of energy in the universe stays the same, it often transforms from "useful" forms (like electricity or chemical energy in fuel) into "less useful" forms (like waste heat dispersed into the atmosphere). We aren't losing energy, but we are running out of energy that is easy to harness for work.{% endcapture %}
{% include quick-concept-question.html question=energy_question answer=energy_answer %}