import { test } from 'node:test';
import assert from 'node:assert/strict';
import spawnFish from '../src/fish.js';
import {
  catchFish, watchFishing, startFishing, DIFFICULTY,
} from '../src/game.js';

test('spawnFish', async (t) => {
  await t.test('creates correct number of promises', async () => {
    const count = DIFFICULTY.EASY.fish;
    const fishes = spawnFish(count);
    assert.strictEqual(fishes.length, count);
    assert.ok(Array.isArray(fishes));
    assert.ok(fishes.every((f) => f instanceof Promise));
    await Promise.allSettled(fishes);
  });

  await t.test('resolves within time limit', async () => {
    const fishes = spawnFish(1);
    const start = Date.now();
    await Promise.allSettled(fishes);
    const duration = Date.now() - start;
    assert.ok(duration <= 5100);
  });
});

test('catchFish', async (t) => {
  await t.test('returns valid results object', async () => {
    const results = await catchFish(DIFFICULTY.EASY.fish);
    assert.ok('caught' in results);
    assert.ok('escaped' in results);
    assert.strictEqual(typeof results.caught, 'number');
    assert.strictEqual(typeof results.escaped, 'number');
  });

  await t.test('total matches difficulty level', async () => {
    const count = DIFFICULTY.MEDIUM.fish;
    const { caught, escaped } = await catchFish(count);
    assert.strictEqual(caught + escaped, count);
  });
});

test('game flow', async (t) => {
  await t.test('startFishing executes without errors', async () => {
    await startFishing(DIFFICULTY.EASY.fish);
  });

  await t.test('watchFishing executes without errors', async () => {
    await watchFishing(2);
  });
});

test('difficulty levels', async (t) => {
  await t.test('has correct fish counts', () => {
    assert.strictEqual(DIFFICULTY.EASY.fish, 3);
    assert.strictEqual(DIFFICULTY.MEDIUM.fish, 5);
    assert.strictEqual(DIFFICULTY.HARD.fish, 10);
  });
});
