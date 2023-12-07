import { readData } from '../../shared.ts';
import chalk from 'chalk';

let calculatedTime;
let calculatedDistance;

export async function day6b(dataPath?: string) {
  const data = await readData(dataPath);
  prepareData(data[0], data[1]);
  console.log(calculatedTime, calculatedDistance);
  return numberOfWaysToWinRace(
    parseInt(calculatedTime),
    parseInt(calculatedDistance)
  );
}

function prepareData(time: string, distance: string) {
  calculatedTime = time
    .substring(time.indexOf(':') + 1)
    .split(' ')
    .filter((x) => x !== '')
    .join('');
  calculatedDistance = distance
    .substring(distance.indexOf(':') + 1)
    .split(' ')
    .filter((x) => x !== '')
    .join('');
}

function numberOfWaysToWinRace(time: number, distance: number) {
  for (let i = 0; i <= time; i++) {
    if (i * (time - i) > distance) {
      return time + 1 - 2 * i;
    }
  }
}

const answer = await day6b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
