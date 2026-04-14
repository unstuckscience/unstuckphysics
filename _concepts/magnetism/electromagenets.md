---
title: 📘 Electromagnets
summary: Discover how electricity creates magnetism, the shape of magnetic fields around wires and coils, and the power of the Second Right-Hand Rule.
permalink: /concepts/magnetism/electromagnets/
layout: single
collection: concepts
topic: magnetism
tags: [electromagnetism, solenoids, right hand rule, magnetic field lines]
order: 3
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
In 1820, Hans Christian Ørsted noticed a compass needle move when it was near a wire carrying a current. This was the birth of **Electromagnetism**: the discovery that electric currents are the actual source of all magnetic fields.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's how a flow of electrons transforms a piece of metal into a temporary magnet.</p>
<audio controls class="audio-player" aria-label="Audio summary of electromagnets">
  <source src="/assets/audio/magnetism/electromagnets-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Magnetic Field of a Straight Wire**

When current flows through a long, straight wire, it creates a magnetic field that circles around the wire like a ring.



[Image of magnetic field lines around a straight current-carrying wire]


### **The Second Right-Hand Rule (RHR-2)**
To find the direction of this circular field:
1.  **Thumb:** Point your right thumb in the direction of the **Current ($I$)**.
2.  **Fingers:** Curl your fingers as if grabbing the wire.
3.  **Result:** The direction your fingers curl is the direction of the **Magnetic Field ($B$)**.

The strength of this field is calculated by:
$$B = \frac{\mu_0 I}{2\pi r}$$
* **$\mu_0$:** The permeability of free space ($4\pi \times 10^{-7} \text{ T}\cdot\text{m/A}$).
* **$r$:** The distance from the wire.

---

## **Visual Representation: The Solenoid**

If you wrap a wire into a series of loops (a coil), the magnetic fields from each loop add up. This device is called a **Solenoid**. Inside the solenoid, the magnetic field is incredibly strong and uniform.

<svg
    width="480"
    height="240"
    viewBox="0 0 480 240"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="solTitle solDesc">

  <desc id="solDesc">
    A diagram of a solenoid showing how multiple loops of wire create a uniform magnetic field through the center.
  </desc>

  <rect x="0" y="0" width="480" height="240" fill="white"/>

  <rect x="100" y="90" width="280" height="60" fill="#bbb" rx="5"/>
  <text x="240" y="125" font-size="12" fill="#666" text-anchor="middle">Ferromagnetic Core</text>

  <g stroke="#b87333" stroke-width="6" fill="none">
    <path d="M 120 80 Q 130 120, 120 160" />
    <path d="M 160 80 Q 170 120, 160 160" />
    <path d="M 200 80 Q 210 120, 200 160" />
    <path d="M 240 80 Q 250 120, 240 160" />
    <path d="M 280 80 Q 290 120, 280 160" />
    <path d="M 320 80 Q 330 120, 320 160" />
    <path d="M 360 80 Q 370 120, 360 160" />
  </g>

  <line x1="60" y1="120" x2="420" y2="120" stroke="#2A52BE" stroke-width="3" marker-end="url(#arrowheadBlue)"/>
  <text x="430" y="125" font-size="16" fill="#2A52BE" font-weight="bold">B</text>

  <defs>
    <marker id="arrowheadBlue" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#2A52BE"/>
    </marker>
  </defs>
</svg>

---

## **How to Make a Stronger Electromagnet**

An electromagnet is simply a solenoid with a **ferromagnetic core** (like an iron nail) inside it. You can increase its strength in three ways:
1.  **Increase the Current ($I$):** More flow equals more field.
2.  **Increase the Number of Loops ($N$):** More turns of wire add more field layers.
3.  **Add an Iron Core:** The iron atoms align with the solenoid's field, magnifying it thousands of times.

---

## **Interactive Solenoid Lab**

Adjust the number of coils and the voltage of the battery. Observe how the magnetic field (B) inside the coil intensifies as you add loops or push more current through the circuit.

<div class="animator-container electromagnet-container">
    <h3 class="animator-title">Electromagnet Strength Visualizer</h3>

    <div class="control-group">
        <label for="coilTurns">Number of Loops (N): </label>
        <input type="range" id="coilTurns" min="5" max="50" step="5" value="20">
        <span id="turnsVal">20 loops</span>
    </div>

    <div class="control-group">
        <label for="currentAmps">Current (I): </label>
        <input type="range" id="currentAmps" min="1" max="10" step="1" value="3">
        <span id="ampsVal">3 Amps</span>
    </div>

    <canvas id="electromagnetCanvas" width="500" height="250"></canvas>
</div>

<script src="{{ '/assets/js/magnetism/electromagnet-animator.js' | relative_url }}"></script>

---

## **Interactive Match: Electromagnet Components**

Match the physical action to its effect on the magnetic field.

<div class="vocab-matching-interactive-wrapper electromagnet-match">
    <div class="vocab-matching-container">
        <div id="vocabGridEM" class="vocab-grid">
            </div>
        <div id="vocabFeedbackEM"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonEM" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/magnetism/electromagnet-match.js"></script>

---

## **Why Should I Care?**

Electromagnets are the "switch" of the modern world. Because you can turn them on and off, they allow us to control mechanical things with electricity:
* **Maglev Trains:** Powerful electromagnets lift and propel trains at hundreds of miles per hour without touching the tracks.
* **Scrap Yard Cranes:** Giant magnets pick up tons of steel and drop them just by flipping a switch.
* **Relays:** Used in everything from your car's starter motor to the power grid to safely control high-voltage circuits.

---

{% capture em_question %}If you switch the direction of the current in an electromagnet, what happens to the magnetic field?{% endcapture %}
{% capture em_answer %}The magnetic field **reverses direction**. The North pole becomes the South pole, and vice versa. This is how electric motors are able to constantly "push" and "pull" to keep spinning.{% endcapture %}
{% include quick-concept-question.html question=em_question answer=em_answer %}