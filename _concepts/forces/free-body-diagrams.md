---
title: 📘 Free-Body Diagrams
summary: Learn how to draw free-body diagrams to visualize all the forces acting on an object, a crucial step for solving dynamics problems.
permalink: /concepts/forces/free-body-diagrams/
layout: single
collection: concepts
topic: forces
tags: [free-body diagram, fbd, forces, net force, dynamics, problem solving, vectors]
order: 5
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

## **What is a Free-Body Diagram (FBD)?**

A **free-body diagram (FBD)** is a visual representation that shows **all the forces acting *on a single object***. It simplifies a complex situation by isolating the object of interest and representing all forces as vectors originating from that object.

**Key characteristics of an FBD:**

* **Isolate the Object:** Draw the object as a simple dot or a small box. This helps you focus only on the forces *on* it, not forces *it exerts* on other things.
* **Draw All Forces:** Identify every force acting *on* the object (e.g., gravity, normal force, friction, tension, applied force).
* **Label Forces as Vectors:** Draw each force as an arrow (vector) originating from the center of the object, pointing in the direction the force acts. Label each force clearly (e.g., $F_g$, $F_N$, $F_f$, $F_{app}$).
* **Choose a Coordinate System:** Often, it's helpful to draw x and y axes to define positive and negative directions for your forces.

---

## **Interactive: Building Free-Body Diagrams**

Let's practice drawing FBDs for different scenarios. Identify the forces and see if you can draw them correctly!

<div class="animator-container">
    <div style="margin-bottom: 0.8rem;">
        <button id="scenarioBoxOnTable" class="animator-button btn-blue" aria-label="Scenario: Box on a table">Box on Table</button>
        <button id="scenarioBoxPulled" class="animator-button btn-green" aria-label="Scenario: Box pulled horizontally">Box Pulled</button>
        <button id="scenarioBoxOnRamp" class="animator-button btn-orange" aria-label="Scenario: Box on an inclined ramp">Box on Ramp</button>
        <button id="resetAnimation" class="animator-button btn-red" aria-label="Reset simulation">Reset</button>
    </div>

    <svg id="fbdAnimatorSVG" width="100%" height="300" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fbdAnimatorSVGTitle fbdAnimatorSVGDesc">
        <title id="fbdAnimatorSVGTitle">Free-Body Diagram Builder</title>
        <desc id="fbdAnimatorSVGDesc">An interactive tool to visualize and build free-body diagrams for various physics scenarios.</desc>

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
        <!-- Common Ground/Surface -->
        <line x1="0" y1="250" x2="700" y2="250" stroke="#555" stroke-width="4" />
        <text x="350" y="270" text-anchor="middle" class="animator-svg-text" style="font-size: 14px; fill: #555;">Surface</text>

        <!-- Object (represented as a dot for FBD) -->
        <circle id="fbdObject" cx="350" cy="125" r="10" fill="#28a745" />
        <text x="350" y="150" text-anchor="middle" class="animator-svg-text" style="font-size: 16px; fill: #28a745;">Object</text>

        <!-- Coordinate System (initially hidden, will be shown by JS) -->
        <line id="xAxis" x1="350" y1="125" x2="450" y2="125" stroke="#999" stroke-width="1" opacity="0" />
        <line id="yAxis" x1="350" y1="125" x2="350" y2="25" stroke="#999" stroke-width="1" opacity="0" />
        <text x="455" y="120" class="animator-svg-text" style="font-size: 12px; fill: #999;" opacity="0">+X</text>
        <text x="355" y="20" class="animator-svg-text" style="font-size: 12px; fill: #999;" opacity="0">+Y</text>

        <!-- Force Vectors (initially hidden) -->
        <!-- Gravity -->
        <line id="forceGravity" x1="350" y1="125" x2="350" y2="175" stroke="#e67e22" stroke-width="3" marker-end="url(#arrowhead-orange)" opacity="0" />
        <text id="labelGravity" x="360" y="180" class="animator-svg-text" style="fill: #e67e22; font-size: 14px;" opacity="0">$F_g$</text>

        <!-- Normal Force -->
        <line id="forceNormal" x1="350" y1="125" x2="350" y2="75" stroke="#007bff" stroke-width="3" marker-end="url(#arrowhead-blue)" opacity="0" />
        <text id="labelNormal" x="360" y="70" class="animator-svg-text" style="fill: #007bff; font-size: 14px;" opacity="0">$F_N$</text>

        <!-- Applied Force -->
        <line id="forceApplied" x1="350" y1="125" x2="400" y2="125" stroke="#28a745" stroke-width="3" marker-end="url(#arrowhead-green)" opacity="0" />
        <text id="labelApplied" x="410" y="115" class="animator-svg-text" style="fill: #28a745; font-size: 14px;" opacity="0">$F_{app}$</text>

        <!-- Friction Force -->
        <line id="forceFriction" x1="350" y1="125" x2="300" y2="125" stroke="#A00000" stroke-width="3" marker-end="url(#arrowhead-red)" opacity="0" />
        <text id="labelFriction" x="290" y="115" class="animator-svg-text" style="fill: #A00000; font-size: 14px;" opacity="0">$F_f$</text>

        <!-- Visual for Ramp Scenario (will be hidden by default and shown by JS) -->
        <polygon id="rampVisual" points="100,250 600,250 600,150" fill="#ccc" stroke="#999" stroke-width="2" opacity="0" />
        <rect id="boxOnRampVisual" x="300" y="100" width="50" height="50" fill="#28a745" rx="5" ry="5" opacity="0" />
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Click a scenario button to see the forces acting on the object and build its free-body diagram!</p>
    </div>
</div>

<script src="/assets/js/forces/free-body-diagrams-animator.js"></script>

---

## **Why Free-Body Diagrams are Crucial**

* **Simplification:** They simplify complex physical situations into a clear, manageable diagram.
* **Organization:** They help you organize all the forces acting on an object, preventing you from missing any or including irrelevant ones.
* **Problem-Solving Strategy:** Drawing an FBD is the essential first step in applying Newton's Laws to solve problems. Without a correct FBD, it's very difficult to set up the equations correctly.
* **Vector Analysis:** They help you visualize the direction of forces, which is critical for resolving forces into components and summing them up to find the net force.

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of free-body diagrams.</p>
<audio controls class="audio-player" aria-label="Audio summary of free-body diagrams">
  <source src="/assets/audio/forces/free-body-diagrams-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% capture fbd_question %}When drawing a free-body diagram for a book sliding across a rough floor, what forces should you include?{% endcapture %}
{% capture fbd_answer %}You should include:
1.  **Gravitational Force ($F_g$)**: Pulling the book downwards.
2.  **Normal Force ($F_N$)**: From the floor pushing the book upwards.
3.  **Friction Force ($F_f$)**: Opposing the direction of motion, parallel to the floor.
4.  **Applied Force ($F_{app}$)**: The force pushing or pulling the book (if any).{% endcapture %}
{% include quick-concept-question.html question=fbd_question answer=fbd_answer %}

---

## **Related Skills**

Ready to put your understanding of free-body diagrams into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/drawing-free-body-diagrams/"><strong>Drawing Free-Body Diagrams</strong></a></li>
    <li><a href="/skills/resolving-forces-into-components/"><strong>Resolving Forces into Components</strong></a></li>
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
    <li><a href="/problems/fbd-simple-scenarios/"><strong>Simple FBD Scenarios</strong></a></li>
    <li><a href="/problems/fbd-inclined-plane/"><strong>FBDs on Inclined Planes</strong></a></li>
  {%- endif -%}
</ul>