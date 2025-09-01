---
title: Forces
layout: collection
permalink: /forces/
collection: concepts
entries_layout: list
sort_by: order
sort_order: asc
sidebar:
  nav: physics # CORRECTED: To match top-level navigation like motion-1d.md
---

<p class="lead">Forces are pushes or pulls that can change an object's motion. They are fundamental to understanding how everything in the universe interacts, from the smallest particles to the largest galaxies.</p>

---

## **Concepts in Forces**

Explore the fundamental ideas behind forces and their effects on objects.

{% assign forces_concepts = site.concepts | where: "topic", "forces" | sort: "order" %}
{% if forces_concepts.size > 0 %}
<ul class="concepts-list">
  {% for concept in forces_concepts %}
    <li>
      <a href="{{ concept.url | relative_url }}">
        <strong>{{ concept.title }}</strong>
      </a>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No concepts found for Forces yet. As new concepts are added, they will appear here!</p>
{% endif %}

---

## **Related Skills**

Put your understanding of forces into practice with these skills.

{% assign forces_skills = site.skills | where: "topic", "forces" | sort: "title" %}
{% if forces_skills.size > 0 %}
<ul class="skills-list">
  {% for skill in forces_skills %}
    <li><a href="{{ skill.url | relative_url }}"><strong>{{ skill.title }}</strong></a></li>
  {% endfor %}
</ul>
{% else %}
<p>No skills specifically related to Forces have been added yet.</p>
{% endif %}

---

<h2>Practice Problems</h2>
<p>Test your knowledge and apply force principles with these problems.</p>

{% assign forces_problems = site.problems | where: "topic", "forces" | sort: "title" %}
{% if forces_problems.size > 0 %}
<ul class="problems-list">
  {% for problem in forces_problems %}
    <li><a href="{{ problem.url | relative_url }}"><strong>{{ problem.title }}</strong></a></li>
  {% endfor %}
</ul>
{% else %}
<p>No practice problems for Forces have been added yet.</p>
{% endif %}