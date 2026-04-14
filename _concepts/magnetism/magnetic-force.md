---
title: 📘 Magnetic Force
summary: Learn how magnetic fields exert forces on moving electric charges and current-carrying wires, and master the Right-Hand Rule.
permalink: /concepts/magnetism/magnetic-force/
layout: single
collection: concepts
topic: magnetism
tags: [magnetic force, lorentz force, right hand rule, moving charges]
order: 2
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
A magnetic field doesn't just sit there—it exerts a force. However, magnetism is "picky." A magnetic field will only exert a force on a charge if that charge is **moving**. If the particle stops, the force vanishes.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's why velocity and direction are the keys to unlocking magnetic force.</p>
<audio controls class="audio-player" aria-label="Audio summary of magnetic force">
  <source src="/assets/audio/magnetism/magnetic-force-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Force on a Moving Charge**

When a particle with charge $q$ moves with a velocity $v$ through a magnetic field $B$, it experiences a force. The magnitude of this force depends on the angle between the velocity and the field.

$$F_B = qvB\sin\theta$$

* **$F_B$:** Magnetic Force (Newtons, N)
* **$q$:** Charge (Coulombs, C)
* **$v$:** Velocity (m/s)
* **$B$:** Magnetic Field Strength (Tesla, T)
* **$\theta$:** The angle between the velocity vector and the magnetic field vector.

### **The "Zero Force" Rule**
If a charge moves **parallel** or **anti-parallel** to the magnetic field lines ($\theta = 0^\circ$ or $180^\circ$), the force is **zero**. Magnetic force is at its maximum when the charge moves perpendicular to the field.

---

## **The Right-Hand Rule (RHR)**

Magnetic force is always perpendicular to both the velocity and the magnetic field. To find the direction of the force for a **positive** charge, use your right hand:



1.  **Fingers:** Point them in the direction of the velocity ($v$).
2.  **Curl:** Curl them toward the magnetic field ($B$).
3.  **Thumb:** Your thumb points in the direction of the Magnetic Force ($F_B$).

> **Note for Electrons:** If the charge is negative (like an electron), the force points in the **opposite** direction of your thumb!

---

## **Visual Representation: Circular Motion**

Because the magnetic force is always perpendicular to the velocity, it acts as a **centripetal force**. This causes charged particles to fly in circles when they enter a uniform magnetic field.

<svg
    width="480"
    height="240"
    viewBox="0 0 480 240"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="forceTitle forceDesc">

  <desc id="forceDesc">
    A diagram showing a charged particle spiraling in a magnetic field due to the Lorentz force.
  </desc>

  <rect x="0" y="0" width="480" height="240" fill="#f9f9f9"/>

  <g stroke="#ccc" stroke-width="1">
    <line x1="50" y1="50" x2="70" y2="70"/><line x1="70" y1="50" x2="50" y2="70"/>
    <line x1="150" y1="50" x2="170" y2="70"/><line x1="170" y1="50" x2="150" y2="70"/>
    <line x1="250" y1="50" x2="270" y2="70"/><line x1="270" y1="50" x2="250" y2="70"/>
    <line x1="50" y1="150" x2="70" y2="170"/><line x1="70" y1="150" x2="50" y2="170"/>
    <line x1="150" y1="150" x2="170" y2="170"/><line x1="170" y1="150" x2="150" y2="170"/>
    <line x1="250" y1="150" x2="270" y2="170"/><line x1="270" y1="150" x2="250" y2="170"/>
  </g>
  <text x="350" y="40" font-size="12" fill="#999">Field (B) into page ⊗</text>

  <circle cx="200" cy="120" r="80" fill="none" stroke="#2A52BE" stroke-width="2" stroke-dasharray="5,5"/>

  <circle cx="280" cy="120" r="10" fill="#d62728"/>
  <text x="280" y="125" font-size="12" text-anchor="middle" fill="white" font-weight="bold">+</text>

  <line x1="280" y1="120" x2="280" y2="40" stroke="#2ca02c" stroke-width="3" marker-end="url(#arrowheadGreen)"/>
  <text x="295" y="60" font-size="14" fill="#2ca02c" font-weight="bold">v</text>

  <line x1="280" y1="120" x2="210" y2="120" stroke="#d62728" stroke-width="3" marker-end="url(#arrowheadRed)"/>
  <text x="240" y="140" font-size="14" fill="#d62728" font-weight="bold">F</text>

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

## **Interactive Particle Chamber**

Fire a proton into a magnetic field. Change the speed of the particle or the strength of the field to see how the radius of its circular path changes.

<div class="animator-container magnetic-force-container">
    <h3 class="animator-title">Cloud Chamber Simulator</h3>

    <div class="control-group">
        <label for="particleVel">Velocity (v): </label>
        <input type="range" id="particleVel" min="10" max="100" step="10" value="50">
        <span id="velVal">50 m/s</span>
    </div>

    <div class="control-group">
        <label for="fieldStrength">Field Strength (B): </label>
        <input type="range" id="fieldStrength" min="-5" max="5" step="1" value="2">
        <span id="fieldVal">2 T</span>
    </div>

    <canvas id="forceCanvas" width="500" height="300"></canvas>
</div>

<script src="{{ '/assets/js/magnetism/magnetic-force-animator.js' | relative_url }}"></script>

---

## **Force on a Current-Carrying Wire**

Since a current is just a bunch of moving charges, a wire with electricity flowing through it also feels a magnetic force.

$$F = ILB\sin\theta$$

* **$I$:** Current (Amperes, A)
* **$L$:** Length of the wire in the field (meters, m)

This is the principle behind the **electric motor**. By placing a coil of wire in a magnetic field and running a current through it, the magnetic force creates torque, making the motor spin.



---

## **Interactive Match: Force Directions**

Use the Right-Hand Rule to determine the direction of the force in these scenarios.

<div class="vocab-matching-interactive-wrapper force-match">
    <div class="vocab-matching-container">
        <div id="vocabGridForce" class="vocab-grid">
            </div>
        <div id="vocabFeedbackForce"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonForce" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/magnetism/magnetic-force-match.js"></script>

---

## **Why Should I Care?**

* **Mass Spectrometers:** Scientists identify chemical elements by shooting them through magnetic fields; heavier atoms curve less than lighter ones.
* **Aurora Borealis:** Charged particles from the sun get "trapped" by Earth's magnetic force and spiraled toward the poles, where they hit the atmosphere and glow.
* **Speakers:** Your headphones use a small electromagnet that is pushed and pulled by a permanent magnet to vibrate a cone and create sound.

---

{% capture force_question %}An electron is moving due North through a magnetic field that points straight UP (out of the ground). Which way is the magnetic force pushing the electron?{% endcapture %}
{% capture force_answer %}1. Point fingers North (velocity).
2. Curl fingers Up (field).
3. Thumb points **East**.
4. **BUT**, because an electron is negative, the force is the opposite: **West**.{% endcapture %}
{% include quick-concept-question.html question=force_question answer=force_answer %}