---
title: 📘 Conservation of Momentum
summary: Learn how total momentum is conserved in isolated systems and how this principle is used to analyze collisions and explosions.
permalink: /concepts/momentum-collisions/conservation-of-momentum/
layout: single
collection: concepts
topic: momentum-collisions
tags: [conservation of momentum, collisions, impulse, isolated systems, physics, momentum]
order: 4
sidebar:
  nav: momentum-collisions-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
The **Conservation of Momentum** states that the total momentum of a system remains constant if no external net force acts on it. Momentum can be transferred between objects, but it is not created or destroyed.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of conservation of momentum.</p>
<audio controls class="audio-player" aria-label="Audio summary of conservation of momentum">
  <source src="/assets/audio/momentum-collisions/conservation-of-momentum.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**

<svg
    width="520"
    height="320"
    viewBox="0 0 520 320"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="title desc">

  <desc id="desc">
    Two objects before and after a collision showing that total momentum before equals total momentum after, with arrows representing velocities.
  </desc>

  <rect x="0" y="0" width="520" height="320" fill="white"/>

  <!-- BEFORE collision -->
  <text x="120" y="40" font-size="14" text-anchor="middle">Before</text>

  <rect x="60" y="80" width="40" height="40" fill="#1f77b4"/>
  <text x="80" y="70" font-size="12" text-anchor="middle">m₁</text>
  <line x1="100" y1="100" x2="170" y2="100" stroke="#000" stroke-width="3" marker-end="url(#arrowhead)"/>
  <text x="135" y="90" font-size="12">v₁</text>

  <rect x="60" y="160" width="60" height="60" fill="#ff7f0e"/>
  <text x="90" y="150" font-size="12" text-anchor="middle">m₂</text>
  <line x1="60" y1="190" x2="20" y2="190" stroke="#000" stroke-width="3" marker-end="url(#arrowhead)"/>
  <text x="35" y="180" font-size="12">v₂</text>

  <text x="120" y="260" font-size="13" text-anchor="middle">Total p = constant</text>

  <!-- AFTER collision -->
  <text x="380" y="40" font-size="14" text-anchor="middle">After</text>

  <rect x="320" y="120" width="50" height="50" fill="#1f77b4"/>
  <rect x="380" y="120" width="50" height="50" fill="#ff7f0e"/>

  <line x1="345" y1="145" x2="410" y2="145" stroke="#000" stroke-width="3" marker-end="url(#arrowhead)"/>
  <text x="375" y="135" font-size="12">v₁′, v₂′</text>

  <text x="380" y="260" font-size="13" text-anchor="middle">m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′</text>

  <!-- Arrowhead -->
  <defs>
    <marker id="arrowhead"
            markerWidth="5"
            markerHeight="5"
            refX="3.5"
            refY="2.5"
            orient="auto"
            markerUnits="strokeWidth">
      <polygon points="0 0, 5 2.5, 0 5" fill="#000"/>
    </marker>
  </defs>

</svg>

---

## **What is Conservation of Momentum?**

The **conservation of momentum** principle states that:

> In a closed system with no external net force, the total momentum before an interaction equals the total momentum after the interaction.

A **closed (isolated) system** means:
- no external forces significantly affect the system
- only internal forces (between objects) act during the interaction

---

## **The Conservation Equation**

For two interacting objects:

$$
m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'
$$

where:
- \( m_1, m_2 \) = masses
- \( v_1, v_2 \) = initial velocities
- \( v_1', v_2' \) = final velocities

You can also express it more generally as:

$$
p_{\text{total, before}} = p_{\text{total, after}}
$$

---

## **Key Ideas**

- **Momentum is conserved only in isolated systems**
- Internal forces do NOT change total momentum
- Momentum can be transferred between objects
- Applies to:
  - collisions
  - explosions
  - separations

---

## **Types of Interactions**

### **1. Elastic Collisions**
- Momentum conserved
- Kinetic energy also conserved
- Objects bounce apart

### **2. Inelastic Collisions**
- Momentum conserved
- Kinetic energy NOT conserved
- Objects may deform or stick together

### **3. Explosions**
- Initially at rest (total momentum = 0)
- Objects move apart with equal and opposite total momentum

---

## **Why Momentum is Conserved**

Momentum conservation comes from Newton’s laws:

- Internal forces come in equal and opposite pairs (Newton’s 3rd Law)
- These forces cancel out in total system momentum change
- So only external forces can change total momentum

---

## **Interactive Collision Simulator**

Explore how momentum is redistributed in collisions.

<div class="animator-container momentum-conservation-animator-container">
    <h3 class="animator-title">Collision Explorer</h3>

    <canvas id="collisionCanvas" width="500" height="350"></canvas>

    <div class="controls">
        <label for="mass1">Mass 1 (kg)</label>
        <input type="range" id="mass1" min="1" max="10" value="3">

        <label for="mass2">Mass 2 (kg)</label>
        <input type="range" id="mass2" min="1" max="10" value="5">

        <label for="velocity1">Velocity 1 (m/s)</label>
        <input type="range" id="velocity1" min="-10" max="10" value="6">

        <label for="velocity2">Velocity 2 (m/s)</label>
        <input type="range" id="velocity2" min="-10" max="10" value="-2">
    </div>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Total Momentum (Before):</p>
            <p id="momentumBefore" class="value-display">14 kg·m/s</p>
        </div>
        <div class="info-box">
            <p class="info-label">Total Momentum (After):</p>
            <p id="momentumAfter" class="value-display">14 kg·m/s</p>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="resetCollisionButton" class="animator-button reset-button">Reset</button>
    </div>
</div>

<script src="/assets/js/momentum-collisions/collision-animator.js"></script>

---

## **Common Misconceptions**

- ❌ “Momentum is lost in collisions”
  - ✔ It is transferred or redistributed, not destroyed

- ❌ “Momentum is conserved in all situations”
  - ✔ Only in isolated systems with no external net force

- ❌ “Heavier objects always win collisions”
  - ✔ Final motion depends on total momentum, not just mass

---

## **Why Should I Care?**

Understanding conservation of momentum helps you:
- analyze car crashes and safety systems
- understand sports impacts (billiards, football, baseball)
- predict outcomes of collisions without detailed force analysis
- connect Newton’s laws to real-world systems

---

{% capture momentum_conservation_question %}
Two ice skaters push off each other and move in opposite directions. Why do they move apart even though no external force acts on them?
{% endcapture %}

{% capture momentum_conservation_answer %}
They push on each other with equal and opposite forces (Newton’s 3rd law). Since the system is isolated, total momentum must remain zero, so they move apart with equal and opposite momentum.
{% endcapture %}

{% include quick-concept-question.html question=momentum_conservation_question answer=momentum_conservation_answer %}