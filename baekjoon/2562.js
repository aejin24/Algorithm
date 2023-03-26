const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .split("\n")
  .map((v) => Number(v));

const max = Math.max(...input);
console.log(`${max} ${input.indexOf(max) + 1}`);
