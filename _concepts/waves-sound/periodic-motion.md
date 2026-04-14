---
title: 📘 Periodic Motion
summary: Explore the fundamentals of motion that repeats at regular intervals, and master the relationship between period and frequency.
permalink: /concepts/waves-sound/periodic-motion/
layout: single
collection: concepts
topic: waves-sound
tags: [periodic motion, period, frequency, oscillation, physics]
order: 1
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
**Periodic motion** is any motion that repeats itself at regular time intervals. From the ticking of a clock to the orbit of a planet, periodic motion is the heartbeat of physics.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of period, frequency, and the nature of cycles.</p>
<audio controls class="audio-player" aria-label="Audio summary of periodic motion">
  <source src="/assets/audio/waves-sound/periodic-motion-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**



<svg
    width="480"
    height="220"
    viewBox="0 0 480 220"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="periodicTitle periodicDesc">

  <desc id="periodicDesc">
    A diagram showing a single cycle of motion for a pendulum, moving from one side to the other and back.
  </desc>

  <rect x="0" y="0" width="480" height="220" fill="white"/>

  <path d="M 140 100 A 100 100 0 0 0 340 100" stroke="#ccc" stroke-dasharray="5,5" fill="none"/>

  <line x1="240" y1="20" x2="240" y2="30" stroke="#333" stroke-width="4"/>
  
  <line x1="240" y1="20" x2="140" y2="100" stroke="#666" stroke-width="1" opacity="0.5"/>
  <circle cx="140" cy="100" r="10" fill="#1f77b4" opacity="0.5"/>

  <line x1="240" y1="20" x2="240" y2="120" stroke="#666" stroke-width="2"/>
  <circle cx="240" cy="120" r="12" fill="#1f77b4"/>

  <path d="M 150 120 Q 240 160, 330 120" fill="none" stroke="#2ca02c" stroke-width="2" marker-end="url(#arrowheadGreen)"/>
  <text x="240" y="180" font-size="14" text-anchor="middle" fill="#2ca02c" font-weight="bold">One Full Cycle</text>

  <defs>
    <marker id="arrowheadGreen" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#2ca02c"/>
    </marker>
  </defs>
</svg>

---

## **The Big Two: Period vs. Frequency**

To describe periodic motion, we need to talk about **time** and **repetition**. These two concepts are mathematical flips of each other.

### **1. Period ($T$)**
The **time** it takes to complete one full cycle.
* **Unit:** Seconds (s)
* **Question it answers:** "How long for one loop?"

### **2. Frequency ($f$)**
The **number of cycles** completed in a certain amount of time (usually one second).
* **Unit:** Hertz (Hz), where $1 \text{ Hz} = 1 \text{ cycle/second}$.
* **Question it answers:** "How fast is it repeating?"

---

## **The Relationship**

Period and frequency are **reciprocals**. If you know one, you can always find the other:

$$T = \frac{1}{f} \quad \text{and} \quad f = \frac{1}{T}$$

---

## **Interactive Period Lab**

Adjust the speed of the rotating fan. Watch how the Period (time for one blade to return to the top) decreases as the Frequency (number of spins per second) increases.

<div class="animator-container periodic-animator-container">
    <h3 class="animator-title">Period & Frequency Visualizer</h3>

    <div class="control-group">
        <label for="freqSlider">Frequency (Hz): </label>
        <input type="range" id="freqSlider" min="0.1" max="5.0" step="0.1" value="1.0">
        <span id="freqVal">1.0 Hz</span>
    </div>

    <canvas id="periodicCanvas" width="500" height="250"></canvas>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Period (T):</p>
            <p id="periodVal" class="value-display">1.00 s</p>
        </div>
        <div class="info-box">
            <p class="info-label">Cycles per Minute:</p>
            <p id="cpmVal" class="value-display">60</p>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="resetPeriodicButton" class="animator-button reset-button">Reset Timer</button>
    </div>
</div>

<script src="{{ '/assets/js/waves-sound/periodic-animator.js' | relative_url }}"></script>

---

## **Real-World Examples**

* **Human Heartbeat:** A resting heart rate of 60 beats per minute is a frequency of $1 \text{ Hz}$ and a period of $1 \text{ second}$.
* **Musical Notes:** The note "A4" has a frequency of $440 \text{ Hz}$. This means the air vibrates back and forth 440 times every second!
* **AC Electricity:** The power from your wall outlet oscillates at a frequency of $60 \text{ Hz}$ (in North America).

---

## **Interactive Match: Cycles**

Match the event to its corresponding period or frequency.

<div class="vocab-matching-interactive-wrapper periodic-match">
    <div class="vocab-matching-container">
        <div id="vocabGridPeriodic" class="vocab-grid">
            </div>
        <div id="vocabFeedbackPeriodic"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonPeriodic" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/waves-sound/periodic-match.js"></script>

---

## **Why Should I Care?**

Periodic motion is the foundation of all wave science. If you understand how one thing wobbles, you can understand how:
* Sound travels through a room.
* Wi-Fi signals carry data to your phone.
* Earthquakes move through the ground.

---

{% capture periodic_question %}If a blue jay flaps its wings 40 times in 5 seconds, what is the frequency and period of the wing flaps?{% endcapture %}
{% capture periodic_answer %}First, find the **Frequency**: $f = \text{cycles} / \text{time} = 40 / 5 = \mathbf{8 \text{ Hz}}$. 
Then, find the **Period**: $T = 1/f = 1/8 = \mathbf{0.125 \text{ seconds}}$.{% endcapture %}
{% include quick-concept-question.html question=periodic_question answer=periodic_answer %}