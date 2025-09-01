---
title: 📘 Types of Forces
summary: Explore common types of forces including gravity, normal force, friction, tension, and applied force, and how they act on objects.
permalink: /concepts/forces/types-of-forces/
layout: single
collection: concepts
topic: forces
tags: [forces, gravity, normal force, friction, tension, applied force, push, pull, newton]
order: 1
sidebar:
  nav: forces-concepts # This page belongs to the new Forces concepts sidebar
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">

---

## **Common Types of Forces**

There are many types of forces we encounter in physics and everyday life. Here are some of the most common:

1.  **Gravitational Force (Weight):** The force of attraction between any two objects with mass. On Earth, this is the force pulling objects downwards towards the planet's center. We often call this an object's **weight**.
2.  **Normal Force:** The support force exerted by a surface on an object in contact with it. It always acts **perpendicular** (at a 90-degree angle) to the surface.
3.  **Friction Force:** A force that opposes motion (or attempted motion) between two surfaces in contact. It acts **parallel** to the surface.
4.  **Tension Force:** A pulling force transmitted axially by means of a string, cable, chain, or similar one-dimensional continuous object. It always acts along the length of the string/cable.
5.  **Applied Force:** A force that is applied to an object by a person or another object. This is a general term for any direct push or pull.

---

## **Interactive: Visualizing Forces**

Click on different scenarios to see how various forces act on objects!

<div class="animator-container">
    <div style="margin-bottom: 0.8rem;">
        <button id="scenarioGravity" class="animator-button btn-orange" aria-label="Show gravity scenario">Gravity (Weight)</button>
        <button id="scenarioNormal" class="animator-button btn-blue" aria-label="Show normal force scenario">Normal Force</button>
        <button id="scenarioFriction" class="animator-button btn-dark-red" aria-label="Show friction scenario">Friction</button>
        <button id="scenarioTension" class="animator-button btn-purple" aria-label="Show tension scenario">Tension</button>
        <button id="scenarioApplied" class="animator-button btn-green" aria-label="Show applied force scenario">Applied Force</button>
        <button id="resetAnimation" class="animator-button btn-red" aria-label="Reset simulation">Reset</button>
    </div>

    <svg id="forceTypesSVG" width="100%" height="300" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="forceTypesSVGTitle forceTypesSVGDesc">
        <title id="forceTypesSVGTitle">Visualizing Types of Forces</title>
        <desc id="forceTypesSVGDesc">An interactive demonstration of different types of forces acting on objects in various scenarios.</desc>

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

        <!-- Unique SVG content for this animator -->
        <!-- Common Ground/Surface -->
        <line x1="0" y1="250" x2="700" y2="250" stroke="#555" stroke-width="4" />
        <text x="350" y="270" text-anchor="middle" class="animator-svg-text" style="font-size: 14px; fill: #555;">Surface</text>

        <!-- Object -->
        <rect id="mainObject" x="325" y="190" width="50" height="50" fill="#28a745" rx="5" ry="5" />
        <text id="objectLabel" x="350" y="220" text-anchor="middle" class="animator-svg-text" style="font-size: 16px; fill: white;">Object</text>

        <!-- Force Vectors (initially hidden) -->
        <!-- Gravity -->
        <line id="forceGravity" x1="350" y1="215" x2="350" y2="245" stroke="#e67e22" stroke-width="3" marker-end="url(#arrowhead-orange)" opacity="0" />
        <text id="labelGravity" x="360" y="240" class="animator-svg-text" style="fill: #e67e22; font-size: 14px;" opacity="0">F_g (Weight)</text>

        <!-- Normal Force -->
        <line id="forceNormal" x1="350" y1="245" x2="350" y2="215" stroke="#007bff" stroke-width="3" marker-end="url(#arrowhead-blue)" opacity="0" />
        <text id="labelNormal" x="360" y="220" class="animator-svg-text" style="fill: #007bff; font-size: 14px;" opacity="0">F_N</text>

        <!-- Friction Force -->
        <line id="forceFriction" x1="350" y1="245" x2="300" y2="245" stroke="#A00000" stroke-width="3" marker-end="url(#arrowhead-red)" opacity="0" />
        <text id="labelFriction" x="290" y="235" class="animator-svg-text" style="fill: #A00000; font-size: 14px;" opacity="0">F_f</text>

        <!-- Applied Force -->
        <line id="forceApplied" x1="350" y1="215" x2="400" y2="215" stroke="#28a745" stroke-width="3" marker-end="url(#arrowhead-green)" opacity="0" />
        <text id="labelApplied" x="410" y="205" class="animator-svg-text" style="fill: #28a745; font-size: 14px;" opacity="0">F_app</text>

        <!-- Tension Force (requires a rope/pulley visual) -->
        <line id="rope" x1="350" y1="190" x2="350" y2="100" stroke="#999" stroke-width="2" opacity="0" />
        <circle cx="350" cy="100" r="10" fill="#ddd" stroke="#999" stroke-width="1" opacity="0" /> <!-- Pulley/attachment -->
        <line id="forceTension" x1="350" y1="100" x2="350" y2="50" stroke="#6f42c1" stroke-width="3" marker-end="url(#arrowhead-purple)" opacity="0" />
        <text id="labelTension" x="360" y="60" class="animator-svg-text" style="fill: #6f42c1; font-size: 14px;" opacity="0">F_T</text>
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Click on different scenarios to see how various forces act on objects!</p>
    </div>
</div>

<script src="/assets/js/forces/types-of-forces-animator.js"></script>

---

## **Why Understanding Force Types Matters**

* **Analyzing Motion:** To predict how an object will move, you need to identify all the forces acting on it.
* **Problem Solving:** Recognizing different force types is the first step in solving almost any dynamics problem in physics.
* **Real-World Applications:** From designing bridges (tension, gravity) to understanding why a car stops (friction), forces are everywhere.

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of types of forces.</p>
<audio controls class="audio-player" aria-label="Audio summary of types of forces">
  <source src="/assets/audio/forces/types-of-forces-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% capture force_types_question %}When a book is sitting on a table, what two main forces are acting on the book?{% endcapture %}
{% capture force_types_answer %}The two main forces are **gravitational force (weight)** pulling the book downwards, and the **normal force** from the table pushing the book upwards, perpendicular to the surface.{% endcapture %}
{% include quick-concept-question.html question=force_types_question answer=force_types_answer %}

---

## **Related Skills**

Ready to put your understanding of force types into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/identifying-forces/"><strong>Identifying Forces in Scenarios</strong></a></li>
    <li><a href="/skills/drawing-force-vectors/"><strong>Drawing Force Vectors</strong></a></li>
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
    <li><a href="/problems/force-identification-scenarios/"><strong>Force Identification Scenarios</strong></a></li>
    <li><a href="/problems/force-type-matching/"><strong>Matching Force Types to Examples</strong></a></li>
  {%- endif -%}
</ul>