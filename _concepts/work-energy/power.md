---
title: 📘 Power
summary: Learn about power—the rate at which work is done or energy is transformed—and understand the difference between doing a task and doing it quickly.
permalink: /concepts/work-energy/power/
layout: single
collection: concepts
topic: work-energy
tags: [power, work, energy, watts, horsepower, physics]
order: 5
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
**Power** is the **rate** at which work is performed or energy is transferred. In physics, it doesn't just matter how much work you do; it matters how **fast** you do it.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of the concept of power.</p>
<audio controls class="audio-player" aria-label="Audio summary of power">
  <source src="/assets/audio/energy/power-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**

[Image comparing two people lifting the same weight: one lifting it slowly and one lifting it quickly, highlighting the difference in power output]

<svg
    width="480"
    height="220"
    viewBox="0 0 480 220"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="powerTitle powerDesc">

  <desc id="powerDesc">
    A diagram showing two scenarios with the same work but different time intervals, illustrating high vs low power.
  </desc>

  <rect x="0" y="0" width="480" height="220" fill="white"/>

  <rect x="40" y="40" width="180" height="60" rx="5" fill="#f8f9fa" stroke="#ccc"/>
  <text x="50" y="65" font-size="14" font-weight="bold" fill="#333">Same Work (100 J)</text>
  <text x="50" y="85" font-size="12" fill="#d62728">Time: 10 seconds</text>
  <text x="160" y="85" font-size="14" font-weight="bold" fill="#1f77b4">10 Watts</text>

  <rect x="40" y="120" width="180" height="60" rx="5" fill="#f8f9fa" stroke="#ccc"/>
  <text x="50" y="145" font-size="14" font-weight="bold" fill="#333">Same Work (100 J)</text>
  <text x="50" y="165" font-size="12" fill="#d62728">Time: 2 seconds</text>
  <text x="160" y="165" font-size="14" font-weight="bold" fill="#1f77b4">50 Watts</text>

  <text x="350" y="110" font-size="22" font-weight="bold" text-anchor="middle" fill="#2A52BE">P = W / t</text>
  <text x="350" y="135" font-size="14" text-anchor="middle" fill="#666">Power = Work / Time</text>

</svg>

---

## **The Math of Power**

Power is calculated by dividing the work done by the time it took to do it.

$$P = \frac{W}{t}$$

* **$P$**: Power (measured in **Watts**, W)
* **$W$**: Work (measured in Joules, J)
* **$t$**: Time (measured in seconds, s)

Since $W = Fd$, we can also express power in terms of velocity:
$$P = \frac{Fd}{t} = Fv$$
*(Where $v$ is the constant velocity of the object being pushed)*

---

## **Units of Power**

* **The Watt (W):** 1 Watt is equal to 1 Joule per second ($1 \text{ W} = 1 \text{ J/s}$).
* **Horsepower (hp):** A non-metric unit often used for engines. 
  * $1 \text{ hp} \approx 746 \text{ Watts}$

---

## **Interactive Power Lab**

Compare two motors lifting a heavy crate. Adjust the horsepower of Motor A and Motor B to see how the time to complete the task changes, even though the total work (lifting the weight to the top) remains identical.

<div class="animator-container power-animator-container">
    <h3 class="animator-title">The Power Race</h3>

    <div class="control-group">
        <label for="powerSliderA">Motor A Power (W): </label>
        <input type="range" id="powerSliderA" min="100" max="1000" value="250">
        <span id="powerValA">250 W</span>
    </div>

    <div class="control-group">
        <label for="powerSliderB">Motor B Power (W): </label>
        <input type="range" id="powerSliderB" min="100" max="1000" value="750">
        <span id="powerValB">750 W</span>
    </div>

    <canvas id="powerCanvas" width="500" height="300"></canvas>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Motor A Time:</p>
            <p id="timeA" class="value-display">--- s</p>
        </div>
        <div class="info-box">
            <p class="info-label">Motor B Time:</p>
            <p id="timeB" class="value-display">--- s</p>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="startRaceButton" class="animator-button">Start Race</button>
        <button id="resetPowerButton" class="animator-button reset-button">Reset</button>
    </div>
</div>

<script src="{{ '/assets/js/energy/power-animator.js' | relative_url }}"></script>

---

## **Work vs. Power: The Key Difference**

Think of climbing a flight of stairs:
* **Work:** Whether you walk up or run up, the work done is the same because your mass and the height of the stairs haven't changed.
* **Power:** Running up the stairs requires much more power because you are doing that work in a much shorter amount of time.

---

## **Interactive Match: Power Units & Concepts**

Test your understanding of power variables and their relationships.

<div class="vocab-matching-interactive-wrapper power-match">
    <div class="vocab-matching-container">
        <div id="vocabGridPower" class="vocab-grid">
            </div>
        <div id="vocabFeedbackPower"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonPower" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/energy/power-match.js"></script>

---

## **Why Should I Care?**

Power is what defines performance in the real world:
* **Lightbulbs:** A 100W bulb transforms energy into light and heat faster than a 60W bulb.
* **Athletics:** Explosive sports like sprinting or weightlifting are about high power output (large work in very little time).
* **Electricity Bills:** You pay for **kilowatt-hours (kWh)**. A kilowatt is power; an hour is time. Power $\times$ Time = Energy!

---

{% capture power_question %}If an electric motor does 6,000 Joules of work in 1 minute, what is its power output in Watts?{% endcapture %}
{% capture power_answer %}First, convert time to seconds: $1 \text{ minute} = 60 \text{ seconds}$. Using the formula $P = W/t$:
$P = 6,000 \text{ J} / 60 \text{ s} = \mathbf{100 \text{ Watts}}$.{% endcapture %}
{% include quick-concept-question.html question=power_question answer=power_answer %}