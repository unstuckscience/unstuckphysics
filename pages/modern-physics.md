---
title: Modern Physics
permalink: /modern-physics/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">Welcome to Modern Physics! This section ventures beyond the classical world to explore the revolutionary ideas of the 20th century, including relativity, quantum mechanics, and the strange behavior of matter at the atomic and subatomic scales.</p>

<div class="coming-soon-banner" role="status">
  🚧 Modern Physics content is currently in development. Full lessons, skills, and problems will roll out during the 2026–2027 school year.
</div>

<figure class="concept-figure small-image">
  <img
    src="/assets/images/modern-physics/pexels-piebat-806763.jpg"
    alt="A giant, complex machine inside a laboratory used for physics experiments."
    loading="lazy"
  />
  <figcaption>
    Modern physics uses giant machines called particle accelerators to study the smallest pieces of the universe. By crashing tiny particles together, scientists can learn how gravity, light, and matter all work together.
  </figcaption>
</figure>

<hr>

## Core Concepts

<p>Understand the theories that redefined our reality. Click on a concept to learn more and find related skills and problems.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "modern" | sort: "order" %}
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
<p>Learn the mathematical tools for calculating time dilation, photon energy, and nuclear binding energy.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "modern" | sort: "title" %}
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
<p>Test your grasp of the quantum and relativistic world with problems on the photoelectric effect and E=mc².</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "modern" | sort: "title" %}
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