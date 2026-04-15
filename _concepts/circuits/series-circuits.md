---
title: 📘 Series Circuits
summary: Explore circuits with a single path for current and learn how resistance and voltage are shared among components.
permalink: /concepts/circuits/series-circuits/
layout: single
collection: concepts
topic: circuits
tags: [series circuit, resistance, voltage drop, Kirchhoff]
order: 2
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
In a **series circuit**, components are connected end-to-end, forming a single loop. There is only one path for the current to take—if that path is broken, the entire circuit fails.
</p>

---

## **Visual Representation**



<svg width="480" height="220" viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="480" height="220" fill="white"/>
  <rect x="100" y="50" width="280" height="120" fill="none" stroke="#333" stroke-width="2"/>
  <rect x="85" y="95" width="30" height="30" fill="white"/>
  <line x1="90" y1="100" x2="110" y2="100" stroke="black" stroke-width="2"/>
  <line x1="95" y1="105" x2="105" y2="105" stroke="black" stroke-width="1"/>
  <line x1="90" y1="110" x2="110" y2="110" stroke="black" stroke-width="2"/>
  <line x1="95" y1="115" x2="105" y2="115" stroke="black" stroke-width="1"/>
  <rect x="160" y="40" width="40" height="20" fill="#eee" stroke="#333"/>
  <rect x="240" y="40" width="40" height="20" fill="#eee" stroke="#333"/>
  <rect x="320" y="40" width="40" height="20" fill="#eee" stroke="#333"/>
  <text x="180" y="30" text-anchor="middle" font-size="12">R1</text>
  <text x="260" y="30" text-anchor="middle" font-size="12">R2</text>
  <text x="340" y="30" text-anchor="middle" font-size="12">R3</text>
</svg>

---

## **The Rules of Series**

1.  **Current is Constant:** The current is the same through every component ($I_{total} = I_1 = I_2 = I_3$).
2.  **Add Resistance:** Total resistance increases as you add components ($R_{eq} = R_1 + R_2 + R_3$).
3.  **Shared Voltage:** The total voltage is split among the components ($V_{total} = V_1 + V_2 + V_3$).

---

## **Interactive Series Simulator**

Add more bulbs to the series loop. Watch how the total current decreases and the bulbs grow dimmer with each addition.

<div class="animator-container series-container">
    <canvas id="seriesCanvas" width="500" height="200"></canvas>
    <button id="addResistorSeries" class="animator-button">Add Resistor</button>
</div>

<script src="{{ '/assets/js/circuits/series-animator.js' | relative_url }}"></script>

---

{% capture series_question %}If one bulb in a series of Christmas lights burns out, what happens to the rest of the bulbs?{% endcapture %}
{% capture series_answer %}They all **go out**. Because there is only one path for the current, a single broken component acts like an open switch, stopping the flow for the entire circuit.{% endcapture %}
{% include quick-concept-question.html question=series_question answer=series_answer %}