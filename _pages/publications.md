---
layout: page
permalink: /research/
title: research
description: 
nav: true
nav_order: 2
---

<div class="hide-page-header"></div>

<style>
/* Hide the page title and description */
.page-header {
  display: none;
}

header.post-header {
  display: none;
}

.research-container {
  max-width: 100%;
  margin: 0 auto;
}

.research-paper {
  margin-bottom: 3.5rem;
  padding-bottom: 2.5rem;
}

.research-paper:not(:last-child) {
  border-bottom: 1px solid var(--global-divider-color);
}

.paper-content {
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.paper-image {
  flex-shrink: 0;
  width: 180px;
}

.paper-image img {
  width: 100%;
  height: auto;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.paper-details {
  flex-grow: 1;
  min-width: 0;
}

.paper-title {
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.75rem;
  color: var(--global-text-color);
  line-height: 1.5;
}

.paper-title strong {
  font-weight: 600;
}

.paper-authors {
  font-style: italic;
  margin-bottom: 0.75rem;
  color: var(--global-text-color-light);
  font-size: 0.95rem;
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
  margin: 0.5rem 0;
}

.abstract-toggle {
  cursor: pointer;
  color: var(--global-theme-color);
  font-weight: 400;
  user-select: none;
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.abstract-toggle:hover {
  text-decoration: underline;
}

.abstract-content {
  display: none;
  margin-top: 0.75rem;
  padding: 1rem 1.25rem;
  background-color: var(--global-bg-color);
  border-left: 3px solid var(--global-theme-color);
  line-height: 1.65;
  text-align: justify;
  font-size: 0.95rem;
}

.abstract-content.show {
  display: block;
}

.paper-meta {
  margin-top: 0.75rem;
}

.conferences {
  margin-top: 0.75rem;
  line-height: 1.8;
}

.conference-tag {
  display: inline-block;
  background-color: var(--global-theme-color);
  color: white;
  padding: 0.15rem 0.5rem;
  margin: 0.15rem 0.15rem 0.15rem 0;
  border-radius: 2px;
  font-size: 0.8rem;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
}

.award {
  display: inline-block;
  background-color: #d4af37;
  color: white;
  padding: 0.25rem 0.7rem;
  margin: 0.15rem;
  border-radius: 3px;
  font-size: 0.85rem;
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
  padding: 0.25rem 0.75rem;
  background-color: var(--global-theme-color);
  color: white;
  text-decoration: none;
  border-radius: 3px;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  font-weight: 500;
}

.paper-link-btn:hover {
  opacity: 0.85;
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  margin-top: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--global-divider-color);
  color: var(--global-text-color);
}

.research-section {
  margin-bottom: 3rem;
}
</style>

<div class="research-container">
  <!-- Working Papers Section -->
  <div class="research-section">
    <h2 class="research-section-title">Working Papers</h2>
    {% bibliography --template bib-research --query @*[note=Working Paper] %}
  </div>

  <!-- Work in Progress Section -->
  <div class="research-section">
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
