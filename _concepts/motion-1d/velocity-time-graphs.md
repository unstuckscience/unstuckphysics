---
title: 📘 Velocity-Time Graphs
summary: Discover how velocity-time graphs reveal an object's acceleration and displacement, providing a deeper insight into its motion.
permalink: /concepts/motion-1d/velocity-time-graphs/
layout: single
collection: concepts
topic: motion-1d
tags: [velocity, time, graph, motion, kinematics, acceleration, displacement, area]
order: 4
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
A **velocity-time graph** shows an object's velocity over time. The **slope** of the line represents its acceleration, and the **area under the curve** represents its displacement.
</p>

---

## **What are Velocity-Time Graphs?**

A **velocity-time graph** plots an object's velocity on the vertical (y) axis against time on the horizontal (x) axis. Each point on the graph represents the object's velocity at a specific instant in time.

* **Vertical Axis (y-axis):** Velocity (often denoted as $v$, measured in m/s, km/h, etc.)
* **Horizontal Axis (x-axis):** Time (often denoted as $t$, measured in seconds, minutes, etc.)

---

## **Interpreting Velocity-Time Graphs**

The shape and slope of a velocity-time graph tell us a lot about an object's motion:

* **Horizontal Line:** If the line is flat (horizontal), the object's velocity is not changing. This means the object is moving at a **constant velocity** (and zero acceleration).
* **Straight Line with a Slope:** If the line is straight but angled, the object's velocity is changing at a constant rate. This means the object has **constant acceleration**.
* **Curved Line:** If the line is curved, the object's acceleration is changing. This indicates **non-constant acceleration**.

---

## **Slope of a Velocity-Time Graph**

Just like with position-time graphs, the **slope** of a velocity-time graph holds crucial information.

For a velocity-time graph:

$$ \text{Slope} = \frac{\text{Change in Velocity}}{\text{Change in Time}} = \frac{\Delta v}{\Delta t} $$

The change in velocity over the change in time is, by definition, **acceleration**.

Therefore, the **slope of a velocity-time graph represents the object's acceleration**.

* **Steeper Slope:** Indicates a greater acceleration (faster change in velocity).
* **Zero Slope (Horizontal):** Indicates zero acceleration (constant velocity).
* **Positive Slope:** Indicates positive acceleration (velocity is increasing in the positive direction, or decreasing in the negative direction).
* **Negative Slope:** Indicates negative acceleration (velocity is decreasing in the positive direction, or increasing in the negative direction).

---

## **Area Under a Velocity-Time Graph**

Another powerful feature of a velocity-time graph is the **area between the line and the time axis**.

The area under a velocity-time graph represents the **displacement** of the object.

* **Area above the x-axis (positive velocity):** Represents positive displacement.
* **Area below the x-axis (negative velocity):** Represents negative displacement.
* **Total Displacement:** Is the sum of positive and negative areas.
* **Total Distance:** Is the sum of the *absolute values* of all areas.

---

## **Interactive Velocity-Time Graph**

Explore different motion scenarios and see how acceleration (slope) and displacement (area) are calculated.

