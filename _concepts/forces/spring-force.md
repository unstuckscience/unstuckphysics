---
title: 📘 Spring Force (Hooke's Law)
summary: Learn about spring force and Hooke's Law, describing the restoring force exerted by a spring when stretched or compressed.
permalink: /concepts/forces/spring-force/
layout: single
collection: concepts
topic: forces
tags: [spring force, hookes law, spring constant, restoring force, elasticity]
order: 7
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
A spring exerts a force when it is stretched or compressed. This force, called the <strong>spring force</strong>, always acts to restore the spring to its natural length.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of spring force and Hooke's Law.</p>
<audio controls class="audio-player" aria-label="Audio summary of spring force and Hooke's Law">
  <source src="/assets/audio/forces/spring-force-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**

<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#ffffff" />
  
  <line x1="400" y1="50" x2="400" y2="350" stroke="#ccc" stroke-width="2" stroke-dasharray="5,5" />

  <g id="compression">
    <text x="200" y="40" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="20">Compression</text>
    
    <line x1="50" y1="100" x2="50" y2="250" stroke="black" stroke-width="4" />
    <path d="M50,175 L70,175 L80,150 L100,200 L120,150 L140,200 L160,150 L180,175 L200,175" fill="none" stroke="#555" stroke-width="3" />
    
    <rect x="200" y="140" width="40" height="70" fill="#ddd" stroke="black" stroke-width="2" />

    <line x1="250" y1="240" x2="210" y2="240" stroke="blue" stroke-width="2" marker-end="url(#arrowBlue)" />
    <text x="165" y="235" text-anchor="middle" font-family="Arial" font-size="12" fill="blue">x (squeeze)</text>
    
    <line x1="210" y1="120" x2="260" y2="120" stroke="red" stroke-width="2" marker-end="url(#arrowRed)" />
    <text x="165" y="110" text-anchor="middle" font-family="Arial" font-size="12" fill="red">Fs (restoring)</text>
    
    <line x1="250" y1="240" x2="250" y2="160" stroke="gray" stroke-width="2" stroke-dasharray="4" />
    <text x="250" y="265" text-anchor="middle" font-family="Arial" font-size="14" fill="gray">Rest position</text>
  </g>

  <g id="stretching" transform="translate(400,0)">
    <text x="200" y="40" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="20">Stretching</text>
    
    <line x1="50" y1="100" x2="50" y2="250" stroke="black" stroke-width="4" />
    <path d="M50,175 L80,175 L110,150 L140,200 L170,150 L200,200 L230,150 L260,175 L290,175" fill="none" stroke="#555" stroke-width="3" />
    
    <rect x="290" y="140" width="40" height="70" fill="#ddd" stroke="black" stroke-width="2" />

    <line x1="150" y1="240" x2="280" y2="240" stroke="blue" stroke-width="2" marker-end="url(#arrowBlue)" />
    <text x="215" y="235" text-anchor="middle" font-family="Arial" font-size="12" fill="blue">x (stretch)</text>
    
    <line x1="300" y1="120" x2="160" y2="120" stroke="red" stroke-width="2" marker-end="url(#arrowRed)" />
    <text x="230" y="110" text-anchor="middle" font-family="Arial" font-size="12" fill="red">Fs (restoring)</text>

    <line x1="150" y1="240" x2="150" y2="160" stroke="gray" stroke-width="2" stroke-dasharray="4" />
    <text x="150" y="265" text-anchor="middle" font-family="Arial" font-size="14" fill="gray">Rest position</text>
  </g>

  <defs>
    <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="blue" />
    </marker>
    <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="red" />
    </marker>
  </defs>
</svg>

---

## **What is Spring Force?**

A **spring force** is a restoring force exerted by a spring when it is displaced from its equilibrium position.  
It always points opposite to the displacement:  
* Stretch → spring pulls back  
* Compression → spring pushes outward

---

## **Hooke's Law**

Hooke's Law relates the force a spring exerts to its displacement:

* **Formula:** $F_s = -kx$  
  * $F_s$: spring force (N)  
  * $k$: spring constant (N/m) – stiffer springs have higher $k$  
  * $x$: displacement from equilibrium (m)  
  * Negative sign → force opposes displacement

---

## **Interactive: Hooke's Law Simulator**

Adjust the spring constant and stretch/compress the spring to see how the force and potential energy change.

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
        <desc id="springForceSVGDesc">Interactive simulation showing spring force and potential energy as the spring is stretched or compressed.</desc>

        <defs>
            <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22" />
            </marker>
        </defs>

        <rect x="50" y="50" width="10" height="200" fill="#666" />
        <text x="55" y="270" text-anchor="middle" style="font-size: 14px; fill: #555;">Wall</text>

        <path id="springPath" d="M 60 150 L 200 150" fill="none" stroke="#e67e22" stroke-width="3" />

        <rect id="springMass" x="200" y="125" width="50" height="50" fill="#28a745" rx="5" ry="5" />
        <text x="225" y="155" text-anchor="middle" style="fill: white; font-size: 16px;">Mass</text>

        <line x1="250" y1="100" x2="250" y2="200" stroke="#007bff" stroke-width="1" stroke-dasharray="4 4" />
        <text x="250" y="90" text-anchor="middle" style="font-size: 14px; fill: #007bff;">Equilibrium (x=0)</text>

        <text id="displacementDisplay" x="550" y="50" text-anchor="end" style="font-size: 18px; font-weight: bold; fill: #333;">Displacement (x): 0.00 m</text>
        <text id="forceDisplay" x="550" y="80" text-anchor="end" style="font-size: 18px; font-weight: bold; fill: #e67e22;">Spring Force (Fs): 0.0 N</text>
        <text id="potentialEnergyDisplay" x="550" y="110" text-anchor="end" style="font-size: 18px; font-weight: bold; fill: #6f42c1;">Potential Energy (PEs): 0.0 J</text>

        <line id="springForceVector" x1="225" y1="150" x2="225" y2="150" stroke="#e67e22" stroke-width="4" marker-end="url(#arrowhead-orange)" opacity="0" />
        <text id="springForceLabel" x="225" y="140" style="fill: #e67e22; font-size: 14px;" opacity="0">$F_s$</text>
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Adjust the spring constant, then stretch or compress the spring to see the force and energy changes!</p>
    </div>
</div>

<script src="/assets/js/forces/spring-force-animator.js"></script>

---

## **Spring Potential Energy**

The work done on a spring is stored as **elastic potential energy**:

* **Formula:** $PE_s = \frac{1}{2}kx^2$  
  * $PE_s$: elastic potential energy (J)  
  * $k$: spring constant (N/m)  
  * $x$: displacement from equilibrium (m)

> Energy is always positive because it depends on $x^2$.

---

## **Why Spring Force Matters**

* **Oscillations & Waves:** Basis for simple harmonic motion.  
* **Engineering Applications:** Springs in suspensions, scales, and devices.  
* **Energy Conservation:** Converts between kinetic and potential energy.

---

{% capture spring_force_question %}A spring is compressed by 0.1 meters and exerts a force of 10 N. What is its spring constant ($k$)? If it is compressed by 0.2 meters, what force will it exert?{% endcapture %}
{% capture spring_force_answer %}Using Hooke's Law, $F_s = kx$:

* First case: $10 \text{ N} = k \times 0.1 \text{ m} \implies k = 100 \text{ N/m}$  
* Second case: $F_s = 100 \text{ N/m} \times 0.2 \text{ m} = 20 \text{ N}$  

The spring constant is **100 N/m**, and it exerts **20 N** when compressed by 0.2 m.{% endcapture %}
{% include quick-concept-question.html question=spring_force_question answer=spring_force_answer %}

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
    <li><a href="/skills/calculating-spring-force/"><strong>Calculating Spring Force</strong></a></li>
    <li><a href="/skills/calculating-spring-potential-energy/"><strong>Calculating Spring Potential Energy</strong></a></li>
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
    <li><a href="/problems/hookes-law-calculations/"><strong>Hooke's Law Calculations</strong></a></li>
    <li><a href="/problems/spring-energy-problems/"><strong>Spring Energy Problems</strong></a></li>
  {%- endif -%}
</ul>