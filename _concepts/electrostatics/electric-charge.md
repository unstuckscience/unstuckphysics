---
title: 📘 Electric Charge
summary: Discover the fundamental property of matter that causes it to experience a force when placed in an electromagnetic field.
permalink: /concepts/electrostatics/electric-charge/
layout: single
collection: concepts
topic: electrostatics
tags: [charge, protons, electrons, elementary charge, quantization]
order: 1
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
**Electric charge** is a fundamental property of matter. Particles with charge exert forces on each other: like charges repel, while opposite charges attract.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick summary of the nature of electric charge.</p>
<audio controls class="audio-player" aria-label="Audio summary of electric charge">
  <source src="/assets/audio/electrostatics/electric-charge-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**



[Image of the structure of an atom showing protons, neutrons, and electrons]


<svg width="480" height="200" viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="0" y="0" width="480" height="200" fill="white"/>
  <circle cx="100" cy="80" r="15" fill="#d62728"/><text x="100" y="85" text-anchor="middle" fill="white" font-weight="bold">+</text>
  <circle cx="180" cy="80" r="15" fill="#d62728"/><text x="180" y="85" text-anchor="middle" fill="white" font-weight="bold">+</text>
  <line x1="80" y1="80" x2="40" y2="80" stroke="black" stroke-width="2" marker-end="url(#arrowhead)"/>
  <line x1="200" y1="80" x2="240" y2="80" stroke="black" stroke-width="2" marker-end="url(#arrowhead)"/>
  <text x="140" y="130" text-anchor="middle" font-size="12">Like Charges Repel</text>

  <circle cx="300" cy="80" r="15" fill="#d62728"/><text x="300" y="85" text-anchor="middle" fill="white" font-weight="bold">+</text>
  <circle cx="380" cy="80" r="15" fill="#2A52BE"/><text x="380" y="85" text-anchor="middle" fill="white" font-weight="bold">-</text>
  <line x1="315" y1="80" x2="340" y2="80" stroke="black" stroke-width="2" marker-end="url(#arrowhead)"/>
  <line x1="365" y1="80" x2="340" y2="80" stroke="black" stroke-width="2" marker-end="url(#arrowhead)"/>
  <text x="340" y="130" text-anchor="middle" font-size="12">Opposite Charges Attract</text>

  <defs>
    <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5"/>
    </marker>
  </defs>
</svg>

---

## **Key Principles of Charge**

* **Two Types:** Charge comes in Positive (+) and Negative (-).
* **Quantization:** Charge is not continuous. It comes in discrete packets. The smallest unit of "free" charge is the **elementary charge** ($e = 1.602 \times 10^{-19} \text{ C}$).
* **Conservation:** Charge cannot be created or destroyed, only transferred from one object to another.

---

{% capture charge_question %}What happens to the total charge of a system if an electron moves from Object A to Object B?{% endcapture %}
{% capture charge_answer %}The **total charge remains constant** due to the Law of Conservation of Charge. Object A becomes more positive and Object B becomes more negative, but the sum does not change.{% endcapture %}
{% include quick-concept-question.html question=charge_question answer=charge_answer %}