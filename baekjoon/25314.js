const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString();

console.log("long ".repeat(parseInt(Number(input) / 4)) + "int");
