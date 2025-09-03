---
title: 📘 Sig Figs in Addition and Subtraction
summary: Apply significant figure rules to addition and subtraction.
layout: single
collection: concepts
permalink: /concepts/intro/sig-fig-add-subtract/
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
When you add or subtract measurements, significant figures follow a different rule than multiplying or dividing. For adding and subtracting, it's all about decimal places!
</p>

---

## **The Rule for Adding and Subtracting**

When you add or subtract numbers from measurements, your final answer can only be as exact as the measurement that has the *least* number of decimal places.

Here's how to apply it:

1.  **Do the Math:** First, add or subtract your numbers just like normal. Write down the full answer your calculator gives you (your "raw answer").
2.  **Count Decimal Places in Each Original Number:** For each number you started with, count how many digits it has *after the decimal point*.
3.  **Find the Smallest Count:** Look at all the counts from Step 2. Which number had the *fewest* decimal places? This is your "limiting number."
4.  **Round Your Final Answer:** Round your raw answer (from Step 1) so it has the **same number of decimal places** as your "limiting number" (from Step 3).

---

### Example 1: Addition

**Problem:** Add `5.24 m` and `0.003 m`.

**Solution:**

1.  **Do the Math:**
    $$ 5.24 + 0.003 = 5.243 $$
    (raw answer)

2.  **Count Decimal Places in Each Original Number:**
    * `5.24` has **2** decimal places.
    * `0.003` has **3** decimal places.

3.  **Find the Smallest Count:** The smallest count is **2** (from `5.24`). Our final answer must have 2 decimal places.

4.  **Round Your Final Answer:**
    Round `5.243` to 2 decimal places.
    **Final Answer:** `5.24 m`

### Example 2: Subtraction

**Problem:** Subtract `2.1 kg` from `12.567 kg`.

**Solution:**

1.  **Do the Math:**
    $$ 12.567 - 2.1 = 10.467 $$
    (raw answer)

2.  **Count Decimal Places in Each Original Number:**
    * `12.567` has **3** decimal places.
    * `2.1` has **1** decimal place.

3.  **Find the Smallest Count:** The smallest count is **1** (from `2.1`). Our final answer must have 1 decimal place.

4.  **Round Your Final Answer:**
    Round `10.467` to 1 decimal place.
    **Final Answer:** `10.5 kg`

---

## **Why This Rule Matters**

This rule makes sure your answer doesn't look more exact than the numbers you started with. When you add or subtract, your answer can only be as exact as the number that had the **fewest decimal places** to begin with.

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of significant figures in addition and subtraction.</p>
<audio controls class="audio-player" aria-label="Audio summary of significant figures in addition and subtraction">
  <source src="/assets/audio/intro/sig-fig-add-subtract-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

{% include quick-concept-question.html
  question="When adding two measurements, one ending in the tenths place (e.g., 15.1) and another ending in the thousandths place (e.g., 0.345), to which decimal place should you round your final answer, and why?"
  answer="You should round your final answer to the tenths place. In addition (and subtraction), the result must be rounded to match the measurement with the fewest decimal places. The tenths place (1 decimal place) is less precise than the thousandths place (3 decimal places)."
%}

---

## **Related Skills**

Ready to apply these rules? Learn the steps and see **worked examples** on these related skills pages:

<ul>
  {%- assign related_skills = site.skills | where: "topic", page.topic | where: "related_concept", page.name | sort: "title" -%}
  {%- if related_skills.size > 0 -%}
    {%- for skill in related_skills -%}
      <li><a href="{{- skill.url | relative_url -}}"><strong>{{- skill.title -}}</strong></a></li>
    {%- endfor -%}
  {%- else -%}
    <li>No skills specifically related to this concept have been added yet.</li>
    {# Example placeholder for a skill you might create: #}
    <li><a href="/skills/performing-add-subtract-sig-figs/"><strong>Performing Addition/Subtraction with Sig Figs</strong></a></li>
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
    <li><a href="/problems/sig-fig-add-subtract-practice/"><strong>Sig Fig Addition/Subtraction Practice</strong></a></li>
  {%- endif -%}
</ul>