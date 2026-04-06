---
title: 📘 Kepler's Second Law
summary: Understand how planets sweep out equal areas in equal times as they orbit the Sun.
permalink: /gravitation/keplers-second-law/
layout: single
collection: concepts
topic: gravitation
tags: [kepler, orbits, speed, gravitation]
order: 2
sidebar:
  nav: gravitation-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" style="border-left: 4px solid #6A5ACD; padding-left: 1rem;">
Kepler's Second Law, the <strong>Law of Equal Areas</strong>, states that a line connecting a planet to the Sun sweeps out equal areas in equal intervals of time.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of Kepler's Second Law.</p>
<audio controls class="audio-player" aria-label="Audio summary of Kepler's Second Law">
  <source src="/assets/audio/gravitation/keplers-second-law-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **The Law of Equal Areas**

While Kepler's First Law describes the **shape** of planetary orbits, the Second Law explains **how orbital speed changes** along that path.

### **Equal Area in Equal Time**

Imagine drawing a line from the Sun to a planet. As the planet moves over a fixed period (like one month), that line traces out a wedge-shaped area. Kepler found that:

* When the planet is **closest to the Sun (perihelion)**, it moves **faster**, sweeping a wide, short area.  
* When the planet is **farthest from the Sun (aphelion)**, it moves **slower**, sweeping a narrow, long area.  

No matter where the planet is in its orbit, the **area swept in a given time is always the same**.

### **Connection to Angular Momentum**

Kepler's Second Law reflects the **conservation of angular momentum**. With no outside torque acting on the planet:

* A smaller distance to the Sun requires **higher speed** to maintain constant angular momentum.  
* A larger distance allows the planet to move **more slowly**.

---

## **Interactive: Orbital Motion Vocabulary**

Match the key terms of Kepler's Second Law to their correct descriptions.

<div class="vocab-matching-interactive-wrapper kepler-2">
    <div class="figcaption">
        <p>Click a term and then its matching description. Complete all pairs to finish!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="kepler2Terms">
                    <!-- Terms rendered by JS -->
                </div>
            </div>
            <div class="vocab-card-column">
                <div id="kepler2Definitions">
                    <!-- Definitions rendered by JS -->
                </div>
            </div>
        </div>
        <div id="kepler2Feedback"></div>
    </div>

    <div class="button-controls">
        <button id="kepler2ResetButton" class="animator-button btn-default">Reset Game</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/gravitation/kepler-2-match.js"></script>

---

{% include quick-concept-question.html
question="At which point in its orbit—perihelion or aphelion—does a planet have the greatest kinetic energy?"
answer="At perihelion. The planet is closest to the Sun and moves fastest to sweep out the required area, so its kinetic energy is highest."
%}

---

## **Related Skills**

<ul>
    <li><a href="{{ '/skills/gravitation/orbital-velocity-calculations/' | relative_url }}"><strong>Calculating Orbital Velocity</strong></a></li>
</ul>
