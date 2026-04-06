---
title: 📘 Systems of Objects
summary: Learn to analyze the forces and motion of multiple connected objects by treating them as a system or as individual interacting bodies.
permalink: /concepts/forces/systems-of-objects/
layout: single
collection: concepts
topic: forces
tags: [systems, connected objects, atwood machine, tension, pulley, newtons laws, problem solving]
order: 10
sidebar:
  nav: forces-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
In physics, objects often interact. A system of objects lets us study multiple connected bodies, understanding how forces and motion affect each part and the whole.
</p>

## **Audio Summary**

<p>Prefer to listen? Here's a quick audio overview of systems of objects.</p>
<audio controls class="audio-player" aria-label="Audio summary of systems of objects">
  <source src="/assets/audio/forces/systems-of-objects-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Defining a System of Objects**

A **system of objects** consists of two or more bodies connected or interacting in a way that the motion of one affects the others.

You can analyze such systems in two main ways:

1. **Treat the system as a single object:**  
   If all objects accelerate together, consider the total mass and the external forces on the system. Internal forces cancel out.
2. **Analyze each object individually:**  
   Draw separate **free-body diagrams (FBDs)** for each object. Internal forces (like tension) act on individual objects but cancel out when analyzing the whole system.

---

## **Internal vs. External Forces**

* **External forces:** Act on the system from outside (e.g., gravity, applied push, friction). They cause acceleration of the entire system.
* **Internal forces:** Act between objects inside the system (e.g., tension, contact forces). They affect individual objects but not the system’s overall acceleration.

---

## **When to Treat Objects as One System**

* All objects move together with the same acceleration.
* You only need the **net acceleration** or **total external force**.
* Internal forces are not of interest.

---

## **When to Analyze Objects Individually**

* Objects move differently or have different accelerations.
* You need tension, friction, or forces on individual objects.
* Complex systems like pulleys or Atwood machines.

---

## **Key Concepts**

* **Tension:** Force transmitted through a string, rope, or cable; always a pulling force.
* **Pulley:** Changes direction of a force; ideal pulleys are massless and frictionless.
* **Common acceleration:** Connected objects often share the same acceleration magnitude.

---

## **Interactive: Connected Blocks Over a Pulley**

Adjust the masses and friction to see how acceleration and tension change!

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
        <!-- SVG definitions and elements go here (as in your original file) -->
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Adjust masses and friction, then click Play to see the system accelerate!</p>
    </div>
</div>

<script src="/assets/js/forces/systems-of-objects-animator.js"></script>

---

## **Problem-Solving Strategy**

1. Draw FBDs for each object.
2. Choose coordinate systems aligned with motion.
3. Apply Newton’s Second Law ($\Sigma F = ma$) for each object.
4. Identify connecting forces (tension, contact forces).
5. Solve the resulting system of equations for acceleration and tension.

---

## **Example: Horizontal and Hanging Masses**

* **Mass $m_1$ (horizontal):**
  * Vertical: $F_N - F_{g1} = 0 \implies F_N = m_1 g$
  * Horizontal: $F_T - F_{f1} = m_1 a$, where $F_{f1} = \mu_k m_1 g$
* **Mass $m_2$ (hanging):**
  * Vertical: $F_{g2} - F_T = m_2 a$, where $F_{g2} = m_2 g$

Solve these equations simultaneously for $a$ and $F_T$.

---

{% capture systems_of_objects_question %}In a system with two blocks connected by a string over a pulley, if the string is massless and inextensible, what can you say about the acceleration of the two blocks?{% endcapture %}
{% capture systems_of_objects_answer %}If the string is massless and inextensible, the two blocks will have the **same magnitude of acceleration**. Their directions might differ, but their speeds change at the same rate.{% endcapture %}
{% include quick-concept-question.html question=systems_of_objects_question answer=systems_of_objects_answer %}

---

## **Related Skills**

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept yet.</li>
    <li><a href="/skills/drawing-fbds-for-systems/"><strong>Drawing FBDs for Systems</strong></a></li>
    <li><a href="/skills/solving-atwood-machine-problems/"><strong>Solving Atwood Machine Problems</strong></a></li>
  {%- endif -%}
</ul>

---

## **Practice Problems**

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