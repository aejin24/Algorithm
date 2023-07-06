const fs = require("fs");
const input = fs
  .readFileSync("../input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [length, day] = input[0].split(" ").map(Number);
const temperature = input[1].split(" ").map(Number);

const temperatureSum = [];

for (let i = 0; i < length - day + 1; i++) {
  let sum = temperature[i];
  for (let j = i + 1, max = i + day; j < max; j++) {
    sum += temperature[j];
  }

  temperatureSum.push(sum);
}

console.log(temperatureSum);

console.log(Math.max(...temperatureSum));
