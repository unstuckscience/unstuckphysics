---
title: 📘 Uniform Circular Motion
summary: Learn about uniform circular motion, where an object moves in a circular path at a constant speed, and understand centripetal acceleration.
permalink: /concepts/motion-2d/uniform-circular-motion/
layout: single
collection: concepts
topic: motion-2d
tags: [circular motion, centripetal acceleration, velocity, constant speed, kinematics, 2d motion]
order: 5
sidebar:
  nav: motion-2d-concepts # This page belongs to the Motion in 2D concepts sidebar
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">

---

## **What is Uniform Circular Motion?**

**Uniform circular motion (UCM)** describes the movement of an object in a circular path at a **constant speed**.

Even though the speed is constant, the object's **velocity is constantly changing** because its *direction* is always changing as it moves around the circle. Since velocity is a vector (magnitude + direction), a change in direction means a change in velocity.

And if velocity is changing, that means there must be **acceleration**!

---

## **Centripetal Acceleration**

In UCM, the acceleration is called **centripetal acceleration** ($a_c$).

* **Direction:** It always points towards the **center of the circle**. The word "centripetal" means "center-seeking."
* **Magnitude:** Its magnitude depends on the object's speed ($v$) and the radius of the circle ($r$):
    $$ a_c = \frac{v^2}{r} $$
* **Force:** This acceleration is caused by a **centripetal force** (e.g., tension in a string, gravity for an orbiting satellite) that constantly pulls the object towards the center of the circle, preventing it from flying off in a straight line.

---

## **Interactive: Uniform Circular Motion**

Observe an object moving in a circle. See its velocity and centripetal acceleration vectors change direction!

<div class="animator-container">
    <div class="input-controls">
        <label for="speedInput">Speed (m/s):</label>
        <input type="number" id="speedInput" value="5" min="1" max="20" step="1">

        <label for="radiusInput">Radius (m):</label>
        <input type="number" id="radiusInput" value="10" min="5" max="50" step="1">
    </div>
    <div style="margin-bottom: 0.8rem;">
        <button id="playBtn" class="animator-button btn-green" aria-label="Play animation">Play</button>
        <button id="pauseBtn" class="animator-button btn-yellow-orange" aria-label="Pause animation">Pause</button>
        <button id="resetAnimation" class="animator-button btn-red" aria-label="Reset simulation">Reset</button>
    </div>

    <svg id="circularMotionSVG" width="100%" height="350" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="circularMotionSVGTitle circularMotionSVGDesc">
        <title id="circularMotionSVGTitle">Uniform Circular Motion Simulator</title>
        <desc id="circularMotionSVGDesc">A simulation showing an object in uniform circular motion, displaying its velocity and centripetal acceleration vectors.</desc>

        <!-- Common SVG definitions (e.g., arrowheads) -->
        <defs>
            <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#007bff" />
            </marker>
            <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#28a745" />
            </marker>
            <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22" />
            </marker>
            <marker id="arrowhead-purple" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6f42c1" />
            </marker>
            <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#A00000" />
            </marker>
        </defs>

        <!-- Unique SVG elements for this animator -->
        <!-- Center of the circle -->
        <circle cx="300" cy="175" r="5" fill="#555" />
        <text x="300" y="195" text-anchor="middle" class="animator-svg-text" style="font-size: 14px; fill: #555;">Center</text>

        <!-- Circular Path -->
        <circle id="circularPath" cx="300" cy="175" r="100" fill="none" stroke="#ccc" stroke-width="2" stroke-dasharray="5 5" />

        <!-- Moving Object -->
        <circle id="movingObject" cx="400" cy="175" r="10" fill="#28a745" />

        <!-- Velocity Vector -->
        <line id="velocityVector" x1="0" y1="0" x2="0" y2="0" stroke="#007bff" stroke-width="3" marker-end="url(#arrowhead-blue)" opacity="0" />
        <text id="velocityLabel" x="0" y="0" class="animator-svg-text" style="fill: #007bff; font-size: 14px;">V</text>

        <!-- Acceleration Vector -->
        <line id="accelerationVector" x1="0" y1="0" x2="0" y2="0" stroke="#e67e22" stroke-width="3" marker-end="url(#arrowhead-orange)" opacity="0" />
        <text id="accelerationLabel" x="0" y="0" class="animator-svg-text" style="fill: #e67e22; font-size: 14px;">a_c</text>

        <!-- Labels for values -->
        <text id="currentSpeedLabel" x="500" y="30" text-anchor="end" class="animator-svg-text" style="font-size: 16px; fill: #333;">Speed: 0.0 m/s</text>
        <text id="currentAcclLabel" x="500" y="50" text-anchor="end" class="animator-svg-text" style="font-size: 16px; fill: #333;">Acc: 0.0 m/s²</text>
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Adjust speed and radius, then click "Play" to see uniform circular motion!</p>
    </div>
