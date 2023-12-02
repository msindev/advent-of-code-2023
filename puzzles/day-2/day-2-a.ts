import { readData } from '../../shared.ts';
import chalk from 'chalk';

const RED = 12;
const GREEN = 13;
const BLUE = 14;

export async function day2a(dataPath?: string) {
  const data = await readData(dataPath);
  let sumOfValidGames = 0;
  for (const line of data) {
    sumOfValidGames += isValidGame(line);
  }
  return sumOfValidGames;
}

function isValidGame(line: string) {
  const game = parseInt(line.substring(5, line.indexOf(':')));
  line = line.substring(line.indexOf(':') + 2);
  const records = line.split(';');
  for (const record of records) {
    const colorCubes = record.split(',').map((cube) => cube.trim());
    for (const cube of colorCubes) {
      const number = parseInt(cube.substring(0, cube.indexOf(' ')));
      const color = cube.substring(cube.indexOf(' ') + 1);
      if (!isValidColorCount(color, number)) return 0;
    }
  }
  return game;
}

function isValidColorCount(color: string, count: number): boolean {
  return (
    (color === 'red' && count <= RED) ||
    (color === 'green' && count <= GREEN) ||
    (color === 'blue' && count <= BLUE)
  );
}

const answer = await day2a();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
