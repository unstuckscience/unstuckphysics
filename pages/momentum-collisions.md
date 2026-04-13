---
title: Momentum & Collisions
summary: Learn about the 'quantity of motion' and how it behaves in impacts and explosions.
permalink: momentum-collisions/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">What happens when things crash or explode? Momentum is the key. This section focuses on understanding collisions and impulses, providing clear methods to analyze interactions where objects push off or hit each other.</p>

<hr>

## Core Concepts

<p>Understand the fundamental principles of momentum, impulse, and the laws governing conservation during interactions. Click on a concept to learn more and find related skills and problems.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "momentum-collisions" | sort: "order" %}
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

<p>Learn the step-by-step methods for analyzing collisions, calculating impulse, and applying conservation laws to physical systems.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "momentum-collisions" | sort: "title" %}
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
  {% assign topic_problems = site.problems | where: "topic", "momentum-collisions" | sort: "title" %}
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