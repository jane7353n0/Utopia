---
title: Spezies
compendium: utopia-ttrpg
chapter: 4
layout: chapter
---
{% for spezie in item.spezies %}
## {{ spezie.title }}
{% for subspezie in spezie.subspezies %}
### {{ subspezie.title }}
{% endfor %}{% endfor %}