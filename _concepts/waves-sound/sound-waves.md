---
title: 📘 Sound Waves
summary: Explore the physics of longitudinal pressure waves, the speed of sound in different media, and how our ears perceive frequency and amplitude as pitch and loudness.
permalink: /concepts/waves-sound/sound-waves/
layout: single
collection: concepts
topic: waves-sound
tags: [sound waves, longitudinal, pressure, speed of sound, decibels, physics]
order: 6
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
**Sound** is a longitudinal mechanical wave produced by vibrating objects. It travels through a medium by creating a series of high-pressure "squeezes" and low-pressure "stretches" in the molecules around it.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's how mechanical vibrations turn into the sounds you hear every day.</p>
<audio controls class="audio-player" aria-label="Audio summary of sound waves">
  <source src="/assets/audio/waves-sound/sound-waves-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **The Anatomy of a Sound Wave**

Unlike light or water ripples, sound is a **longitudinal wave**. Instead of moving up and down, the molecules move back and forth in the same direction the wave travels.



* **Compression:** A region where the medium's molecules are crowded together (high pressure).
* **Rarefaction:** A region where the molecules are spread apart (low pressure).
* **Wavelength ($\lambda$):** The distance from one compression to the next.

---

## **Visual Representation**

<svg
    width="480"
    height="180"
    viewBox="0 0 480 180"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="soundTitle soundDesc">

  <desc id="soundDesc">
    A diagram showing the density of particles in a sound wave, representing compressions and rarefactions.
  </desc>

  <rect x="0" y="0" width="480" height="180" fill="white"/>

  <g fill="#555">
    <circle cx="60" cy="80" r="2"/><circle cx="65" cy="95" r="2"/><circle cx="55" cy="110" r="2"/>
    <circle cx="70" cy="85" r="2"/><circle cx="75" cy="100" r="2"/><circle cx="68" cy="115" r="2"/>
    <circle cx="80" cy="90" r="2"/><circle cx="85" cy="105" r="2"/><circle cx="78" cy="120" r="2"/>
  </g>

  <g fill="#999">
    <circle cx="150" cy="85" r="2"/><circle cx="180" cy="110" r="2"/><circle cx="210" cy="95" r="2"/>
  </g>

  <g fill="#555">
    <circle cx="300" cy="80" r="2"/><circle cx="305" cy="95" r="2"/><circle cx="295" cy="110" r="2"/>
    <circle cx="310" cy="85" r="2"/><circle cx="315" cy="100" r="2"/><circle cx="308" cy="115" r="2"/>
    <circle cx="320" cy="90" r="2"/><circle cx="325" cy="105" r="2"/><circle cx="318" cy="120" r="2"/>
  </g>

  <text x="70" y="50" font-size="14" text-anchor="middle" font-weight="bold">Compression</text>
  <text x="180" y="50" font-size="14" text-anchor="middle" font-weight="bold" fill="#999">Rarefaction</text>
  
  <line x1="70" y1="150" x2="310" y2="150" stroke="#1f77b4" stroke-width="2" marker-start="url(#dot)" marker-end="url(#dot)"/>
  <text x="190" y="170" font-size="14" text-anchor="middle" fill="#1f77b4" font-weight="bold">Wavelength (λ)</text>

  <defs>
    <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
      <circle cx="2" cy="2" r="2" fill="#1f77b4"/>
    </marker>
  </defs>
</svg>

---

## **Speed of Sound**

The speed of sound depends entirely on the **medium** it is traveling through. Specifically, it depends on the medium's elasticity and density.

| Medium | Speed (approx. m/s) | Why? |
| :--- | :--- | :--- |
| **Air ($20^\circ\text{C}$)** | $343 \text{ m/s}$ | Particles are far apart; energy transfers slower. |
| **Water** | $1480 \text{ m/s}$ | Water is less compressible than air. |
| **Steel** | $5960 \text{ m/s}$ | Atoms are tightly bonded and snap back quickly. |

> **The Temperature Effect:** In air, sound travels faster on a hot day because the molecules are already moving faster and collide more frequently.

---

## **Perception: Pitch and Loudness**

Our brain interprets physical wave properties as sensory experiences.

* **Frequency $\rightarrow$ Pitch:** High frequency means a "high" note (like a whistle). Low frequency means a "low" note (like a bass drum). Humans can typically hear between $20 \text{ Hz}$ and $20,000 \text{ Hz}$.
* **Amplitude $\rightarrow$ Loudness:** Higher amplitude waves carry more energy and sound "louder" to our ears. Loudness is often measured on the **Decibel (dB)** scale.

---

## **Interactive Sound Lab**

Visualize the air molecules! Adjust the frequency and amplitude sliders to see how the density of the compressions changes and how fast the pressure waves move across the screen.

<div class="animator-container sound-wave-container">
    <h3 class="animator-title">Pressure Wave Simulator</h3>

    <div class="control-group">
        <label for="soundFreq">Pitch (Frequency): </label>
        <input type="range" id="soundFreq" min="200" max="1000" step="50" value="440">
        <span id="soundFreqVal">440 Hz (A4)</span>
    </div>

    <canvas id="soundCanvas" width="500" height="200"></canvas>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Speed in Air:</p>
            <p id="soundSpeedDisplay" class="value-display">343 m/s</p>
        </div>
        <div class="info-box">
            <p class="info-label">Type:</p>
            <p class="value-display">Longitudinal</p>
        </div>
    </div>
</div>

<script src="{{ '/assets/js/waves-sound/sound-animator.js' | relative_url }}"></script>

---

## **Interactive Match: Sound Vocabulary**

Match the physical property of a sound wave to how we perceive it.

<div class="vocab-matching-interactive-wrapper sound-match">
    <div class="vocab-matching-container">
        <div id="vocabGridSound" class="vocab-grid">
            </div>
        <div id="vocabFeedbackSound"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonSound" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/waves-sound/sound-match.js"></script>

---

## **Why Should I Care?**

* **Echolocation:** Bats and dolphins use sound wave reflections to "see" their surroundings in the dark.
* **Medicine:** Ultrasound uses high-frequency sound waves ($>2 \text{ MHz}$) to create images of the inside of the human body without using radiation.
* **Acoustics:** Architects design concert halls so that sound waves reflect and interfere in a way that makes the music sound rich and clear in every seat.

---

{% capture sound_question %}Why can't you hear sounds in the vacuum of outer space?{% endcapture %}
{% capture sound_answer %}Sound is a **mechanical wave**, meaning it requires a **medium** (like air, water, or rock) to travel. In a vacuum, there are no particles to compress or stretch, so the energy has no way to move from the source to your ear.{% endcapture %}
{% include quick-concept-question.html question=sound_question answer=sound_answer %}