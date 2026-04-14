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

<figure class="concept-figure small-image">
  <img
    src="/assets/images/thermodynamics/steam-engine-piston.jpg" 
    alt="A cross-section of a steam engine piston demonstrating the conversion of thermal energy into mechanical work"
    loading="lazy"
  />
  <figcaption>
    Thermodynamics provides the framework for understanding how heat energy can be harnessed to perform useful work and why some energy is always "lost" to the environment.
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