/*
  ADD A NEW SUBJECT: copy one of the deck blocks below, change the fields, and
  save. That's the only file you need to edit.

  Each card is  ["front/A", "back/B"]  or  ["A", "B", [other accepted A spellings], [other accepted B spellings]]

  Deck fields
    id              unique short name, no spaces (used to save progress)
    title, emoji    shown on the home screen
    aLabel, bLabel  what the two sides are called, e.g. "Word" / "Meaning"
    grading         "type" = she types the answer,  "flip" = tap to flip, then Knew it / Missed it
                    (use "flip" for long answers like definitions)
    caseSensitiveA / caseSensitiveB   true = capitalization must match when typing that side
    direction       "mix" (default), "ab" (show A, answer B) or "ba"
    cards           the list

  Example:
  {
    id: "spanish1", title: "Spanish Unit 1", emoji: "🇪🇸",
    aLabel: "English", bLabel: "Spanish", grading: "type",
    cards: [ ["dog","perro"], ["cat","gato"], ["house","casa",[],["la casa"]] ]
  },
*/
const DECKS = [
  {
    id: "elements", title: "Elements 1–42", emoji: "⚛️",
    aLabel: "Name", bLabel: "Symbol", grading: "type",
    caseSensitiveB: true,           // symbols need correct capitalization
    cards: [
      ["Hydrogen","H"],["Helium","He"],["Lithium","Li"],["Beryllium","Be"],["Boron","B"],["Carbon","C"],
      ["Nitrogen","N"],["Oxygen","O"],["Fluorine","F"],["Neon","Ne"],["Sodium","Na"],["Magnesium","Mg"],
      ["Aluminum","Al",["aluminium"]],["Silicon","Si"],["Phosphorus","P"],["Sulfur","S",["sulphur"]],
      ["Chlorine","Cl"],["Argon","Ar"],["Potassium","K"],["Calcium","Ca"],["Scandium","Sc"],["Titanium","Ti"],
      ["Vanadium","V"],["Chromium","Cr"],["Manganese","Mn"],["Iron","Fe"],["Cobalt","Co"],["Nickel","Ni"],
      ["Copper","Cu"],["Zinc","Zn"],["Gallium","Ga"],["Germanium","Ge"],["Arsenic","As"],["Selenium","Se"],
      ["Bromine","Br"],["Krypton","Kr"],["Rubidium","Rb"],["Strontium","Sr"],["Yttrium","Y"],
      ["Zirconium","Zr"],["Niobium","Nb"],["Molybdenum","Mo"]
    ]
  }
];
