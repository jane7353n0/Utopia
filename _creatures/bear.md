---
title: Bear
type: Beast
size: Medium
dr: 25
xp: 2500
resources: 
- {  name: SHP, amount: 30  }
- {  name: DHP, amount: 15  }
- {  name: Stamina, amount: 30 }
defense: {  block: 4,  dodge: 1,  defenses: [
    {  name: Physical, amount: 5  },
    {  name: Energy, amount: 5  },
    {  name: Heat, amount: 3  },
    {  name: Chill, amount: 3  },
    {  name: Psyche, amount: 1  },
  ]
}
travel:  
- {  name: Land, amount: 4  }
- {  name: Water, amount: 2  }
- {  name: Air, amount: 0 }
traits: 
- {  name: Agility, mod: 2, subtraits: 
    [  {  name: Speed, mod: 0  }, {  name: Dexterity, mod: -2  }  ]
  }
- {  name: Strength, mod: 10, subtraits: 
    [  {  name: Power, mod: 4 }, {  name: Fortitude, mod: 2  }  ]
  }
- {  name: Intellect, mod: -2, subtraits: 
    [  {  name: Engineering, mod: -3  }, {  name: Memory, mod: -3  }  ]
  }
- {  name: Will, mod: -2, subtraits: 
    [  {  name: Resolve, mod: -3  }, {  name: Awareness, mod: -3  }  ]
  }
- {  name: Display, mod: -1, subtraits: 
    [  {  name: Portrayal, mod: -2  }, {  name: Stunt, mod: -3  }  ]
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
  - {  amount: 2d10, bonus: 4, type: Physical  }
  aoe: 1 target
- title: Bite
  type: Attack
  attack_speed: 3 TA
  range: 0 meters
  attack_type: melee
  damage: 
  - {  amount: 4d12, bonus: 4, type: Physical  }
  aoe: 1 target
drops:
- name: Bones
  amount: 1d6
  type: Crafting Component
  crafting_component: { quality: Crude,  category: Material }
- name: Bear Hide
  amount: 1d8
  type: Crafting Component
  crafting_component: { quality: Common,  category: Material }
harvests:
  td: 10
  drops:
  - name: Bear Hide
    amount: 1d8
    type: Crafting Component
    crafting_component: { quality: Common,  category: Material }
---
A powerful predator in the wild, one that most basic creatures would stray away from. Depending on circumstance, they can be both passive or hostile.
