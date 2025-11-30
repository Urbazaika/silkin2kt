import { startFishing, watchFishing, chooseDifficulty, DIFFICULTY, watchFishingRace } from './src/game.js';

async function main() {
  console.log('🎮 Игра "Голодный медведь" началась!\n');
  
  const difficulty = chooseDifficulty();
  console.log(`Выбран уровень: ${difficulty.name}`);
  console.log(`Количество рыб: ${difficulty.fish}\n`);
  
  console.log('=== СТАНДАРТНАЯ РЫБАЛКА ===');
  await startFishing(difficulty.fish);
  
  console.log('\n' + '='.repeat(40));
  
  console.log('\n=== РЫБАЛКА В РЕАЛЬНОМ ВРЕМЕНИ ===');
  await watchFishing(difficulty.fish);
  
  console.log('\n' + '='.repeat(40));
  
  console.log('\n=== РЫБАЛКА С PROMISE.RACE ===');
  await watchFishingRace(Math.min(difficulty.fish, 5));
}

main().catch(console.error);