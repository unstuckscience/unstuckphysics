---
title: 📘 Electric Force
summary: Learn about the invisible "push or pull" between charges and how to calculate it using Coulomb's Law.
permalink: /concepts/electrostatics/electric-force/
layout: single
collection: concepts
topic: electrostatics
tags: [Coulomb's Law, force, inverse square law, electrostatics]
order: 3
sidebar:
  nav: electrostatics-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
The **Electric Force** is the interaction between two charged objects. Like gravity, it acts over a distance, but it is significantly stronger and can both attract and repel.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick summary of electric force in electrostatics.</p> <audio controls class="audio-player" aria-label="Audio summary of electric force"> <source src="/assets/audio/electrostatics/electric-force-audio.mp3" type="audio/mpeg"> Your browser does not support the audio element. </audio>

---

## **Coulomb's Law**

The magnitude of the force between two point charges is given by:

$$F_e = k \frac{|q_1 q_2|}{r^2}$$

* **$k$:** Coulomb's Constant ($\approx 8.99 \times 10^9 \text{ N}\cdot\text{m}^2/\text{C}^2$)
* **$q_1, q_2$:** Magnitudes of the charges (Coulombs)
* **$r$:** Distance between the centers of the charges (meters)

---

## **The Inverse Square Law**



Because $r^2$ is in the denominator, if you **double** the distance between two charges, the force becomes **one-fourth** as strong.

---

{% capture force_question %}If the distance between two charges is tripled, what happens to the force between them?{% endcapture %}
{% capture force_answer %}The force is reduced to **one-ninth** of its original value ($1/3^2 = 1/9$).{% endcapture %}
{% include quick-concept-question.html question=force_question answer=force_answer %}