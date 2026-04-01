---
title: 📘 Kinematics
summary: Kinematics is the study of how things move—how fast, how far, and how the motion changes over time.
permalink: /concepts/motion-1d/kinematics/
layout: single
collection: concepts
topic: motion-1d
tags: [kinematics, motion, equations, constant acceleration, one dimension]
order: 6
sidebar:
  nav: motion-1d-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3

---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
**Kinematics** is the study of how objects move, focusing on their **position, velocity, and acceleration** without considering the forces that cause the motion.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of kinematics.</p>
<audio controls class="audio-player" aria-label="Audio summary of distance and displacement">
  <source src="/assets/audio/motion-1d/kinematics-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**

<svg
    width="600"
    height="280"
    viewBox="0 0 600 280"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="title desc">

  <title id="title">Kinematics: Acceleration Visualization with Time</title>
  <desc id="desc">
    A visual summary of kinematics in one-dimensional motion. Shows a car at three positions spaced quadratically in time with velocity arrows that increase in length to reflect acceleration, acceleration arrows, and a dashed line for displacement.
  </desc>

  <rect x="0" y="0" width="600" height="280" fill="white"/>

  <!-- Displacement arrow -->
  <line x1="70" y1="90" x2="430" y2="90"
        stroke="#000000"
        stroke-width="3"
        stroke-dasharray="5,5"
        marker-end="url(#arrowhead)"/>
  <text x="250" y="65"
        font-size="13"
        fill="#000000"
        text-anchor="middle">Displacement</text>

  <!-- Path of motion -->
  <line x1="50" y1="170" x2="470" y2="170"
        stroke="#000000"
        stroke-width="3"/>

  <!-- Start car -->
  <rect x="50" y="155" width="40" height="20" rx="4" fill="#1f77b4"/>
  <circle cx="60" cy="175" r="5" fill="#000000"/>
  <circle cx="80" cy="175" r="5" fill="#000000"/>
  <text x="70" y="135"
        font-size="12"
        fill="#000000"
        text-anchor="middle">Start</text>
  <text x="70" y="225"
        font-size="12"
        fill="#000000"
        text-anchor="middle">1 s</text>

  <!-- Middle car -->
  <rect x="170" y="155" width="40" height="20" rx="4" fill="#1f77b4"/>
  <circle cx="180" cy="175" r="5" fill="#000000"/>
  <circle cx="200" cy="175" r="5" fill="#000000"/>

  <!-- Velocity arrow -->
  <line x1="205" y1="150" x2="260" y2="150"
        stroke="#000000"
        stroke-width="4"
        marker-end="url(#arrowhead)"/>
  <text x="232" y="135"
        font-size="12"
        fill="#000000"
        text-anchor="middle">Velocity</text>

  <!-- Acceleration arrow -->
  <line x1="205" y1="185" x2="245" y2="185"
        stroke="#000000"
        stroke-width="4"
        marker-end="url(#arrowhead)"/>
  <text x="225" y="210"
        font-size="12"
        fill="#000000"
        text-anchor="middle">Acceleration</text>

  <text x="190" y="225"
        font-size="12"
        fill="#000000"
        text-anchor="middle">2 s</text>

  <!-- End car -->
  <rect x="410" y="155" width="40" height="20" rx="4" fill="#1f77b4"/>
  <circle cx="420" cy="175" r="5" fill="#000000"/>
  <circle cx="440" cy="175" r="5" fill="#000000"/>

  <!-- Velocity arrow -->
  <line x1="455" y1="150" x2="520" y2="150"
        stroke="#000000"
        stroke-width="4"
        marker-end="url(#arrowhead)"/>
  <text x="487" y="135"
        font-size="12"
        fill="#000000"
        text-anchor="middle">Velocity</text>

  <text x="430" y="225"
        font-size="12"
        fill="#000000"
        text-anchor="middle">3 s</text>

  <!-- Arrowhead definition -->
  <defs>
    <marker id="arrowhead"
            markerWidth="4"
            markerHeight="4"
            refX="3"
            refY="2"
            orient="auto"
            markerUnits="strokeWidth">
      <polygon points="0 0, 4 2, 0 4" fill="#000000"/>
    </marker>
  </defs>

</svg>

---

## **What is Kinematics?**

**Kinematics** is the part of physics that talks about motion. That means how things move: how far they go, how fast they go, and how their speed changes.

We don’t worry about what causes the motion (like forces or pushes and pulls). We only focus on what the motion looks like.

In this unit, we look at motion in a straight line.

---

## **What Words Do I Need to Know?**

Here are some words we’ll use a lot in kinematics:

* **Position** — Where something is.
* **Displacement** — How far something moves from where it started.
* **Velocity** — How fast something moves *and* which way.
* **Acceleration** — How much the velocity changes (speeding up or slowing down).

In one dimension (a straight line), we use **+** and **–** signs to show direction.

---

## **The Kinematic Equations**
When something speeds up or slows down at a **steady rate**, we say it has **constant acceleration**.

We can use these special equations to solve problems about motion.

### 1. Final velocity after a certain time:
$$ v_f = v_i + at $$
- $v_f$: final velocity
- $v_i$: initial velocity
- $a$: acceleration
- $t$: time

---

### 2. Distance moved after a certain time:
$$ \Delta x = v_i t + \frac{1}{2} a t^2 $$
- $\Delta x$: how far the object moved
- $v_i$: initial velocity
- $a$: acceleration
- $t$: time

---

### 3. Final velocity without using time:
$$ v_f^2 = v_i^2 + 2a \Delta x $$
- $v_f$: final velocity
- $v_i$: initial velocity
- $a$: acceleration
- $\Delta x$: displacement

---

### 4. Distance using average velocity:
$$ \Delta x = \frac{1}{2}(v_i + v_f)t $$
- $\Delta x$: displacement
- $v_i$: initial velocity
- $v_f$: final velocity
- $t$: time

These only work if **acceleration is constant** (doesn’t change).

---

## **Why Should I Care?**

Kinematics helps you:

- Describe motion clearly
- Understand how objects speed up or slow down
- Solve real-life problems (like how long it takes a car to stop or how far a rocket travels)

You’ll use kinematics to build your skills for harder physics topics later on.

---

## **Interactive: Kinematics Vocab Match**

Test your understanding of key terms in kinematics by matching them with their meanings.

<div class="vocab-matching-interactive-wrapper kinematics">
    <div class="animator-explanation">
        <p>Click a term and then its matching meaning. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vocabTermsKinematics">
                    </div>
            </div>
            <div class="vocab-card-column">
                <div id="vocabDefinitionsKinematics">
                    </div>
            </div>
        </div>
        <div id="vocabFeedbackKinematics"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonKinematics" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/motion-1d/kinematics-interactive-match.js"></script>

---

{% include quick-concept-question.html
  question="You know the starting velocity ($v_i$), the final velocity ($v_f$), and the time ($t$). You want to know how far something moved. Which equation should you use?"
  answer="You should use: $$\Delta x = \frac{1}{2}(v_i + v_f)t$$ It uses the average velocity to find the displacement."
%}

---

<div>
  <h3>Related Skills</h3>
  <ul>
    <li><a href="{{ '/skills/motion-1d/kinematics-equations/' | relative_url }}"><strong>Solving Kinematics Equations (Skill)</strong></a></li>
  </ul>
</div>