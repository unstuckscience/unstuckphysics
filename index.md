---
title: Unstuck Physics - Your Guide to Mastering Physics
summary: Clear explanations, essential skills, and practice problems to help you overcome confusion and excel in physics.
permalink: /
layout: splash
---

<div class="homepage-hero-lead">
  <div class="hero-content">
    <img src="/assets/images/logo.png" alt="Unstuck Physics Logo" class="hero-logo">
    <div>
      <p class="lead">Feeling lost or overwhelmed by physics? You're not alone, and you're in the right place.</p>
      <p>Unstuck Physics is designed to cut through the confusion and provide you with clear, direct, and actionable resources. We break down complex topics, build essential problem-solving skills, and offer targeted practice to help you truly understand physics, one step at a time.</p>
    </div>
  </div>
</div>

<div class="work-in-progress-banner" style="background-color: #ffc107; color: #333; padding: 10px 20px; text-align: center; font-weight: bold; margin-bottom: 20px; border-radius: 5px;">
  This website is under active development! It's being collaboratively built and enhanced by a small group of physics classes in a Massachusetts high school throughout the 2025-2026 school year. Expect regular updates! 🚀
</div>


<hr>

<h2 class="text-center">Start Your Journey: Explore Physics Topics</h2>
<p class="text-center">Click on a topic below to find concepts, skills, and practice problems designed to help you get unstuck.</p>

<div class="topic-grid">
  {% assign topics = site.data.topics %}
  {% for topic in topics %}
    <div class="topic-card">
      <a href="/{{ topic.slug }}/" rel="permalink" aria-label="Explore {{ topic.title }}">
        <div class="topic-icon">{% if topic.icon contains 'fa-' %}<i class="{{ topic.icon }}"></i>{% else %}{{ topic.icon }}{% endif %}</div>
        <strong>{{ topic.title }}</strong>
      </a>
    </div>
  {% endfor %}
</div>

<div style="background-color: #fff3cd; border-left: 4px solid #ffeeba; padding: 1rem; margin: 1.5rem 0; border-radius: 5px;">
    <p style="font-weight: bold; margin-bottom: 0.5rem; color: #856404;">Important Disclaimer:</p>
    <p style="font-size: 0.9em; color: #856404; margin-bottom: 0;">The content on Unstuck Physics is provided for educational and informational purposes only. While we strive for accuracy, it is not intended to be a substitute for professional instruction, formal coursework, or practical experience. Always consult with qualified educators or professionals for specific advice or applications. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. For full details on website usage and intellectual property, please refer to our <a href="{{ '/terms/' | relative_url }}" style="color: #0056b3; text-decoration: underline;">Terms & Conditions</a> and <a href="{{ '/privacy/' | relative_url }}" style="color: #0056b3; text-decoration: underline;">Privacy Policy</a>.</p>
</div>