<div class="animator-container">
    <div class="controls-group" style="margin-bottom: 0.8rem;">
        <label for="motionTypeSelect" class="control-label">Motion Type:</label>
        <select id="motionTypeSelect" class="animator-select">
            <option value="constantVelocity">Constant Velocity</option>
            <option value="constantPositiveAcc">Constant Positive Accel.</option>
            <option value="constantNegativeAcc">Constant Negative Accel.</option>
            <option value="multiSegment">Multi-Segment Motion</option>
        </select>

        <label for="calculationOverlaySelect" class="control-label">Show Calculation:</label>
        <select id="calculationOverlaySelect" class="animator-select">
            <option value="none">None</option>
            <option value="slope">Acceleration (Slope)</option>
            <option value="area">Displacement (Area)</option>
        </select>
    </div>

    <div class="results-display-area animator-explanation-highlight">
        <p><strong>Calculated Acceleration:</strong> <span id="accelerationValue">--- m/s²</span></p>
        <p><strong>Calculated Displacement:</strong> <span id="displacementValue">--- m</span></p>
    </div>

    <div class="text-center mt-4">
        <button id="resetVTGraphButton" class="reset-button animator-button btn-red">Reset Visual</button>
    </div>

    <svg id="velocityTimeGraphCanvas" width="100%" height="350" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="velocityTimeGraphSVGTitle velocityTimeGraphSVGDesc">
        <title id="velocityTimeGraphSVGTitle">Interactive Velocity-Time Graph Visualizer</title>
        <desc id="velocityTimeGraphSVGDesc">An interactive tool to visualize velocity-time graphs for different motion types, showing calculated acceleration and displacement.</desc>

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
            <marker id="arrowhead-purple" markerWidth="10" markerHeight="7" refX="0" y="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6f42c1" />
            </marker>
            <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="0" y="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#A00000" />
            </marker>
        </defs>

        <rect x="50" y="50" width="500" height="250" fill="#f9f9f9" stroke="#ccc" stroke-width="1" />

        <line x1="50" y1="200" x2="550" y2="200" stroke="#333" stroke-width="2" />
        <text x="300" y="220" text-anchor="middle" class="animator-svg-text">Time (s)</text>

        <line x1="50" y1="50" x2="50" y2="300" stroke="#333" stroke-width="2" />
        <text x="20" y="175" text-anchor="middle" transform="rotate(-90 20 175)" class="animator-svg-text">Velocity (m/s)</text>

        <text x="45" y="205" text-anchor="end" class="animator-svg-text">0</text>
        <text x="45" y="55" text-anchor="end" class="animator-svg-text">20</text>
        <text x="45" y="295" text-anchor="end" class="animator-svg-text">-20</text>
        <text x="545" y="205" text-anchor="end" class="animator-svg-text">10</text>

        <g id="timeTicks">
            <line x1="100" y1="195" x2="100" y2="205" stroke="#999" stroke-width="1" /> <text x="95" y="215" class="animator-svg-text">1</text>
            <line x1="150" y1="195" x2="150" y2="205" stroke="#999" stroke-width="1" /> <text x="145" y="215" class="animator-svg-text">2</text>
            <line x1="200" y1="195" x2="200" y2="205" stroke="#999" stroke-width="1" /> <text x="195" y="215" class="animator-svg-text">3</text>
            <line x1="250" y1="195" x2="250" y2="205" stroke="#999" stroke-width="1" /> <text x="245" y="215" class="animator-svg-text">4</text>
            <line x1="300" y1="195" x2="300" y2="205" stroke="#999" stroke-width="1" /> <text x="295" y="215" class="animator-svg-text">5</text>
            <line x1="350" y1="195" x2="350" y2="205" stroke="#999" stroke-width="1" /> <text x="345" y="215" class="animator-svg-text">6</text>
            <line x1="400" y1="195" x2="400" y2="205" stroke="#999" stroke-width="1" /> <text x="395" y="215" class="animator-svg-text">7</text>
            <line x1="450" y1="195" x2="450" y2="205" stroke="#999" stroke-width="1" /> <text x="445" y="215" class="animator-svg-text">8</text>
            <line x1="500" y1="195" x2="500" y2="205" stroke="#999" stroke-width="1" /> <text x="495" y="215" class="animator-svg-text">9</text>
        </g>

        <g id="velocityTicks">
            <line x1="45" y1="175" x2="55" y2="175" stroke="#999" stroke-width="1" /> <text x="25" y="179" class="animator-svg-text">5</text>
            <line x1="45" y1="150" x2="55" y2="150" stroke="#999" stroke-width="1" /> <text x="25" y="154" class="animator-svg-text">10</text>
            <line x1="45" y1="125" x2="55" y2="125" stroke="#999" stroke-width="1" /> <text x="25" y="129" class="animator-svg-text">15</text>

            <line x1="45" y1="225" x2="55" y2="225" stroke="#999" stroke-width="1" /> <text x="25" y="229" class="animator-svg-text">-5</text>
            <line x1="45" y1="250" x2="55" y2="250" stroke="#999" stroke-width="1" /> <text x="25" y="254" class="animator-svg-text">-10</text>
            <line x1="45" y1="275" x2="55" y2="275" stroke="#999" stroke-width="1" /> <text x="25" y="279" class="animator-svg-text">-15</text>
        </g>

        <path id="vtGraphLine" fill="none" stroke="#007bff" stroke-width="3" />

        <g id="slopeOverlayGroup" opacity="0">
            <line id="slopeHorizontalLine" x1="0" y1="0" x2="0" y2="0" stroke="#e67e22" stroke-width="1" stroke-dasharray="3 3" />
            <line id="slopeVerticalLine" x1="0" y1="0" x2="0" y2="0" stroke="#e67e22" stroke-width="1" stroke-dasharray="3 3" />
            <path id="slopeHypotenuse" fill="none" stroke="#e67e22" stroke-width="2" />
            <text id="deltaTLabel" x="0" y="0" class="animator-svg-text" style="fill: #e67e22; font-size: 14px;"></text>
            <text id="deltaVLabel" x="0" y="0" class="animator-svg-text" style="fill: #e67e22; font-size: 14px;"></text>
        </g>

        <g id="areaOverlayGroup" opacity="0">
            <path id="areaPath" fill="#add8e6" opacity="0.5" />
        </g>
    </svg>

    <div id="animationExplanation" class="animator-explanation" aria-live="polite">
        <p>Select a motion type to see its corresponding velocity-time graph, then calculate acceleration and displacement!</p>
    </div>
