---
title: Electricity
summary: Explore the behavior of electric charges, the flow of current, and the principles governing DC circuits.
permalink: electricity/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">Electricity is the backbone of modern technology. This section moves from the fundamental nature of electric charges and fields to the practical application of Ohm's Law and the analysis of complex circuits.</p>

<hr>

## Core Concepts

<p>Understand the foundations of electrostatics, electric potential, and the relationship between current, voltage, and resistance. Click on a concept to explore the theory.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "electricity" | sort: "order" %}
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

<p>Master the techniques for calculating equivalent resistance, analyzing series and parallel circuits, and applying Kirchhoff’s Laws to solve for unknown values.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "electricity" | sort: "title" %}
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

<p>Put your knowledge to the test with problems ranging from simple static charge interactions to intricate circuit configurations.</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "electricity" | sort: "title" %}
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