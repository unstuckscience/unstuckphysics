---
title: Rotational Motion & Torque
summary: Explore the physics of spinning objects, from angular displacement to the balancing act of torques.
permalink: rotational-motion/
layout: archive
entries_layout: list
classes: wide
sidebar:
  nav: physics
---

<p class="lead">Why is it easier to open a door from the handle than the hinge? This section translates the laws of linear motion into the world of rotation, covering angular kinematics, moment of inertia, and the turning forces known as torque.</p>

<figure class="concept-figure small-image">
  <img
    src="/assets/images/rotational-motion/rotation.jpg"
    alt="A close-up of a car wheel spinning quickly while driving down a road."
    loading="lazy"
  />
  <figcaption>
    Rotational motion is when an object spins around a center point, like this car wheel. To make the wheel start spinning or stop, a twisting force called torque is used.
  </figcaption>
</figure>

<hr>

## Core Concepts

<p>Understand angular variables, rotational kinetic energy, and how torque causes angular acceleration. Click on a concept to explore the mechanics of rotation.</p>

<ul>
  {% assign topic_concepts = site.concepts | where: "topic", "rotational-motion" | sort: "order" %}
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

<p>Master the conversion between linear and angular quantities, calculate net torque, and apply the principles of angular momentum conservation to spinning systems.</p>
<ul>
  {% assign topic_skills = site.skills | where: "topic", "rotational-motion" | sort: "title" %}
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

<p>Challenge yourself with problems involving rolling motion, pulley systems with mass, and the equilibrium of rigid bodies.</p>
<ul>
  {% assign topic_problems = site.problems | where: "topic", "rotational-motion" | sort: "title" %}
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