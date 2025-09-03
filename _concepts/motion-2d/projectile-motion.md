---
title: 📘 Projectile Motion
summary: Explore projectile motion, the curved path an object takes when launched into the air, influenced only by gravity.
permalink: /concepts/motion-2d/projectile-motion/
layout: single
collection: concepts
topic: motion-2d
tags: [projectile motion, gravity, kinematics, trajectory, parabolic, range, height, time of flight]
order: 3
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
**Projectile motion** describes the curved, **parabolic path** an object takes when launched into the air. It's analyzed by treating the motion as two independent components: a constant horizontal velocity and a vertical motion subject only to the acceleration of gravity.
</p>

---

## **What is Projectile Motion?**

**Projectile motion** is the motion of an object thrown or projected into the air, subject only to the acceleration of gravity. This means we usually ignore air resistance in basic physics problems, focusing purely on the effect of gravity.

The path a projectile takes is called its **trajectory**, and it's always a **parabola** (a curved shape).

---

## **Key Things About Projectile Motion**

* **Two Independent Motions:** Projectile motion can be broken down into two separate, independent motions:
    * **Horizontal Motion:** This motion is at a **constant velocity** (assuming no air resistance). There's no horizontal force, so no horizontal acceleration.
    * **Vertical Motion:** This motion is under **constant acceleration** due to gravity ($g = 9.8 \text{ m/s}^2$ downwards). It's essentially free fall in the vertical direction.
* **Gravity Acts Only Vertically:** Gravity only pulls objects downwards. It does not affect horizontal motion.
* **Initial Velocity and Angle:** The initial speed and launch angle determine the shape of the trajectory, how high it goes, and how far it travels.

---

## **Interactive: Projectile Launcher**

Launch a projectile and observe its parabolic path, horizontal distance, and vertical height!

<div class="animator-container">
    <div class="input-controls">
        <label for="initialVelocity">Initial Velocity (m/s):</label>
        <input type="number" id="initialVelocity" value="30" min="1" max="100">

        <label for="launchAngle">Launch Angle (degrees):</label>
        <input type="number" id="launchAngle" value="45" min="0" max="90">
    </div>
    <div style="margin-bottom: 0.8rem;">
        <button id="launchBtn" class="animator-button btn-green" aria-label="Launch projectile">Launch</button>
        <button id="resetAnimation" class="animator-button btn-red" aria-label="Reset simulation">Reset</button>
    </div>

    <svg id="projectileMotionSVG" width="100%" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="projectileMotionSVGTitle projectileMotionSVGDesc">
        <title id="projectileMotionSVGTitle">Projectile Motion Simulator</title>
        <desc id="projectileMotionSVGDesc">A simulation showing a projectile launched at a given velocity and angle, tracing its parabolic path.</desc>

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

        <!-- Unique SVG elements for this specific animator -->
        <!-- Ground -->
        <line x1="0" y1="380" x2="600" y2="380" stroke="#333" stroke-width="4" />
        <text x="50" y="395" class="animator-svg-text" style="font-size: 14px; fill: #555;">Ground</text>

        <!-- Origin/Launch Point -->
        <circle cx="50" cy="380" r="5" fill="#007bff" />
        <text x="50" y="395" text-anchor="middle" class="animator-svg-text" style="font-size: 14px; fill: #007bff;">Launch</text>

        <!-- Projectile Path -->
        <path id="projectilePath" fill="none" stroke="#e67e22" stroke-width="2" />

        <!-- Projectile Object -->
        <circle id="projectile" cx="50" cy="380" r="10" fill="#28a745" />

        <!-- Labels for Time, Range, Max Height -->
        <text id="timeLabel" x="500" y="30" text-anchor="end" class="animator-svg-text" style="font-size: 16px; fill: #333;">Time: 0.0 s</text>
        <text id="rangeLabel" x="500" y="50" text-anchor="end" class="animator-svg-text" style="font-size: 16px; fill: #333;">Range: 0.0 m</text>
        <text id="heightLabel" x="500" y="70" text-anchor="end" class="animator-svg-text" style="font-size: 16px; fill: #333;">Max Height: 0.0 m</text>
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Enter initial velocity and launch angle, then click "Launch" to simulate projectile motion!</p>
    </div>
