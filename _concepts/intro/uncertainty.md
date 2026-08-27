---
title: 📘 Uncertainty
summary: Learn how to find and use absolute and relative uncertainty to show how much "wiggle room" your measurements have.
permalink: /concepts/intro/uncertainty/
layout: single
collection: concepts
topic: intro
tags: [uncertainty, precision, data-analysis, error, measurements]
order: 4
sidebar:
  nav: intro-concepts
mathjax: true
toc: true
toc_label: "On This Page"
toc_icon: "bars"
toc_sticky: true
toc_levels: 2..3
---

<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">
Every measurement you make has some amount of **uncertainty**. This is a fundamental concept in science and engineering, as it reminds us that no tool is perfect and no measurement can ever be exactly "true." Scientists use absolute and relative uncertainty to quantify this doubt and describe the possible range of a measurement's true value.
</p>

---

## **Audio Explanation**

<p>Prefer to listen? Here's a quick audio summary of uncertainty.</p>
<audio controls class="audio-player" aria-label="Audio summary of uncertainty">
  <source src="/assets/audio/intro/uncertainty-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

---

## **Visual Representation**

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" width="100%" height="auto" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="title desc">
  <title id="title">Measurement of an Object with a Ruler</title>
  <desc id="desc">A clean physics diagram showing a blue rectangular block aligned with the zero mark of a ruler, extending to a length between 7 and 8 centimeters to demonstrate physical measurement.</desc>

  <defs>
    <style>
      .ruler-text {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 14px;
        fill: #2D3748;
        text-anchor: middle;
        font-weight: 500;
      }
      .unit-text {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 13px;
        fill: #718096;
        font-weight: bold;
        letter-spacing: 0.5px;
      }
    </style>
  </defs>

  <rect width="100%" height="100%" fill="#F8FAFC" rx="8" />

  <rect x="60" y="45" width="304" height="45" fill="#3182CE" rx="3" opacity="0.9" stroke="#2B6CB0" stroke-width="2" />

  <rect x="40" y="90" width="420" height="65" fill="#EDF2F7" stroke="#CBD5E0" stroke-width="2" rx="4" />

  <g stroke="#2D3748" stroke-linecap="round">
    <line x1="60" y1="90" x2="60" y2="114" stroke-width="2" />
    <line x1="100" y1="90" x2="100" y2="114" stroke-width="2" />
    <line x1="140" y1="90" x2="140" y2="114" stroke-width="2" />
    <line x1="180" y1="90" x2="180" y2="114" stroke-width="2" />
    <line x1="220" y1="90" x2="220" y2="114" stroke-width="2" />
    <line x1="260" y1="90" x2="260" y2="114" stroke-width="2" />
    <line x1="300" y1="90" x2="300" y2="114" stroke-width="2" />
    <line x1="340" y1="90" x2="340" y2="114" stroke-width="2" />
    <line x1="380" y1="90" x2="380" y2="114" stroke-width="2" />
    <line x1="420" y1="90" x2="420" y2="114" stroke-width="2" />

    <line x1="80" y1="90" x2="80" y2="106" stroke-width="1.5" />
    <line x1="120" y1="90" x2="120" y2="106" stroke-width="1.5" />
    <line x1="160" y1="90" x2="160" y2="106" stroke-width="1.5" />
    <line x1="200" y1="90" x2="200" y2="106" stroke-width="1.5" />
    <line x1="240" y1="90" x2="240" y2="106" stroke-width="1.5" />
    <line x1="280" y1="90" x2="280" y2="106" stroke-width="1.5" />
    <line x1="320" y1="90" x2="320" y2="106" stroke-width="1.5" />
    <line x1="360" y1="90" x2="360" y2="106" stroke-width="1.5" />
    <line x1="400" y1="90" x2="400" y2="106" stroke-width="1.5" />
    <line x1="440" y1="90" x2="440" y2="106" stroke-width="1.5" />

    <line x1="64" y1="90" x2="64" y2="100" stroke-width="1" />
    <line x1="68" y1="90" x2="68" y2="100" stroke-width="1" />
    <line x1="72" y1="90" x2="72" y2="100" stroke-width="1" />
    <line x1="76" y1="90" x2="76" y2="100" stroke-width="1" />
    <line x1="84" y1="90" x2="84" y2="100" stroke-width="1" />
    <line x1="88" y1="90" x2="88" y2="100" stroke-width="1" />
    <line x1="92" y1="90" x2="92" y2="100" stroke-width="1" />
    <line x1="96" y1="90" x2="96" y2="100" stroke-width="1" />

    <line x1="104" y1="90" x2="104" y2="100" stroke-width="1" />
    <line x1="108" y1="90" x2="108" y2="100" stroke-width="1" />
    <line x1="112" y1="90" x2="112" y2="100" stroke-width="1" />
    <line x1="116" y1="90" x2="116" y2="100" stroke-width="1" />
    <line x1="124" y1="90" x2="124" y2="100" stroke-width="1" />
    <line x1="128" y1="90" x2="128" y2="100" stroke-width="1" />
    <line x1="132" y1="90" x2="132" y2="100" stroke-width="1" />
    <line x1="136" y1="90" x2="136" y2="100" stroke-width="1" />

    <line x1="144" y1="90" x2="144" y2="100" stroke-width="1" />
    <line x1="148" y1="90" x2="148" y2="100" stroke-width="1" />
    <line x1="152" y1="90" x2="152" y2="100" stroke-width="1" />
    <line x1="156" y1="90" x2="156" y2="100" stroke-width="1" />
    <line x1="164" y1="90" x2="164" y2="100" stroke-width="1" />
    <line x1="168" y1="90" x2="168" y2="100" stroke-width="1" />
    <line x1="172" y1="90" x2="172" y2="100" stroke-width="1" />
    <line x1="176" y1="90" x2="176" y2="100" stroke-width="1" />

    <line x1="184" y1="90" x2="184" y2="100" stroke-width="1" />
    <line x1="188" y1="90" x2="188" y2="100" stroke-width="1" />
    <line x1="192" y1="90" x2="192" y2="100" stroke-width="1" />
    <line x1="196" y1="90" x2="196" y2="100" stroke-width="1" />
    <line x1="204" y1="90" x2="204" y2="100" stroke-width="1" />
    <line x1="208" y1="90" x2="208" y2="100" stroke-width="1" />
    <line x1="212" y1="90" x2="212" y2="100" stroke-width="1" />
    <line x1="216" y1="90" x2="216" y2="100" stroke-width="1" />

    <line x1="224" y1="90" x2="224" y2="100" stroke-width="1" />
    <line x1="228" y1="90" x2="228" y2="100" stroke-width="1" />
    <line x1="232" y1="90" x2="232" y2="100" stroke-width="1" />
    <line x1="236" y1="90" x2="236" y2="100" stroke-width="1" />
    <line x1="244" y1="90" x2="244" y2="100" stroke-width="1" />
    <line x1="248" y1="90" x2="248" y2="100" stroke-width="1" />
    <line x1="252" y1="90" x2="252" y2="100" stroke-width="1" />
    <line x1="256" y1="90" x2="256" y2="100" stroke-width="1" />

    <line x1="264" y1="90" x2="264" y2="100" stroke-width="1" />
    <line x1="268" y1="90" x2="268" y2="100" stroke-width="1" />
    <line x1="272" y1="90" x2="272" y2="100" stroke-width="1" />
    <line x1="276" y1="90" x2="276" y2="100" stroke-width="1" />
    <line x1="284" y1="90" x2="284" y2="100" stroke-width="1" />
    <line x1="288" y1="90" x2="288" y2="100" stroke-width="1" />
    <line x1="292" y1="90" x2="292" y2="100" stroke-width="1" />
    <line x1="296" y1="90" x2="296" y2="100" stroke-width="1" />

    <line x1="304" y1="90" x2="304" y2="100" stroke-width="1" />
    <line x1="308" y1="90" x2="308" y2="100" stroke-width="1" />
    <line x1="312" y1="90" x2="312" y2="100" stroke-width="1" />
    <line x1="316" y1="90" x2="316" y2="100" stroke-width="1" />
    <line x1="324" y1="90" x2="324" y2="100" stroke-width="1" />
    <line x1="328" y1="90" x2="328" y2="100" stroke-width="1" />
    <line x1="332" y1="90" x2="332" y2="100" stroke-width="1" />
    <line x1="336" y1="90" x2="336" y2="100" stroke-width="1" />

    <line x1="344" y1="90" x2="344" y2="100" stroke-width="1" />
    <line x1="348" y1="90" x2="348" y2="100" stroke-width="1" />
    <line x1="352" y1="90" x2="352" y2="100" stroke-width="1" />
    <line x1="356" y1="90" x2="356" y2="100" stroke-width="1" />
    <line x1="364" y1="90" x2="364" y2="100" stroke-width="1" />
    <line x1="368" y1="90" x2="368" y2="100" stroke-width="1" />
    <line x1="372" y1="90" x2="372" y2="100" stroke-width="1" />
    <line x1="376" y1="90" x2="376" y2="100" stroke-width="1" />

    <line x1="384" y1="90" x2="384" y2="100" stroke-width="1" />
    <line x1="388" y1="90" x2="388" y2="100" stroke-width="1" />
    <line x1="392" y1="90" x2="392" y2="100" stroke-width="1" />
    <line x1="396" y1="90" x2="396" y2="100" stroke-width="1" />
    <line x1="404" y1="90" x2="404" y2="100" stroke-width="1" />
    <line x1="408" y1="90" x2="408" y2="100" stroke-width="1" />
    <line x1="412" y1="90" x2="412" y2="100" stroke-width="1" />
    <line x1="416" y1="90" x2="416" y2="100" stroke-width="1" />

    <line x1="424" y1="90" x2="424" y2="100" stroke-width="1" />
    <line x1="428" y1="90" x2="428" y2="100" stroke-width="1" />
    <line x1="432" y1="90" x2="432" y2="100" stroke-width="1" />
    <line x1="436" y1="90" x2="436" y2="100" stroke-width="1" />
    <line x1="444" y1="90" x2="444" y2="100" stroke-width="1" />
    <line x1="448" y1="90" x2="448" y2="100" stroke-width="1" />
    <line x1="452" y1="90" x2="452" y2="100" stroke-width="1" />
    <line x1="456" y1="90" x2="456" y2="100" stroke-width="1" />
  </g>

  <g class="ruler-text">
    <text x="60" y="132">0</text>
    <text x="100" y="132">1</text>
    <text x="140" y="132">2</text>
    <text x="180" y="132">3</text>
    <text x="220" y="132">4</text>
    <text x="260" y="132">5</text>
    <text x="300" y="132">6</text>
    <text x="340" y="132">7</text>
    <text x="380" y="132">8</text>
    <text x="420" y="132">9</text>
  </g>

  <text x="442" y="131" class="unit-text" text-anchor="start">cm</text>
