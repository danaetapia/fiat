/* Sample lexicon. Replace it with words from your own archive.

   The oracle composes two-word phrases from these lists:
     noun + verb   "harbour breaks"  (the verb agrees with the noun)
     verb + verb   "wait / return"
     adj  + adj    "slow electric"
     noun + noun   "lantern orchard"

   Keep verbs in the base form ("wait", not "waits"); the code conjugates them.
   Names count as singular nouns. Nouns ending in s are read as plural, so list
   singular exceptions in singularS and plurals without an s in irregularPlural.

   The lexicon used at De Nederlandsche Bank came from the artist's journals and
   stays with her. This sample was written for the repository. */

window.LEXICON = {
  nouns: [
    "harbour", "lantern", "orchard", "glacier", "window", "letter", "staircase",
    "kitchen", "compass", "thread", "mountain", "pigeons", "engine", "salt",
    "bridge", "candle", "garden", "archive", "mirror", "lungs", "storm", "violin",
    "museum", "tide", "orchestra", "keys", "desert", "sleep", "copper", "rumour",
    "wheat", "telescope", "pockets", "fever", "ladder", "lake", "neighbours",
    "rain", "chapel", "factory"
  ],
  names: ["Orpheus", "Persephone", "Hermes", "Medusa"],
  verbs: [
    "wait", "return", "break", "open", "listen", "carry", "melt", "count",
    "follow", "borrow", "remember", "fold", "invent", "whisper", "climb",
    "forget", "breathe", "translate", "gather", "sink", "repair", "dissolve",
    "promise", "wander", "answer"
  ],
  adjectives: [
    "slow", "electric", "hollow", "patient", "bright", "salty", "quiet", "golden",
    "broken", "tender", "distant", "wild", "honest", "liquid", "ancient",
    "restless", "pale", "heavy", "secret", "endless"
  ],
  singularS: ["Hermes"],
  irregularPlural: []
};
