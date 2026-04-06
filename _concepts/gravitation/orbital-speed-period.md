---
title: 📘 Orbital Speed and Period
summary: Explore the relationship between a satellite's altitude, its velocity, and the time it takes to orbit.
permalink: /gravitation/orbital-speed-period/
layout: single
collection: concepts
topic: gravitation
tags: [gravitation, orbits, speed, period]
order: 6
sidebar:
 nav: gravitation-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" style="border-left: 4px solid #6A5ACD; padding-left: 1rem;">
For a satellite to maintain a stable circular orbit, the gravitational pull of the planet must provide exactly enough centripetal force to keep the satellite moving in its curved path.
</p>

---

## **Audio Explanation**

Prefer to listen? Here's a quick audio summary of Orbital Speed and Period.
<audio controls class="audio-player" aria-label="Audio summary of Orbital Speed and Period">
  <source src="/assets/audio/gravitation/orbital-speed-period-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **The Physics of Circular Orbits**

When an object orbits a planet, it is essentially in a state of constant free-fall. However, because it has enough horizontal (tangential) velocity, it constantly "misses" the ground, following the curvature of the planet.

Orbital Velocity ($v_t$)

By setting the Force of Gravity equal to the Centripetal Force, we can derive the speed required to stay in a circular orbit:

$$\frac{G M m}{r^2} = \frac{m v^2}{r}$$

Solving for $v$ gives the Orbital Velocity formula:

$$v = \sqrt{\frac{GM}{r}}$$

$M$: Mass of the central body (e.g., Earth).

$r$: Distance from the center of the planet to the satellite.

Note: The mass of the satellite ($m$) cancels out—it doesn't matter how heavy the satellite is!

Orbital Period ($T$)

The period is the time it takes to complete one full revolution ($2\pi r$). Using the relationship $v = \frac{2\pi r}{T}$, we can derive the period:

$$T = 2\pi \sqrt{\frac{r^3}{GM}}$$

This confirms Kepler's Third Law: the square of the period ($T^2$) is proportional to the cube of the radius ($r^3$).

Interactive: Orbital Mechanics Vocabulary

Match the variables and terms to their roles in defining satellite motion.

<div class="vocab-matching-interactive-wrapper orbital-mech">
<div class="animator-explanation">
<p>Match the terms and variables for orbital speed and period to their correct descriptions.</p>
</div>

<div class="vocab-matching-container">
    <div class="vocab-grid">
        <div class="vocab-card-column">
            <div id="orbitTerms">
                <!-- Terms rendered by JS -->
            </div>
        </div>
        <div class="vocab-card-column">
            <div id="orbitDefinitions">
                <!-- Definitions rendered by JS -->
            </div>
        </div>
    </div>
    <div id="orbitFeedback"></div>
</div>
<div class="button-controls">
    <button id="orbitResetButton" class="animator-button btn-default">Reset Game</button>
</div>


</div>

<script src="/assets/js/common/interactive-match-base.js"></script>

<script src="/assets/js/gravitation/orbital-mechanics-match.js"></script>

Interactive: Orbital Velocity Visualizer

Use the slider to change the orbital radius. Observe how the velocity vector (green arrow) shortens as you move further away, and the time to complete one orbit increases.

<div class="simulation-container" style="background: #1a1a1a; padding: 20px; border-radius: 12px; color: white; text-align: center; font-family: sans-serif;">
<div class="controls" style="margin-bottom: 15px;">
<label for="radiusSlider">Orbital Radius ($r$): </label>
<input type="range" id="radiusSlider" min="80" max="220" value="120" style="width: 200px;">
<span id="radiusVal">120</span> km (scaled)
</div>
<canvas id="orbitCanvas" style="background: #000; border-radius: 8px; max-width: 100%; height: auto; cursor: crosshair;"></canvas>
<div id="stats" style="margin-top: 15px; font-family: monospace; display: flex; justify-content: space-around; font-size: 1rem; border-top: 1px solid #333; padding-top: 10px;">
<div>Velocity: <span id="vStat" style="color: #4CAF50; font-weight: bold;">--</span></div>
<div>Period: <span id="pStat" style="color: #2196F3; font-weight: bold;">--</span></div>
</div>
</div>

Key Insights

Inverse Relationship: As the radius ($r$) increases, the required orbital velocity ($v$) decreases. This is why outer planets move much slower than inner planets.

Mass Independence: Notice that the mass of the satellite does not appear in the velocity formula. A grain of sand and a space station orbit at the same speed if they are at the same altitude.

<script src="orbital-visualizer.js"></script>

{% include quick-concept-question.html
question="If a satellite moves to a higher orbit (increasing r), what happens to its orbital speed and its period?"
answer="Its orbital speed decreases (since v is inversely proportional to the square root of r) and its period increases (since it has a longer path to travel and is moving slower)."
%}

<div>
<h3>Related Skills</h3>
<ul>
<li><a href="{{ '/skills/gravitation/calculating-orbital-speed/' | relative_url }}"><strong>Calculating Orbital Speed</strong></a></li>
<li><a href="{{ '/skills/gravitation/orbital-period-problems/' | relative_url }}"><strong>Solving for Orbital Period</strong></a></li>
</ul>
</div>