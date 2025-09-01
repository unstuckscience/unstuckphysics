---
title: 📘 Systems of Objects
summary: Learn to analyze the forces and motion of multiple connected objects by treating them as a system or as individual interacting bodies.
permalink: /concepts/forces/systems-of-objects/
layout: single
collection: concepts
topic: forces
tags: [systems, connected objects, atwood machine, tension, pulley, newtons laws, problem solving]
order: 10 # Adjust order as needed in your sidebar
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

## **What are Systems of Objects?**

A **system of objects** refers to two or more objects that are physically connected or interacting in such a way that the motion of one affects the motion of the others.

Analyzing these systems often involves:

1.  **Treating the entire system as one object:** Sometimes, if all objects move together with the same acceleration, you can consider the total mass and the external forces acting on the whole system.
2.  **Analyzing each object individually:** More commonly, you draw a separate **free-body diagram (FBD)** for each object in the system and apply Newton's Second Law ($\Sigma F = ma$) to each one. The forces connecting the objects (like tension in a rope or contact forces between blocks) become internal forces for the whole system but external forces for individual objects.

---

## **Key Concepts for Systems**

* **Internal vs. External Forces:**
    * **External forces:** Forces acting on the system from outside (e.g., gravity, applied pushes/pulls, friction with the ground). These cause the system to accelerate.
    * **Internal forces:** Forces between objects *within* the system (e.g., tension in a rope connecting two blocks, the normal force between two stacked blocks). These do not affect the acceleration of the *entire* system, but they *do* affect the acceleration of individual objects.
* **Common Acceleration:** If objects are rigidly connected (e.g., by a taut, massless, inextensible string), they will often have the same magnitude of acceleration.
* **Tension:** The force transmitted through a string, rope, cable, or wire when it is pulled tight by forces acting from opposite ends. Tension is always a *pulling* force.
* **Pulleys:** Ideal (massless, frictionless) pulleys change the direction of a force but do not change its magnitude.

---

## **Interactive: Connected Blocks over a Pulley**

Observe two connected blocks over a pulley. Adjust their masses and see how they accelerate and what the tension in the string is!

<div class="animator-container">
    <div class="input-controls">
        <label for="mass1Input">Mass 1 (kg) - Horizontal:</label>
        <input type="number" id="mass1Input" value="5" min="1" max="50" step="1">

        <label for="mass2Input">Mass 2 (kg) - Hanging:</label>
        <input type="number" id="mass2Input" value="10" min="1" max="50" step="1">

        <label for="muKInput">μ_k (for M1):</label>
        <input type="number" id="muKInput" value="0.2" min="0" max="1.0" step="0.05">
    </div>
    <div style="margin-bottom: 0.8rem;">
        <button id="playPauseBtn" class="animator-button btn-green" aria-label="Play/Pause animation">Play</button>
        <button id="resetAnimation" class="animator-button btn-red" aria-label="Reset simulation">Reset</button>
    </div>

    <svg id="systemsOfObjectsSVG" width="100%" height="350" viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="systemsOfObjectsSVGTitle systemsOfObjectsSVGDesc">
        <title id="systemsOfObjectsSVGTitle">Connected Blocks System Simulator</title>
        <desc id="systemsOfObjectsSVGDesc">A simulation of two connected blocks over a pulley, demonstrating forces, tension, and system acceleration.</desc>

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
        <line x1="0" y1="250" x2="400" y2="250" stroke="#555" stroke-width="4" />
        <text x="200" y="270" text-anchor="middle" class="animator-svg-text" style="font-size: 14px; fill: #555;">Surface</text>

        <!-- Pulley -->
        <circle cx="380" cy="150" r="20" fill="#ddd" stroke="#999" stroke-width="2" />
        <line x1="380" y1="130" x2="380" y2="0" stroke="#999" stroke-width="2" /> <!-- Pulley support -->

        <!-- Mass 1 (Horizontal Block) -->
        <rect id="mass1Block" x="100" y="200" width="60" height="50" fill="#007bff" rx="5" ry="5" />
        <text id="mass1Label" x="130" y="230" text-anchor="middle" class="animator-svg-text" style="fill: white; font-size: 16px;">M1</text>

        <!-- Mass 2 (Hanging Block) -->
        <rect id="mass2Block" x="350" y="250" width="50" height="50" fill="#e67e22" rx="5" ry="5" />
        <text id="mass2Label" x="375" y="280" text-anchor="middle" class="animator-svg-text" style="fill: white; font-size: 16px;">M2</text>

        <!-- String connecting masses (path will be drawn by JS) -->
        <path id="stringPath" fill="none" stroke="#666" stroke-width="2" />

        <!-- Forces (initially hidden) -->
        <!-- M1 Forces -->
        <g id="m1Forces">
            <line id="m1Fg" x1="0" y1="0" x2="0" y2="0" stroke="#e67e22" stroke-width="3" marker-end="url(#arrowhead-orange)" opacity="0" />
            <text id="m1FgLabel" x="0" y="0" class="animator-svg-text" style="fill: #e67e22; font-size: 12px;" opacity="0">$F_{g1}$</text>
            <line id="m1Fn" x1="0" y1="0" x2="0" y2="0" stroke="#007bff" stroke-width="3" marker-end="url(#arrowhead-blue)" opacity="0" />
            <text id="m1FnLabel" x="0" y="0" class="animator-svg-text" style="fill: #007bff; font-size: 12px;" opacity="0">$F_{N1}$</text>
            <line id="m1Ft" x1="0" y1="0" x2="0" y2="0" stroke="#28a745" stroke-width="3" marker-end="url(#arrowhead-green)" opacity="0" />
            <text id="m1FtLabel" x="0" y="0" class="animator-svg-text" style="fill: #28a745; font-size: 12px;" opacity="0">$F_{T}$</text>
            <line id="m1Ff" x1="0" y1="0" x2="0" y2="0" stroke="#A00000" stroke-width="3" marker-end="url(#arrowhead-red)" opacity="0" />
            <text id="m1FfLabel" x="0" y="0" class="animator-svg-text" style="fill: #A00000; font-size: 12px;" opacity="0">$F_{f1}$</text>
        </g>

        <!-- M2 Forces -->
        <g id="m2Forces">
            <line id="m2Fg" x1="0" y1="0" x2="0" y2="0" stroke="#e67e22" stroke-width="3" marker-end="url(#arrowhead-orange)" opacity="0" />
            <text id="m2FgLabel" x="0" y="0" class="animator-svg-text" style="fill: #e67e22; font-size: 12px;" opacity="0">$F_{g2}$</text>
            <line id="m2Ft" x1="0" y1="0" x2="0" y2="0" stroke="#28a745" stroke-width="3" marker-end="url(#arrowhead-green)" opacity="0" />
            <text id="m2FtLabel" x="0" y="0" class="animator-svg-text" style="fill: #28a745; font-size: 12px;" opacity="0">$F_{T}$</text>
        </g>

        <!-- Displays -->
        <text id="accelerationDisplay" x="550" y="50" text-anchor="end" class="animator-svg-text" style="font-size: 18px; font-weight: bold; fill: #333;">Acceleration: 0.00 m/s²</text>
        <text id="tensionDisplay" x="550" y="80" text-anchor="end" class="animator-svg-text" style="font-size: 18px; font-weight: bold; fill: #28a745;">Tension: 0.0 N</text>
        <text id="stateDisplay" x="550" y="110" text-anchor="end" class="animator-svg-text" style="font-size: 16px; fill: #6f42c1;">State: At Rest</text>
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Adjust masses and friction, then click Play to see the system accelerate!</p>
    </div>