</div>

<script src="/assets/js/motion-1d/velocity-time-graph-animator.js"></script>

---

## **Key Features to Look For**

When analyzing a velocity-time graph, pay attention to:

* **Starting Point:** Where the line begins on the y-axis (velocity) at $t=0$.
* **Intersections with x-axis:** Where the line crosses the x-axis (velocity = 0), indicating the object momentarily stops or changes direction.
* **Changes in Slope:** Points where the line's steepness or direction changes, indicating a change in acceleration.

---

## **Interactive Match: Velocity-Time Graph**

Test your understanding of the key terms associated with velocity-time graphs.

<div class="vocab-matching-interactive-wrapper vt-graph">
    <div class="animator-explanation">
        <p>Click a term and then its matching meaning. Match all pairs to complete!</p>
    </div>

    <div class="vocab-matching-container">
        <div class="vocab-grid">
            <div class="vocab-card-column">
                <div id="vocabTermsVTGraph">
                    </div>
            </div>
            <div class="vocab-card-column">
                <div id="vocabDefinitionsVTGraph">
                    </div>
            </div>
        </div>
        <div id="vocabFeedbackVTGraph"></div>
    </div>
    <div class="button-controls">
        <button id="vocabResetButtonVTGraph" class="animator-button btn-default">Reset</button>
    </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/motion-1d/velocity-time-graphs-interactive-match.js"></script>

---

## **Why This Matters?**

Velocity-time graphs are fundamental because:

* They provide a direct visual representation of an object's acceleration.
* They allow for the calculation of displacement, even for complex motions, by finding the area under the curve.
* They are a crucial step in understanding kinematics and solving motion problems.

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of velocity-time graphs.</p>
<audio controls style="width: 100%; max-width: 600px; display: block; margin: 1em auto;">
  <source src="/assets/audio/motion-1d/velocity-time-graphs-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% include quick-concept-question.html
  question="A velocity-time graph shows a straight line with a positive slope. What does this tell you about the object's motion?"
  answer="A straight line with a positive slope on a velocity-time graph means the velocity is increasing at a constant rate. Therefore, the object has **constant positive acceleration**."
%}

---

## **Related Skills**

Ready to put your understanding of velocity-time graphs into practice? Check out these related skills:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    <li><a href="/skills/interpreting-vt-graphs/"><strong>Interpreting Velocity-Time Graphs</strong></a></li>
    <li><a href="/skills/calculating-displacement-from-vt-graph/"><strong>Calculating Displacement from V-T Graphs</strong></a></li>
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
    <li><a href="/problems/vt-graph-analysis/"><strong>Velocity-Time Graph Analysis Problems</strong></a></li>
    <li><a href="/problems/acceleration-from-vt-graph/"><strong>Acceleration from Velocity-Time Graphs</strong></a></li>
  {%- endif -%}
</ul>