import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day2b(dataPath?: string) {
  const data = await readData(dataPath);
  let sumOfCubePowers = 0;
  for (const line of data) {
    sumOfCubePowers += powerOfCubes(line);
  }
  return sumOfCubePowers;
}

function powerOfCubes(line: string) {
  const game = parseInt(line.substring(5, line.indexOf(':')));
  line = line.substring(line.indexOf(':') + 2);
  const minCubesRequired = { red: 0, green: 0, blue: 0 };
  const records = line.split(';');
  for (const record of records) {
    const colorCubes = record.split(',').map((cube) => cube.trim());
    for (const cube of colorCubes) {
      const number = parseInt(cube.substring(0, cube.indexOf(' ')));
      const color = cube.substring(cube.indexOf(' ') + 1);
      if (color === 'red') {
        minCubesRequired.red = Math.max(minCubesRequired.red, number);
      } else if (color === 'green') {
        minCubesRequired.green = Math.max(minCubesRequired.green, number);
      } else if (color === 'blue') {
        minCubesRequired.blue = Math.max(minCubesRequired.blue, number);
      }
    }
  }
  return minCubesRequired.red * minCubesRequired.blue * minCubesRequired.green;
}

const answer = await day2b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
