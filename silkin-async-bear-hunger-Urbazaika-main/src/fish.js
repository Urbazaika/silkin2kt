export default function spawnFish(count) {
  const fishes = [];
  
  for (let i = 0; i < count; i++) {
    const fishPromise = new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 4000) + 1000;
      
      setTimeout(() => {
        if (Math.random() < 0.7) {
          resolve();
        } else {
          reject();
        }
      }, delay);
    });
    
    fishes.push(fishPromise);
  }
  
  return fishes;
}