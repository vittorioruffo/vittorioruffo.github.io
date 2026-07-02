---
layout: page
permalink: /research/
title: research
description: 
nav: true
nav_order: 2
hero_image: /assets/img/hero/mountains_2.jpg
---

<style>
.research-container {
  max-width: 100%;
  margin: 0 auto;
}

.research-container h2.bibliography {
  border: 0;
  color: var(--global-text-color-light);
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 0 1rem;
  padding: 0;
  text-align: left;
}

.research-container ol.bibliography {
  list-style: none;
  margin: 0;
  padding: 0;
}

.research-container ol.bibliography > li {
  margin: 0;
}

.research-paper {
  margin-bottom: 2.75rem;
  padding-bottom: 2rem;
}

.research-paper:not(:last-child) {
  border-bottom: 1px solid var(--global-divider-color);
}

.paper-content {
  display: flex;
  flex-direction: row-reverse;
  gap: 2.25rem;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.paper-image {
  flex-shrink: 0;
  width: 160px;
}

.paper-image img {
  width: 100%;
  height: auto;
  border: 1px solid var(--global-divider-color);
  border-radius: 4px;
}

.paper-details {
  flex-grow: 1;
  min-width: 0;
}

.paper-heading {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.65rem;
  margin-bottom: 0.45rem;
}

.paper-title {
  font-size: 1.08rem;
  font-weight: 600;
  margin-bottom: 0;
  color: var(--global-text-color);
  line-height: 1.4;
}

.paper-title-actions {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.paper-title strong {
  font-weight: 600;
}

.paper-authors {
  font-style: normal;
  margin-bottom: 0.9rem;
  color: var(--global-text-color-light);
  font-size: 0.93rem;
}

.paper-authors a {
  color: var(--global-text-color-light);
  text-decoration: none;
  border-bottom: 1px dotted transparent;
  transition: border-color 0.2s;
}

.paper-authors a:hover {
  color: var(--global-theme-color);
  border-bottom-color: var(--global-theme-color);
}

.abstract-section {
  margin: 0.65rem 0;
}

.abstract-toggle {
  cursor: pointer;
  color: var(--global-theme-color);
  font-weight: 500;
  user-select: none;
  display: inline-block;
  margin-bottom: 0.45rem;
  font-size: 0.92rem;
}

.abstract-toggle:hover {
  text-decoration: underline;
}

.abstract-content {
  display: none;
  margin-top: 0.6rem;
  padding: 1rem 1.25rem;
  background-color: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  line-height: 1.65;
  hyphens: auto;
  text-align: justify;
  font-size: 0.95rem;
}

.abstract-content.show {
  display: block;
}

.paper-meta {
  margin-top: 0.75rem;
}

.presentations {
  margin-top: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.55;
}

.presentations-label {
  font-weight: 600;
}

.presentation-text {
  color: var(--global-text-color);
  hyphens: auto;
  text-align: justify;
}

.award {
  display: inline-block;
  background-color: var(--global-card-bg-color);
  border: 1px solid var(--global-theme-color);
  color: var(--global-theme-color);
  padding: 0.2rem 0.55rem;
  margin: 0.15rem;
  border-radius: 4px;
  font-size: 0.82rem;
  font-weight: 500;
}

.audio-summary {
  margin-top: 1rem;
  font-size: 0.95rem;
}

.paper-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.paper-link-btn {
  display: inline-block;
  padding: 0.25rem 0.65rem;
  background-color: transparent;
  border: 1px solid var(--global-theme-color);
  color: var(--global-theme-color);
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.82rem;
  transition: all 0.2s ease;
  font-weight: 500;
}

.paper-link-btn:hover {
  background-color: var(--global-theme-color);
  color: var(--global-hover-text-color);
  text-decoration: none;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .paper-content {
    flex-direction: column-reverse;
  }
  
  .paper-image {
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }
  
  .paper-title {
    font-size: 0.95rem;
  }
  
  .paper-authors {
    font-size: 0.9rem;
  }
  
  .abstract-content {
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
  }
}

.research-section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
  margin-top: 0;
  padding-bottom: 0;
  border-bottom: 0;
  color: var(--global-theme-color);
  letter-spacing: 0;
}

.research-section {
  margin-bottom: 3.25rem;
}

.presentation-note {
  color: var(--global-text-color-light);
  font-size: 0.9rem;
  margin: -0.25rem 0 1.75rem;
}

.work-in-progress-section .research-paper {
  margin-bottom: 0.7rem;
  padding-bottom: 0.65rem;
}

.work-in-progress-section .paper-authors,
.work-in-progress-section .paper-content {
  margin-bottom: 0;
}
</style>

<div class="research-container">
  <!-- Working Papers Section -->
  <div class="research-section">
    <h2 class="research-section-title">Working Papers</h2>
    {% bibliography --template bib-research --query @*[note=Working Paper] %}
    <div class="presentation-note">(<sup>*</sup> presented by coauthor)</div>
  </div>

  <!-- Work in Progress Section -->
  <div class="research-section work-in-progress-section">
    <h2 class="research-section-title">Work in Progress</h2>
    {% bibliography --template bib-research --query @*[note=Work in Progress] %}
  </div>
</div>

<script>
function toggleAbstract(id) {
  var abstract = document.getElementById(id);
  var toggle = abstract.previousElementSibling;
  
  if (abstract.classList.contains('show')) {
    abstract.classList.remove('show');
    toggle.innerHTML = 'Abstract ▼';
  } else {
    abstract.classList.add('show');
    toggle.innerHTML = 'Abstract ▲';
  }
}
</script>
