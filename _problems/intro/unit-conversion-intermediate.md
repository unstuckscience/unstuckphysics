---
title: Unit Conversion Problems (Intermediate)
summary: Practice multi-step unit conversions relevant to physics measurements.
layout: single
collection: problems
permalink: /problems/unit-conversion-intermediate/
topic: intro
tags: [units, conversion, physics, intermediate, practice, SI-units]
difficulty: intermediate
order: 2
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
These problems will help you practice multi-step unit conversions, often involving converting between different measurement systems or multiple time units.
</p>

---

### **Example Problem: Kilometers per Hour to Meters per Second**

<div class="interactive-example-wrapper">
    <div id="problemStatement" class="problem-statement">
        <p><strong>Problem:</strong> A car is traveling at a speed of 90 kilometers per hour (km/h). Convert this speed to meters per second (m/s).</p>
    </div>

    <div id="solutionStepsContainer">
        <div id="step1" class="solution-step hidden">
            <p><strong>Step 1: What you have, what you want.</strong></p>
            <p>You have 90 km/h. You want meters per second (m/s).</p>
        </div>

        <div id="step2" class="solution-step hidden">
            <p><strong>Step 2: Find your helper numbers (conversion factors).</strong></p>
            <p>You'll need to convert kilometers to meters, and hours to seconds. Here are the factors:</p>
            <ul>
                <li>1 kilometer (km) = 1000 meters (m)</li>
                <li>1 hour (h) = 60 minutes (min)</li>
                <li>1 minute (min) = 60 seconds (s)</li>
            </ul>
        </div>

        <div id="step3" class="solution-step hidden">
            <p><strong>Step 3: Set it up.</strong></p>
            <p>Arrange your starting value and helper numbers. Make sure the units you want to get rid of are on the bottom, and the new units are on the top. This makes the old units "cancel out."</p>
            $$ 90 \frac{\text{km}}{\text{h}} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{60 \text{ min}} \times \frac{1 \text{ min}}{60 \text{ s}} $$
            <p>Notice how 'km', 'h', and 'min' will cancel out, leaving 'm' on top and 's' on bottom.</p>
        </div>

        <div id="step4" class="solution-step hidden">
            <p><strong>Step 4: Do the math.</strong></p>
            <p>Multiply all the numbers on the top. Then, divide by all the numbers on the bottom. Your answer should have the new units (m/s).</p>
            $$ 90 \times \frac{1000}{60 \times 60} \frac{\text{m}}{\text{s}} = 90 \times \frac{1000}{3600} \frac{\text{m}}{\text{s}} = 25 \frac{\text{m}}{\text{s}} $$
            <p><strong>Answer:</strong> 25 m/s</p>
        </div>
    </div>

    <div class="interactive-controls">
        <button id="prevStepBtn" class="interactive-button btn-blue hidden">Previous Step</button>
        <button id="nextStepBtn" class="interactive-button btn-green">Next Step</button>
        <button id="resetInteractiveBtn" class="interactive-button btn-red hidden">Restart Example</button>
    </div>
</div>

<style>
/* --- Interactive Example CSS (Intermediate) --- */
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
    min-height: 350px; /* Adjusted for consistent height across all steps, including MathJax and lists */
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

.solution-step ul {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding-left: 20px;
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

<script src="/assets/js/intro/unit-conversion-intermediate-animator.js"></script>

---

### **Common Conversion Factors**

Here are some common conversion factors you might need for these problems:
* 1 mile = 1.609 kilometers (km)
* 1 foot (ft) = 0.3048 meters (m)
* 1 kilogram (kg) = 2.205 pounds (lbs)
* 1 kilometer (km) = 1000 meters (m)
* 1 meter (m) = 100 centimeters (cm)
* 1 inch (in) = 2.54 centimeters (cm)
* 1 second (s) = 1000 milliseconds (ms)
* 1 minute (min) = 60 seconds (s)
* 1 hour (hr) = 60 minutes (min)
* 1 day = 24 hours (hr)

---

### **Practice Problems**

Solve these problems. Check your answers using the Answer Key at the bottom of the page.

#### **Problem 1: Miles per Hour to Meters per Second**
A car's speed limit sign shows 65 miles per hour (mph). What is this speed in meters per second (m/s)?

---

#### **Problem 2: Feet per Second to Kilometers per Hour**
An athlete runs at a speed of 20 feet per second (ft/s). Convert this speed to kilometers per hour (km/h).

---

#### **Problem 3: Days to Seconds**
How many seconds (s) are there in 3 days?

---

#### **Problem 4: Pounds to Grams**
A physics textbook has a mass of 4.8 pounds (lbs). What is its mass in grams (g)?

---

#### **Problem 5: Kilometers per Minute to Meters per Second**
A high-speed train travels at 2.5 kilometers per minute (km/min). What is its speed in meters per second (m/s)?

---

<details>
  <summary>Show Answer Key</summary>
  <p><strong>Problem 1:</strong> Approximately 29.06 m/s</p>
  <p><strong>Problem 2:</strong> Approximately 21.95 km/h</p>
  <p><strong>Problem 3:</strong> 259,200 s</p>
  <p><strong>Problem 4:</strong> Approximately 2176.8 g</p>
  <p><strong>Problem 5:</strong> Approximately 41.67 m/s</p>
</details>

---

## **Related Concepts & Skills**

* <a href="{{ '/skills/intro/unit-conversions/' | relative_url }}">Unit Conversions (Skill)</a>
* <a href="{{ '/concepts/intro/dimensional-analysis/' | relative_url }}">Dimensional Analysis (Concept)</a>