---
title: 📘 Kepler's First Law
summary: Learn why planets move in elliptical orbits instead of perfect circles.
permalink: /concepts/gravitation/keplers-first-law/
layout: single
collection: concepts
topic: gravitation
tags: [kepler, orbits, ellipses, gravitation, eccentricity]
order: 1
sidebar:
  nav: gravitation-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #6A5ACD; padding-left: 1rem;">
**Kepler’s First Law**, also called the **Law of Ellipses**, states that every planet moves in an **elliptical orbit**, with the **Sun located at one focus** of the ellipse.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of Kepler's First Law.</p>
<audio controls class="audio-player" aria-label="Audio summary of Kepler's First Law">
  <source src="/assets/audio/gravitation/keplers-first-law-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---


## **What Is Kepler’s First Law?**

Before Johannes Kepler, astronomers believed that planetary motion must be perfectly circular. Circles were thought to be the most “ideal” shape.

Kepler showed that this assumption was wrong. By carefully analyzing astronomical data, he discovered that planetary orbits are actually **ellipses**, not circles.

This insight fundamentally changed our understanding of planetary motion.

---

## **What Is an Ellipse?**

An **ellipse** is a closed curve that looks like a stretched or flattened circle.

* A **circle** has **one center point**.
* An **ellipse** has **two special points**, called **foci** (plural of *focus*).

In our solar system:

* The **Sun sits at one focus** of the ellipse.
* The **other focus is empty space**.

This means the planet’s distance from the Sun changes as it moves along its orbit.

<figure class="animator-container">
    <svg width="100%" height="320"
         viewBox="0 -90 700 540"
         xmlns="http://www.w3.org/2000/svg"
         role="img"
         aria-labelledby="keplerEllipseTitle keplerEllipseDesc">

        <title id="keplerEllipseTitle">
            Kepler’s First Law: Nearly Circular Elliptical Orbit
        </title>
        <desc id="keplerEllipseDesc">
            A low-eccentricity elliptical orbit showing a realistic planetary path with the Sun at one focus.
        </desc>

        <!-- Elliptical Orbit -->
        <!-- Semi-major axis: 260, Semi-minor axis: 255, Eccentricity: 0.20 -->
        <ellipse cx="350" cy="180" rx="260" ry="255"
                 fill="none"
                 stroke="#6A5ACD"
                 stroke-width="3" />

        <!-- Foci (c = 52) -->
        <circle cx="298" cy="180" r="4" fill="#333" />
        <circle cx="402" cy="180" r="4" fill="#999" />

        <!-- Focus Labels -->
        <text x="278" y="215" text-anchor="middle" class="animator-svg-text">
            Focus (Sun)
        </text>
        <text x="422" y="215" text-anchor="middle" class="animator-svg-text">
            Empty Focus
        </text>

        <!-- Sun at first focus -->
        <circle cx="298" cy="180" r="14" fill="#FDB813" />


        <!-- Planet (on ellipse at θ = 40°) -->
        <circle cx="549" cy="344" r="7" fill="#28a745" />
        <text x="569" y="378" text-anchor="middle" class="animator-svg-text">
            Planet
        </text>

    </svg>

    <figcaption class="figure-caption">
        Although planets follow elliptical paths, most appear almost circular,
        with the Sun slightly offset from the cente.
    </figcaption>
</figure>

---

## **Key Features of an Elliptical Orbit**

* **Semi-major Axis ($a$):**  
  The average distance between the planet and the Sun.

* **Eccentricity ($e$):**  
  A number that describes how stretched out the orbit is.
  * If $e = 0$, the orbit is a perfect circle.
  * If $e$ is close to $1$, the orbit is very elongated.

Most planetary orbits in our solar system have **small eccentricities**, meaning they are nearly circular but not perfectly so.

---

## **Why This Law Matters**

Kepler’s First Law explains why planets:

* Move faster when they are closer to the Sun
* Spend more time farther away from the Sun
* Do not follow perfectly circular paths

This law laid the foundation for later discoveries, including **Newton’s Law of Universal Gravitation**.

---

## **Interactive Match: Orbital Vocabulary**

Match the key terms related to elliptical orbits and Kepler’s First Law.

<div class="vocab-matching-interactive-wrapper kepler-1">
    <div class="animator-explanation">
        <p>Click a term and then its matching definition. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vocabTermsKepler">
                    <!-- Terms rendered by JS -->
                </div>
            </div>
            <div class="vocab-card-column">
                <div id="vocabDefinitionsKepler">
                    <!-- Definitions rendered by JS -->
                </div>
            </div>
        </div>
        <div id="vocabFeedbackKepler"></div>
    </div>

    <div class="button-controls">
        <button id="vocabResetButtonKepler" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/gravitation/kepler-1-match.js"></script>

---

{% capture kepler_first_law_question %}
If an orbit has an eccentricity of 0.02, what does the shape look like?
{% endcapture %}
{% capture kepler_first_law_answer %}
Since 0.02 is very close to zero, the orbit is almost perfectly circular, though it is technically still an ellipse.
{% endcapture %}
{% include quick-concept-question.html question=kepler_first_law_question answer=kepler_first_law_answer %}

---

## **Related Skills**

Build on your understanding of Kepler’s First Law with these related skills:

<ul>
  <li>
    <a href="{{ '/skills/gravitation/calculating-eccentricity/' | relative_url }}">
      <strong>Calculating Orbital Eccentricity</strong>
    </a>
  </li>
</ul>
