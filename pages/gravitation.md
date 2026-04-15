---
title: Gravitation and Planetary Motion
permalink: /gravitation/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">Explore the fundamental forces that govern the cosmos! This section covers Newton's Law of Universal Gravitation, Kepler's Laws of Planetary Motion, and the dynamics of satellite orbits.</p>

<figure class="concept-figure small-image">
  <img
    src="/assets/images/gravitation/planetary-motion.jpg"
    alt="A depiction of a solar system, with a glowing central star and several planets of different sizes and rings in orbit against a starry background."
    loading="lazy"
  />
  <figcaption>
    A force called gravity acts like an invisible string that keeps planets from floating away. This same force is responsible for the paths (or orbits) all the planets follow around their star.
  </figcaption>
</figure>

<hr>

## Core Concepts

<p>Understand the fundamental ideas of gravitational attraction and orbital mechanics. Click on a concept to learn more and find related skills and problems.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "gravitation" | sort: "order" %}
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

<p>Learn the step-by-step methods for calculating gravitational fields, orbital velocities, and escape speeds.</p>

<ul>
  {% assign topic_skills = site.skills | where: "topic", "gravitation" | sort: "title" %}
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

<p>Test your understanding of the heavens and apply your knowledge to solve real-world orbital mechanics problems.</p>

<ul>
  {% assign topic_problems = site.problems | where: "topic", "gravitation" | sort: "title" %}
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