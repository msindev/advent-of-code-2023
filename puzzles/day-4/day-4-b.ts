import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day4b(dataPath?: string) {
  const data = await readData(dataPath);
  let matchingCardCount = [];
  let cards = [];
  for (const line of data) {
    matchingCardCount.push(getPoints(line));
    cards.push(1);
  }
  for (let i = 0; i < matchingCardCount.length; i++) {
    const points = matchingCardCount[i];
    for (let j = 0; j < points; j++) {
      cards[i + j + 1] += cards[i];
    }
  }
  return cards.reduce((a, b) => a + b, 0);
}

function getPoints(line: string) {
  line = line.substring(line.indexOf(':') + 1);
  const winningNumbers = line
    .substring(0, line.indexOf('|'))
    .trim()
    .split(' ')
    .filter((n) => n !== '');
  const myNumbers = line
    .substring(line.indexOf('|') + 1)
    .trim()
    .split(' ')
    .filter((n) => n !== '');
  let count = 0;
  for (const number of myNumbers) {
    if (winningNumbers.includes(number)) {
      count += 1;
    }
  }
  return count;
}

const answer = await day4b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
