---
title: 📘 Types of Forces
summary: Explore common types of forces including gravity, normal force, friction, tension, and applied force.
permalink: /concepts/forces/types-of-forces/
layout: single
collection: concepts
topic: forces
tags: [forces, gravity, normal force, friction, tension, applied force, push, pull, newton]
order: 1
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
Different forces act in different ways. Some forces pull objects downward, some push upward, and others resist motion or pull through ropes and cables.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of the different types of forces.</p>
<audio controls class="audio-player" aria-label="Audio summary of types of forces">
  <source src="/assets/audio/forces/types-of-forces-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **What is a Force?**

A **force** is a push or a pull.

Forces can:

* Change an object's speed
* Change an object's direction
* Start motion
* Stop motion

Forces are measured in **newtons (N)**.

---

## **Common Types of Forces**

### **Gravitational Force (Weight)**

Gravity pulls objects downward toward Earth.

* Gravity acts on all objects with mass.
* The force of gravity on an object is called its **weight**.
* Gravity always acts downward.

### **Normal Force**

The normal force is the support force from a surface.

* A table pushes up on a book.
* The ground pushes up on your feet.
* Normal force acts perpendicular to the surface.

### **Friction Force**

Friction opposes motion between two surfaces.

* Friction slows things down.
* Friction acts parallel to a surface.
* Friction points opposite the direction of motion.

### **Tension Force**

Tension is the pulling force in a rope, cable, or string.

* Tension always pulls.
* Tension acts along the rope or string.
* A hanging sign or tug-of-war rope has tension.

### **Applied Force**

An applied force is any push or pull from a person or another object.

* Pushing a shopping cart is an applied force.
* Pulling a wagon is an applied force.
* Applied forces can point in any direction.

---

## **Interactive: Visualizing Forces**

Click on different scenarios to see how various forces act on objects.

<div class="animator-container">
    <div style="margin-bottom: 0.8rem;">
        <button id="scenarioGravity" class="animator-button btn-orange" aria-label="Show gravity scenario">Gravity (Weight)</button>
        <button id="scenarioNormal" class="animator-button btn-blue" aria-label="Show normal force scenario">Normal Force</button>
        <button id="scenarioFriction" class="animator-button btn-dark-red" aria-label="Show friction scenario">Friction</button>
        <button id="scenarioTension" class="animator-button btn-purple" aria-label="Show tension scenario">Tension</button>
        <button id="scenarioApplied" class="animator-button btn-green" aria-label="Show applied force scenario">Applied Force</button>
        <button id="resetAnimation" class="animator-button btn-red" aria-label="Reset simulation">Reset</button>
    </div>

```
<svg id="forceTypesSVG" width="100%" height="300" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="forceTypesSVGTitle forceTypesSVGDesc">
    <title id="forceTypesSVGTitle">Visualizing Types of Forces</title>
    <desc id="forceTypesSVGDesc">An interactive demonstration of different types of forces acting on objects in various scenarios.</desc>

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

    <line x1="0" y1="250" x2="700" y2="250" stroke="#555" stroke-width="4" />
    <text x="350" y="270" text-anchor="middle" class="animator-svg-text" style="font-size: 14px; fill: #555;">Surface</text>

    <rect id="mainObject" x="325" y="190" width="50" height="50" fill="#28a745" rx="5" ry="5" />
    <text id="objectLabel" x="350" y="220" text-anchor="middle" class="animator-svg-text" style="font-size: 16px; fill: white;">Object</text>

    <line id="forceGravity" x1="350" y1="215" x2="350" y2="245" stroke="#e67e22" stroke-width="3" marker-end="url(#arrowhead-orange)" opacity="0" />
    <text id="labelGravity" x="360" y="240" class="animator-svg-text" style="fill: #e67e22; font-size: 14px;" opacity="0">F_g (Weight)</text>

    <line id="forceNormal" x1="350" y1="245" x2="350" y2="215" stroke="#007bff" stroke-width="3" marker-end="url(#arrowhead-blue)" opacity="0" />
    <text id="labelNormal" x="360" y="220" class="animator-svg-text" style="fill: #007bff; font-size: 14px;" opacity="0">F_N</text>

    <line id="forceFriction" x1="350" y1="245" x2="300" y2="245" stroke="#A00000" stroke-width="3" marker-end="url(#arrowhead-red)" opacity="0" />
    <text id="labelFriction" x="290" y="235" class="animator-svg-text" style="fill: #A00000; font-size: 14px;" opacity="0">F_f</text>

    <line id="forceApplied" x1="350" y1="215" x2="400" y2="215" stroke="#28a745" stroke-width="3" marker-end="url(#arrowhead-green)" opacity="0" />
    <text id="labelApplied" x="410" y="205" class="animator-svg-text" style="fill: #28a745; font-size: 14px;" opacity="0">F_app</text>

    <line id="rope" x1="350" y1="190" x2="350" y2="100" stroke="#999" stroke-width="2" opacity="0" />
    <circle cx="350" cy="100" r="10" fill="#ddd" stroke="#999" stroke-width="1" opacity="0" />
    <line id="forceTension" x1="350" y1="100" x2="350" y2="50" stroke="#6f42c1" stroke-width="3" marker-end="url(#arrowhead-purple)" opacity="0" />
    <text id="labelTension" x="360" y="60" class="animator-svg-text" style="fill: #6f42c1; font-size: 14px;" opacity="0">F_T</text>
</svg>

<div id="animationExplanation" class="animation-explanation" aria-live="polite">
    <p>Click on different scenarios to see how various forces act on objects.</p>
</div>
```

</div>

<script src="/assets/js/forces/types-of-forces-animator.js"></script>

---

## **Key Ideas About Forces**

* Gravity pulls downward.
* Normal force pushes upward from a surface.
* Friction opposes motion.
* Tension pulls through ropes and cables.
* Applied forces can be pushes or pulls.

---

## **Interactive Match: Types of Forces**

Test your understanding of the different types of forces.

<div class="vocab-matching-interactive-wrapper types-of-forces">
    <div class="animator-explanation">
        <p>Click a term and then its matching meaning. Match all pairs to complete the activity.</p>
    </div>

```
<div class="vocab-matching-container">
    <div class="vocab-grid">
        <div class="vocab-card-column">
            <div id="typesOfForcesTerms"></div>
        </div>
        <div class="vocab-card-column">
            <div id="typesOfForcesDefinitions"></div>
        </div>
    </div>
    <div id="typesOfForcesFeedback"></div>
</div>

<div class="button-controls">
    <button id="typesOfForcesResetButton" class="animator-button btn-default">Reset</button>
</div>
```

</div>

<script src="/assets/js/common/interactive-match-base.js"></script>

<script src="/assets/js/forces/types-of-forces-interactive-match.js"></script>

---

{% capture forces_question %}What force pushes upward on a book sitting on a table?{% endcapture %}
{% capture forces_answer %}The upward force is the normal force from the table.{% endcapture %}
{% include quick-concept-question.html question=forces_question answer=forces_answer %}
