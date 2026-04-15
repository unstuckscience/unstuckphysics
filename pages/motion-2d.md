---
title: Motion in Two Dimensions
permalink: /motion-2d/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">Welcome to Motion in Two Dimensions! This section explores how objects move in a plane, covering essential concepts like vectors, projectile motion, and uniform circular motion.</p>

<figure class="concept-figure small-image">
  <img
    src="/assets/images/motion-2d/two_dimensions.jpg"
    alt="A close-up of a soccer player's legs kicking a ball into the air."
    loading="lazy"
  />
  <figcaption>
    When you kick a soccer ball into the air, it moves in two ways at the same time. It moves forward across the field and upward into the sky. This is called two-dimensional motion.
  </figcaption>
</figure>

<hr>

## Core Concepts

<p>Understand the fundamental ideas of motion in a plane. Click on a concept to learn more and find related skills and problems.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "motion-2d" | sort: "order" %}
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
<p>Learn the step-by-step methods for solving problems related to motion in two dimensions.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "motion-2d" | sort: "title" %}
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
<p>Test your understanding and apply what you've learned with these problems.</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "motion-2d" | sort: "title" %}
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