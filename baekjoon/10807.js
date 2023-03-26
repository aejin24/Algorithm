const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .split("\n");

const arr = input[1].split(" ");
console.log(arr.filter((a) => a === input[2]).length);