</div>

<script src="/assets/js/forces/systems-of-objects-animator.js"></script>

---

## **Problem-Solving Strategy for Systems**

1.  **Draw FBDs for Each Object:** This is the most critical step. Isolate each object and draw all external forces acting *on that object*.
2.  **Choose a Coordinate System:** For each FBD, choose a coordinate system. Align one axis with the direction of acceleration (or potential motion). For a pulley system, it's often helpful to "unroll" the string and consider the direction of motion as positive.
3.  **Apply Newton's Second Law to Each Object:** Write $\Sigma F = ma$ for each object along each chosen axis.
4.  **Identify Connecting Forces:** Recognize that internal forces (like tension) are equal in magnitude but opposite in direction between connected objects (Newton's Third Law).
5.  **Solve the System of Equations:** You will typically have a system of equations with unknowns like acceleration and tension. Solve these simultaneously.

---

## **Example: Horizontal and Hanging Masses**

Consider a mass $m_1$ on a horizontal surface connected by a string over a pulley to a hanging mass $m_2$.

* **For $m_1$ (horizontal):**
    * Vertical: $F_N - F_{g1} = 0 \implies F_N = m_1g$
    * Horizontal: $F_T - F_{f1} = m_1a$ (if $m_1$ moves right)
        * Where $F_{f1} = \mu_k F_N = \mu_k m_1 g$
* **For $m_2$ (hanging):**
    * Vertical: $F_{g2} - F_T = m_2a$ (if $m_2$ moves down)
        * Where $F_{g2} = m_2g$

You then solve these equations for $a$ and $F_T$.

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of systems of objects.</p>
<audio controls class="audio-player" aria-label="Audio summary of systems of objects">
  <source src="/assets/audio/forces/systems-of-objects-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% capture systems_of_objects_question %}In a system with two blocks connected by a string over a pulley, if the string is massless and inextensible, what can you say about the acceleration of the two blocks?{% endcapture %}
{% capture systems_of_objects_answer %}If the string is massless and inextensible, the two blocks will have the **same magnitude of acceleration**. Their directions might be different (e.g., one moves horizontally, one vertically), but their speeds will change at the same rate.{% endcapture %}
{% include quick-concept-question.html question=systems_of_objects_question answer=systems_of_objects_answer %}

---

## **Related Skills**

Ready to put your understanding of systems of objects into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/drawing-fbds-for-systems/"><strong>Drawing FBDs for Systems</strong></a></li>
    <li><a href="/skills/solving-atwood-machine-problems/"><strong>Solving Atwood Machine Problems</strong></a></li>
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
    <li><a href="/problems/horizontal-hanging-mass-system/"><strong>Horizontal-Hanging Mass System Problems</strong></a></li>
    <li><a href="/problems/two-blocks-on-frictionless-surface/"><strong>Two Blocks on Frictionless Surface Problems</strong></a></li>
  {%- endif -%}
</ul>