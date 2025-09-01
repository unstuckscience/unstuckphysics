---
title: 📘 Vector Addition and Subtraction
summary: Learn how to combine vectors using graphical methods like head-to-tail addition and how to subtract vectors by adding the negative.
permalink: /concepts/motion-2d/vector-addition-subtraction/
layout: single
collection: concepts
topic: motion-2d
tags: [vectors, addition, subtraction, resultant, head-to-tail, components]
order: 2
sidebar:
  nav: motion-2d-concepts # This page belongs to the Motion in 2D concepts sidebar
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">

---

## **Adding Vectors: Head-to-Tail Method**

The easiest way to add vectors graphically is the **head-to-tail method**.

1.  **Draw the first vector:** Start at a point and draw the first vector (let's call it Vector A) with its correct length and direction.
2.  **Draw the second vector:** From the **head** (arrow part) of Vector A, draw the **tail** of the second vector (Vector B) with its correct length and direction.
3.  **Draw the Resultant:** The **resultant vector** (which is A + B) is drawn from the **tail** of the first vector (A) to the **head** of the last vector (B).

The resultant vector shows the combined effect of the two original vectors.

---

## **Interactive: Vector Addition**

Let's see how to add two vectors, Vector A and Vector B!

<div class="animator-container">
    <div style="margin-bottom: 0.8rem;">
        <button id="prevStepBtn" class="animator-button btn-blue" aria-label="Previous step">Previous Step</button>
        <button id="nextStepBtn" class="animator-button btn-green" aria-label="Next step">Next Step</button>
        <button id="resetAnimation" class="animator-button btn-red" aria-label="Reset animation">Reset</button>
    </div>

    <svg id="vectorAdditionSVG" width="100%" height="250" viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vectorAdditionSVGTitle vectorAdditionSVGDesc">
        <title id="vectorAdditionSVGTitle">Interactive Vector Addition and Subtraction</title>
        <desc id="vectorAdditionSVGDesc">An animation demonstrating how to add and subtract vectors using graphical methods.</desc>

        <!-- Common SVG definitions (e.g., arrowheads) -->
        <defs>
            <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#007bff" />
            </marker>
            <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#28a745" />
            </marker>
            <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22" />
            </marker>
            <marker id="arrowhead-purple" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6f42c1" />
            </marker>
            <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#A00000" />
            </marker>
        </defs>

        <!-- Unique SVG elements for this specific animator -->
        <!-- Coordinate System for reference -->
        <line x1="50" y1="125" x2="650" y2="125" stroke="#ccc" stroke-width="1" /> <!-- X-axis -->
        <line x1="350" y1="25" x2="350" y2="225" stroke="#ccc" stroke-width="1" /> <!-- Y-axis -->
        <circle cx="350" cy="125" r="3" fill="#666" /> <!-- Origin -->

        <!-- Vector A (fixed position) -->
        <line id="vectorA" x1="350" y1="125" x2="450" y2="75" stroke="#007bff" stroke-width="4" marker-end="url(#arrowhead-blue)" />
        <text id="labelA" x="400" y="65" text-anchor="middle" class="animator-svg-text" style="fill: #007bff; font-weight: bold;">Vector A</text>

        <!-- Vector B (initial position) -->
        <line id="vectorB" x1="150" y1="175" x2="250" y2="125" stroke="#28a745" stroke-width="4" marker-end="url(#arrowhead-green)" />
        <text id="labelB" x="200" y="115" text-anchor="middle" class="animator-svg-text" style="fill: #28a745; font-weight: bold;">Vector B</text>

        <!-- Vector B (moved for addition) -->
        <line id="vectorB_moved" x1="450" y1="75" x2="550" y2="25" stroke="#28a745" stroke-width="4" marker-end="url(#arrowhead-green)" opacity="0" />
        <text id="labelB_moved" x="500" y="15" text-anchor="middle" class="animator-svg-text" style="fill: #28a745; font-weight: bold;" opacity="0">Vector B</text>

        <!-- Resultant Vector (A + B) -->
        <line id="vectorR_add" x1="350" y1="125" x2="550" y2="25" stroke="#e67e22" stroke-width="5" marker-end="url(#arrowhead-orange)" opacity="0" />
        <text id="labelR_add" x="450" y="55" text-anchor="middle" class="animator-svg-text" style="fill: #e67e22; font-weight: bold;" opacity="0">A + B</text>

        <!-- Vector -B (for subtraction) -->
        <line id="vectorNegB" x1="150" y1="175" x2="50" y2="225" stroke="#9b59b6" stroke-width="4" marker-end="url(#arrowhead-purple)" opacity="0" />
        <text id="labelNegB" x="100" y="235" text-anchor="middle" class="animator-svg-text" style="fill: #9b59b6; font-weight: bold;" opacity="0">-B</text>

        <!-- Vector -B (moved for subtraction) -->
        <line id="vectorNegB_moved" x1="450" y1="75" x2="350" y2="125" stroke="#9b59b6" stroke-width="4" marker-end="url(#arrowhead-purple)" opacity="0" />
        <text id="labelNegB_moved" x="400" y="135" text-anchor="middle" class="animator-svg-text" style="fill: #9b59b6; font-weight: bold;" opacity="0">-B</text>

        <!-- Resultant Vector (A - B) -->
        <line id="vectorR_sub" x1="350" y1="125" x2="350" y2="125" stroke="#c0392b" stroke-width="5" marker-end="url(#arrowhead-red)" opacity="0" />
        <text id="labelR_sub" x="300" y="155" text-anchor="middle" class="animator-svg-text" style="fill: #c0392b; font-weight: bold;" opacity="0">A - B</text>
    </svg>

    <div id="animationExplanation" class="animation-explanation" aria-live="polite">
        <p>Click "Next Step" to learn how to add and subtract vectors!</p>
    </div>
</div>

<script src="/assets/js/motion-2d/vector-addition-subtraction-animator.js"></script>

---

## **Subtracting Vectors: Adding the Negative**

Subtracting vectors might sound tricky, but it's actually just a special kind of addition!

To subtract Vector B from Vector A (A - B), you simply **add the negative of Vector B** to Vector A.

* **What is the negative of a vector?** The negative of a vector (e.g., -B) has the **same magnitude** (length) as the original vector (B), but points in the **exact opposite direction**.
* Once you find -B, you use the same head-to-tail method to add A + (-B).

---

## **Why Vector Addition and Subtraction Matter**

* **Combining Forces:** If multiple forces push or pull on an object, vector addition helps you find the single "net force" that tells you how the object will move.
* **Navigation:** If you travel in different directions, vector addition helps you find your final displacement (how far and in what direction you are from your starting point).
* **Relative Motion:** Understanding how velocities combine (like a boat moving in a river) uses vector addition.

---

## **Interactive Match: Vector Addition & Subtraction**

Test your understanding of key terms and methods related to combining vectors.

<div class="vocab-matching-interactive-wrapper vector-add-sub">
    <div class="animator-explanation">
        <p>Click a term and then its matching meaning. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vectorAddSubTerms">
                    <!-- Terms will be rendered here by JS -->
                </div>
            </div>
            <div class="vocab-card-column">
                <div id="vectorAddSubDefinitions">
                    <!-- Definitions will be rendered here by JS -->
                </div>
            </div>
        </div>
        <div id="vectorAddSubFeedback"></div>
    </div>
    <div class="button-controls">
        <button id="vectorAddSubResetButton" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/motion-2d/vector-addition-subtraction-interactive-match.js"></script>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of vector addition and subtraction.</p>
<audio controls class="audio-player" aria-label="Audio summary of vector addition and subtraction">
  <source src="/assets/audio/motion-2d/vector-addition-subtraction-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% include quick-concept-question.html
  question="If you walk 3 meters East, then 4 meters North, what is your total displacement (magnitude and direction)?"
  answer="Your total displacement is 5 meters, 53.1 degrees North of East. This is found by adding the two displacement vectors using the head-to-tail method (forming a right triangle)."
%}

---

## **Related Skills**

Ready to put your understanding of vector addition and subtraction into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/graphical-vector-addition/"><strong>Graphical Vector Addition</strong></a></li>
    <li><a href="/skills/vector-subtraction-graphical/"><strong>Graphical Vector Subtraction</strong></a></li>
  {%- endif -%}
</ul>

<hr>

<h2>Practice Problems</h2>
<p>Test your understanding and apply what you've learned with these problems.</p>
<ul>
  {%- assign related_problems = site.problems | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_problems.size > 0 -%}
    {%- for problem in related_problems -%}
      <li><a href="{{- problem.url | relative_url -}}"><strong>{{- problem.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No practice problems for this concept yet.</li>
    <li><a href="/problems/vector-sum-displacement/"><strong>Vector Sum Displacement Problems</strong></a></li>
    <li><a href="/problems/force-vector-combination/"><strong>Combining Force Vectors</strong></a></li>
  {%- endif -%}
</ul>