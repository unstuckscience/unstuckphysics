---
title: Unit Conversion Problems (Beginner)
summary: Practice fundamental unit conversions relevant to physics measurements.
layout: single
collection: problems
permalink: /problems/unit-conversion-beginner/
topic: intro
tags: [units, conversion, physics, beginner, practice, SI-units]
difficulty: beginner
order: 1
sidebar:
  nav: unit-conversions
mathjax: true
toc: true
toc_label: "On This Page"
toc_sticky: true
toc_levels: 2..3
related_skill: /skills/intro/unit-conversions/
related_concept: /concepts/intro/dimensional-analysis/
---

<p class="lead">
These problems will help you practice common unit conversions you'll use in a physics classroom. You'll convert measurements to their standard SI units.
</p>

---

### **Example Problem: Centimeters to Meters**

<div class="interactive-example-wrapper">
    <div id="problemStatement" class="problem-statement">
        <p><strong>Problem:</strong> A piece of string is 350 centimeters (cm) long. How many meters (m) is that?</p>
    </div>

    <div id="solutionStepsContainer">
        <div id="step1" class="solution-step hidden">
            <p><strong>Step 1: What you have, what you want.</strong></p>
            <p>You have 350 cm. You want meters (m).</p>
        </div>

        <div id="step2" class="solution-step hidden">
            <p><strong>Step 2: Find your helper number (conversion factor).</strong></p>
            <p>We know 1 meter is the same as 100 centimeters. So, our helper number is $\frac{1 \text{ m}}{100 \text{ cm}}$.</p>
        </div>

        <div id="step3" class="solution-step hidden">
            <p><strong>Step 3: Set it up.</strong></p>
            <p>Write your starting number first. Then, add your helper number. Make sure the unit you want to get rid of ('cm') is on the bottom, and the new unit ('m') is on the top. This makes the old unit "cancel out."</p>
            $$ 350 \text{ cm} \times \frac{1 \text{ m}}{100 \text{ cm}} $$
        </div>

        <div id="step4" class="solution-step hidden">
            <p><strong>Step 4: Do the math.</strong></p>
            <p>Multiply all the numbers on the top (350 x 1 = 350). Then, divide by all the numbers on the bottom (100). Your answer should have the new unit ('m').</p>
            $$ \frac{350}{100} \text{ m} = 3.5 \text{ m} $$
            <p><strong>Answer:</strong> 3.5 meters</p>
        </div>
    </div>

    <div class="interactive-controls">
        <button id="prevStepBtn" class="interactive-button btn-blue hidden">Previous Step</button>
        <button id="nextStepBtn" class="interactive-button btn-green">Next Step</button>
        <button id="resetInteractiveBtn" class="interactive-button btn-red hidden">Restart Example</button>
    </div>
</div>

<style>
/* --- Interactive Example CSS --- */
.interactive-example-wrapper {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    text-align: center;
}

.problem-statement {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 20px;
}

#solutionStepsContainer {
    min-height: 320px; /* Increased for consistent height across all steps, including MathJax */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column; /* Stack steps vertically */
}

.solution-step {
    background-color: #e9ecef;
    border-left: 5px solid #007bff;
    padding: 15px;
    margin-bottom: 15px;
    text-align: left;
    border-radius: 4px;
    width: 100%; /* Take full width of container */
    box-sizing: border-box; /* Include padding/border in width */
    opacity: 1; /* Default visible */
    transition: opacity 0.5s ease;
}

.solution-step.hidden {
    opacity: 0;
    height: 0;
    overflow: hidden;
    padding: 0 15px; /* Collapse padding when hidden */
    margin-bottom: 0; /* Collapse margin when hidden */
}

.solution-step p {
    margin-bottom: 0.5em;
}

.solution-step p:last-child {
    margin-bottom: 0;
}

.interactive-controls {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px; /* Space between buttons */
}

.interactive-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    margin: 0; /* Removed margin to use gap */
    transition: background-color 0.2s ease, box-shadow 0.2s ease, opacity 0.3s ease;
}

.interactive-button.btn-green {
    background-color: #28a745;
    color: white;
}

.interactive-button.btn-green:hover {
    background-color: #218838;
}

.interactive-button.btn-red {
    background-color: #dc3545;
    color: white;
}

.interactive-button.btn-red:hover {
    background-color: #c82333;
}

.interactive-button.btn-blue { /* New style for Previous button */
    background-color: #007bff;
    color: white;
}

.interactive-button.btn-blue:hover {
    background-color: #0056b3;
}

.interactive-button.hidden {
    opacity: 0;
    pointer-events: none; /* Disable clicks when hidden */
    width: 0; /* Collapse width to prevent taking up space */
    padding: 0; /* Collapse padding */
    margin: 0; /* Collapse margin */
}
</style>

<script src="/assets/js/intro/unit-conversion-beginner-animator.js"></script>

---

### **Common Conversion Factors**

Here are some common conversion factors you might need for these problems:
* 1 kilogram (kg) = 1000 grams (g)
* 1 kilometer (km) = 1000 meters (m)
* 1 meter (m) = 100 centimeters (cm)
* 1 second (s) = 1000 milliseconds (ms)
* 1 minute (min) = 60 seconds (s)
* 1 hour (hr) = 60 minutes (min)

---

### **Practice Problems**

Solve these problems. Check your answers using the Answer Key at the bottom of the page.

#### **Problem 1: Grams to Kilograms**
A physics student measures the mass of an object as 450 grams (g). What is this mass in kilograms (kg)?

---

#### **Problem 2: Kilometers to Meters**
A car travels a distance of 1.5 kilometers (km). How many meters (m) is this distance?

---

#### **Problem 3: Milliseconds to Seconds**
A stopwatch measures a time interval of 1200 milliseconds (ms). Convert this time to seconds (s).

---

#### **Problem 4: Centimeters to Meters**
The height of a table is 85 centimeters (cm). What is this height in meters (m)?

---

#### **Problem 5: Kilograms to Grams**
A small rock has a mass of 0.075 kilograms (kg). What is its mass in grams (g)?

---

#### **Problem 6: Hours to Seconds**
A laboratory experiment runs for 0.5 hours. How many seconds (s) is this duration?

---

<details>
  <summary>Show Answer Key</summary>
  <p><strong>Problem 1:</strong> 0.45 kg</p>
  <p><strong>Problem 2:</strong> 1500 m</p>
  <p><strong>Problem 3:</strong> 1.2 s</p>
  <p><strong>Problem 4:</strong> 0.85 m</p>
  <p><strong>Problem 5:</strong> 75 g</p>
  <p><strong>Problem 6:</strong> 1800 s</p>
</details>

---

## **Related Concepts & Skills**

* <a href="{{ '/skills/intro/unit-conversions/' | relative_url }}">Unit Conversions (Skill)</a>
* <a href="{{ '/concepts/intro/dimensional-analysis/' | relative_url }}">Dimensional Analysis (Concept)</a>