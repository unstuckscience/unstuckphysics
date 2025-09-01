---
title: 🎯 Judging Accuracy and Precision
summary: Learn how to tell if your measurements are close to the truth, consistent, or both.
permalink: /skills/intro/judge-accuracy-precision/
layout: single
collection: skills
topic: intro
tags: [precision, accuracy, measurements, data-analysis, errors]
order: 3
sidebar:
  nav: intro-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
related_concept: accuracy-vs-precision
---

<p class="lead" markdown="1" style="border-left: 4px solid #B22222; padding-left: 1rem;">
In science, judging the quality of your measurements is a critical skill. This guide will teach you how to check if your numbers are **accurate** (close to the true answer) and **precise** (close to each other).
</p>

---

## **How to Judge Accuracy and Precision**

Use these two calculations to decide if your measurements are good.

### **Step 1: Judge Accuracy with Percent Error**

Percent error is a number that tells you exactly how close your measurements are to the true value. The smaller the percent error, the more accurate your measurements are.

To find it, you need a known **true value** to compare your measurements against.

$$ \text{Percent Error} = \frac{|Experimental - True|}{True} \times 100\% $$

Note the absolute value signs are there so that your answer is always positive.

---

### **Step 2: Judge Precision with Range**

Precision tells you how consistent your measurements are with each other. The smaller the range, the more precise your measurements are.

The simplest way to calculate precision is to find the **range**, which is the difference between the highest and lowest measurements in your data set.

$$ \text{Range} = \text{Highest Value} - \text{Lowest Value} $$

#### **For Advanced Students: Use Standard Deviation**

<div style="margin-top: 1.5rem; text-align: center;">
    <button id="advanced-toggle" class="interactive-button btn-blue">Show Standard Deviation</button>
</div>

<div id="advanced-section" style="display: none; margin-top: 1.5rem;">
    While the range is a quick way to check precision, standard deviation is a much more accurate measure. It considers every data point in your set, not just the two extremes, to give you a more reliable picture of the data's spread. A smaller standard deviation means higher precision.

    The formula is:

    $$ s = \sqrt{\frac{\sum_{i=1}^N (x_i - \bar{x})^2}{N-1}} $$

    <ul>$s$: The standard deviation.</ul>
    <ul>$x_i$: Each individual measurement in your data set.</ul>
    <ul>$\bar{x}$: The average (mean) of all your measurements.</ul>
    <ul>$N$: The total number of measurements.</ul>

    Example: Using the data (9.85 g, 10.15 g, 9.95 g), the average is $9.98 \text{ g}$. The standard deviation is calculated as:

    $$ s = \sqrt{\frac{(9.85 - 9.98)^2 + (10.15 - 9.98)^2 + (9.95 - 9.98)^2}{3-1}} $$

    $$ s = \sqrt{\frac{0.0169 + 0.0289 + 0.0009}{2}} \approx 0.15 \text{ g} $$
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('advanced-toggle');
    const advancedSection = document.getElementById('advanced-section');

    if (toggleButton && advancedSection) {
        toggleButton.addEventListener('click', () => {
            const isVisible = advancedSection.style.display === 'block';
            advancedSection.style.display = isVisible ? 'none' : 'block';
            toggleButton.textContent = isVisible ? 'Show Standard Deviation' : 'Hide Standard Deviation';
        });
    }
});
</script>

<script src="/assets/js/intro/accuracy-precision-skill-animator.js"></script>

---

## **Key Takeaways**

* **Accuracy vs. Precision:** Accuracy is about being **right**, while precision is about being **consistent**.
* **The Power of Numbers:** Percent error gives you a precise number for accuracy, and the range gives you a number for precision. These numbers remove all guesswork.
* **You Can't Judge from One:** You can't assess precision from a single measurement. You need to measure something several times.

---

## **Related Concepts & Skills**

* <a href="{{ '/concepts/intro/accuracy-vs-precision/' | relative_url }}">Accuracy vs. Precision (Concept)</a>

<hr>

## **Practice Problems**

Test your understanding with these problems:

<ul>
  {%- assign current_skill_permalink = page.permalink -%}
  {%- assign related_problems = site.problems | where: "topic", page.topic | where: "related_skill", current_skill_permalink | sort: "order" -%}
  {%- if related_problems.size > 0 -%}
    {%- for problem in related_problems -%}
      <li><a href="{{- problem.url | relative_url -}}"><strong>{{- problem.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No specific practice problems for judging accuracy and precision have been added yet.</li>
    <li><a href="/problems/accuracy-precision-beginner/"><strong>Accuracy and Precision Problems (Beginner)</strong></a></li>
    <li><a href="/problems/accuracy-precision-intermediate/"><strong>Accuracy and Precision Problems (Intermediate)</strong></a></li>
    <li><a href="/problems/accuracy-precision-challenging/"><strong>Accuracy and Precision Problems (Challenging)</strong></a></li>
  {%- endif -%}
</ul>