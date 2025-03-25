---
title: Wolf
type: Beast
size: Medium
dr: 14
xp: 1400
resources: 
- {  name: SHP, amount: 20  }
- {  name: DHP, amount: 10  }
- {  name: Stamina, amount: 20 }
defense: {  block: 1,  dodge: 2,  defenses: [
    {  name: Physical, amount: 3  },
    {  name: Energy, amount: 3  },
    {  name: Heat, amount: 2  },
    {  name: Chill, amount: 2  },
    {  name: Psyche, amount: 1  },
  ]
}
travel:  
- {  name: Land, amount: 5  }
- {  name: Water, amount: 3  }
- {  name: Air, amount: 0 }
traits: 
- {  name: Agility, mod: 3, subtraits: 
    [  {  name: Speed, mod: 1  }, {  name: Dexterity, mod: -2  }  ]
  }
- {  name: Strength, mod: 3, subtraits: 
    [  {  name: Power, mod: 0  }, {  name: Fortitude, mod: -1  }  ]
  }
- {  name: Intellect, mod: -2, subtraits: 
    [  {  name: Engineering, mod: -3  }, {  name: Memory, mod: -3  }  ]
  }
- {  name: Will, mod: -2, subtraits: 
    [  {  name: Resolve, mod: -3  }, {  name: Awareness, mod: -3  }  ]
  }
- {  name: Display, mod: 0, subtraits: 
    [  {  name: Portrayal, mod: -1  }, {  name: Stunt, mod: -3  }  ]
  }
- {  name: Charm, mod: -2, subtraits: 
    [  {  name: Appeal, mod: -3  }, {  name: Language, mod: -3  }  ]
  }
actions:
- title: Claw
  type: Attack
  attack_speed: 2 TA
  range: 0 meters
  attack_type: melee
  damage: 
  - {  amount: 2d8, type: Physical  }
  aoe: 1 target
- title: Bite
  type: Attack
  attack_speed: 3 TA
  range: 0 meters
  attack_type: melee
  damage: 
  - {  amount: 4d8, type: Physical  }
  aoe: 1 target
drops:
- name: Bones
  amount: 1d4
  type: Crafting Component
  crafting_component: { quality: Crude,  category: Material }
- name: Wolf Hide
  amount: 1d4
  type: Crafting Component
  crafting_component: { quality: Common,  category: Material }
harvests:
  td: 10
  drops:
  - name: Wolf Hide
    amount: 1d4
    type: Crafting Component
    crafting_component: { quality: Common,  category: Material }
---
A common predator found in the wild. Often they prowl in packs, though remain as somewhat mild creatures in the eyes of skilled adventurers.
