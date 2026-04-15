---
title: Electrostatics
permalink: /electrostatics/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">Welcome to Electrostatics! This section explores the physics of stationary electric charges, the forces they exert on one another, and the invisible fields they create in the space around them.</p>

<figure class="concept-figure small-image">
  <img
    src="/assets/images/electrostatics/static.jpg"
    alt="A glass plasma globe with purple and blue light filaments reaching toward a person's hands."
    loading="lazy"
  />
  <figcaption>
    Electrostatics is the study of electric charges that stay in one place or move slowly. Inside this ball, electricity is trying to reach the ground. When you touch the glass, the colorful light beams move toward your fingers!
  </figcaption>
</figure>

<hr>

## Core Concepts

<p>Understand the fundamental ideas that underpin the study of static electricity. Click on a concept to learn more and find related skills and problems.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "electrostatics" | sort: "order" %}
  {% if topic_concepts.size > 0 %}
    {% for concept in topic_concepts %}
      <li>
        <a href="{{ concept.url | relative_url }}" rel="permalink" aria-label="Explore {{ concept.title }}">
          <strong>{{ concept.title }}</strong>
        </a>
      </li>
    {% endfor %}
  {% else %}
    <p>No concepts found for this topic yet. Check back soon!</p>
  {% endif %}
</ul>

<hr>
## Essential Skills
<p>Learn the step-by-step methods for calculating electric forces, field strengths, and potential energy.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "electrostatics" | sort: "title" %}
  {% if topic_skills.size > 0 %}
    {% for skill in topic_skills %}
      <li>
        <a href="{{ skill.url | relative_url }}" rel="permalink" aria-label="Learn {{ skill.title }}">
          <strong>{{ skill.title }}</strong>
        </a>
      </li>
    {% endfor %}
  {% else %}
    <p>No skills found for this topic yet. Check back soon!</p>
  {% endif %}
</ul>

<hr>
## Practice Problems
<p>Test your understanding of charge interactions and field mapping with these problems.</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "electrostatics" | sort: "title" %}
  {% if topic_problems.size > 0 %}
    {% for problem in topic_problems %}
      <li>
        <a href="{{ problem.url | relative_url }}" rel="permalink" aria-label="Practice {{ problem.title }}">
          <strong>{{ problem.title }}</strong>
        </a>
      </li>
    {% endfor %}
  {% else %}
    <p>No problems found for this topic yet. Check back soon!</p>
  {% endif %}
</ul>