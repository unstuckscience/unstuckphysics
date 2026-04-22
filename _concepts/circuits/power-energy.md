---
title: 📘 Power & Energy in Circuits
summary: Understand how electrical energy is transferred and transformed in circuits using power and Joule’s Law.
permalink: /concepts/circuits/power-energy/
layout: single
collection: concepts
topic: circuits
tags: [power, energy, Joule's Law, electricity, current, voltage]
order: 2
sidebar:
  nav: circuits-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
**Power in circuits** describes how quickly electrical energy is transferred or transformed. Using **Joule’s Law**, we can determine how much energy is converted into heat, light, or motion as current flows through a device.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's how electrical energy flows and transforms in a circuit.</p>
<audio controls class="audio-player" aria-label="Audio summary of power and energy in circuits">
  <source src="/assets/audio/circuits/power-energy-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**

<svg width="480" height="200" viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="0" y="0" width="480" height="200" fill="white"/>
  
  <text x="240" y="30" text-anchor="middle" font-weight="bold">Energy Transfer in a Circuit</text>

  <!-- Battery -->
  <rect x="50" y="70" width="40" height="60" fill="#ddd" stroke="#333"/>
  <text x="70" y="150" text-anchor="middle" font-size="12">Battery</text>

  <!-- Wire -->
  <line x1="90" y1="100" x2="200" y2="100" stroke="#333" stroke-width="3"/>

  <!-- Resistor (device) -->
  <rect x="200" y="80" width="80" height="40" fill="#eee" stroke="#333"/>
  <text x="240" y="70" text-anchor="middle" font-size="12">Device</text>

  <!-- Energy arrows -->
  <path d="M 140 100 L 200 100" stroke="#1f77b4" stroke-width="4" marker-end="url(#arrowBlue)"/>
  <text x="170" y="130" fill="#1f77b4" font-size="12">Electrical Energy In</text>

  <path d="M 280 100 L 340 100" stroke="#d62728" stroke-width="4" marker-end="url(#arrowRed)"/>
  <text x="310" y="130" fill="#d62728" font-size="12">Heat/Light Out</text>

  <defs>
    <marker id="arrowBlue" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#1f77b4"/>
    </marker>
    <marker id="arrowRed" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#d62728"/>
    </marker>
  </defs>
</svg>

---

## **Key Quantities**

* **Power ($P$):** The rate of energy transfer. Measured in **Watts (W)**.
* **Energy ($E$):** The total energy used or transformed. Measured in **Joules (J)**.
* **Time ($t$):** Duration of energy use. Measured in **seconds (s)**.

---

## **The Core Relationships**

### **Power Formulas**
$$P = IV$$

$$P = I^2 R$$

$$P = \frac{V^2}{R}$$

### **Energy Formula**
$$E = P \times t$$

---

## **Interactive Power Lab**

Adjust voltage and resistance to see how power changes. Notice how small changes in current can dramatically increase power due to the squared relationship.

<div class="animator-container power-container">
    <h3 class="animator-title">Power Explorer</h3>
    <div class="control-group">
        <label for="voltageRangePower">Voltage (V): </label>
        <input type="range" id="voltageRangePower" min="1" max="12" step="0.5" value="6">
        <span id="vValDisplayPower">6 V</span>
    </div>
    <div class="control-group">
        <label for="resistanceRangePower">Resistance (R): </label>
        <input type="range" id="resistanceRangePower" min="10" max="1000" step="10" value="500">
        <span id="rValDisplayPower">500 Ω</span>
    </div>
    <canvas id="powerCanvas" width="500" height="200"></canvas>
    <div class="info-container">
        <div class="info-box"><p class="info-label">Power (P):</p><p id="powerResult" class="value-display">0.072 W</p></div>
    </div>
</div>

<script src="{{ '/assets/js/circuits/power-animator.js' | relative_url }}"></script>

---

## **Interactive Match: Power & Energy**

<div class="vocab-matching-interactive-wrapper power-match">
    <div id="vocabGridPower" class="vocab-grid"></div>
    <button id="vocabResetButtonPower" class="animator-button btn-default">Reset</button>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/circuits/power-match.js"></script>

---

{% capture power_question %}
A device draws 2 A of current from a 12 V source. How much power does it use?
{% endcapture %}

{% capture power_answer %}
Using $P = IV$:  
$P = (2\text{ A})(12\text{ V}) = \mathbf{24\text{ W}}$.
{% endcapture %}

{% include quick-concept-question.html question=power_question answer=power_answer %}