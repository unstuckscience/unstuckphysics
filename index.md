---
layout: single
classes: wide
---

<div class="feature__wrapper">
  <div class="feature__header">
    <h1>Feeling Stuck on Physics?</h1>
    <p class="subtitle">You're in the right place. Select a topic below to find clear explanations, short videos, and the specific skills you need to succeed.</p>
  </div>
</div>

<div class="feature__wrapper">
  <div class="feature__list">
    {% for topic in site.topics %}
      <div class="feature__item">
        <div class="archive__item">
          <div class="archive__item-body">
            <h2 class="archive__item-title">
              <a href="{{ topic.url | relative_url }}" rel="permalink">{{ topic.title }}</a>
            </h2>
            <div class="archive__item-excerpt">
              <p>{{ topic.description }}</p>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
