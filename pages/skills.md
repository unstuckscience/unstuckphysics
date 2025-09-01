---
title: Physics Skills
layout: archive
permalink: /skills/
sidebar:
  nav: physics
---

{% assign sorted = site.skills | sort: "topic" %}
{% assign topics = sorted | map: "topic" | uniq %}

{% for topic in topics %}
  <h2 id="{{ topic }}">{{ topic | capitalize }}</h2>
  <ul>
    {% for item in sorted %}
      {% if item.topic == topic %}
        <li><a href="{{ item.url }}">{{ item.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
{% endfor %}