---
title: 📘 Sig Figs in Multiplication and Division
summary: Apply significant figure rules to multiplication and division.
layout: single
collection: concepts
permalink: /concepts/intro/sig-fig-mult-divide/
topic: intro
tags: [sig figs, math operations]
order: 7
sidebar:
  nav: intro-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
When you multiply or divide measurements, the rules for significant figures are different from adding or subtracting. Here, we focus on the total number of significant figures in your starting numbers.
</p>

## **The Rule for Multiplying and Dividing**

When you multiply or divide numbers from measurements, your final answer can only be as exact as your least exact starting number.

Here's the simple rule:

Your final answer should have the same number of significant figures as the original measurement that had the **FEWEST significant figures**.

Let's break it down:

1.  **Do the Math:** First, multiply or divide your numbers just like normal. Write down the full answer your calculator gives you (your "raw answer").
2.  **Count Sig Figs in Each Original Number:** For each number you started with, count how many significant figures it has.
3.  **Find the Smallest Count:** Look at all the counts from Step 2. Which number had the smallest number of significant figures? This is your "limiting number."
4.  **Round Your Final Answer:** Round your raw answer (from Step 1) so it has the same number of significant figures as your "limiting number" (from Step 3).

---

## **Examples**

Let's see how this rule works with some examples.

### Example 1: Multiplication

**Problem:** Multiply 2.5 m by 4.15 s.

**Solution:**

1.  **Do the Math:**
    $$ 2.5 \times 4.15 = 10.375 $$
    (raw answer)

2.  **Count Sig Figs in Each Original Number:**
    * 2.5 has 2 significant figures.
    * 4.15 has 3 significant figures.

3.  **Find the Smallest Count:** The smallest count is 2 (from 2.5). This means our final answer must have 2 significant figures.

4.  **Round Your Final Answer:**
    Round 10.375 to 2 significant figures.
    **Final Answer:** 10. m·s (or $1.0 \times 10^1 \text{ m} \cdot \text{s}$ for extra clarity).

### Example 2: Division

**Problem:** Divide 125.0 g by 5.0 mL.

**Solution:**

1.  **Do the Math:**
    $$ \frac{125.0}{5.0} = 25 $$
    (raw answer)

2.  **Count Sig Figs in Each Original Number:**
    * 125.0 has 4 significant figures.
    * 5.0 has 2 significant figures.

3.  **Find the Smallest Count:** The smallest count is 2 (from 5.0). Our final answer must have 2 significant figures.

4.  **Round Your Final Answer:**
    Round 25 to 2 significant figures.
    **Final Answer:** 25 g/mL

---

## **Why This Rule Matters**

This rule makes sure your answer doesn't look more exact than the numbers you started with. You can't magically get more precision just by multiplying or dividing! Your answer should always reflect the precision of your least precise starting measurement.

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of significant figures in multiplication and division.</p>
<audio controls class="audio-player" aria-label="Audio summary of significant figures in multiplication and division">
  <source src="/assets/audio/intro/sig-fig-mult-divide-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% include quick-concept-question.html
  question="When multiplying two measurements, one with 3 significant figures and one with 5 significant figures, how many significant figures should your final answer have, and why?"
  answer="Your final answer should have 3 significant figures. In multiplication (and division), the result must be rounded to match the number of significant figures in the least precise measurement (the one with the fewest significant figures). In this case, 3 is fewer than 5."
%}

---

## **Related Skills**

Ready to apply these rules? Learn the steps and see worked examples on these related skills pages:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    {# Example placeholder for a skill you might create: #}
    <li><a href="/skills/performing-mult-divide-sig-figs/"><strong>Performing Multiplication/Division with Sig Figs</strong></a></li>
  {%- endif -%}
</ul>

<hr>

<h2>Practice Problems</h2>
<p>Test your understanding with these problems:</p>
<ul>
  {%- assign related_problems = site.problems | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_problems.size > 0 -%}
    {%- for problem in related_problems -%}
      <li><a href="{{- problem.url | relative_url -}}"><strong>{{- problem.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No practice problems for this concept have been added yet.</li>
    {# Example placeholder for a problem you might create: #}
    <li><a href="/problems/sig-fig-mult-divide-practice/"><strong>Sig Fig Multiplication/Division Practice</strong></a></li>
  {%- endif -%}
</ul>