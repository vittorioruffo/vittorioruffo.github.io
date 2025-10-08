---
layout: page
permalink: /publications/
title: research
description: Working papers and research in progress.
nav: true
nav_order: 2
---

<style>
.research-container {
  max-width: 100%;
  margin: 0 auto;
}

.research-paper {
  margin-bottom: 4rem;
  border-bottom: 1px solid var(--global-divider-color);
  padding-bottom: 3rem;
}

.research-paper:last-child {
  border-bottom: none;
}

.paper-content {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.paper-image {
  flex-shrink: 0;
  width: 200px;
}

.paper-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.paper-details {
  flex-grow: 1;
}

.paper-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--global-text-color);
}

.paper-authors {
  font-style: italic;
  margin-bottom: 0.5rem;
  color: var(--global-text-color-light);
}

.paper-authors a {
  color: var(--global-text-color-light);
  text-decoration: none;
}

.paper-authors a:hover {
  color: var(--global-theme-color);
  text-decoration: underline;
}

.abstract-section {
  margin: 1rem 0;
}

.abstract-toggle {
  cursor: pointer;
  color: var(--global-theme-color);
  font-weight: 500;
  user-select: none;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.abstract-toggle:hover {
  text-decoration: underline;
}

.abstract-content {
  display: none;
  margin-top: 0.5rem;
  padding: 1rem;
  background-color: var(--global-bg-color);
  border-left: 3px solid var(--global-theme-color);
  line-height: 1.6;
  text-align: justify;
}

.abstract-content.show {
  display: block;
}

.paper-meta {
  margin-top: 1rem;
}

.conferences {
  margin-top: 0.5rem;
  line-height: 1.8;
}

.conference-tag {
  display: inline-block;
  background-color: var(--global-theme-color);
  color: white;
  padding: 0.2rem 0.6rem;
  margin: 0.2rem;
  border-radius: 3px;
  font-size: 0.85rem;
  font-family: monospace;
}

.award {
  display: inline-block;
  background-color: #d4af37;
  color: white;
  padding: 0.2rem 0.6rem;
  margin: 0.2rem;
  border-radius: 3px;
  font-size: 0.85rem;
  font-weight: 500;
}

.audio-summary {
  margin-top: 1rem;
}

.paper-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.paper-link-btn {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: var(--global-theme-color);
  color: white;
  text-decoration: none;
  border-radius: 3px;
  font-size: 0.85rem;
  transition: opacity 0.2s;
}

.paper-link-btn:hover {
  opacity: 0.8;
  color: white;
}

@media (max-width: 768px) {
  .paper-content {
    flex-direction: column;
  }
  
  .paper-image {
    width: 100%;
    max-width: 300px;
  }
}
</style>

<div class="research-container">
  {% bibliography --template bib-research %}
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
