---
title: Work & Energy
summary: Explore how forces transfer energy and the laws that govern how energy is conserved and transformed.
permalink: work-energy/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">Energy is the currency of the universe. This section covers the principles of work, mechanical energy, and power, providing the framework to analyze how systems change through interactions without always needing to track every individual force.</p>

<figure class="concept-figure small-image">
  <img
    src="/assets/images/work-energy/energy.jpg"
    alt="A person throwing a blue bowling ball down a lane toward pins."
    loading="lazy"
  />
  <figcaption>
    When you throw a bowling ball, you give it energy. This is called kinetic energy, or the energy of motion. The ball uses this energy to travel down the lane and knock over the pins.
  </figcaption>
</figure>

<hr>

## Core Concepts

<p>Understand the fundamental definitions of work, the various forms of potential and kinetic energy, and the Law of Conservation of Energy. Click on a concept to learn more.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "work-energy" | sort: "order" %}
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

<p>Master the step-by-step methods for calculating work done by constant and varying forces, solving conservation of energy problems, and determining power output.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "work-energy" | sort: "title" %}
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

<p>Apply your understanding of work-energy theorems and conservation laws to various physical scenarios and challenges.</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "work-energy" | sort: "title" %}
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