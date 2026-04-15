---
title: 📘 Ohm's Law
summary: Master the fundamental relationship between voltage, current, and resistance that governs how all simple circuits behave.
permalink: /concepts/circuits/ohms-law/
layout: single
collection: concepts
topic: circuits
tags: [Ohm's Law, voltage, current, resistance, electricity]
order: 1
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
**Ohm's Law** defines the relationship between the three most basic electrical quantities. It states that the current flowing through a conductor is directly proportional to the voltage across it and inversely proportional to the resistance.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a breakdown of how pressure, flow, and friction work together in a circuit.</p>
<audio controls class="audio-player" aria-label="Audio summary of Ohm's Law">
  <source src="/assets/audio/circuits/ohms-law-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**



<svg width="480" height="200" viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="0" y="0" width="480" height="200" fill="white"/>
  <rect x="50" y="80" width="380" height="40" fill="#eee" stroke="#333" stroke-width="2"/>
  <text x="240" y="70" text-anchor="middle" font-weight="bold">The Water Analogy</text>
  
  <path d="M 30 100 L 50 100" stroke="#d62728" stroke-width="8" marker-end="url(#arrowhead)"/>
  <text x="30" y="130" fill="#d62728" font-size="12">Voltage (Pressure)</text>
  
  <path d="M 220 80 L 220 95 Q 240 100, 260 95 L 260 80" fill="#666" opacity="0.5"/>
  <path d="M 220 120 L 220 105 Q 240 100, 260 105 L 260 120" fill="#666" opacity="0.5"/>
  <text x="240" y="145" text-anchor="middle" fill="#666" font-size="12">Resistance (Narrow Pipe)</text>
  
  <path d="M 380 100 L 420 100" stroke="#1f77b4" stroke-width="4" marker-end="url(#arrowheadBlue)"/>
  <text x="400" y="130" fill="#1f77b4" font-size="12">Current (Flow Rate)</text>

  <defs>
    <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto"><polygon points="0 0, 5 2.5, 0 5" fill="#d62728"/></marker>
    <marker id="arrowheadBlue" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto"><polygon points="0 0, 5 2.5, 0 5" fill="#1f77b4"/></marker>
  </defs>
</svg>

---

## **The Big Three Variables**

* **Voltage ($V$):** The electrical "pressure" or potential difference. Measured in **Volts (V)**.
* **Current ($I$):** The rate at which charge flows. Measured in **Amperes (A)**.
* **Resistance ($R$):** The opposition to the flow of charge. Measured in **Ohms ($\Omega$)**.

### **The Formula**
$$V = I \times R$$

---

## **Interactive Ohm's Law Lab**

Adjust the sliders for Voltage and Resistance. Watch how the size of the "I" (Current) changes in real-time. If you double the voltage while keeping resistance the same, the current will double!

<div class="animator-container ohms-law-container">
    <h3 class="animator-title">V = IR Explorer</h3>
    <div class="control-group">
        <label for="voltageRange">Voltage (V): </label>
        <input type="range" id="voltageRange" min="1" max="12" step="0.5" value="6">
        <span id="vValDisplay">6 V</span>
    </div>
    <div class="control-group">
        <label for="resistanceRange">Resistance (R): </label>
        <input type="range" id="resistanceRange" min="10" max="1000" step="10" value="500">
        <span id="rValDisplay">500 Ω</span>
    </div>
    <canvas id="ohmsCanvas" width="500" height="200"></canvas>
    <div class="info-container">
        <div class="info-box"><p class="info-label">Current (I):</p><p id="currentResult" class="value-display">0.012 A</p></div>
    </div>
</div>

<script src="{{ '/assets/js/circuits/ohms-law-animator.js' | relative_url }}"></script>

---

## **Interactive Match: Ohm's Law**

<div class="vocab-matching-interactive-wrapper ohms-match">
    <div id="vocabGridOhms" class="vocab-grid"></div>
    <button id="vocabResetButtonOhms" class="animator-button btn-default">Reset</button>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/circuits/ohms-match.js"></script>

---

{% capture ohms_question %}If a lightbulb has a resistance of 240 Ω and is plugged into a 120 V outlet, how much current flows through it?{% endcapture %}
{% capture ohms_answer %}Using $I = V / R$: 
$I = 120\text{ V} / 240\text{ }\Omega = \mathbf{0.5\text{ A}}$.{% endcapture %}
{% include quick-concept-question.html question=ohms_question answer=ohms_answer %}