---
title: 📘 Wave Properties
summary: Discover the fundamental characteristics of waves, including wavelength, frequency, amplitude, and speed, and learn how to calculate wave behavior.
permalink: /concepts/waves-sound/wave-properties/
layout: single
collection: concepts
topic: waves-sound
tags: [waves, wavelength, frequency, amplitude, wave speed, physics]
order: 3
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
A **wave** is a disturbance that travels through a medium, transporting **energy** from one location to another without transporting matter. To understand waves, we have to master the "anatomy" of the wave itself.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick tour of the anatomy of a wave and the energy it carries.</p>
<audio controls class="audio-player" aria-label="Audio summary of wave properties">
  <source src="/assets/audio/waves-sound/wave-properties-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Anatomy of a Wave**

Whether it's a ripple in a pond or a pluck of a guitar string, most waves share these core features:



* **Crest:** The highest point of the wave.
* **Trough:** The lowest point of the wave.
* **Amplitude ($A$):** The maximum displacement from the equilibrium (center) position. This is directly related to the **energy** of the wave.
* **Wavelength ($\lambda$):** The distance between two consecutive identical points (like crest to crest).

---

## **Visual Representation**

<svg
    width="480"
    height="240"
    viewBox="0 0 480 240"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="waveTitle waveDesc">

  <desc id="waveDesc">
    A sine wave showing wavelength and amplitude.
  </desc>

  <rect x="0" y="0" width="480" height="240" fill="white"/>

  <line x1="20" y1="120" x2="460" y2="120" stroke="#999" stroke-width="1" stroke-dasharray="5,5"/>

  <path d="M 20 120 C 60 20, 100 20, 140 120 C 180 220, 220 220, 260 120 C 300 20, 340 20, 380 120 C 420 220, 460 220, 500 120" fill="none" stroke="#1f77b4" stroke-width="3"/>

  <line x1="100" y1="50" x2="340" y2="50" stroke="#333" stroke-width="2" marker-start="url(#dot)" marker-end="url(#dot)"/>
  <text x="220" y="40" font-size="16" text-anchor="middle" font-weight="bold">Wavelength (λ)</text>

  <line x1="340" y1="120" x2="340" y2="70" stroke="#d62728" stroke-width="2" marker-end="url(#arrowheadRed)"/>
  <text x="350" y="100" font-size="14" fill="#d62728" font-weight="bold">Amplitude (A)</text>

  <defs>
    <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
      <circle cx="2" cy="2" r="2" fill="#333"/>
    </marker>
    <marker id="arrowheadRed" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#d62728"/>
    </marker>
  </defs>
</svg>

---

## **The Universal Wave Equation**

All waves follow a fundamental mathematical relationship. The speed of a wave depends on how often it repeats (frequency) and the size of each cycle (wavelength).

$$v = f\lambda$$

* **$v$:** Wave speed (m/s).
* **$f$:** Frequency (Hz).
* **$\lambda$:** Wavelength (m).

> **Important Rule:** The speed of a wave ($v$) is determined solely by the **medium** (like air, water, or a string). If you increase the frequency, the wavelength must decrease to keep the speed the same!

---

## **Interactive Wave Lab**

Use the sliders to change the frequency and amplitude of the wave. Observe how the "balls" (matter) only move up and down while the "wave" (energy) moves to the right.

<div class="animator-container wave-properties-container">
    <h3 class="animator-title">Wave Motion Visualizer</h3>

    <div class="control-group">
        <label for="waveFreq">Frequency: </label>
        <input type="range" id="waveFreq" min="0.5" max="3.0" step="0.1" value="1.0">
        <span id="waveFreqVal">1.0 Hz</span>
    </div>

    <div class="control-group">
        <label for="waveAmp">Amplitude: </label>
        <input type="range" id="waveAmp" min="10" max="80" value="40">
        <span id="waveAmpVal">40 px</span>
    </div>

    <canvas id="waveCanvas" width="500" height="250"></canvas>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Wave Speed (v):</p>
            <p id="calcWaveSpeed" class="value-display">CONSTANT</p>
        </div>
        <div class="info-box">
            <p class="info-label">Wavelength (λ):</p>
            <p id="calcWavelength" class="value-display">--- m</p>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="toggleWaveType" class="animator-button">Switch to Longitudinal</button>
    </div>
</div>

<script src="{{ '/assets/js/waves-sound/wave-properties-animator.js' | relative_url }}"></script>

---

## **Transverse vs. Longitudinal**

Waves are categorized by the direction the medium moves compared to the direction the energy moves.

| Wave Type | Medium Direction | Example |
| :--- | :--- | :--- |
| **Transverse** | Perpendicular (Up/Down) | Light, S-Waves (Earthquakes), Guitar Strings |
| **Longitudinal** | Parallel (Back/Forward) | Sound, P-Waves, Compressed Springs |



[Image of a slinky showing transverse vs longitudinal waves]


---

## **Interactive Match: Wave Variables**

Match the physical change to the wave characteristic it represents.

<div class="vocab-matching-interactive-wrapper wave-match">
    <div class="vocab-matching-container">
        <div id="vocabGridWave" class="vocab-grid">
            </div>
        <div id="vocabFeedbackWave"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonWave" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/waves-sound/wave-properties-match.js"></script>

---

## **Why Should I Care?**

Everything you see and hear is a result of wave properties:
* **Color:** Your eyes interpret different **wavelengths** of light as different colors (Red is long, Violet is short).
* **Pitch:** Your ears interpret different **frequencies** of sound as different musical notes.
* **Volume:** A louder sound simply has a higher **amplitude** (more energy).

---

{% capture wave_question %}If you are standing on a pier and notice the wave crests are 4 meters apart, and a new crest hits the pier every 2 seconds, how fast are the waves moving?{% endcapture %}
{% capture wave_answer %}1. Wavelength ($\lambda$) = **4 m**.
2. Period ($T$) = **2 s**, so Frequency ($f$) = $1/T = \mathbf{0.5 \text{ Hz}}$.
3. Speed ($v$) = $f\lambda = 0.5 \times 4 = \mathbf{2 \text{ m/s}}$.{% endcapture %}
{% include quick-concept-question.html question=wave_question answer=wave_answer %}