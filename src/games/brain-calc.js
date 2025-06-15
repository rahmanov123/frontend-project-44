import { cons, car, cdr } from '@hexlet/pairs';

import { createGame, createRound } from '../index.js';
import { getRandom } from '../helpers.js';

function createOperation(operator, action) {
  return cons(operator, action);
}

function getOperator(operation) {
  return car(operation);
}

function getAction(operation) {
  return cdr(operation);
}

const sum = createOperation('+', (num1, num2) => num1 + num2);
const sub = createOperation('-', (num1, num2) => num1 - num2);
const mlp = createOperation('*', (num1, num2) => num1 * num2);

const operations = [sum, sub, mlp];

function getRandomOperation() {
  return operations[getRandom(0, operations.length - 1)];
}

function initRound() {
  const op1 = getRandom(0, 10);
  const op2 = getRandom(0, 10);
  const operation = getRandomOperation();
  const action = getAction(operation);
  const operator = getOperator(operation);

  const question = `${op1} ${operator} ${op2}`;
  const answer = String(action(op1, op2));

  return createRound(question, answer);
}

const description = 'What is the result of the expression?';

export default function runGame() {
  createGame(description, initRound);
}
