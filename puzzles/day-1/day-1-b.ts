import { readData } from '../../shared.ts';
import chalk from 'chalk';

interface NumberWithIndex {
  number: number | null;
  index: number | null;
}

export async function day1b(dataPath?: string) {
  const data = await readData(dataPath);
  let sum = 0;
  for (const line of data) {
    sum += getNumber(line);
  }
  return sum;
}

function getNumber(line: string): number {
  let firstDigit: NumberWithIndex = { number: null, index: null };
  let lastDigit: NumberWithIndex = { number: null, index: null };
  const wordsFirstNumberWithIndex: NumberWithIndex = {
    number: null,
    index: null,
  };
  const wordsLastNumberWithIndex: NumberWithIndex = {
    number: null,
    index: null,
  };
  const numbers = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (const number of numbers) {
    if (line.includes(number)) {
      const firstIndex = line.indexOf(number);
      const lastIndex = line.lastIndexOf(number);
      if (
        wordsFirstNumberWithIndex.number === null ||
        firstIndex < wordsFirstNumberWithIndex.index
      ) {
        wordsFirstNumberWithIndex.number = numbers.indexOf(number) + 1;
        wordsFirstNumberWithIndex.index = firstIndex;
      }
      if (
        wordsLastNumberWithIndex.number === null ||
        lastIndex > wordsLastNumberWithIndex.index
      ) {
        wordsLastNumberWithIndex.number = numbers.indexOf(number) + 1;
        wordsLastNumberWithIndex.index = lastIndex;
      }
    }
  }
  for (let i = 0; i < line.length; i++) {
    if (!isNaN(Number(line.charAt(i)))) {
      if (firstDigit.number == null) {
        firstDigit.number = Number(line.charAt(i));
        firstDigit.index = i;
      }
      lastDigit.number = Number(line.charAt(i));
      lastDigit.index = i;
    }
  }

  if (wordsFirstNumberWithIndex.number !== null) {
    firstDigit.number =
      firstDigit.index < wordsFirstNumberWithIndex.index
        ? firstDigit.number
        : wordsFirstNumberWithIndex.number;
  }
  if (wordsLastNumberWithIndex.number !== null) {
    lastDigit.number =
      lastDigit.index > wordsLastNumberWithIndex.index
        ? lastDigit.number
        : wordsLastNumberWithIndex.number;
  }
  return firstDigit.number * 10 + lastDigit.number;
}

const answer = await day1b();
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
