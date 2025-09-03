---
title: 📘 Kinematics
summary: Kinematics is the study of how things move—how fast, how far, and how the motion changes over time.
permalink: /concepts/motion-1d/kinematics/
layout: single
collection: concepts
topic: motion-1d
tags: [kinematics, motion, equations, constant acceleration, one dimension]
order: 6
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
**Kinematics** is the study of how objects move, focusing on their **position, velocity, and acceleration** without considering the forces that cause the motion.
</p>

---

## **What is Kinematics?**

**Kinematics** is the part of physics that talks about motion. That means how things move: how far they go, how fast they go, and how their speed changes.

We don’t worry about what causes the motion (like forces or pushes and pulls). We only focus on what the motion looks like.

In this unit, we look at motion in a straight line.

---

## **What Words Do I Need to Know?**

Here are some words we’ll use a lot in kinematics:

* **Position** — Where something is.
* **Displacement** — How far something moves from where it started.
* **Velocity** — How fast something moves *and* which way.
* **Acceleration** — How much the velocity changes (speeding up or slowing down).

In one dimension (a straight line), we use **+** and **–** signs to show direction.

---

## **The Kinematic Equations**
When something speeds up or slows down at a **steady rate**, we say it has **constant acceleration**.

We can use these special equations to solve problems about motion.

### 1. Final velocity after a certain time:
$$ v_f = v_i + at $$
- $v_f$: final velocity
- $v_i$: initial velocity
- $a$: acceleration
- $t$: time

---

### 2. Distance moved after a certain time:
$$ \Delta x = v_i t + \frac{1}{2} a t^2 $$
- $\Delta x$: how far the object moved
- $v_i$: initial velocity
- $a$: acceleration
- $t$: time

---

### 3. Final velocity without using time:
$$ v_f^2 = v_i^2 + 2a \Delta x $$
- $v_f$: final velocity
- $v_i$: initial velocity
- $a$: acceleration
- $\Delta x$: displacement

---

### 4. Distance using average velocity:
$$ \Delta x = \frac{1}{2}(v_i + v_f)t $$
- $\Delta x$: displacement
- $v_i$: initial velocity
- $v_f$: final velocity
- $t$: time

These only work if **acceleration is constant** (doesn’t change).

---

## **Why Should I Care?**

Kinematics helps you:

- Describe motion clearly
- Understand how objects speed up or slow down
- Solve real-life problems (like how long it takes a car to stop or how far a rocket travels)

You’ll use kinematics to build your skills for harder physics topics later on.

---

## **Interactive: Kinematics Vocab Match**

Test your understanding of key terms in kinematics by matching them with their meanings.

<div class="vocab-matching-interactive-wrapper kinematics">
    <div class="animator-explanation">
        <p>Click a term and then its matching meaning. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vocabTermsKinematics">
                    <!-- Terms will be rendered here by JS -->
                </div>
            </div>
            <div class="vocab-card-column">
                <div id="vocabDefinitionsKinematics">
                    <!-- Definitions will be rendered here by JS -->
                </div>
            </div>
        </div>
        <div id="vocabFeedbackKinematics"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonKinematics" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/motion-1d/kinematics-interactive-match.js"></script>

---

{% include quick-concept-question.html
  question="You know the starting velocity ($v_i$), the final velocity ($v_f$), and the time ($t$). You want to know how far something moved. Which equation should you use?"
  answer="You should use: $$\Delta x = \frac{1}{2}(v_i + v_f)t$$ It uses the average velocity to find the displacement."
%}