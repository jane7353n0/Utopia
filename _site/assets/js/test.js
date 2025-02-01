const documents = [{"title":"BATTLE SCRY","type":"Aid","school": "Wake, Enchantment, Divination","duration": "1 minute of Focus","range": "Touch","aoe": "All creatures within 2 meters","content": "<p>A fury runs through your aura, offering decisive battle stratagem to those around you. You choose one creature that the spell effects. For the duration of the spell, whenever you or another creature affected by the spell blocks or dodges an attack or spell from the chosen creature, its Block Rating and Dodge Rating is doubled for the rest of the action.</p>"},{"title":"CRACKLING DART","type":"Combat","school": "Evocation, Array","duration": "Immediate","range": "5 meters","aoe": "Target object or creature","content": "<p>You throw a thin, energetic projectile fiercely at your target, dealing 1d20 Energy damage. Creatures may block or dodge damage dealt this way.</p>"},{"title":"CURE MAXIMUS","type":"Aid","school": "Alteration","duration": "Concentration","range": "Touch","aoe": "Target creature","content": "<p>With ultimate force, you completely cleanse a creature of all undoing. Upon casting and at the beginning of each turn for the spell’s duration, you must consume a Mythical or rarer item or component. Upon doing so, the creature regains Xdl2 DHP. This spell ends if you fail to consume an item or component.</p>"},{"title":"CURE MEDIUS","type":"Aid","school": "Alteration","duration": "Concentration","range": "Touch","aoe": "Target creature","content": "<p>You cast a healing light down, purifying one’s wounds with great precision. Upon casting and at the beginning of each turn for the spell’s duration, you must consume a Rare or rarer item or component. Upon doing so, the creature regains Xdl2 DHP. This spell cannot force a creature to regain more than 100 DHP, and ends if you fail to consume an item or component.</p>"},{"title":"CURE MINIMUS","type":"Aid","school": "Alteration","duration": "Concentration","range": "Touch","aoe": "Target creature","content": "<p>You imbue a suffering creature with a surgical magic, clsoing their internal wounds. Upon casting and at the beginning of each turn for the spell’s duration, you must consume a Common or rarer item or component. Upon doing so, the creature regains Xd12 DHP. This spell cannot force a creature to regain more than 25 DHP, and ends if you fail to consume an item or component.</p>"},{"title":"DISGUISE SELF","type":"Utility","school": "","duration": "1 hour of Focus","range": "Touch","aoe": "Target creature","content": "<p>A character evolves in your mind, something of similar stature but contrasting appearance to the creature you’re touching. Its appearance is modified to match the new image for the duration of the spell.</p>"},{"title":"Dispell","type":"Utility","school": "Enchantment","duration": "Immediate","range": "Touch","aoe": "Target spell","content": "<p>You grasp something affected by a spell, methodically unweaving its runes. If a creature is currently focusing or concentrating on the spell, it makes a Will contest against you. Given the spell is no older than a day and any opposing creatures fail their test, the spell ends.</p>"},{"title":"ELECTROCUTE","type":"Combat","school": "Evocation, Array","duration": "Concentration","range": "10 meters","aoe": "Target object or creature","content": "<p>You cover the target with a pillar of electricity. Upon casting and at the beginning of each turn for the spell’s duration, it’s dealt Xd8 Energy damage. Creatures may block or dodge damage dealt this way, and if the spell deals no damage in a turn, the spell ends.Heat or Chill. You imbue a weapon with thermal power, surrounding it in a faint glow. A weapon imbued this way deals an additional Xd8 damage of the chosen type on its next attack.</p>"},{"title":"ELEMENTAL ARMOR","type":"Aid","school": "","duration": "1 minute","range": "Touch","aoe": "Target creature","content": "<p>You conjure elemental plates around the body of a vulnerable creature. Given the slot isn’t occupied, the creature becomes equipped with chest armor that grants 10 defense in your choice of Energy, Heat, or Chill. It disappears once the spell ends.</p>"},{"title":"ELEMENTAL BLADE","type":"Combat","school": "Evocation, Enchantment","duration": "1 minute","range": "Touch","aoe": "Self","content": "<p>You conjure a small elemental blade fitted to your grip. It has the same stats as a Shiv, but deals your choice of Energy, Heat, or Chill damage instead. It disappears once the spell ends.</p>"},{"title":"ELEMENTAL BOLT","type":"Combat","school": "Evocation, Array","duration": "Immediate","range": "10 meters","aoe": "Target object or creature","content": "<p>Choose between Energy, Heat, or Chill. You surround your target with a column of magical power. It’s dealt Xd8 damage of the chosen type. Creatures may block or dodge damage dealt this way.</p>"},{"title":"ENERGIZE","type":"Combat","school": "Evocation","duration": "Immediate","range": "Touch","aoe": "Target weapon that isn't currently imbued","content": "<p>You imbue a weapon, submurging it in crackling electricity. A weapon imbued this way deals an additional Xd8 Energy damage on its next attack.</p>"},{"title":"FABRICATE","type":"Utility","school": "Evocation, Enchantment","duration": "1 minute","range": "Touch","aoe": "Self","content": "<p>You imagine an object or shape in your head, manifest  ing a clay-like substance in the chosen shape. The object can be up to 1 liter or 4 kilograms, made purely out of magimatter, having no special properties. The object dissipates when the spell ends.</p>"},{"title":"FIREBALL","type":"Combat","school": "","duration": "Concentration","range": "15 meters","aoe": "All objects and creatures within 4 meters of a chosen point","content": "<p>You hurdle a massive ball of flame and molten destruction. Upon casting and at the beginning of each turn for the spell’s duration, all targets are dealt 8d6 Heat damage. Creatures may block or dodge damage dealt this way, and if the spell deals no damage in a turn, the spell ends.</p>"},{"title":"FLASH FREEZE","type":"Combat","school": "","duration": "Concentration","range": "Touch","aoe": "All objects and creatures on the same surface as the caster's starting position within 10 meters","content": "<p>The ground beneath you freezes over with a devastating force. Upon casting and at the beginning of each turn for the spell’s duration, all targets are dealt 6d6 Chill damage. Creatures may block or dodge damage dealt this way, and if the spell deals no damage in a turn, the spell ends.</p>"},{"title":"FLIGHT","type":"","school": "Enchantment, Alteration","duration": "1 minute","range": "Touch","aoe": "Target creature","content": "<p>A pair of spectral wings sprout of the back of a creature touched by the caster. For the duration of the spell, its Air travel becomes equal to half its Speed score, rounded down, given it wasn’t already higher.</p>"},{"title":"FREEZE","type":"Utility","school": "Evocation","duration": "Concentration","range": "Touch","aoe": "Target object","content": "<p>You bring an item down to a deep freeze, chilling it enough to form basic ice. It remains magically frozen until the spell ends or it’s forcefully thawed.</p>"},{"title":"GENDERBENDER","type":"Utility","school": "Enchantment, Alteration","duration": "1 hour","range": "Touch","aoe": "Target creature","content": "<p>You manifest physiological change unto a touching creature, altering their physical and perceivable gender for the duration of the spell. You may convert a creature to masculine, feminine, or androgynous, reverting back once the spell ends.</p>"},{"title":"HEAL","type":"Aid","school": "Alteration","duration": "Concentration","range": "Touch","aoe": "Target creature","content": "<p>You place a pure hand on a suffering creature, alleviating its pains. Upon casting and at the beginning of each turn for the spell’s duration, the creature regains Xd6 SHP. Then, if the creature cannot regain any additional SHP, the spell ends.</p>"},{"title":"HUNDER","type":"Combat","school": "","duration": "Immediate","range": "Touch","aoe": "All objects and creatures within a 90-degree cone extending 3 meters from the caster","content": "<p>You summon a cacophanous boom in front of you, dealing 4d8 Energy damage to all targets. Creatures may block or dodge damage dealt this way.</p>"},{"title":"HUNTER'S MARK","type":"","school": "Array, Enchantment, Divination","duration": "1 minute of Focus","range": "20 meters","aoe": "Target creature","content": "<p>Your eyes glow with poise, marking a creature within your sights. Tests you make for accuracy against the creature gain 2 additional points of favor for the duration of the spell.</p>"},{"title":"IGNITE","type":"","school": "","duration": "Concentration","range": "Touch","aoe": "Target object","content": "<p>You ignite something flammable, such as a campfire or a candle, with pure magical will. It remains magically lit until the spell ends or it’s forcefully snuffed.</p>"},{"title":"ILLUMINATE","type":"Combat","school": "","duration": "Concentration","range": "10 meters","aoe": "Choose a point within range","content": "<p>A chosen spot begins to glow with a vibrant light, whatever color you choose. The light remains station ary regardless of creatures or objects around it. The light dissipates once the spell ends.</p>"},{"title":"INVISIBILITY","type":"Utility","school": "","duration": "1 minute of Focus","range": "5 meters","aoe": "Up to 2 target creatures","content": "<p>Light fades through two creatures of your choice, rendering them completely invisible. Creatures remain invisible for the duration of the spell, gaining 2 points of favor on tests to remain inconspicuous.</p>"},{"title":"LARGE VISSAGE","type":"","school": "Array, Enchantment, Illusion","duration": "1 hour of Focus","range": "10 meters","aoe": "Chosen point within range","content": "<p>A massive, indistinguishable illusion presents itself in front of you, design intricately through your mind. It may be no larger than 10 meters in any dimension, but can be animated within its bounds in any way you choose, including changing it during the spell’s duration. It is as realistic as you can imagine, though creatures that touch it will become immediately aware of its falsity. It dissipates once the spell ends.</p>"},{"title":"LIGHTNING BOLT","type":"Combat","school": "","duration": "Concentration","range": "5 meters","aoe": "All objects and creatures between the caster's starting position and a chosen point","content": "<p>A vibrant pillar of lightning erupts from you. Upon casting and at the beginning of each turn for the spell’s duration, all targets are dealt 4d8 Energy damage. Creatures may block or dodge damage dealt this way, and if the spell deals no damage in a turn, the spell ends.</p>"},{"title":"LUCK","type":"Aid","school": "","duration": "1 minute","range": "Touch","aoe": "All creatures within 5 meters","content": "<p>A shimmering light gleams in your eyes as luck showers its favor unto you. For the duration of the spell, whenever you make a roll against an affected creature, including damage rolls, blocking, dodging, and tests, each die cannot roll less than half of its maximum, rounded down.</p>"},{"title":"MAGE ARMOR","type":"Evocation, Enchantment","school": "Evocation, Enchantment","duration": "1 minute of Focus","range": "Touch","aoe": "Target creature","content": "<p>You manifest a suit of magical armor around an unequipped creature. Given the slot isn’t occuiped, the creature becomes equipped with chest armor with the same stats as Body Armor. It disappears once the spell ends.</p>"},{"title":"MAGE SHIELD","type":"","school": "Evocation, Enchantment","duration": "1 minute of Focus once triggered","range": "Touch","aoe": "Self","content": "<p>You speak a protective incantation, carving temporary runes into your skin. The next time you are subject to an attack, a magical shield manifests given you have an open hand available. While equipped, your Dodge Rating increases by 2d12. The shield disappears once the spell ends.</p>"},{"title":"MAGENHANCE","type":"Aid","school": "","duration": "1 minute","range": "Touch","aoe": "Self","content": "<p>A specular force runs through you, magically enhanc  ing your abilities. Upon casting, you choose a subtrait. For the duration of the spell, that subtrait is increased</p>"},{"title":"MEDIUM VISSAGE","type":"Utility","school": "","duration": "1 hour of Focus","range": "10 meters","aoe": "Chosen point within range","content": "<p>You present a vivification from your mind, realized through illusionary magic. It may be no larger than 3 meters in any dimension, but can be animated within its bounds in any way you choose, including changing it during the spell’s duration. It is as realistic as you can imagine, though creatures that touch it will become immediately aware of its falsity. It dissipates once the spell ends.</p>"},{"title":"PRESERVE","type":"Aid","school": "Array, Necromancy","duration": "Concentration","range": "10 meters","aoe": "Target creature with less than 1 DHP that hasn't died yet","content": "<p>You gently preserve the body of one nearly deceased, a magic essence preventing it from decaying. Its DHP becomes 0. If an affect would lower its DHP without killing it during the spell’s duration, its DHP becomes 0 again instead.</p>"},{"title":"REND","type":"Combat","school": "Necromancy","duration": "Concentration","range": "Touch","aoe": "Target creature","content": "<p>You slowly rip the soul of a creature from its body. It makes a Will contest against you and repeats the contest at the beginning of each turn for the spell’s duration. Each time the creature fails, it’s dealt Xd4 damage. Damage dealt this way cannot be blocked or dodged and is dealt directly to DHP, but cannot reduce the creature’s DHP to less than 0. Upon succeeding, the spell ends.</p>"},{"title":"RESUSCITATE","type":"","school": "","duration": "Immediate","range": "Touch","aoe": "Target creature with less than 1 DHP that hasn't died yet","content": "<p>You breathe mortal life back into a dying creature, pulling it away from the grasp of death. Its stamina and DHP each become 1 and the creature gains 4 levels of Fatigue. A level of Fatigue gained this way is removed each time it completes a rest.</p>"},{"title":"SILENT STEPS","type":"Aid","school": "","duration": "Concentration","range": "Touch","aoe": "Self","content": "<p>You cloak yourself in an aura of silence, completely removing your audible outputs. You are completely silent, gaining 2 points of favor on tests to remain inconspicuous for the duration of the spell.</p>"},{"title":"SMALL VISSAGE","type":"Utility","school": "Array, Enchantment, Illusion","duration": "1 hour of Focus","range": "10 meters","aoe": "Chosen point within range","content": "<p>An image leaps from your mind and presents itself as an illusionary object or image. It may be no larger than 1 meter in any dimension, but can be animated within its bounds in any way you choose, including changing it during the spell’s duration. It is as realistic as you can imagine, though creatures that touch it will become immediately aware of its falsity. It dissipates once the spell ends.LARGE VISSAGE</p>"},{"title":"SWEETFIRE","type":"Combat","school": "Evocation, Array, Enchantment, Illusion","duration": "1 minute of Focus","range": "5 meters","aoe": "Target creature","content": "<p>A creature spontaneously combusts with a phantasmal blue flame, feeling no pain whatsoever. Upon casting and at the beginning of each turn for the spell’s duration, its dealt 4d4 Heat damage. It may block or dodge the damage dealt this way, and if the spell deals no damage in a turn, the spell ends.</p>"},{"title":"TELEKINESIS","type":"Utility","school": "","duration": "Concentration","range": "10 meters","aoe": "Target object or creature","content": "<p>Your mind wraps its phantasmal hands around an object or creature, maneuvering it through force of will. Given it weighs no more than 100 kilograms, you move it anywhere within 10 meters of its starting location and may spend 1 turn action or 1 interrupt action to change its pathing during the spell’s duration. Creatures with proper leverage may resist this effect by making a Strength contest against your Will test.</p>"},{"title":"TERRORIZE","type":"Combat","school": "Illusion","duration": "Concentration","range": "Touch","aoe": "Target creature","content": "<p>You terrorize a creature, burdening its mind. It makes a Wiss contest against you and repeats the contest at the beginning of each turn for the spell’s duration. Each time the creature failsm it’s dealt Xd4 Psyche damage. Upon succeeding the spell ends.</p>"},{"title":"THERMAL BLAST","type":"Combat","school": "Evocation, Array, Wake","duration": "Concentration","range": "10 meters","aoe": "All objects and creatures within 2 meters of a chosen point","content": "<p>Choose between Heat or Chill. You create a sphere of destructive power. Upon casting and at the beginning of each turn for the spell’s duration, all targets are dealt Xd12 damage of the chosen type. Creatures may block or dodge damage dealt this way, and if the spell deals no damage in a turn, the spell ends.</p>"},{"title":"THERMAL CHARGE","type":"Combat","school": "Evocation","duration": "Immediate","range": "Touch","aoe": "Target weapon that isn’t currently imbued","content": "<p>Choose between Heat or Chill. You imbue a weapon with thermal power, surrounding it in a faint glow. A weapon imbued this way deals an additional Xd8 damage of the chosen type on its next attack.</p>"},{"title":"THERMAL STRIKE","type":"ombat","school": "","duration": "Concentration","range": "Touch","aoe": "Target object or creature","content": "<p>You send a sharp, icy missile directly at your target, dealing 2d8 Chill damage. Creatures may block or dodge damage dealt this way.</p>"},{"title":"TURN TO GOLD","type":"Utilit","school": "Enchantment, Alteration","duration": "1 hour","range": "Touch","aoe": "Target object","content": "<p>You hold a small nugget of gold in your hands, using its metallic structure to convert a piece of metal. Given you are touching pure gold and the object is made of pure metal and no heavier than 1 kilogram, it is converted to gold. It reverts back to its original form once the spell ends.</p>"},{"title":"WATER BREATHING","type":"Aid","school": "Alteration","duration": "1 hour of Focus","range": "Touch","aoe": "Self","content": "<p>A formation of amphibious gills manifest along the caster. For the duration of the spell, you can breathe in air and in water.</p>"},];

function performSearch() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const results = search(query);
    displayResults(results);
}

function search(query) {
    return documents.filter(doc => doc.content.toLowerCase().includes(query));
}

function displayResults(results) {
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = 'Test';
    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result.content;
        resultsElement.appendChild(listItem);
    });
}