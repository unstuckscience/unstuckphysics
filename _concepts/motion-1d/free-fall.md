---
title: 📘 Free Fall
summary: Learn about free fall, the motion of objects under the sole influence of gravity, and how it's a special case of constant acceleration.
permalink: /concepts/motion-1d/free-fall/
layout: single
collection: concepts
topic: motion-1d
tags: [free fall, gravity, acceleration, kinematics, constant acceleration]
order: 7
sidebar:
  nav: motion-1d-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
**Free fall** is the motion of an object when **gravity is the only force acting on it**. In free fall, the object's acceleration is constant and always directed downwards.
</p>

---

## **What is Free Fall?**

**Free fall** is what happens when an object moves only because of gravity. We pretend there's no air pushing on it (no air resistance).

So, in free fall, the only thing making the object change its velocity is gravity.

---

## **Key Things About Free Fall**

* **Constant Acceleration:** Objects in free fall always speed up (or slow down if thrown upwards) at the same steady rate. This means they have **constant acceleration**.
* **Acceleration Due to Gravity ($g$):** This special acceleration is called "acceleration due to gravity."
    * Near Earth's surface, its value is about **9.8 m/s²**.
    * We use the symbol **$g$** for this value. So, $a = g = 9.8 \text{ m/s}^2$.
* **Always Downwards:** The direction of this acceleration is always **downwards**, towards the center of the Earth.

---

## **Interactive Free Fall Simulator**

Observe two objects (a bowling ball and a feather) dropped simultaneously. Toggle air resistance to see its effect on their motion and acceleration.

<div class="animator-container free-fall-animator-container">
    <h3 class="animator-title">Free Fall: Ball vs. Feather</h3>

    <div class="air-resistance-toggle">
        <label class="toggle-switch">
            <input type="checkbox" id="airResistanceToggle">
            <span class="slider round"></span>
        </label>
        <span id="airResistanceLabel" class="toggle-label">Air Resistance: OFF (Vacuum)</span>
    </div>

    <canvas id="freeFallCanvas" width="500" height="400"></canvas>

    <div class="info-container">
        <div class="info-box">
            <p class="info-label">Ball Acceleration:</p>
            <p id="ballAccelerationValue" class="value-display">9.8 m/s²</p>
        </div>
        <div class="info-box">
            <p class="info-label">Feather Acceleration:</p>
            <p id="featherAccelerationValue" class="value-display">9.8 m/s²</p>
        </div>
    </div>

    <div class="text-center mt-4">
        <button id="resetFreeFallButton" class="animator-button reset-button">Reset Simulation</button>
    </div>
</div>

<script src="{{ '/assets/js/motion-1d/free-fall-animator.js' | relative_url }}"></script>

---

## **Free Fall and Kinematics**

Because free fall involves **constant acceleration**, we can use all the **kinematic equations** we just learned!

You simply replace the acceleration symbol ($a$) with $g$ (or $-g$ if you choose 'up' as positive).

For example, the equation for final velocity becomes:
$$ v_f = v_i + gt $$
(If we define 'down' as the positive direction)

---

## **Starting Free Fall**

An object can start free fall in a few ways:

* **Dropped:** If an object is simply dropped, its initial velocity ($v_i$) is **zero**.
* **Thrown Upwards:** If an object is thrown straight up, it has an initial upward velocity. Gravity will then slow it down, stop it for a moment at the top, and then make it fall downwards.
* **Thrown Downwards:** If an object is thrown straight down, it has an initial downward velocity, and gravity will make it speed up even faster.

---

## **Interactive Match: Free Fall**

Test your understanding of the key terms associated with free fall.

<div class="vocab-matching-interactive-wrapper free-fall">
    <div class="animator-explanation">
        <p>Click a term and then its matching meaning. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vocabTermsFreeFall">
                    <!-- Terms will be rendered here by JS -->
                </div>
            </div>
            <div class="vocab-card-column">
                <div id="vocabDefinitionsFreeFall">
                    <!-- Definitions will be rendered here by JS -->
                </div>
            </div>
        </div>
        <div id="vocabFeedbackFreeFall"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonFreeFall" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/motion-1d/free-fall-interactive-match.js"></script>

---

## **Why Should I Care?**

Understanding free fall helps you:

* Explain why things fall the way they do.
* Solve problems about falling objects, like how long it takes for something to hit the ground.
* It's a basic step to understanding more complex motions, like throwing a ball (projectile motion).

---

{% capture free_fall_question %}If you drop a rock and a feather at the same time (in a vacuum, meaning no air), which one hits the ground first?{% endcapture %}
{% capture free_fall_answer %}In a vacuum (no air resistance), both the rock and the feather would hit the ground at the **same time**. This is because gravity causes all objects to accelerate downwards at the same rate ($g$), regardless of their mass.{% endcapture %}
{% include quick-concept-question.html question=free_fall_question answer=free_fall_answer %}