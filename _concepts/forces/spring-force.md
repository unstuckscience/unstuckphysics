---
title: 📘 Spring Force (Hooke's Law)
summary: Learn about spring force and Hooke's Law, describing the restoring force exerted by a spring when stretched or compressed.
permalink: /concepts/forces/spring-force/
layout: single
collection: concepts
topic: forces
tags: [spring force, hookes law, spring constant, restoring force, elasticity]
order: 7 # Adjust order as needed in your sidebar
sidebar:
  nav: forces-concepts # This page belongs to the Forces concepts sidebar
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">

---

## **What is Spring Force?**

A **spring force** is a restoring force exerted by a spring when it is stretched or compressed from its equilibrium (natural) position. It's called a "restoring" force because it always tries to bring the spring back to its original, relaxed length.

---

## **Hooke's Law**

**Hooke's Law** states that the force required to extend or compress a spring is directly proportional to the distance of that extension or compression.

* **Formula:** $F_s = -kx$
    * $F_s$: The spring force (in Newtons, N).
    * $k$: The **spring constant** (in N/m). This is a measure of the stiffness of the spring. A larger $k$ means a stiffer spring.
    * $x$: The **displacement** (stretch or compression) from the spring's equilibrium position (in meters, m).
    * The **negative sign** indicates that the spring force is always in the opposite direction to the displacement. If you stretch the spring (positive $x$), the force pulls it back (negative $F_s$). If you compress it (negative $x$), the force pushes it out (positive $F_s$).

---

## **Interactive: Hooke's Law**

Stretch and compress a spring to see how the spring force and potential energy change!

<div class="animator-container">
    <div class="input-controls">
        <label for="springConstantInput">Spring Constant (N/m):</label>
        <input type="number" id="springConstantInput" value="100" min="10" max="500" step="10">
    </div>
    <div style="margin-bottom: 0.8rem;">
        <button id="stretchBtn" class="animator-button btn-green" aria-label="Stretch the spring">Stretch</button>
        <button id="compressBtn" class="animator-button btn-blue" aria-label="Compress the spring">Compress</button>
        <button id="resetAnimation" class="animator-button btn-red" aria-label="Reset spring">Reset</button>
    </div>

    <svg id="springForceSVG" width="100%" height="300" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="springForceSVGTitle springForceSVGDesc">
        <title id="springForceSVGTitle">Hooke's Law Spring Force Simulator</title>
        <desc id="springForceSVGDesc">An interactive simulation demonstrating Hooke's Law, showing spring force and potential energy as a spring is stretched or compressed.</desc>

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
        <!-- Ground/Wall -->
        <rect x="50" y="50" width="10" height="200" fill="#666" />
        <text x="55" y="270" text-anchor="middle" class="animator-svg-text" style="font-size: 14px; fill: #555;">Wall</text>

        <!-- Spring (path will be updated by JS) -->
        <path id="springPath" d="M 60 150 L 200 150" fill="none" stroke="#e67e22" stroke-width="3" />

        <!-- Mass attached to spring -->
        <rect id="springMass" x="200" y="125" width="50" height="50" fill="#28a745" rx="5" ry="5" />
        <text x="225" y="155" text-anchor="middle" class="animator-svg-text" style="fill: white; font-size: 16px;">Mass</text>

        <!-- Equilibrium position marker -->
        <line x1="250" y1="100" x2="250" y2="200" stroke="#007bff" stroke-width="1" stroke-dasharray="4 4" />
        <text x="250" y="90" text-anchor="middle" class="animator-svg-text" style="font-size: 14px; fill: #007bff;">Equilibrium (x=0)</text>

        <!-- Force, Displacement, and Potential Energy Displays -->
        <text id="displacementDisplay" x="550" y="50" text-anchor="end" class="animator-svg-text" style="font-size: 18px; font-weight: bold; fill: #333;">Displacement (x): 0.00 m</text>
        <text id="forceDisplay" x="550" y="80" text-anchor="end" class="animator-svg-text" style="font-size: 18px; font-weight: bold; fill: #e67e22;">Spring Force (Fs): 0.0 N</text>
        <text id="potentialEnergyDisplay" x="550" y="110" text-anchor="end" class="animator-svg-text" style="font-size: 18px; font-weight: bold; fill: #6f42c1;">Potential Energy (PEs): 0.0 J</text>

        <!-- Spring Force Vector (initially hidden) -->
        <line id="springForceVector" x1="225" y1="150" x2="225" y2="150" stroke="#e67e22" stroke-width="4" marker-end="url(#arrowhead-orange)" opacity="0" />
        <text id="springForceLabel" x="225" y="140" class="animator-svg-text" style="fill: #e67e22; font-size: 14px;" opacity="0">$F_s$</text>
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Adjust the spring constant, then stretch or compress the spring to see the force and energy changes!</p>
    </div>
</div>

<script src="/assets/js/forces/spring-force-animator.js"></script>

---

## **Spring Potential Energy**

When you stretch or compress a spring, you are doing work on it, and this work is stored as **elastic potential energy** (often called spring potential energy, $PE_s$). This energy can then be released to do work (e.g., launch a projectile).

* **Formula:** $PE_s = \frac{1}{2}kx^2$
    * $PE_s$: Elastic potential energy (in Joules, J).
    * $k$: Spring constant (in N/m).
    * $x$: Displacement from equilibrium (in meters, m).

Notice that potential energy depends on $x^2$, so it's always positive, whether the spring is stretched or compressed.

---

## **Why Spring Force Matters**

* **Oscillations and Waves:** Spring force is the basis for understanding simple harmonic motion, which describes oscillations (like a mass on a spring) and wave phenomena.
* **Engineering:** Springs are used in countless applications, from car suspensions and shock absorbers to scales, trampolines, and retractable pens.
* **Energy Conservation:** Spring potential energy is a key form of energy studied in the context of conservation of energy.

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of spring force and Hooke's Law.</p>
<audio controls class="audio-player" aria-label="Audio summary of spring force and Hooke's Law">
  <source src="/assets/audio/forces/spring-force-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% capture spring_force_question %}A spring is compressed by 0.1 meters and exerts a force of 10 Newtons. What is its spring constant ($k$)? If it is compressed by 0.2 meters, what force will it exert?{% endcapture %}
{% capture spring_force_answer %}Using Hooke's Law, $F_s = kx$:
For the first case: $10 \text{ N} = k \times 0.1 \text{ m} \implies k = 100 \text{ N/m}$.
For the second case: $F_s = 100 \text{ N/m} \times 0.2 \text{ m} = 20 \text{ N}$.
So, the spring constant is **100 N/m**, and it will exert **20 N** of force when compressed by 0.2 meters.{% endcapture %}
{% include quick-concept-question.html question=spring_force_question answer=spring_force_answer %}

---

## **Related Skills**

Ready to put your understanding of spring force into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/calculating-spring-force/"><strong>Calculating Spring Force with Hooke's Law</strong></a></li>
    <li><a href="/skills/calculating-spring-potential-energy/"><strong>Calculating Spring Potential Energy</strong></a></li>
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
    <li><a href="/problems/hookes-law-calculations/"><strong>Hooke's Law Calculation Problems</strong></a></li>
    <li><a href="/problems/spring-energy-problems/"><strong>Spring Energy Problems</strong></a></li>
  {%- endif -%}
</ul>