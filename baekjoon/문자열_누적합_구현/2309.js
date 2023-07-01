const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v))
  .sort((a, b) => a - b);

let flush = false;
let result = [];

const sum = input.reduce((acc, current) => acc + current, 0);

for (let i = 0, max = input.length - 1; i < max; i++) {
  for (let j = i + 1, max2 = input.length; j < max2; j++) {
    if (sum - input[i] - input[j] === 100) {
      flush = true;
      result = input.filter((it) => it !== input[i] && it !== input[j]);

      break;
    }
  }

  if (flush) break;
}

console.log(result.join("\n"));
