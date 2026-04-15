---
title: Thermodynamics
permalink: /thermodynamics/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">Welcome to Thermodynamics! This section explores the laws governing heat, energy, and work, focusing on how thermal energy is transferred and transformed between systems and their surroundings.</p>

<div class="coming-soon-banner" role="status">
  🚧 Thermodynamics content is currently in development. Full lessons, skills, and problems will roll out during the 2026–2027 school year.
</div>

<figure class="concept-figure small-image">
  <img
    src="/assets/images/thermodynamics/thermo.jpg"
    alt="A glass thermometer showing a temperature reading against a bright blue background."
    loading="lazy"
  />
  <figcaption>
    Thermodynamics is the study of heat and energy. A thermometer works because heat makes things expand. When the liquid inside gets warmer, it takes up more space and moves up the tube to show a higher temperature.
  </figcaption>
</figure>

<hr>

## Core Concepts

<p>Understand the fundamental laws of nature that dictate energy flow and entropy. Click on a concept to learn more and find related skills and problems.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "thermodynamics" | sort: "order" %}
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
<p>Learn how to calculate specific heat, analyze P-V diagrams, and determine the efficiency of heat engines.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "thermodynamics" | sort: "title" %}
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
<p>Challenge your understanding with problems on calorimetry, isothermal and adiabatic processes, and the second law.</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "thermodynamics" | sort: "title" %}
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