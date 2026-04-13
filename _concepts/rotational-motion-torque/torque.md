---
title: 📘 Torque
summary: Learn about torque, the rotational equivalent of force, and how the point of application and angle determine how effectively an object rotates.
permalink: /concepts/rotational-motion/torque/
layout: single
collection: concepts
topic: rotational-motion
tags: [torque, force, rotation, lever arm, moment arm, physics]
order: 2
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
**Torque** is a measure of the force that can cause an object to rotate about an axis. Just as force causes an object to accelerate linearly, torque is what causes an object to acquire **angular acceleration**.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of the "twist" behind torque.</p>
<audio controls class="audio-player" aria-label="Audio summary of torque and the lever arm">
  <source src="/assets/audio/rotational-motion/torque-audio.mp3" type="audio/mpeg">
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
    aria-labelledby="torqueTitle torqueDesc">

  <desc id="torqueDesc">
    A diagram of a wrench turning a nut, illustrating the pivot point, lever arm (r), and applied force (F).
  </desc>

  <rect x="0" y="0" width="480" height="280" fill="white"/>

  <polygon points="60,140 75,115 105,115 120,140 105,165 75,165" fill="#999" stroke="#333" stroke-width="2"/>
  <circle cx="90" cy="140" r="8" fill="#333"/>

  <rect x="110" y="130" width="220" height="20" rx="5" fill="#ccc" stroke="#666"/>
  
  <line x1="90" y1="180" x2="330" y2="180" stroke="#333" stroke-width="1" marker-start="url(#dot)" marker-end="url(#dot)"/>
  <text x="210" y="200" font-size="14" text-anchor="middle">Lever Arm (r)</text>

  <line x1="330" y1="140" x2="330" y2="40" stroke="#d62728" stroke-width="4" marker-end="url(#arrowheadRed)"/>
  <text x="340" y="60" font-size="16" font-weight="bold" fill="#d62728">Force (F)</text>

  <path d="M 80 100 A 40 40 0 0 1 120 100" fill="none" stroke="#1f77b4" stroke-width="3" marker-end="url(#arrowheadBlue)"/>
  <text x="90" y="85" font-size="18" font-weight="bold" fill="#1f77b4">τ</text>

  <defs>
    <marker id="arrowheadRed" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#d62728"/>
    </marker>
    <marker id="arrowheadBlue" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#1f77b4"/>
    </marker>
    <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
      <circle cx="2" cy="2" r="2" fill="#333"/>
    </marker>
  </defs>
</svg>

---

## **The Torque Formula**

The effectiveness of a force in causing rotation depends on three things: how hard you push, where you push, and at what angle you push.

$$\tau = r F \sin(\theta)$$

* **$\tau$ (tau):** Torque (measured in **Newton-meters**, N·m).
* **$r$:** The distance from the pivot point to where the force is applied (the lever arm).
* **$F$:** The magnitude of the applied force.
* **$\theta$:** The angle between the force vector and the lever arm.

> **Note:** Torque is maximized when the force is applied **perpendicularly** ($\theta = 90^\circ$), because $\sin(90^\circ) = 1$.

---

## **Interactive Torque Lab**

Try to balance the seesaw! Adjust the mass of the objects and their distance from the center (the fulcrum). Notice how a smaller weight can balance a larger weight if it is placed further from the center.

<div class="animator-container torque-animator-container">
    <h3 class="animator-title">Seesaw Equilibrium</h3>

    <div class="control-group">
        <label for="massLeft">Left Mass (kg): </label>
        <input type="range" id="massLeft" min="1" max="20" value="10">
        <span id="massLeftVal">10 kg</span>
    </div>

    <div class="control-group">
        <label for="distLeft">Left Distance (m): </label>
        <input type="range" id="distLeft" min="1" max="5" value="2">
        <span id="distLeftVal">2 m</span>
    </div>

    <canvas id="torqueCanvas" width="500" height="250"></canvas>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Left Torque:</p>
            <p id="torqueLeftDisplay" class="value-display">--- N·m</p>
        </div>
        <div class="info-box">
            <p class="info-label">Right Torque:</p>
            <p id="torqueRightDisplay" class="value-display">--- N·m</p>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="resetTorqueButton" class="animator-button reset-button">Reset Seesaw</button>
    </div>
</div>

<script src="{{ '/assets/js/rotational-motion/torque-animator.js' | relative_url }}"></script>

---

## **Rotational Equilibrium**

An object is in **rotational equilibrium** when the sum of all torques acting on it is zero. This is the rotational version of Newton's First Law.

$$\sum \tau = 0$$

* **Clockwise (CW) Torques:** Usually treated as negative.
* **Counter-Clockwise (CCW) Torques:** Usually treated as positive.

If the torques balance out, the object will not change its state of rotation.

---

## **Interactive Match: Torque Concepts**

Can you match the action to its effect on torque?

<div class="vocab-matching-interactive-wrapper torque-match">
    <div class="vocab-matching-container">
        <div id="vocabGridTorque" class="vocab-grid">
            </div>
        <div id="vocabFeedbackTorque"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonTorque" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/rotational-motion/torque-interactive-match.js"></script>

---

## **Why Should I Care?**

Torque is the principle behind every simple machine that involves rotation:
* **Tools:** Wrenches and crowbars use long handles to increase $r$, allowing you to produce massive torque with relatively small force.
* **Biometrics:** Your muscles create torque around your joints to move your limbs.
* **Automotive:** An engine's "torque" rating tells you how much pulling power it has to get a heavy load moving.

---

{% capture torque_question %}Why is the door handle always located on the opposite side of the hinges?{% endcapture %}
{% capture torque_answer %}To maximize the **lever arm ($r$)**. By placing the handle as far from the hinges (the pivot) as possible, you minimize the amount of force ($F$) required to produce the torque needed to rotate the door open.{% endcapture %}
{% include quick-concept-question.html question=torque_question answer=torque_answer %}