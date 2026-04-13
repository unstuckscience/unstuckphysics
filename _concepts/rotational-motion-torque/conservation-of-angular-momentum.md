---
title: 📘 Conservation of Angular Momentum
summary: Discover how spinning objects maintain their rotational motion and why changing their shape causes them to speed up or slow down.
permalink: /concepts/rotational-motion/conservation-of-angular-momentum/
layout: single
collection: concepts
topic: rotational-motion
tags: [angular momentum, conservation, rotational inertia, physics, spin]
order: 4
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
**Conservation of Angular Momentum** states that if no external torque acts on a system, the total angular momentum of that system remains constant. 
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of how angular momentum stays balanced.</p>
<audio controls class="audio-player" aria-label="Audio summary of conservation of angular momentum">
  <source src="/assets/audio/rotational-motion/angular-momentum-audio.mp3" type="audio/mpeg">
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
    aria-labelledby="momTitle momDesc">

  <desc id="momDesc">
    A diagram showing that as Rotational Inertia (I) decreases, Angular Velocity (omega) must increase to keep Angular Momentum (L) constant.
  </desc>

  <rect x="0" y="0" width="480" height="280" fill="white"/>

  <circle cx="120" cy="120" r="60" fill="none" stroke="#ccc" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="120" y1="40" x2="120" y2="200" stroke="#333" stroke-width="2"/>
  <circle cx="65" cy="120" r="10" fill="#1f77b4"/>
  <circle cx="175" cy="120" r="10" fill="#1f77b4"/>
  <path d="M 120 70 A 50 50 0 0 1 160 90" fill="none" stroke="#2ca02c" stroke-width="3" marker-end="url(#arrowheadGreen)"/>
  <text x="120" y="230" font-size="14" text-anchor="middle" font-weight="bold">Large I, Small ω</text>

  <text x="240" y="130" font-size="30" text-anchor="middle" fill="#333">=</text>

  <circle cx="360" cy="120" r="60" fill="none" stroke="#ccc" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="360" y1="40" x2="360" y2="200" stroke="#333" stroke-width="2"/>
  <circle cx="340" cy="120" r="10" fill="#1f77b4"/>
  <circle cx="380" cy="120" r="10" fill="#1f77b4"/>
  <path d="M 360 60 A 60 60 0 0 1 420 120" fill="none" stroke="#2ca02c" stroke-width="6" marker-end="url(#arrowheadGreen)"/>
  <text x="360" y="230" font-size="14" text-anchor="middle" font-weight="bold">Small I, Large ω</text>

  <text x="240" y="40" font-size="20" font-weight="bold" text-anchor="middle" fill="#2A52BE">L = Iω</text>

  <defs>
    <marker id="arrowheadGreen" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#2ca02c"/>
    </marker>
  </defs>
</svg>

---

## **The Angular Momentum Equation**

Angular momentum ($L$) is the rotational version of linear momentum ($p = mv$). It depends on how an object is shaped and how fast it is spinning.

$$L = I\omega$$

* **$L$:** Angular Momentum (measured in **kg·m²/s**).
* **$I$:** Rotational Inertia (Moment of Inertia).
* **$\omega$:** Angular Velocity.

### **The Law of Conservation**
If the net external torque is zero ($\sum \tau = 0$):
$$L_{initial} = L_{final}$$
$$I_i \omega_i = I_f \omega_f$$

---

## **Interactive Spin Lab**

Control a virtual skater! Change the distribution of their mass by extending or pulling in their arms. Watch the angular velocity graph spike as the rotational inertia decreases, showing the conservation of momentum in action.

<div class="animator-container momentum-animator-container">
    <h3 class="animator-title">The Skater's Spin</h3>

    <div class="control-group">
        <label for="armSlider">Arm Extension: </label>
        <input type="range" id="armSlider" min="10" max="100" value="100">
        <span id="armVal">Fully Extended</span>
    </div>

    <canvas id="momentumCanvas" width="500" height="300"></canvas>

    <div class="info-container">
        <div class="info-box" style="border-top: 4px solid #1f77b4;">
            <p class="info-label">Inertia (I):</p>
            <p id="inertiaVal" class="value-display">---</p>
        </div>
        <div class="info-box" style="border-top: 4px solid #2ca02c;">
            <p class="info-label">Velocity (ω):</p>
            <p id="velocityVal" class="value-display">---</p>
        </div>
        <div class="info-box" style="border-top: 4px solid #2A52BE;">
            <p class="info-label">Momentum (L):</p>
            <p id="momentumVal" class="value-display">CONSTANT</p>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="resetSpinButton" class="animator-button reset-button">Reset Spin</button>
    </div>
</div>

<script src="{{ '/assets/js/rotational-motion/momentum-animator.js' | relative_url }}"></script>

---

## **Real-World Examples**

* **Diving and Gymnastics:** To perform multiple flips, an athlete "tucks" their body. By bringing their mass closer to their center, they decrease their rotational inertia ($I$), which forces their angular velocity ($\omega$) to increase.
* **Neutron Stars:** When a massive star collapses into a tiny neutron star, it spins incredibly fast (pulsars) because its mass is now concentrated in a much smaller radius.
* **The Earth-Moon System:** Tidal friction is slowly transferring angular momentum from Earth's rotation to the Moon's orbit, causing the Moon to drift further away as the Earth's spin slows down.

---

## **Interactive Match: Momentum Scenarios**

Match the physical change to the resulting effect on the system's rotation.

<div class="vocab-matching-interactive-wrapper momentum-match">
    <div class="vocab-matching-container">
        <div id="vocabGridMom" class="vocab-grid">
            </div>
        <div id="vocabFeedbackMom"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonMom" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/rotational-motion/momentum-match.js"></script>

---

## **Why Should I Care?**

Conservation of angular momentum is why the universe looks the way it does:
* It explains why galaxies and solar systems form into flat, spinning disks.
* It is the principle used in **Gyroscopes**, which keep satellites, planes, and even your smartphone oriented correctly.
* It's why a spinning bicycle wheel is much harder to tip over than a stationary one—a property called **gyroscopic stability**.

---

{% capture mom_question %}If a spinning person on a frictionless chair drops two heavy weights they were holding in their hands, does their angular velocity change?{% endcapture %}
{% capture mom_answer %}**No.** While the weights carry away some of the system's total angular momentum, the **person's** rotational inertia and angular momentum remain unchanged at the moment of release. Their spin speed only changes if they move the weights *closer* or *further* from their body while still holding them.{% endcapture %}
{% include quick-concept-question.html question=mom_question answer=mom_answer %}