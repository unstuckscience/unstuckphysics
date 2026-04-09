---
title: 📘 Weight and Apparent Weight
summary: Learn the difference between true weight and apparent weight, especially in elevators and other situations with acceleration.
permalink: /concepts/forces/weight-apparent-weight/
layout: single
collection: concepts
topic: forces
tags: [weight, apparent weight, gravity, normal force, elevator, acceleration, newtons second law]
order: 6
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
**True weight** is the force of gravity pulling you downward. **Apparent weight** is the support force pushing up on you, like the force from a floor or scale. They are often the same, but they can be different when you are accelerating.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of weight and apparent weight.</p>
<audio controls class="audio-player" aria-label="Audio summary of weight and apparent weight">
  <source src="/assets/audio/forces/weight-apparent-weight-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**

<svg width="600" height="320" viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" 
     preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="svg-title svg-desc">
  
  <title id="svg-title">Comparison of Normal Force and Weight in different acceleration states</title>
  <desc id="svg-desc">
    A three-panel free-body diagram showing a box on a surface. 
    In the first panel (no acceleration), the upward normal force arrow and downward weight arrow are equal in length. 
    In the second panel (upward acceleration), the upward normal force arrow is longer than the weight arrow. 
    In the third panel (downward acceleration), the upward normal force arrow is shorter than the weight arrow.
  </desc>

  <defs>
    <marker id="arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
      <path d="M0,0 L5,2.5 L0,5 Z" fill="#333333" />
    </marker>
    <marker id="arrow-green" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
      <path d="M0,0 L5,2.5 L0,5 Z" fill="#009E73" />
    </marker>
  </defs>

  <rect width="600" height="320" fill="#ffffff" />

  <line x1="200" y1="40" x2="200" y2="300" stroke="#CCCCCC" stroke-width="2" />
  <line x1="400" y1="40" x2="400" y2="300" stroke="#CCCCCC" stroke-width="2" />

  <text x="100" y="35" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold">No Acceleration</text>
  <rect x="75" y="210" width="50" height="50" fill="#A7C7E7" stroke="#333333" stroke-width="2" />
  <line x1="60" y1="260" x2="140" y2="260" stroke="#666666" stroke-width="3" />
  <circle cx="100" cy="235" r="4" fill="#222222" />
  <line x1="100" y1="235" x2="100" y2="175" stroke="#333333" stroke-width="3" marker-end="url(#arrow)" />
  <line x1="100" y1="235" x2="100" y2="295" stroke="#333333" stroke-width="3" marker-end="url(#arrow)" />
  <text x="112" y="185" font-family="sans-serif" font-size="13">Normal Force</text>
  <text x="112" y="292" font-family="sans-serif" font-size="13">Weight</text>
  <text x="100" y="90" text-anchor="middle" font-family="sans-serif" font-size="14">Normal Force = Weight</text>

  <text x="300" y="35" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold">Upward Acceleration</text>
  <rect x="275" y="210" width="50" height="50" fill="#A7C7E7" stroke="#333333" stroke-width="2" />
  <line x1="260" y1="260" x2="340" y2="260" stroke="#666666" stroke-width="3" />
  <circle cx="300" cy="235" r="4" fill="#222222" />
  <line x1="300" y1="235" x2="300" y2="130" stroke="#333333" stroke-width="3" marker-end="url(#arrow)" />
  <line x1="300" y1="235" x2="300" y2="295" stroke="#333333" stroke-width="3" marker-end="url(#arrow)" />
  <line x1="250" y1="245" x2="250" y2="185" stroke="#009E73" stroke-width="3" marker-end="url(#arrow-green)" />
  <text x="210" y="180" font-family="sans-serif" font-size="13" fill="#009E73">Acceleration</text>
  <text x="312" y="140" font-family="sans-serif" font-size="13">Normal Force</text>
  <text x="312" y="292" font-family="sans-serif" font-size="13">Weight</text>
  <text x="300" y="90" text-anchor="middle" font-family="sans-serif" font-size="14">Normal Force &gt; Weight</text>

  <text x="500" y="35" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="bold">Downward Acceleration</text>
  <rect x="475" y="210" width="50" height="50" fill="#A7C7E7" stroke="#333333" stroke-width="2" />
  <line x1="460" y1="260" x2="540" y2="260" stroke="#666666" stroke-width="3" />
  <circle cx="500" cy="235" r="4" fill="#222222" />
  <line x1="500" y1="235" x2="500" y2="190" stroke="#333333" stroke-width="3" marker-end="url(#arrow)" />
  <line x1="500" y1="235" x2="500" y2="295" stroke="#333333" stroke-width="3" marker-end="url(#arrow)" />
  <line x1="450" y1="185" x2="450" y2="245" stroke="#009E73" stroke-width="3" marker-end="url(#arrow-green)" />
  <text x="410" y="180" font-family="sans-serif" font-size="13" fill="#009E73">Acceleration</text>
  <text x="512" y="200" font-family="sans-serif" font-size="13">Normal Force</text>
  <text x="512" y="292" font-family="sans-serif" font-size="13">Weight</text>
  <text x="500" y="90" text-anchor="middle" font-family="sans-serif" font-size="14">Normal Force &lt; Weight</text>
</svg>

---

## **What is True Weight?**

Your **true weight** is the force of gravity acting on you.

* **Formula:** $F_g = mg$

  * $F_g$ = weight in newtons (N)
  * $m$ = mass in kilograms (kg)
  * $g$ = gravitational field strength, about $9.8 \text{ m/s}^2$

Your true weight usually stays the same unless your mass changes or you move far from Earth.

---

## **What is Apparent Weight?**

Your **apparent weight** is the normal force pushing up on you.

This is the force you feel when you stand on the ground, stand on a scale, or ride in an elevator.

* A bathroom scale measures your apparent weight.
* Apparent weight depends on acceleration.
* Apparent weight can be greater than, less than, or equal to true weight.

---

## **How Apparent Weight Changes**

There are two main forces acting on you in an elevator:

* **Weight ($F_g$):** Pulls downward
* **Normal Force ($F_N$):** Pushes upward

Newton's Second Law gives:

$$F_N - F_g = ma$$

So:

$$F_N = F_g + ma$$