</svg>

---

## **What is Absolute Uncertainty?**

Absolute uncertainty tells you the possible **range** of your measurement, using the same units. It’s a number you add and subtract from your measurement to show its full range.

With a ruler, there is some uncertainty, or "wiggle room," at both the start and the end of your measurement. This means the uncertainty of the full measurement is equal to the smallest mark you can read.

* **Example:** You measure a pencil using a ruler with markings every $0.1 \text{ cm}$. Because you have to read both ends of the pencil, the uncertainty for your final measurement is $\pm 0.1 \text{ cm}$.

You would write this measurement as: $15.5 \pm 0.1 \text{ cm}$.

---

## **What is Relative Uncertainty?**

Relative uncertainty gives you the uncertainty as a **percentage**. This is useful because it lets you compare the precision of two very different measurements. A smaller percentage means your measurement is more precise.

To find it, you divide the absolute uncertainty by your measurement and multiply by $100\%$.

$$ \text{Relative Uncertainty} = \frac{\text{Absolute Uncertainty}}{\text{Measured Value}} \times 100\% $$

* **Example:** For the pencil measurement above ($15.5 \pm 0.05 \text{ cm}$), the relative uncertainty is:

$$ \frac{0.05 \text{ cm}}{15.5 \text{ cm}} \times 100\% \approx 0.32\% $$

