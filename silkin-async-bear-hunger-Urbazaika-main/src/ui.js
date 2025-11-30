export function printResults({ caught, escaped }) {
  console.log(`🐻 Итого: поймано ${caught}, уплыло ${escaped}`);
}

const FISH_TYPES = ['карп', 'щука', 'окунь', 'лещ'];

export function printCatch() {
  const fishType = FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)];
  console.log(`Поймал ${fishType}!`);
}

export function printEscape() {
  const fishType = FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)];
  console.log(`${fishType} ушёл...`);
}