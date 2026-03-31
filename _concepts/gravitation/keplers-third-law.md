---
title: 📘 Kepler's Third Law
summary: Explore the mathematical relationship between a planet's distance from the Sun and its orbital period.
permalink: /gravitation/keplers-third-law/
layout: single
collection: concepts
topic: gravitation
tags: [kepler, orbits, period, gravitation, math]
order: 3
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
Kepler's Third Law, the <strong>Law of Harmonies</strong>, shows a precise mathematical link between a planet's orbital period and its average distance from the Sun.
</p>

---

## **The Law of Harmonies**

While Kepler's First and Second Laws describe the motion of a single planet, the Third Law **compares different planets**. It shows that a planet’s "year" is determined by its distance from the Sun.

### **The Mathematical Relationship**

Kepler discovered that the **square of a planet's orbital period ($T$)** is proportional to the **cube of the semi-major axis ($a$)** of its orbit:

$$T^2 \propto a^3$$

For our solar system, using **Earth years** for time and **Astronomical Units (AU)** for distance:

$$T^2 = a^3$$

### **What This Means**

* **Further = Slower:** Planets farther from the Sun travel longer paths and move more slowly.  
* **Universal Constant:** Newton later showed this law comes from the **Law of Universal Gravitation**. The ratio $T^2 / a^3$ depends only on the mass of the Sun (or central body).

---

## **Interactive: Kepler’s Third Law Vocabulary**

Match the key terms and symbols to their correct definitions.

<div class="vocab-matching-interactive-wrapper kepler-3">
    <div class="figcaption">
        <p>Click a term or symbol and then its matching definition. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="kepler3Terms">
                    <!-- Terms rendered by JS -->
                </div>
            </div>
            <div class="vocab-card-column">
                <div id="kepler3Definitions">
                    <!-- Definitions rendered by JS -->
                </div>
            </div>
        </div>
        <div id="kepler3Feedback"></div>
    </div>

    <div class="button-controls">
        <button id="kepler3ResetButton" class="animator-button btn-default">Reset Game</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/gravitation/kepler-3-match.js"></script>

---

{% include quick-concept-question.html
question="If Planet X is 4 AU away from the Sun, how many Earth years does it take to complete one orbit?"
answer="Using $T^2 = a^3$, we calculate $T^2 = 4^3 = 64$. Taking the square root, $T = 8$. So Planet X takes 8 Earth years to orbit the Sun."
%}

---

## **Related Skills**

<ul>
    <li><a href="{{ '/skills/gravitation/calculating-orbital-periods/' | relative_url }}"><strong>Solving for Orbital Period and Distance</strong></a></li>
</ul>
