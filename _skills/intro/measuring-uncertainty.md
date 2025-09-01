---
title: 🎯 Measuring Uncertainty
summary: Learn how to find and use absolute and relative uncertainty to show how much "wiggle room" your measurements have.
permalink: /skills/intro/uncertainty/
layout: single
collection: skills
topic: intro
tags: [uncertainty, precision, data-analysis, error, measurements]
order: 3
sidebar:
  nav: intro-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #B22222; padding-left: 1rem;">
Every measurement you make has some amount of **uncertainty** or "wiggle room." This happens because no tool is perfect. Scientists use two special types of numbers, absolute uncertainty and relative uncertainty, to describe how much doubt is in their data.
</p>

---

## **What is Absolute Uncertainty?**

Absolute uncertainty tells you the possible **range** of your measurement, using the same units. It’s a number you add and subtract from your measurement to show its full range.

With a ruler, there is some uncertainty, or "wiggle room," at both the start and the end of your measurement. This means the uncertainty of the full measurement is equal to the smallest mark you can read. 

* **Example:** You measure a pencil using a ruler with markings every $0.1 \text{ cm}$. Because you have to read both ends of the pencil, the uncertainty for your final measurement is $\pm 0.1 \text{ cm}$.

You would write this measurement as: $15.5 \pm 0.1 \text{ cm}$.

---

## **What is Relative Uncertainty?**

Relative uncertainty gives you the uncertainty as a **percentage**. This is useful because it lets you compare the precision of two very different measurements. A smaller percentage means your measurement is more precise.

To find it, you divide the absolute uncertainty by your measurement and multiply by $100\%$.

$$ \text{Relative Uncertainty} = \frac{\text{Absolute Uncertainty}}{\text{Measured Value}} \times 100\% $$

* **Example:** For the pencil measurement above ($15.5 \pm 0.05 \text{ cm}$), the relative uncertainty is:

    $$ \frac{0.05 \text{ cm}}{15.5 \text{ cm}} \times 100\% \approx 0.32\% $$

This tells you that your measurement is very precise, with only $0.32\%$ of its value being uncertain.

### Why Relative Uncertainty is So Useful

Imagine you also measure a basketball court and find it's $28.0 \pm 0.05 \text{ meters}$.

* The absolute uncertainty ($ \pm 0.05 \text{ m}$) is the same as the pencil's. But is the basketball court measurement as precise?
* Let's check the relative uncertainty:

    $$ \frac{0.05 \text{ m}}{28.0 \text{ m}} \times 100\% \approx 0.18\% $$

The basketball court measurement has a smaller relative uncertainty ($0.18\%$ vs. $0.32\%$), so it is actually more precise!

---

## **Why This Skill Matters**

* **It Shows Trust:** When you report uncertainty, you're being a good scientist. You're showing others how reliable your numbers are.
* **It Connects to Significant Figures:** The number of significant figures in your answer is directly related to your measurement's uncertainty. It's a way of making sure your answer doesn't pretend to be more precise than your tool.