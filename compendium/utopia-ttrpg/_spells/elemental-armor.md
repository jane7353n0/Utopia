---
title: Elemental Armor
category: Aid
artistry: [Evocation, Enchantment]
duration:
  type: Duration
  time: {amount: 1, unit: minute}
  text: 1 minute of Focus
  focus: true
range:
  type: Touch
  text: Touch 
aoe:
  target: Creature
  area: 
  text: Target creature
stamina:
  set: 20
  text: 20
---
You conjure elemental plates around the body of a vulnerable creature. Given the slot isn't occupied, the creature becomes equipped with {% include link.md type="Items" name="Chest Armor" %} that grants **10 defense in your choice of Energy, Heat, or Chill**. It disappears once the spell ends.
