---
title: 📘 Newton's Third Law (Action-Reaction)
summary: Discover Newton's Third Law of Motion, which states that for every action, there is an equal and opposite reaction, and understand force pairs.
permalink: /concepts/forces/newtons-third-law/
layout: single
collection: concepts
topic: forces
tags: [newtons laws, action-reaction, force pairs, interaction, dynamics]
order: 4
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

## **What is Newton's Third Law?**

Newton's Third Law states:

**"For every action, there is an equal and opposite reaction."**

This means that whenever one object exerts a force on a second object, the second object exerts an equal and opposite force back on the first object. These forces are called **action-reaction pairs**.

Key points about action-reaction pairs:

* **Equal in Magnitude:** The strength (magnitude) of the action force is always exactly equal to the strength of the reaction force.
* **Opposite in Direction:** The action force and reaction force always point in opposite directions.
* **Act on Different Objects:** This is crucial! The action force acts on one object, and the reaction force acts on *a different object*. They never cancel each other out because they are not acting on the same object.

---

## **Interactive: Action-Reaction Pairs**

Observe two objects interacting. When one pushes the other, see the equal and opposite forces at play!

<div class="animator-container">
    <div class="input-controls">
        <label for="massAInput">Mass A (kg):</label>
        <input type="number" id="massAInput" value="5" min="1" max="50" step="1">

        <label for="massBInput">Mass B (kg):</label>
        <input type="number" id="massBInput" value="10" min="1" max="50" step="1">
    </div>

    <div style="margin-bottom: 0.8rem;">
        <button id="pushAonBBtn" class="animator-button btn-green" aria-label="Push A on B">Push A on B</button>
        <button id="resetAnimation" class="animator-button btn-red" aria-label="Reset simulation">Reset</button>
    </div>

    <svg id="newtonsThirdLawSVG" width="100%" height="250" viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="newtonsThirdLawSVGTitle newtonsThirdLawSVGDesc">
        <title id="newtonsThirdLawSVGTitle">Newton's Third Law Simulator</title>
        <desc id="newtonsThirdLawSVGDesc">A simulation demonstrating Newton's Third Law with two interacting objects, showing equal and opposite action-reaction forces.</desc>
        
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

        <line x1="50" y1="150" x2="650" y2="150" stroke="#ccc" stroke-width="2" />
        <text x="350" y="170" text-anchor="middle" class="animator-svg-text" style="font-size: 14px; fill: #555;">Surface</text>

        <rect id="objectA" x="50" y="125" width="50" height="50" fill="#28a745" rx="5" ry="5" />
        <text id="labelA" x="75" y="155" text-anchor="middle" class="animator-svg-text" style="fill: white; font-size: 16px;">A (5kg)</text>

        <rect id="objectB" x="150" y="125" width="50" height="50" fill="#007bff" rx="5" ry="5" />
        <text id="labelB" x="175" y="155" text-anchor="middle" class="animator-svg-text" style="fill: white; font-size: 16px;">B (10kg)</text>

        <line id="forceAonB" x1="100" y1="150" x2="150" y2="150" stroke="#e67e22" stroke-width="4" marker-end="url(#arrowhead-orange)" opacity="0" />
        <text id="labelAonB" x="125" y="140" class="animator-svg-text" style="fill: #e67e22; font-size: 14px;" opacity="0">F_A on B</text>

        <line id="forceBonA" x1="150" y1="150" x2="100" y2="150" stroke="#6f42c1" stroke-width="4" marker-end="url(#arrowhead-purple)" opacity="0" />
        <text id="labelBonA" x="125" y="140" class="animator-svg-text" style="fill: #6f42c1; font-size: 14px;" opacity="0">F_B on A</text>

        <text id="accelADisplay" x="500" y="50" text-anchor="end" class="animator-svg-text" style="font-size: 18px; font-weight: bold; fill: #333;">Acceleration A: 0.000 m/s²</text>
        <text id="accelBDisplay" x="500" y="80" text-anchor="end" class="animator-svg-text" style="font-size: 18px; font-weight: bold; fill: #333;">Acceleration B: 0.000 m/s²</text>
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Observe two objects interacting. When one pushes the other, see the equal and opposite forces at play!</p>
    </div>
</div>

<script src="/assets/js/forces/newtons-third-law-animator.js"></script>

---

## **Why Newton's Third Law Matters**

* **Understanding Interactions:** This law explains how objects interact with each other, not just how a single force affects a single object.
* **Propulsion:** It's the principle behind rockets, jet engines, and even walking (you push the Earth backward, and the Earth pushes you forward).
* **Force Pairs:** It helps identify correct force pairs in complex systems, which is essential for solving problems in dynamics.

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of Newton's Third Law.</p>
<audio controls class="audio-player" aria-label="Audio summary of Newton's Third Law">
  <source src="/assets/audio/forces/newtons-third-law-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% capture newtons_third_law_question %}When a bird flies, its wings push air downwards and backward. What is the reaction force, and what effect does it have on the bird?{% endcapture %}
{% capture newtons_third_law_answer %}The reaction force is the **air pushing the bird upwards and forwards**. This reaction force is what allows the bird to gain lift and propel itself through the air.{% endcapture %}
{% include quick-concept-question.html question=newtons_third_law_question answer=newtons_third_law_answer %}

---

## **Related Skills**

Ready to put your understanding of Newton's Third Law into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/identifying-action-reaction-pairs/"><strong>Identifying Action-Reaction Pairs</strong></a></li>
    <li><a href="/skills/applying-newtons-laws-to-systems/"><strong>Applying Newton's Laws to Systems</strong></a></li>
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
    <li><a href="/problems/newtons-third-law-scenarios/"><strong>Newton's Third Law Scenarios</strong></a></li>
    <li><a href="/problems/force-pair-identification/"><strong>Force Pair Identification Problems</strong></a></li>
  {%- endif -%}
</ul>