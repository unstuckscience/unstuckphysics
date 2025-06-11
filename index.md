---
layout: default
title: Explore Topics
permalink: /topics/
---

<h1>Physics Topics</h1>

<input type="text" id="search-box" placeholder="Search topics..." onkeyup="filterTopics()" style="width: 100%; padding: 0.5em; font-size: 1em; margin-bottom: 1.5em;">

<div class="cards-grid" id="topics-list">

  <a href="/problems/mechanics/" class="card">
    <img src="/assets/images/mechanics.png" alt="Mechanics">
    <h2>Mechanics</h2>
    <p>Motion, forces, energy, and Newton’s laws.</p>
  </a>

  <a href="/problems/electricity/" class="card">
    <img src="/assets/images/electricity.png" alt="Electricity">
    <h2>Electricity</h2>
    <p>Circuits, current, voltage, and resistance.</p>
  </a>

  <a href="/problems/magnetism/" class="card">
    <img src="/assets/images/magnetism.png" alt="Magnetism">
    <h2>Magnetism</h2>
    <p>Fields, forces, and electromagnetic interactions.</p>
  </a>

  <a href="/problems/waves/" class="card">
    <img src="/assets/images/waves.png" alt="Waves">
    <h2>Waves</h2>
    <p>Oscillations, sound, light, and interference.</p>
  </a>

  <a href="/problems/thermodynamics/" class="card">
    <img src="/assets/images/thermo.png" alt="Thermodynamics">
    <h2>Thermodynamics</h2>
    <p>Heat, energy transfer, and entropy.</p>
  </a>

</div>

<script>
function filterTopics() {
  const input = document.getElementById("search-box").value.toLowerCase();
  const cards = document.querySelectorAll("#topics-list .card");
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "" : "none";
  });
}
</script>

<style>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5em;
}
.card {
  display: block;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  background: white;
}
.card:hover {
  transform: translateY(-5px);
}
.card img {
  max-width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 0.5em;
}
.card h2 {
  margin-top: 0.5em;
}
</style>
