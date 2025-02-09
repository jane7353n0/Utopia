---
title: Spezies
compendium: utopia-ttrpg
chapter: 4
layout: chapter
---
{% for spezie in site.spezies %}
{{ spezie.title }}
{% for subspezie in site.subspezies %}
{% if subspezie.spezie == spezie.title %}
{{ subspezie.title }}
{% endif %}
{% endfor %}
{% endfor %}
