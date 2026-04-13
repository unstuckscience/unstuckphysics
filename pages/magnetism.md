---
title: Magnetism
summary: Discover the invisible forces of magnetic fields and how they interact with moving charges and electricity.
permalink: magnetism/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">From the compass needle to the most advanced MRI machines, magnetism is a fundamental force that shapes our world. This section explores magnetic fields, the forces exerted on moving charges, and the fascinating relationship between electricity and magnetism.</p>

<hr>

## Core Concepts

<p>Explore the nature of magnetic poles, field lines, and the behavior of magnetic materials. Click on a concept to dive deeper into the theory.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "magnetism" | sort: "order" %}
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

<p>Learn to apply the Right-Hand Rules, calculate magnetic forces on particles and wires, and understand the principles of induction and flux.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "magnetism" | sort: "title" %}
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

<p>Challenge yourself with problems ranging from basic field interactions to complex electromagnetic induction scenarios.</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "magnetism" | sort: "title" %}
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