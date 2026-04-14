---
title: 📘 Motors & Generators
summary: Explore the symmetry of electromagnetism—how magnetic fields can create motion (motors) and how motion can create electricity (generators).
permalink: /concepts/magnetism/motors-generators/
layout: single
collection: concepts
topic: magnetism
tags: [motors, generators, induction, electromagnetic induction, faraday's law]
order: 4
sidebar:
  nav: magnetism-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3

---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
The relationship between electricity and magnetism is a two-way street. If you put electricity into a magnetic field, you get **motion** (a motor). If you put motion into a magnetic field, you get **electricity** (a generator).
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's how the same physical principles allow us to power our homes and drive our cars.</p>
<audio controls class="audio-player" aria-label="Audio summary of motors and generators">
  <source src="/assets/audio/magnetism/motors-generators-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **How an Electric Motor Works**

A motor converts **electrical energy into mechanical energy**. It relies on the magnetic force exerted on a current-carrying wire.



1.  **The Setup:** A coil of wire (armature) is placed between two permanent magnets.
2.  **The Current:** Electricity flows through the coil, creating a magnetic field around the wire.
3.  **The Force:** According to the Right-Hand Rule, the permanent magnets push on the current-carrying wire.
4.  **The Spin:** This push creates **torque**, causing the coil to rotate.
5.  **The Commutator:** To keep it spinning in the same direction, a "commutator" switches the direction of the current every half-turn.

---

## **How a Generator Works**

A generator is essentially a motor running in reverse. It converts **mechanical energy into electrical energy** through a process called **Electromagnetic Induction**.



1.  **The Input:** An external force (like falling water, wind, or steam) spins a coil of wire inside a magnetic field.
2.  **Faraday's Law:** As the coil spins, the magnetic environment through the loops changes. This "change in flux" induces a voltage.
3.  **The Output:** Electrons are forced to move through the wire, creating an electric current.

---

## **Visual Representation: Electromagnetic Induction**

The core principle behind generators is **Faraday's Law**. It states that a changing magnetic field will induce an electromotive force (EMF) in a conductor.

<svg
    width="480"
    height="220"
    viewBox="0 0 480 220"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="genTitle genDesc">

  <desc id="genDesc">
    A diagram showing a magnet moving through a coil of wire, inducing a current detected by a galvanometer.
  </desc>

  <rect x="0" y="0" width="480" height="220" fill="white"/>

  <g fill="none" stroke="#b87333" stroke-width="4">
    <ellipse cx="280" cy="110" rx="20" ry="50" />
    <ellipse cx="310" cy="110" rx="20" ry="50" />
    <ellipse cx="340" cy="110" rx="20" ry="50" />
  </g>

  <rect x="60" y="95" width="60" height="30" fill="#d62728"/>
  <rect x="120" y="95" width="60" height="30" fill="#333"/>
  <text x="90" y="115" font-size="14" fill="white" text-anchor="middle">N</text>
  <text x="150" y="115" font-size="14" fill="white" text-anchor="middle">S</text>

  <line x1="190" y1="110" x2="250" y2="110" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
  <text x="220" y="100" font-size="12" text-anchor="middle">v</text>

  <circle cx="310" cy="190" r="20" fill="none" stroke="#333" stroke-width="2"/>
  <line x1="310" y1="190" x2="325" y2="180" stroke="#d62728" stroke-width="2" marker-end="url(#arrowheadRed)"/>
  <text x="310" y="195" font-size="10" text-anchor="middle">G</text>

  <defs>
    <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#333"/>
    </marker>
    <marker id="arrowheadRed" markerWidth="3" markerHeight="3" refX="2" refY="1.5" orient="auto">
      <polygon points="0 0, 3 1.5, 0 3" fill="#d62728"/>
    </marker>
  </defs>
</svg>

---

## **Interactive Induction Lab**

Move the magnet in and out of the coil. Observe how the speed of your movement determines the brightness of the bulb. If the magnet stops moving, the light goes out!

<div class="animator-container induction-container">
    <h3 class="animator-title">Faraday's Law Simulator</h3>

    <div class="control-group">
        <label for="magnetSpeed">Manual Magnet Speed: </label>
        <input type="range" id="magnetSpeed" min="0" max="10" step="1" value="0">
        <span id="speedVal">Static</span>
    </div>

    <canvas id="inductionCanvas" width="500" height="250"></canvas>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Induced Voltage:</p>
            <p id="voltageDisplay" class="value-display">0.0 V</p>
        </div>
    </div>
</div>

<script src="{{ '/assets/js/magnetism/induction-animator.js' | relative_url }}"></script>

---

## **Interactive Match: Motor vs. Generator**

Categorize the following properties based on whether they describe a motor or a generator.

<div class="vocab-matching-interactive-wrapper motor-gen-match">
    <div class="vocab-matching-container">
        <div id="vocabGridMG" class="vocab-grid">
            </div>
        <div id="vocabFeedbackMG"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonMG" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/magnetism/motor-gen-match.js"></script>

---

## **Why Should I Care?**

* **The Power Grid:** Almost every Watt of electricity you use comes from a massive generator in a power plant being spun by steam or water.
* **Electric Cars:** Teslas and Rivians use sophisticated electric motors to drive the wheels, and then use "Regenerative Braking" (turning the motors back into generators) to charge the battery when you slow down.
* **Hydroelectric Dams:** Falling water spins massive turbines (generators) to provide clean energy to millions of people.

---

{% capture mg_question %}Why doesn't a generator work if the magnet and the coil are both perfectly still?{% endcapture %}
{% capture mg_answer %}Electricity is induced by a **change** in the magnetic environment. If everything is still, the magnetic flux through the coil is constant. Without change ($\Delta \Phi$), there is no induced voltage and no current.{% endcapture %}
{% include quick-concept-question.html question=mg_question answer=mg_answer %}