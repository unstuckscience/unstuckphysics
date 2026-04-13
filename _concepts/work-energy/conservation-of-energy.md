---
title: 📘 Conservation of Energy
summary: Learn the most fundamental law of physics—that energy cannot be created or destroyed, only transformed—and how to apply it to solve complex systems.
permalink: /concepts/work-energy/conservation-of-energy/
layout: single
collection: concepts
topic: work-energy
tags: [energy, conservation of energy, mechanical energy, physics, isolated system]
order: 4
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
The **Law of Conservation of Energy** states that the total energy of an isolated system remains constant. Energy can change form, but the total amount never changes.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of the conservation of energy.</p>
<audio controls class="audio-player" aria-label="Audio summary of conservation of energy">
  <source src="/assets/audio/energy/conservation-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**



<svg
    width="480"
    height="260"
    viewBox="0 0 480 260"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="consTitle consDesc">

  <desc id="consDesc">
    A diagram of a pendulum swinging, showing Total Mechanical Energy remaining constant while Potential and Kinetic energy fluctuate.
  </desc>

  <rect x="0" y="0" width="480" height="260" fill="white"/>

  <line x1="180" y1="20" x2="300" y2="20" stroke="#333" stroke-width="4"/>
  
  <path d="M 120 140 A 140 140 0 0 0 360 140" stroke="#ccc" stroke-dasharray="5,5" fill="none"/>

  <line x1="240" y1="20" x2="120" y2="140" stroke="#666" stroke-width="2"/>
  <circle cx="120" cy="140" r="12" fill="#2ca02c"/>
  <text x="50" y="145" font-size="12" font-weight="bold" fill="#2ca02c">Max PE</text>
  <text x="50" y="160" font-size="11" fill="#2ca02c">KE = 0</text>

  <line x1="240" y1="20" x2="240" y2="160" stroke="#666" stroke-width="2"/>
  <circle cx="240" cy="160" r="12" fill="#ff7f0e"/>
  <text x="240" y="190" font-size="12" font-weight="bold" fill="#ff7f0e" text-anchor="middle">Max KE</text>
  <text x="240" y="205" font-size="11" fill="#ff7f0e" text-anchor="middle">Min PE</text>

  <rect x="140" y="220" width="200" height="30" rx="5" fill="#f8f9fa" stroke="#2A52BE"/>
  <text x="240" y="240" font-size="14" font-weight="bold" text-anchor="middle" fill="#2A52BE">PE_top = KE_bottom</text>

</svg>

---

## **Mechanical Energy**

In many physics problems, we focus on **Mechanical Energy ($E_{me}$)**, which is the sum of an object's kinetic and potential energy.

$$E_{me} = KE + PE$$

If there are no non-conservative forces (like friction or air resistance), the mechanical energy at any point ($1$) is equal to the mechanical energy at any other point ($2$):

$$KE_1 + PE_1 = KE_2 + PE_2$$

---

## **Non-Conservative Forces**

When friction is present, it does **negative work** on the system. This energy isn't "gone"—it's just converted into **Thermal Energy** (heat). 

In these cases, the equation becomes:
$$KE_1 + PE_1 + W_{ext} = KE_2 + PE_2$$
*(Where $W_{ext}$ is usually negative work done by friction)*

---

## **Interactive Conservation Simulator**

Adjust the friction and initial height of the block. Watch how the total energy stays the same (the height of the total energy bar), even as the proportions of Kinetic, Potential, and Thermal energy shift.

<div class="animator-container conservation-animator-container">
    <h3 class="animator-title">Energy Transformation Lab</h3>

    <div class="control-group">
        <label for="frictionSlider">Friction (Heat Loss): </label>
        <input type="range" id="frictionSlider" min="0" max="100" value="0">
        <span id="frictionVal">None</span>
    </div>

    <canvas id="conservationCanvas" width="500" height="300"></canvas>

    <div class="info-container">
        <div class="info-box" style="background: #e8f5e9;">
            <p class="info-label">Potential:</p>
            <div class="bar-bg"><div id="peBar" class="bar-fill" style="background: #2ca02c;"></div></div>
        </div>
        <div class="info-box" style="background: #fff3e0;">
            <p class="info-label">Kinetic:</p>
            <div class="bar-bg"><div id="keBar" class="bar-fill" style="background: #ff7f0e;"></div></div>
        </div>
        <div class="info-box" style="background: #ffebee;">
            <p class="info-label">Thermal:</p>
            <div class="bar-bg"><div id="thBar" class="bar-fill" style="background: #d62728;"></div></div>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="resetConsButton" class="animator-button reset-button">Drop Block</button>
    </div>
</div>

<script src="{{ '/assets/js/energy/conservation-animator.js' | relative_url }}"></script>

---

## **Problem Solving Steps**

Using energy conservation is often much easier than using $F = ma$. Follow these steps:

1. **Identify Two Points:** Choose a "Start" and an "End."
2. **List Energy Types:** At each point, ask: "Is it moving ($KE$)?" and "Is it high up ($PE$)?".
3. **Check for Friction:** Is there a surface or air resistance doing work?
4. **Set Up Equation:** $KE_i + PE_i = KE_f + PE_f + \text{Thermal}$.

---

## **Interactive Match: Energy Scenarios**

Can you identify where the energy is going in these common situations?

<div class="vocab-matching-interactive-wrapper conservation-match">
    <div class="vocab-matching-container">
        <div id="vocabGridCons" class="vocab-grid">
            </div>
        <div id="vocabFeedbackCons"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonCons" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/energy/conservation-match.js"></script>

---

## **Why Should I Care?**

Conservation of energy is the "Ultimate Law." It tells us:
* Why "Perpetual Motion Machines" are impossible.
* How to calculate the speed of a roller coaster at the bottom of a loop.
* How hydroelectric dams turn the position of water into electricity for your phone.

---

{% capture cons_question %}A ball is dropped from a height of 10 meters. If we ignore air resistance, how does its Kinetic Energy at the 5-meter mark compare to its initial Potential Energy at 10 meters?{% endcapture %}
{% capture cons_answer %}At the 5-meter mark (exactly halfway down), the ball has lost half of its initial Potential Energy. Because energy is conserved, that "lost" potential energy has been converted into Kinetic Energy. Therefore, its $KE$ at 5 meters is exactly **half** of its initial $PE$ at 10 meters.{% endcapture %}
{% include quick-concept-question.html question=cons_question answer=cons_answer %}