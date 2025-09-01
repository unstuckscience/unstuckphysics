---
title: 📘 Weight and Apparent Weight
summary: Understand the difference between true weight (gravitational force) and apparent weight (normal force), especially in accelerating frames of reference like elevators.
permalink: /concepts/forces/weight-apparent-weight/
layout: single
collection: concepts
topic: forces
tags: [weight, apparent weight, gravity, normal force, elevator, acceleration, newtons second law]
order: 6 # Adjust order as needed in your sidebar
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

## **What is True Weight?**

Your **true weight** is simply the **force of gravity** acting on your mass. It's the force with which Earth pulls you downwards.

* **Formula:** $W = mg$
    * $W$: Weight (in Newtons, N)
    * $m$: Mass (in kilograms, kg)
    * $g$: Acceleration due to gravity (approximately $9.8 \text{ m/s}^2$ near Earth's surface)

Your true weight is generally constant as long as your mass doesn't change and you stay at the same distance from the center of the Earth.

---

## **What is Apparent Weight?**

Your **apparent weight** is the **normal force** exerted on you by the surface you are standing on (like a scale, or the floor of an elevator). It's what you *feel* as your weight.

* **Why it's different:** Apparent weight can differ from true weight when you are in a non-inertial (accelerating) reference frame. This is because the normal force must not only counteract gravity but also provide the force needed to accelerate you.
* **What a scale reads:** A bathroom scale measures the normal force it exerts on you, which is your apparent weight.

---

## **Interactive: Elevator Ride**

Step into the elevator and observe how your apparent weight changes with different accelerations!

<div class="animator-container">
    <div class="input-controls">
        <label for="personMassInput">Your Mass (kg):</label>
        <input type="number" id="personMassInput" value="70" min="10" max="150" step="5">
    </div>
    <div style="margin-bottom: 0.8rem;">
        <button id="elevatorUpAccelBtn" class="animator-button btn-green" aria-label="Elevator accelerates upward">Accelerate Up</button>
        <button id="elevatorDownAccelBtn" class="animator-button btn-red" aria-label="Elevator accelerates downward">Accelerate Down</button>
        <button id="elevatorConstantBtn" class="animator-button btn-blue" aria-label="Elevator moves at constant velocity">Constant Velocity</button>
        <button id="elevatorFreeFallBtn" class="animator-button btn-dark-purple" aria-label="Elevator is in free fall">Free Fall</button>
        <button id="resetAnimation" class="animator-button btn-orange" aria-label="Reset simulation">Reset</button>
    </div>

    <svg id="weightApparentWeightSVG" width="100%" height="400" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="weightApparentWeightSVGTitle weightApparentWeightSVGDesc">
        <title id="weightApparentWeightSVGTitle">Weight and Apparent Weight Elevator Simulator</title>
        <desc id="weightApparentWeightSVGDesc">A simulation showing a person on a scale in an elevator, demonstrating how apparent weight changes with acceleration.</desc>

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
        <!-- Elevator Shaft -->
        <rect x="100" y="0" width="200" height="400" fill="#f0f0f0" stroke="#ccc" stroke-width="2" />
        <line x1="100" y1="0" x2="100" y2="400" stroke="#999" stroke-width="2" />
        <line x1="300" y1="0" x2="300" y2="400" stroke="#999" stroke-width="2" />

        <!-- Elevator Car -->
        <rect id="elevatorCar" x="105" y="250" width="190" height="140" fill="#add8e6" rx="5" ry="5" />
        <text x="200" y="320" text-anchor="middle" class="animator-svg-text" style="font-size: 18px; fill: #007bff;">Elevator</text>

        <!-- Person on Scale -->
        <rect id="personBody" x="185" y="280" width="30" height="60" fill="#28a745" rx="5" ry="5" />
        <circle cx="200" cy="280" r="10" fill="#28a745" /> <!-- Head -->
        <rect id="scale" x="170" y="340" width="60" height="10" fill="#555" rx="3" ry="3" />

        <!-- Displays -->
        <text id="trueWeightDisplay" x="550" y="50" text-anchor="end" class="animator-svg-text" style="font-size: 18px; font-weight: bold; fill: #333;">True Weight: 0.0 N</text>
        <text id="apparentWeightDisplay" x="550" y="80" text-anchor="end" class="animator-svg-text" style="font-size: 20px; font-weight: bold; fill: #e67e22;">Apparent Weight: 0.0 N</text>
        <text id="accelerationDisplay" x="550" y="110" text-anchor="end" class="animator-svg-text" style="font-size: 16px; fill: #007bff;">Acceleration: 0.0 m/s²</text>
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Adjust your mass, then click an elevator scenario to see how your apparent weight changes!</p>
    </div>
</div>

<script src="/assets/js/forces/weight-apparent-weight-animator.js"></script>

---

## **Scenarios for Apparent Weight**

Let's apply Newton's Second Law ($\Sigma F = ma$) to understand apparent weight:

* **Forces:**
    * $F_N$: Normal force (upwards, this is your apparent weight)
    * $W$: True weight ($mg$, downwards)

* **Equation:** $\Sigma F_y = F_N - W = ma_y$
    * So, $F_N = W + ma_y$

1.  **Elevator at Rest or Constant Velocity ($a_y = 0$):**
    * $F_N = W + m(0) \implies F_N = W$
    * **Apparent Weight = True Weight.** You feel normal.

2.  **Elevator Accelerating Upwards ($a_y > 0$):**
    * $F_N = W + ma_y$
    * Since $ma_y$ is positive, $F_N > W$.
    * **Apparent Weight > True Weight.** You feel heavier.

3.  **Elevator Accelerating Downwards ($a_y < 0$):**
    * $F_N = W + ma_y$ (where $a_y$ is negative)
    * Since $ma_y$ is negative, $F_N < W$.
    * **Apparent Weight < True Weight.** You feel lighter.

4.  **Elevator in Free Fall ($a_y = -g$):**
    * $F_N = W + m(-g) = mg - mg \implies F_N = 0$
    * **Apparent Weight = 0.** You feel weightless. This is because the floor is accelerating downwards with you, so it doesn't need to push up on you.

---

## **Why Weight and Apparent Weight Matter**

* **Understanding "Weightlessness":** It explains why astronauts in orbit feel weightless (they are in continuous free fall around Earth), even though Earth's gravity is still acting on them.
* **Roller Coasters:** The "pit of your stomach" feeling on a roller coaster is due to changes in apparent weight.
* **Conceptual Clarity:** It helps distinguish between the fundamental force of gravity and the sensation of weight, which is a contact force.

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of weight and apparent weight.</p>
<audio controls class="audio-player" aria-label="Audio summary of weight and apparent weight">
  <source src="/assets/audio/forces/weight-apparent-weight-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% capture weight_apparent_weight_question %}An astronaut is in orbit around Earth. Does the astronaut have true weight? Do they have apparent weight? Explain.{% endcapture %}
{% capture weight_apparent_weight_answer %}Yes, the astronaut still has **true weight** because Earth's gravity is still pulling on them (though slightly less than on the surface). However, they have **zero apparent weight** because they are in a continuous state of free fall around the Earth, meaning there is no normal (support) force acting on them.{% endcapture %}
{% include quick-concept-question.html question=weight_apparent_weight_question answer=weight_apparent_weight_answer %}

---

## **Related Skills**

Ready to put your understanding of weight and apparent weight into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/calculating-apparent-weight/"><strong>Calculating Apparent Weight in Elevators</strong></a></li>
    <li><a href="/skills/distinguishing-mass-weight/"><strong>Distinguishing Mass vs. Weight</strong></a></li>
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
    <li><a href="/problems/elevator-apparent-weight-problems/"><strong>Elevator Apparent Weight Problems</strong></a></li>
    <li><a href="/problems/apparent-weight-scenarios/"><strong>Apparent Weight Scenarios</strong></a></li>
  {%- endif -%}
</ul>