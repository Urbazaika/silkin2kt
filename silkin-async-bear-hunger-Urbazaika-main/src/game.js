import spawnFish from './fish.js';

export const DIFFICULTY = {
  EASY: { name: 'лёгкий', fish: 3 },
  MEDIUM: { name: 'средний', fish: 5 },
  HARD: { name: 'сложный', fish: 10 },
};

export async function catchFish(count) {
  const fishes = spawnFish(count);
  const results = await Promise.allSettled(fishes);
  
  const caught = results.filter(result => result.status === 'fulfilled').length;
  const escaped = results.filter(result => result.status === 'rejected').length;
  
  return { caught, escaped };
}

export async function startFishing(count) {
  const results = await catchFish(count);
  return results;
}

export async function watchFishing(count) {
  const fishes = spawnFish(count);
  
  for (let i = 0; i < fishes.length; i++) {
    try {
      await fishes[i];
      console.log(`Поймал рыбу ${i + 1}!`);
    } catch {
      console.log(`Рыба ${i + 1} уплыла...`);
    }
  }
}