</div>

<script src="/assets/js/motion-2d/projectile-motion-animator.js"></script>

---

## **Understanding the Trajectory**

The parabolic shape of the trajectory is a direct result of the horizontal motion being constant and the vertical motion being constantly accelerated downwards.

* **At the peak of its trajectory:** The vertical velocity of the projectile is momentarily zero, but its horizontal velocity remains constant.
* **Symmetry:** For launches from level ground, the trajectory is symmetrical. The time to reach the peak height is half the total time of flight, and the horizontal distance covered to the peak is half the total range.

---

## **Interactive Match: Projectile Motion**

Test your understanding of key terms related to projectile motion.

<div class="vocab-matching-interactive-wrapper projectile-motion">
    <div class="animator-explanation">
        <p>Click a term and then its matching meaning. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="projectileMotionTerms">
                    <!-- Terms will be rendered here by JS -->
                </div>
            </div>
            <div class="vocab-card-column">
                <div id="projectileMotionDefinitions">
                    <!-- Definitions will be rendered here by JS -->
                </div>
            </div>
        </div>
        <div id="projectileMotionFeedback"></div>
    </div>
    <div class="button-controls">
        <button id="projectileMotionResetButton" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/motion-2d/projectile-motion-interactive-match.js"></script>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of projectile motion.</p>
<audio controls class="audio-player" aria-label="Audio summary of projectile motion">
  <source src="/assets/audio/motion-2d/projectile-motion-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% capture projectile_motion_question %}A ball is launched horizontally from a cliff. What is its horizontal acceleration, and what is its vertical acceleration (ignoring air resistance)?{% endcapture %}
{% capture projectile_motion_answer %}Its horizontal acceleration is **zero** (constant horizontal velocity). Its vertical acceleration is **9.8 m/s² downwards** (due to gravity).{% endcapture %}
{% include quick-concept-question.html question=projectile_motion_question answer=projectile_motion_answer %}

---

## **Related Skills**

Ready to put your understanding of projectile motion into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/calculating-projectile-range/"><strong>Calculating Projectile Range</strong></a></li>
    <li><a href="/skills/determining-max-height/"><strong>Determining Maximum Height of a Projectile</strong></a></li>
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
    <li><a href="/problems/horizontal-projectile-launch/"><strong>Horizontal Projectile Launch Problems</strong></a></li>
    <li><a href="/problems/angled-projectile-launch/"><strong>Angled Projectile Launch Problems</strong></a></li>
  {%- endif -%}
</ul>
```javascript
// assets/js/motion-2d/projectile-motion-interactive-match.js
// Specific data for the Projectile Motion Interactive Match.
// This file now leverages the common interactive-match-base.js.

// Define the unique vocabulary data for this interactive
const vocabDataProjectileMotion = [
    { term: 'Projectile Motion', definition: 'Motion of an object thrown into the air, subject only to gravity.' },
    { term: 'Trajectory', definition: 'The curved path a projectile takes, which is always a parabola.' },
    { term: 'Horizontal Motion', definition: 'Part of projectile motion with constant velocity and zero acceleration.' },
    { term: 'Vertical Motion', definition: 'Part of projectile motion with constant acceleration due to gravity.' },
    { term: 'Range', definition: 'The total horizontal distance traveled by a projectile from launch to landing.' },
    { term: 'Time of Flight', definition: 'The total time a projectile spends in the air from launch to landing.' }
];

// Define the unique element IDs for this interactive
const interactiveOptionsProjectileMotion = {
    vocabData: vocabDataProjectileMotion,
    termsContainerId: 'projectileMotionTerms',
    definitionsContainerId: 'projectileMotionDefinitions',
    feedbackMessageId: 'projectileMotionFeedback',
    resetButtonId: 'projectileMotionResetButton'
};

// Initialize the interactive match using the common base function
// This function will be loaded AFTER interactive-match-base.js in the HTML.
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveMatch(interactiveOptionsProjectileMotion);
});