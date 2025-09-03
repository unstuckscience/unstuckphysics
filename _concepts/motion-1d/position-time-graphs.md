---
title: 📘 Position-Time Graphs
summary: Learn how to read and interpret position-time graphs to understand an object's motion, including its position, velocity, and direction.
permalink: /concepts/motion-1d/position-time-graphs/
layout: single
collection: concepts
topic: motion-1d
tags: [position, time, graph, kinematics, motion, velocity]
order: 3
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
A **position-time graph** is a powerful tool that shows an object's location over time, allowing you to quickly determine its velocity and direction of motion.
</p>

---

## **What is a Position-Time Graph?**

A position-time graph shows an object's **position** on the vertical (y) axis and **time** on the horizontal (x) axis.

* **Position:** Tells you *where* the object is.
* **Time:** Tells you *when* the object is at that position.

By looking at the line on the graph, you can figure out:
* Where the object started.
* Where it is at any given time.
* If it's moving forward, backward, or standing still.
* How fast it's moving (its velocity).

---

## **Interactive: Graph Shapes, Motion Stories**

Watch how different types of motion create unique shapes on a position-time graph!

<div class="animator-container">
    <div style="margin-bottom: 0.8rem;">
        <button id="prevExampleBtn" class="animator-button btn-blue" aria-label="Previous example">Previous Example</button>
        <button id="nextExampleBtn" class="animator-button btn-green" aria-label="Next Example">Next Example</button>
        <button id="resetAnimation" class="animator-button btn-red" aria-label="Reset animation">Reset</button>
    </div>

    <svg id="positionTimeGraphSVG" width="100%" height="300" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="positionTimeGraphSVGTitle positionTimeGraphSVGDesc">
        <title id="positionTimeGraphSVGTitle">Position-Time Graph Animator</title>
        <desc id="positionTimeGraphSVGDesc">An interactive animation showing an object's motion and its corresponding position-time graph, controlled by user input.</desc>

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

        <!-- Unique SVG elements for this animator -->

        <!-- Motion Track (Top Section) - Now wrapped for visual distinction -->
        <g class="motion-track-visual">
            <rect x="0" y="0" width="600" height="90" fill="#f0f8ff" stroke="#aaddff" stroke-width="1" rx="5" ry="5"/>
            <text x="5" y="18" font-size="14px" fill="#007bff" font-weight="bold">Motion Track:</text>
            <line x1="50" y1="50" x2="550" y2="50" stroke="#999" stroke-width="2" />
            <!-- Track Position Labels -->
            <text x="50" y="70" text-anchor="middle" class="animator-svg-text" style="font-size: 14px;">-10m</text>
            <text x="150" y="70" text-anchor="middle" class="animator-svg-text" style="font-size: 14px;">-5m</text>
            <text x="300" y="70" text-anchor="middle" class="animator-svg-text" style="font-size: 14px; font-weight: bold; fill: #007bff;">0m (Start)</text>
            <text x="450" y="70" text-anchor="middle" class="animator-svg-text" style="font-size: 14px;">+5m</text>
            <text x="550" y="70" text-anchor="middle" class="animator-svg-text" style="font-size: 14px;">+10m</text>
            <!-- Object on Track -->
            <circle id="movingObject" cx="300" cy="50" r="10" fill="#28a745" />
            <text id="objectPositionLabel" x="300" y="30" text-anchor="middle" class="animator-svg-text" style="font-size: 16px; fill: #28a745;">Pos: 0m</text>
        </g>

        <!-- Position-Time Graph (Bottom Section) -->
        <g class="position-time-graph-visual">
            <rect x="0" y="95" width="600" height="205" fill="#f0fff0" stroke="#aaffaa" stroke-width="1" rx="5" ry="5"/>
            <text x="5" y="113" font-size="14px" fill="#28a745" font-weight="bold">Position-Time Graph:</text>

            <line x1="50" y1="250" x2="550" y2="250" stroke="#999" stroke-width="2" /> <!-- X-axis (Time) -->
            <line x1="50" y1="250" x2="50" y2="100" stroke="#999" stroke-width="2" /> <!-- Y-axis (Position) -->

            <!-- Graph Axis Labels -->
            <text x="300" y="270" text-anchor="middle" class="animator-svg-text" style="font-size: 16px;">Time (s)</text>
            <text x="20" y="175" text-anchor="middle" transform="rotate(-90 20 175)" class="animator-svg-text" style="font-size: 16px;">Position (m)</text>
            <text x="40" y="255" class="animator-svg-text" style="font-size: 14px;">0</text> <!-- Time origin -->
            <text x="40" y="105" class="animator-svg-text" style="font-size: 14px;">+10</text> <!-- Position +10m -->
            <text x="40" y="245" class="animator-svg-text" style="font-size: 14px;">-10</text> <!-- Position -10m -->
            <text x="40" y="175" class="animator-svg-text" style="font-size: 14px; fill: #007bff;">0</text> <!-- Position 0m -->


            <!-- Graph line path -->
            <path id="graphPath" fill="none" stroke="#007bff" stroke-width="3" />
            <!-- Current point on graph -->
            <circle id="graphPoint" cx="50" cy="175" r="6" fill="#007bff" />
        </g>
    </svg>

    <div id="animationExplanation" class="animator-explanation animator-explanation-highlight" aria-live="polite">
        <p>Click "Next Example" to see how different types of motion create unique graph shapes!</p>
    </div>
