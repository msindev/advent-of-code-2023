import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day4a(dataPath?: string) {
  const data = await readData(dataPath);
  let sum = 0;
  for (const line of data) {
    sum += getPoints(line);
  }
  return sum;
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
  return count > 0 ? Math.pow(2, count - 1) : 0;
}

const answer = await day4a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
