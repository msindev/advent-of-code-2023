import { readData } from '../../shared.ts';
import chalk from 'chalk';

interface Race {
  time: number;
  distance: number;
}

const races: Race[] = [];

export async function day6a(dataPath?: string) {
  const data = await readData(dataPath);
  prepareData(data[0], data[1]);
  let numberOfWays = 1;
  for (const race of races) {
    numberOfWays *= numberOfWaysToWinRace(race.time, race.distance);
  }
  return numberOfWays;
}

function prepareData(time: string, distance: string) {
  const timeArray = time
    .substring(time.indexOf(':') + 1)
    .split(' ')
    .filter((x) => x !== '');
  const distanceArray = distance
    .substring(distance.indexOf(':') + 1)
    .split(' ')
    .filter((x) => x !== '');
  for (let i = 0; i < timeArray.length; i++) {
    races.push({
      time: parseInt(timeArray[i]),
      distance: parseInt(distanceArray[i]),
    });
  }
}

function numberOfWaysToWinRace(time: number, distance: number) {
  for (let i = 0; i <= time; i++) {
    if (i * (time - i) > distance) {
      return time + 1 - 2 * i;
    }
  }
}

const answer = await day6a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