</div>

<script src="/assets/js/motion-1d/position-time-graph-animator.js"></script>

---

## **Interactive Match: Position-Time Graphs**

Test your understanding of key terms related to position-time graphs by matching them with their meanings.

<div class="vocab-matching-interactive-wrapper position-time-graphs">
    <div class="animator-explanation">
        <p>Click a term and then its matching meaning. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vocabTermsPositionTimeGraphs">
                    <!-- Terms will be rendered here by JS -->
                </div>
            </div>
            <div class="vocab-card-column">
                <div id="vocabDefinitionsPositionTimeGraphs">
                    <!-- Definitions will be rendered here by JS -->
                </div>
            </div>
        </div>
        <div id="vocabFeedbackPositionTimeGraphs"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonPositionTimeGraphs" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/motion-1d/position-time-graphs-interactive-match.js"></script>

---

## **Reading Position-Time Graphs**

The **slope** (steepness) of the line on a position-time graph tells you about the object's **velocity** (how fast it's moving and in what direction).

* **Horizontal line (slope = 0):** The object is **at rest** (not moving). Its position is not changing.
* **Straight, sloped line:** The object is moving at a **constant velocity**.
    * **Upward slope:** Moving in the **positive direction**.
    * **Downward slope:** Moving in the **negative direction**.
* **Curved line:** The object's velocity is **changing**, meaning it is **accelerating**.

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of position-time graphs.</p>
<audio controls class="audio-player" aria-label="Audio summary of position-time graphs">
  <source src="/assets/audio/motion-1d/position-time-graphs-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% include quick-concept-question.html
  question="On a position-time graph, what does a horizontal line tell you about the object's motion?"
  answer="A horizontal line on a position-time graph means the object's position is not changing, so it is **at rest** (not moving)."
%}

---

## **Related Skills**

Ready to put your understanding of position-time graphs into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/interpreting-pt-graphs/"><strong>Interpreting Position-Time Graphs</strong></a></li>
    <li><a href="/skills/drawing-pt-graphs/"><strong>Drawing Position-Time Graphs</strong></a></li>
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
    <li><a href="/problems/pt-graph-analysis/"><strong>Position-Time Graph Analysis Problems</strong></a></li>
    <li><a href="/problems/motion-description-from-graph/"><strong>Describing Motion from Graphs</strong></a></li>
  {%- endif -%}
</ul>