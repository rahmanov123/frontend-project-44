import { createRound, createGame } from '../index.js';
import { getRandom } from '../helpers.js';

function isEven(num) {
  return num % 2 === 0;
}

function initRound() {
  const randomNum = getRandom(1, 20);

  const question = String(randomNum);
  const answer = isEven(randomNum) ? 'yes' : 'no';

  return createRound(question, answer);
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default function runGame() {
  createGame(description, initRound);
}
