import { createRound, createGame } from '../index.js';
import { getRandom } from '../helpers.js';

function findGcd(num1, num2) {
  return num2 === 0 ? num1 : findGcd(num2, num1 % num2);
}

function initRound() {
  const n1 = getRandom(1, 50);
  const n2 = getRandom(1, 50);
  const gcd = findGcd(n1, n2);

  const question = `${n1} ${n2}`;
  const answer = String(gcd);

  return createRound(question, answer);
}

const description = 'Find the greatest common divisor of given numbers.';

export default function runGame() {
  createGame(description, initRound);
}
