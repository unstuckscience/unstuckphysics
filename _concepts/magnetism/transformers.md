---
title: 📘 Transformers
summary: Understand how transformers use electromagnetic induction to step-up or step-down AC voltage for efficient power transmission.
permalink: /concepts/magnetism/transformers/
layout: single
collection: concepts
topic: magnetism
tags: [transformers, mutual induction, step-up, step-down, magnetism, electricity]
order: 5
sidebar:
  nav: magnetism-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3

---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
A **transformer** is a device that changes the voltage of an alternating current (AC). It is the bridge between the high-voltage power lines traveling across the country and the safe, low-voltage outlets in your home.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's how two coils and an iron core trade magnetic energy to transform electricity.</p>
<audio controls class="audio-player" aria-label="Audio summary of transformers">
  <source src="/assets/audio/magnetism/transformers-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **How a Transformer Works**

Transformers operate on the principle of **Mutual Induction**. They consist of two coils of wire—the **Primary** and the **Secondary**—wrapped around a common iron core.



[Image of a transformer diagram showing primary coil, secondary coil, and iron core]


1.  **Input:** Alternating current flows into the primary coil.
2.  **Magnetism:** Because AC constantly changes direction, it creates a constantly changing magnetic field in the iron core.
3.  **Induction:** This changing magnetic field "washes" over the secondary coil.
4.  **Output:** According to Faraday's Law, this induces a new AC voltage in the secondary coil.

---

## **The Transformer Equation**

The relationship between the number of turns in the coils and the voltage is a simple ratio:

$$\frac{V_p}{V_s} = \frac{N_p}{N_s}$$

* **$V_p, V_s$:** Voltage in Primary and Secondary.
* **$N_p, N_s$:** Number of turns in Primary and Secondary.

### **Step-Up vs. Step-Down**
* **Step-Up:** If the secondary coil has *more* turns ($N_s > N_p$), the voltage increases.
* **Step-Down:** If the secondary coil has *fewer* turns ($N_s < N_p$), the voltage decreases.

---

## **Visual Representation**

<svg
    width="480"
    height="240"
    viewBox="0 0 480 240"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="transTitle transDesc">

  <desc id="transDesc">
    A diagram showing a step-down transformer with more turns on the primary side than the secondary side.
  </desc>

  <rect x="0" y="0" width="480" height="240" fill="white"/>

  <rect x="140" y="40" width="200" height="160" fill="none" stroke="#666" stroke-width="20" rx="10"/>
  <text x="240" y="125" font-size="12" fill="#999" text-anchor="middle">Iron Core</text>

  <g stroke="#b87333" stroke-width="4" fill="none">
    <path d="M 120 60 L 150 65 M 120 80 L 150 85 M 120 100 L 150 105 M 120 120 L 150 125 M 120 140 L 150 145 M 120 160 L 150 165 M 120 180 L 150 185" />
  </g>
  <text x="80" y="125" font-size="14" fill="#333" font-weight="bold">Primary (Vp)</text>

  <g stroke="#b87333" stroke-width="4" fill="none">
    <path d="M 330 80 L 360 85 M 330 120 L 360 125 M 330 160 L 360 165" />
  </g>
  <text x="400" y="125" font-size="14" fill="#333" font-weight="bold">Secondary (Vs)</text>

</svg>

---

## **Conservation of Energy**

A transformer can boost voltage, but it **cannot** create power out of nowhere. If the voltage goes up, the current must go down to compensate.

$$P_{in} = P_{out} \quad \rightarrow \quad I_p V_p = I_s V_s$$

This is why power companies use high-voltage lines. By stepping the voltage up to $300,000 \text{ V}$, the current becomes very low, which prevents the wires from heating up and wasting energy.

---

## **Interactive Transformer Lab**

Adjust the ratio of turns between the Primary and Secondary coils. Watch the virtual voltmeter to see how the output voltage changes, and observe the "magnetic flux" moving through the core.

<div class="animator-container transformer-container">
    <h3 class="animator-title">Voltage Transformation Simulator</h3>

    <div class="control-group">
        <label for="primaryTurns">Primary Turns ($N_p$): </label>
        <input type="range" id="primaryTurns" min="10" max="100" step="10" value="50">
        <span id="pTurnsVal">50</span>
    </div>

    <div class="control-group">
        <label for="secondaryTurns">Secondary Turns ($N_s$): </label>
        <input type="range" id="secondaryTurns" min="10" max="100" step="10" value="20">
        <span id="sTurnsVal">20</span>
    </div>

    <canvas id="transformerCanvas" width="500" height="250"></canvas>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Output Status:</p>
            <p id="transType" class="value-display">Step-Down</p>
        </div>
    </div>
</div>

<script src="{{ '/assets/js/magnetism/transformer-animator.js' | relative_url }}"></script>

---

## **Interactive Match: Transformer Ratios**

Predict the outcome based on the turn ratio.

<div class="vocab-matching-interactive-wrapper transformer-match">
    <div class="vocab-matching-container">
        <div id="vocabGridTrans" class="vocab-grid">
            </div>
        <div id="vocabFeedbackTrans"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonTrans" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/magnetism/transformer-match.js"></script>

---

## **Why Should I Care?**

* **Your Phone Charger:** Inside that little white brick is a tiny step-down transformer that turns $120 \text{ V}$ from the wall into the $5 \text{ V}$ your phone needs.
* **The Power Grid:** Without transformers, we couldn't send electricity further than a few miles without it all turning into heat in the wires.
* **Safety:** Transformers provide electrical isolation, protecting you from direct contact with high-voltage supply lines.

---

{% capture trans_question %}If a transformer has 100 turns on the primary and 500 turns on the secondary, and you plug it into a 12 V AC source, what is the output voltage?{% endcapture %}
{% capture trans_answer %}This is a **Step-Up** transformer with a ratio of 5:1. 
$V_s = V_p \times (N_s / N_p)$ 
$V_s = 12 \times (500 / 100) = \mathbf{60 \text{ V}}$.{% endcapture %}
{% include quick-concept-question.html question=trans_question answer=trans_answer %}