---
title: 🎯 Solving Kinematics Equations
summary: Learn a simple 3-step strategy to solve any one-dimensional kinematics problem.
layout: single
collection: skills
permalink: /skills/motion-1d/kinematics-equations/
topic: motion-1d
tags: [kinematics, equations, problem-solving, suvat]
difficulty: intermediate
order: 2
sidebar:
  nav: motion-1d-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" style="border-left: 4px solid #005A9C; padding-left: 1rem;">
Solving a kinematics problem can seem intimidating at first, but it becomes simple if you follow a reliable, step-by-step strategy. The key is to first identify what you know, then choose the right tool (equation) for the job.
</p>

---

## The 3-Step Strategy

Nearly every one-dimensional kinematics problem can be solved by following these three steps.

### **Step 1: Identify Your Variables**

The foundation of solving these problems is to identify the **four variables** you have to work with: three **knowns** and one **unknown**. Always be on the lookout for the following five key variables:

* **$$\Delta x$$**: displacement (change in position)
* **$$v_{i}$$**: initial velocity
* **$$v$$**: final velocity
* **$$a$$**: constant acceleration
* **$$t$$**: time

You'll need to find at least three of these in the problem statement, and figure out which one you need to solve for. Pay special attention to keywords that hint at a starting or ending state:

* "Starts from rest" or "dropped" means **$$v_{i} = 0 \text{ m/s}$$**
* "Comes to a stop" or "stops" means **$$v = 0 \text{ m/s}$$**

> **Pro Tip:** Every problem has a value for initial velocity ($$v_i$$). Even if it's not explicitly given in the problem, a phrase like "starts from rest" tells you that $$v_i = 0$$. You will always have this variable in your list of given information.

### **Step 2: Choose the Correct Equation**

This is the most crucial step. There are five main kinematics equations, but you only need to use one per problem.

**Pro Tip:** Your key to selecting the right equation is to identify the one variable that is **not mentioned** in the problem, and then select the one equation that also does not contain that variable. This prevents you from trying to solve an equation with two or more unknowns.

The following table organizes the five main kinematics equations by the variable they are **missing**.

| Missing Variable | Kinematics Equation |
| :--- | :--- |
| **$$a$$** | $$\Delta x = \frac{1}{2}(v_{i} + v)t$$ |
| **$$v$$** | $$\Delta x = v_{i}t + \frac{1}{2}at^{2}$$ |
| **$$v_{i}$$** | $$\Delta x = vt - \frac{1}{2}at^{2}$$ |
| **$$t$$** | $$v^{2} = v_{i}^{2} + 2a\Delta x$$ |
| **$$\Delta x$$** | $$v = v_{i} + at$$ |

### **Step 3: Rearrange and Solve**

Once you have selected the correct equation, all that's left is the algebra. Rearrange the equation to isolate your unknown variable on one side. Then, substitute your known values and calculate your answer.

Remember to always check your units! If you are using meters, seconds, and meters per second, all your units should be consistent.

---

## Example Problem

Let's walk through an example using the 3-step strategy.

**Problem:** A car starts from rest and accelerates uniformly at $$2.0 \text{ m/s}^{2}$$ for $$10.0 \text{ s}$$. How far does the car travel during this time?

**Solution:**

1.  **Identify Your Variables:**
    * **Knowns:** The problem says "starts from rest," so $$v_{i} = 0 \text{ m/s}$$. We are given the acceleration, $$a = 2.0 \text{ m/s}^{2}$$, and the time, $$t = 10.0 \text{ s}$$.
    * **Unknown:** The problem asks "How far," which means we need to solve for the displacement, $$\Delta x$$.
    * **Missing Variable:** We have $$v_{i}$$, $$a$$, and $$t$$. We are looking for $$\Delta x$$. The one variable we don't know and don't care about is the final velocity, **$$v$$**.

2.  **Choose the Correct Equation:**
    Looking at our table, the equation that is missing the final velocity ($$v$$) is:
    $$\Delta x = v_{i}t + \frac{1}{2}at^{2}$$
    This is the perfect equation for the problem.

3.  **Rearrange and Solve:**
    The unknown variable, $$\Delta x$$, is already isolated on one side, so no rearrangement is needed! We can substitute the known values and solve.
    $$\Delta x = (0 \text{ m/s})(10.0 \text{ s}) + \frac{1}{2}(2.0 \text{ m/s}^{2})(10.0 \text{ s})^{2}$$
    $$\Delta x = 0 + \frac{1}{2}(2.0)(100) \text{ m}$$
    $$\Delta x = 100 \text{ m}$$
    The car travels **$$100 \text{ m}$$**.

---

## Things to Watch Out For

* **Direction Matters:** Pay close attention to positive and negative signs for vector quantities like $$\Delta x$$, $$v_{i}$$, $$v$$, and $$a$$. For example, an object accelerating to the left would have a negative acceleration.
* **Constant Acceleration:** These equations only work when the acceleration is constant. If acceleration changes, you must break the problem into multiple parts.
* **Consistency is Key:** Make sure all your units are consistent (e.g., meters and seconds, not meters and minutes).

---

<div>
  <h3>Related Concepts & Skills</h3>
  <ul>
    <li><a href="{{ '/concepts/motion-1d/kinematics/' | relative_url }}">Kinematics (Concept)</a></li>
    <li><a href="{{ '/skills/intro/unit-conversions/' | relative_url }}">Performing Unit Conversions (Skill)</a></li>
  </ul>
</div>

---

<h2>Practice Problems</h2>

Test your problem-solving skills with these kinematics problems:

<ul>
  {%- assign current_skill_permalink = page.permalink -%}
  {%- assign related_problems = site.problems | where: "topic", page.topic | where: "related_skill", current_skill_permalink | sort: "order" -%}
  {%- if related_problems.size > 0 -%}
    {%- for problem in related_problems -%}
      <li><a href="{{- problem.url | relative_url -}}"><strong>{{- problem.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No specific practice problems for this skill have been added yet.</li>
  {%- endif -%}
</ul>