This tells you that your measurement is very precise, with only $0.32\%$ of its value being uncertain.

### Why Relative Uncertainty is So Useful

Imagine you also measure a basketball court and find it's $28.0 \pm 0.05 \text{ m}$.

* The absolute uncertainty ($ \pm 0.05 \text{ m}$) is the same as the pencil's. But is the basketball court measurement as precise?
* Let's check the relative uncertainty:

$$ \frac{0.05 \text{ m}}{28.0 \text{ m}} \times 100\% \approx 0.18\% $$

The basketball court measurement has a smaller relative uncertainty ($0.18\%$ vs. $0.32\%$), so it is actually more precise!

---

## **Interactive Match: Uncertainty**

Test your understanding of key terms related to uncertainty.

<div class="vocab-matching-interactive-wrapper uncertainty">
  <div class="animator-explanation">
    <p>Click a term and then its matching meaning. Match all pairs to complete!</p>
  </div>

  <div class="vocab-matching-container">
    <div class="vocab-grid">
      <div class="vocab-card-column">
        <div id="uncertaintyTerms">
          </div>
      </div>
      <div class="vocab-card-column">
        <div id="uncertaintyDefinitions">
          </div>
      </div>
    </div>
    <div id="uncertaintyFeedback"></div>
  </div>
  <div class="button-controls">
    <button id="uncertaintyResetButton" class="animator-button btn-default">Reset</button>
  </div>
</div>

<script src="/assets/js/common/interactive-match-base.js"></script>
<script src="/assets/js/intro/uncertainty-interactive-match.js"></script>

---

## **Why This Concept Matters**

* **It Shows Trust:** When you report uncertainty, you're being a good scientist. You're showing others how reliable your numbers are.
* **It Connects to Significant Figures:** The number of significant figures in your answer is directly related to your measurement's uncertainty. It's a way of making sure your answer doesn't pretend to be more precise than your tool.