import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day1a(dataPath?: string) {
  const data = await readData(dataPath);
  let sum = 0;
  for (const line of data) {
    sum += getNumber(line);
  }
  return sum;
}

function getNumber(line: string): number {
  let firstDigit = null;
  let lastDigit = null;
  for (const digit of line) {
    if (!isNaN(Number(digit))) {
      if (!firstDigit) {
        firstDigit = Number(digit);
      }
      lastDigit = Number(digit);
    }
  }
  return firstDigit * 10 + lastDigit;
}

const answer = await day1a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
