---
title: Motion in One Dimension
permalink: /motion-1d/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">Welcome to Motion in One Dimension! This section explores how objects move in a straight line, covering essential concepts like displacement, velocity, and acceleration.</p>

<figure class="concept-figure small-image">
  <img
    src="/assets/images/motion-1d/pexels-agang08-10652773.jpg"
    alt="Passenger train moving along straight railroad tracks in an open landscape."
    loading="lazy"
  />
  <figcaption>
    A train’s motion along a straight track is a classic example of one-dimensional motion, where position, velocity, and acceleration all occur along a single line.
  </figcaption>
</figure>

<hr>

## Core Concepts

<p>Understand the fundamental ideas of motion in a straight line. Click on a concept to learn more and find related skills and problems.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "motion-1d" | sort: "order" %}
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
<p>Learn the step-by-step methods for solving problems related to motion in one dimension.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "motion-1d" | sort: "title" %}
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
  {% assign topic_problems = site.problems | where: "topic", "motion-1d" | sort: "title" %}
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