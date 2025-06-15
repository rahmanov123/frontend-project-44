import { createRound, createGame } from '../index.js';
import { getRandom } from '../helpers.js';

function createProgression(first, step, length) {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(first + i * step);
  }

  return result;
}

function initRound() {
  const first = getRandom(1, 10);
  const step = getRandom(1, 5);
  const length = getRandom(5, 10);
  const progression = createProgression(first, step, length);
  const randomIndex = getRandom(0, progression.length - 1);
  const hiddenElement = progression[randomIndex];

  const question = progression
    .map((elem) => (elem === hiddenElement ? '..' : elem))
    .join(' ');
  const answer = String(hiddenElement);

  return createRound(question, answer);
}

const description = 'What number is missing in the progression?';

export default function runGame() {
  createGame(description, initRound);
}
