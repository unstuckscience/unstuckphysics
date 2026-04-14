---
title: Electric Circuits
permalink: /circuits/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">Welcome to Electric Circuits! This section explores how energy is transported through conductors, the relationship between voltage, current, and resistance, and the logic of series and parallel networks.</p>

<figure class="concept-figure small-image">
  <img
    src="/assets/images/circuits/circuit-board-macro.jpg" 
    alt="A close-up of a circuit board showing resistors, capacitors, and conductive traces"
    loading="lazy"
  />
  <figcaption>
    Electric circuits are the pathways that allow us to harness electrical energy to do work, from lighting a bulb to powering a supercomputer.
  </figcaption>
</figure>



[Image of a simple electric circuit with a battery, switch, and light bulb]


<hr>

## Core Concepts

<p>Understand the physical laws that govern the flow of electricity. Click on a concept to learn more and find related skills and problems.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "circuits" | sort: "order" %}
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
<p>Learn the techniques for analyzing complex circuits, including Ohm's Law and Kirchhoff's Rules.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "circuits" | sort: "title" %}
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
<p>Test your ability to calculate equivalent resistance, power dissipation, and branch currents.</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "circuits" | sort: "title" %}
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