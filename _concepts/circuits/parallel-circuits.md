---
title: 📘 Parallel Circuits
summary: Learn about circuits with multiple branches where voltage is constant across components and total resistance decreases as you add more paths.
permalink: /concepts/circuits/parallel-circuits/
layout: single
collection: concepts
topic: circuits
tags: [parallel circuit, resistance, current, branches]
order: 3
sidebar:
  nav: circuits-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
In a **parallel circuit**, components are connected across the same two points, creating multiple paths (branches) for the current. This is how your home is wired—one appliance can be off while others remain on.
</p>

---

## **Visual Representation**



<svg width="480" height="220" viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="480" height="220" fill="white"/>
  <rect x="80" y="50" width="320" height="120" fill="none" stroke="#333" stroke-width="2"/>
  <line x1="200" y1="50" x2="200" y2="170" stroke="#333" stroke-width="2"/>
  <line x1="300" y1="50" x2="300" y2="170" stroke="#333" stroke-width="2"/>
  <rect x="190" y="100" width="20" height="30" fill="#eee" stroke="#333"/>
  <rect x="290" y="100" width="20" height="30" fill="#eee" stroke="#333"/>
  <rect x="390" y="100" width="20" height="30" fill="#eee" stroke="#333"/>
</svg>

---

## **The Rules of Parallel**

1.  **Voltage is Constant:** Every branch sees the same voltage as the battery ($V_{total} = V_1 = V_2$).
2.  **Add Current:** The total current is the sum of the currents in each branch ($I_{total} = I_1 + I_2 + I_3$).
3.  **Inverse Resistance:** Total resistance *decreases* as you add more branches ($1/R_{eq} = 1/R_1 + 1/R_2 + 1/R_3$).

---

## **Interactive Parallel Lab**

Add branches to the circuit. Notice that as you add more paths, the total current from the battery increases because the overall resistance of the circuit is falling!

<div class="animator-container parallel-container">
    <canvas id="parallelCanvas" width="500" height="200"></canvas>
    <button id="addBranch" class="animator-button">Add Branch</button>
</div>

<script src="{{ '/assets/js/circuits/parallel-animator.js' | relative_url }}"></script>

---

{% capture parallel_question %}Why does the total resistance of a parallel circuit decrease when you add a new resistor?{% endcapture %}
{% capture parallel_answer %}Think of it like adding more lanes to a highway. Even if the new lane is narrow (high resistance), it still provides an **additional path** for traffic to flow, which reduces the overall "congestion" (total resistance) of the system.{% endcapture %}
{% include quick-concept-question.html question=parallel_question answer=parallel_answer %}