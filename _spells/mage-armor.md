---
title: Mage Armor
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
  set: 14
  text: 14
---
You manifest a suit of magical armor around an unequipped creature. Given the slot isn't occuiped, the creature becomes equipped with chest armor with the same stats as {% include link.md type="Items" name="Body Armor"%}. It disappears once the spell ends.
