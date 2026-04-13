---
title: Light & Optics
summary: Study the behavior of light, from the fundamental nature of electromagnetic waves to the geometry of mirrors and lenses.
permalink: light-optics/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">How do we see the world? This section explores the dual nature of light and the mathematical principles of reflection and refraction that allow us to design everything from eyeglasses to telescopes.</p>

<hr>

## Core Concepts

<p>Understand the wave and particle nature of light, the electromagnetic spectrum, and the laws of reflection and refraction. Click on a concept to explore the theory.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "light-optics" | sort: "order" %}
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

<p>Master ray tracing for mirrors and lenses, calculate image characteristics using the mirror/lens equations, and apply Snell's Law to analyze light passing through different media.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "light-optics" | sort: "title" %}
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

<p>Challenge yourself with problems involving focal lengths, magnification, interference patterns, and the physics of color.</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "light-optics" | sort: "title" %}
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