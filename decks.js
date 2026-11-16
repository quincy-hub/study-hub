/*
  ADD A NEW SUBJECT: copy one of the deck blocks below, change the fields, and
  save. That's the only file you need to edit.

  Each card is  ["front/A", "back/B"]  or  ["A", "B", [other accepted A spellings], [other accepted B spellings]]

  Deck fields
    id              unique short name, no spaces (used to save progress)
    title, emoji    shown on the home screen
    aLabel, bLabel  what the two sides are called, e.g. "Word" / "Meaning"
    grading         "type" = the answer is typed,  "flip" = tap to flip, then Knew it / Missed it
                    (use "flip" for long answers like definitions)
    caseSensitiveA / caseSensitiveB   true = capitalization must match when typing that side
    direction       "mix" (default), "ab" (show A, answer B) or "ba"
    cards           the list
    quiz            (optional) multiple-choice questions. Adds a "Multiple-choice quiz" button.
    quizSize        (optional) questions per round, default 10 (a random sample of `quiz`)

  Quiz questions are  ["question", "correct answer", ["wrong1","wrong2","wrong3"], "optional explanation"]
  Provide at least 3 wrong answers (extras are fine: 3 are picked at random each time).
  Order is shuffled every time, so always list the correct answer in the 2nd slot.
  Object form also works:  { q:"...", a:"correct", wrong:["..","..",".."], why:"..." }

  Example:
  {
    id: "spanish1", title: "Spanish Unit 1", emoji: "🇪🇸",
    aLabel: "English", bLabel: "Spanish", grading: "type",
    cards: [ ["dog","perro"], ["cat","gato"], ["house","casa",[],["la casa"]] ]
  },
*/
const DECKS = [
  {
    id: "elements-worksheet", title: "Elements & Symbols to Learn", emoji: "🧪",
    aLabel: "Name", bLabel: "Symbol", grading: "type",
    caseSensitiveB: true,           // symbols need correct capitalization
    quizSize: 10,
    quiz: [   // example questions: replace/extend with AI-written or hand-written ones
      ["Which element has the symbol Fe?", "Iron", ["Fluorine","Lead","Tin"], "Fe comes from the Latin “ferrum”."],
      ["What is the symbol for Sodium?", "Na", ["So","S","Sn","Sd"], "Na comes from the Latin “natrium”."],
      ["Which element has the symbol Pb?", "Lead", ["Platinum","Phosphorus","Potassium"]],
      ["Which symbol stands for Potassium?", "K", ["P","Po","Pt"]]
    ],
    cards: [
      ["Aluminum","Al",["aluminium"]],["Argon","Ar"],["Barium","Ba"],["Beryllium","Be"],["Boron","B"],["Bromine","Br"],
      ["Calcium","Ca"],["Carbon","C"],["Chlorine","Cl"],["Chromium","Cr"],["Cobalt","Co"],["Copper","Cu"],
      ["Fluorine","F"],["Gold","Au"],["Helium","He"],["Hydrogen","H"],["Iodine","I"],["Iron","Fe"],
      ["Krypton","Kr"],["Lead","Pb"],["Lithium","Li"],["Magnesium","Mg"],["Manganese","Mn"],["Mercury","Hg"],
      ["Neon","Ne"],["Nickel","Ni"],["Nitrogen","N"],["Oxygen","O"],["Phosphorus","P"],["Platinum","Pt"],
      ["Potassium","K"],["Radon","Rn"],["Silicon","Si"],["Silver","Ag"],["Sodium","Na"],["Sulfur","S",["sulphur"]],
      ["Tin","Sn"],["Titanium","Ti"],["Tungsten","W"],["Uranium","U"],["Xenon","Xe"],["Zinc","Zn"]
    ]
  }
];
