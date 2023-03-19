const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .split(" ");

const sum = input.reduce((sum, acc) => Number(acc) + sum, 0);

console.log(sum);
