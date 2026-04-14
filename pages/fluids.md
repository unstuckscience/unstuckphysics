---
title: Fluids
permalink: /fluids/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">Welcome to Fluids! This section covers the mechanics of liquids and gases, focusing on how pressure, density, and flow govern everything from the buoyancy of a ship to the lift on an airplane wing.</p>

<figure class="concept-figure small-image">
  <img
    src="/assets/images/fluids/water-surface-tension.jpg" 
    alt="A water strider resting on the surface of a pond, demonstrating fluid properties and surface tension"
    loading="lazy"
  />
  <figcaption>
    Fluid mechanics bridges the gap between static forces and dynamic motion, exploring how substances that flow respond to external forces and internal pressure.
  </figcaption>
</figure>



<hr>

## Core Concepts

<p>Understand the physical principles behind fluid statics and dynamics. Click on a concept to learn more and find related skills and problems.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "fluids" | sort: "order" %}
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
<p>Master the techniques for solving problems involving buoyancy, fluid flow rates, and Bernoulli's equation.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "fluids" | sort: "title" %}
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
<p>Apply your knowledge of fluid mechanics to real-world scenarios, from pipe flow to atmospheric pressure.</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "fluids" | sort: "title" %}
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