</div>

<script src="/assets/js/motion-2d/uniform-circular-motion-animator.js"></script>

---

## **Why Uniform Circular Motion Matters**

* **Planetary Orbits:** Planets orbiting stars, and moons orbiting planets, are often approximated as uniform circular motion (or elliptical motion, which is a variation).
* **Engineering:** Designing amusement park rides, centrifuges, or wheels on vehicles all involve principles of circular motion.
* **Everyday Life:** From a car turning a corner to clothes spinning in a washing machine, UCM is all around us.

---

## **Interactive Match: Uniform Circular Motion**

Test your understanding of key terms related to uniform circular motion.

<div class="vocab-matching-interactive-wrapper ucm">
    <div class="animator-explanation">
        <p>Click a term and then its matching meaning. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="ucmTerms">
                    <!-- Terms will be rendered here by JS -->
                </div>
            </div>
            <div class="vocab-card-column">
                <div id="ucmDefinitions">
                    <!-- Definitions will be rendered here by JS -->
                </div>
            </div>
        </div>
        <div id="ucmFeedback"></div>
    </div>
    <div class="button-controls">
        <button id="ucmResetButton" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/motion-2d/uniform-circular-motion-interactive-match.js"></script>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of uniform circular motion.</p>
<audio controls class="audio-player" aria-label="Audio summary of uniform circular motion">
  <source src="/assets/audio/motion-2d/uniform-circular-motion-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% capture ucm_question %}An object is moving in a circle at a constant speed. Is its velocity constant? Is its acceleration constant? Explain.{% endcapture %}
{% capture ucm_answer %}No, its velocity is **not constant** because its direction is continuously changing. No, its acceleration (centripetal acceleration) is **not constant** because its direction is continuously changing (always pointing towards the center), even though its magnitude might be constant.{% endcapture %}
{% include quick-concept-question.html question=ucm_question answer=ucm_answer %}

---

## **Related Skills**

Ready to put your understanding of uniform circular motion into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/calculating-centripetal-acceleration/"><strong>Calculating Centripetal Acceleration</strong></a></li>
    <li><a href="/skills/determining-centripetal-force/"><strong>Determining Centripetal Force</strong></a></li>
  {%- endif -%}
</ul>

<hr>

<h2>Practice Problems</h2>
<p>Test your understanding and apply what you've learned with these problems.</p>
<ul>
  {%- assign related_problems = site.problems | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_problems.size > 0 -%}
    {%- for problem in related_problems -%}
      <li><a href="{{- problem.url | relative_url -}}"><strong>{{- problem.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No practice problems for this concept yet.</li>
    <li><a href="/problems/ucm-speed-radius-problems/"><strong>UCM Speed and Radius Problems</strong></a></li>
    <li><a href="/problems/centripetal-force-calculations/"><strong>Centripetal Force Calculations</strong></a></li>
  {%- endif -%}
</ul>