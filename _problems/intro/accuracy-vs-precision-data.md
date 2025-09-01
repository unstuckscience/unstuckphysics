---
title: Determine Accuracy and Precision
summary: Interpret data to assess accuracy and precision.
layout: single
collection: problems
permalink: /problems/accuracy-vs-precision/
topic: mathematics
tags: [precision, accuracy]
difficulty: intermediate
order: 2
sidebar:
  nav: physics
parent: Mathematics and Physics
grand_parent: Topics
---

Given this data set and accepted value (2.70 cm), which student is most accurate?

| Student | Measurement 1 | Measurement 2 | Measurement 3 |
|---------|----------------|----------------|----------------|
| A       | 2.72           | 2.68           | 2.70           |
| B       | 2.91           | 2.90           | 2.92           |
| C       | 2.68           | 2.69           | 2.67           |

---

<button id="solution-toggle" class="btn btn--primary" type="button">
  Reveal Solution
</button>

<div id="solution-content" style="display: none; margin-top: 1em;">
  <h3>Solution</h3>
  <p>Student A is most accurate and precise.</p>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('solution-toggle');
    const solution = document.getElementById('solution-content');

    button.addEventListener('click', function () {
      const isHidden = solution.style.display === 'none';
      solution.style.display = isHidden ? 'block' : 'none';
      button.textContent = isHidden ? 'Hide Solution' : 'Reveal Solution';
    });
  });
</script>
