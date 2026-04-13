---
title: Waves & Sound
summary: Investigate the nature of mechanical waves, the physics of vibration, and the unique properties of sound.
permalink: waves-sound/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">How does energy travel through a medium? This section explores the mechanics of wave motion, from ripples on a pond to the complex harmonics of musical instruments and the Doppler effect.</p>

<hr>

## Core Concepts

<p>Understand the difference between transverse and longitudinal waves, the anatomy of a wave, and the principles of superposition and interference. Click on a concept to explore further.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "waves-sound" | sort: "order" %}
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

<p>Master the wave equation, calculate the speed of sound in various media, and determine resonant frequencies for standing waves in strings and air columns.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "waves-sound" | sort: "title" %}
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

<p>Apply your understanding of frequency, period, and intensity to solve problems involving wave speed, acoustics, and harmonic motion.</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "waves-sound" | sort: "title" %}
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