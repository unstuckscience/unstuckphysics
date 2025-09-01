---
title: 🎯 Performing Unit Conversions
summary: Learn how to change units using a simple step-by-step method.
layout: single
collection: skills
permalink: /skills/intro/unit-conversions/
topic: intro
tags: [units, conversion, dimensional-analysis, problem-solving, SI-units]
difficulty: beginner
order: 1
sidebar:
  nav: intro-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" style="border-left: 4px solid #B22222; padding-left: 1rem;">
Changing units is an essential tool in your scientific toolkit. It's the art of converting one measurement into another, like changing meters to feet or minutes to seconds. Mastering this method will help you solve problems confidently.
</p>

---

## How to Change Units: The Factor-Label Method

The best way to change units is called the **Factor-Label Method**. Think of it like a puzzle where you match and get rid of old units to find new ones. 

A **conversion factor** is a special helper number that shows two units are the same amount. For example, 1 meter (m) is the same as 100 centimeters (cm). We can write this helper number in two ways:

$$ \frac{1 \text{ m}}{100 \text{ cm}} \quad \text{or} \quad \frac{100 \text{ cm}}{1 \text{ m}} $$

Both of these helper numbers are equal to 1. So, when you multiply by them, you don't change the amount, just how it's measured!

### **Steps to Change Units**

1.  **What you have, what you want:** Know your starting unit and the unit you want to end with.
2.  **Find your helper numbers:** Get the special numbers that connect your units (like 1 meter = 100 cm).
3.  **Set it up:** Write your starting number first. Then, add your helper numbers. Make sure the unit you want to get rid of is on the bottom, and the new unit is on the top. This makes the old unit "cancel out."
4.  **Do the math:** Multiply all the numbers on the top. Then, divide by all the numbers on the bottom. Your answer should have the new unit you wanted.

---

## Examples of Changing Units

Let's try some examples.

### **Example 1: Change Centimeters to Meters**

**Problem:** You have 250 centimeters (cm). How many meters (m) is that?

**Solution:**
1.  **You have:** 250 cm. **You want:** meters (m).
2.  **Helper Number:** We know 1 meter is the same as 100 centimeters. So, our helper number is $\frac{1 \text{ m}}{100 \text{ cm}}$.
3.  **Set it up:**
    $$ 250 \text{ cm} \times \frac{1 \text{ m}}{100 \text{ cm}} $$
    See how 'cm' is on the top and bottom? They will go away!
4.  **Do the math:**
    $$ 250 \div 100 \text{ m} = 2.5 \text{ m} $$
    So, 250 cm is 2.5 m.

### **Example 2: Change Kilometers per Hour to Meters per Second**

**Problem:** You are driving 72 kilometers per hour (km/h). How many meters per second (m/s) is that?

**Solution:**
1.  **You have:** 72 km/h. **You want:** m/s.
2.  **Helper Numbers:**
    * 1 kilometer (km) is 1000 meters (m).
    * 1 hour (h) is 60 minutes (min).
    * 1 minute (min) is 60 seconds (s).
3.  **Set it up:** We need to change km to m, and hours to seconds.
    $$ 72 \frac{\text{km}}{\text{h}} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{60 \text{ min}} \times \frac{1 \text{ min}}{60 \text{ s}} $$
    Look! 'km' on top and bottom go away. 'h' on top and bottom go away. 'min' on top and bottom go away. You are left with 'm' on top and 's' on bottom. Perfect!
4.  **Do the math:**
    $$ 72 \times 1000 \div 60 \div 60 \frac{\text{m}}{\text{s}} = 20 \frac{\text{m}}{\text{s}} $$
    So, 72 km/h is 20 m/s.

---

## Things to Watch Out For

* **Flip your helper numbers:** Make sure the unit you want to get rid of is always on the bottom of your helper number.
* **Don't round too soon:** Wait until the very end to round your answer.
* **Show your steps:** Write down how you get rid of the units. It helps you see if you made a mistake!

---

<div>
  <h3>Related Concepts & Skills</h3>
  <ul>
    <li><a href="{{ '/concepts/intro/dimensional-analysis/' | relative_url }}">Dimensional Analysis (Concept)</a></li>
    <li><a href="{{ '/skills/intro/sig-fig-calculations/' | relative_url }}">Significant Figures in Calculations (Skill)</a></li>
  </ul>
</div>

---

<h2>Practice Problems</h2>

Test your unit conversion skills with these problems:

<ul>
  {%- assign current_skill_permalink = page.permalink -%}
  {%- assign related_problems = site.problems | where: "topic", page.topic | where: "related_skill", current_skill_permalink | sort: "order" -%}
  {%- if related_problems.size > 0 -%}
    {%- for problem in related_problems -%}
      <li><a href="{{- problem.url | relative_url -}}"><strong>{{- problem.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No specific practice problems for unit conversions have been added yet.</li>
    <li><a href="/problems/unit-conversion-practice/"><strong>General Unit Conversion Practice Problems</strong></a></li>
  {%- endif -%}
</ul>