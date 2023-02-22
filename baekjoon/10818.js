const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .split("\n")
  .map((v) => v.split(" "));

const num = input[1].map((i) => parseInt(i, 10));

console.log(`${Math.min(...num)} ${Math.max(...num)}`);
