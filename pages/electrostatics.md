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
    src="/assets/images/electrostatics/static-electricity-demo.jpg" 
    alt="A Van de Graaff generator making hair stand up to demonstrate electrostatic repulsion"
    loading="lazy"
  />
  <figcaption>
    Electrostatics investigates how excess charge creates forces of attraction and repulsion, fundamentally shaping the behavior of matter at the atomic level.
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