const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .split("\n");

const target = Number(input[0].split(" ")[1]);
const arr = input[1].split(" ");
console.log(arr.filter((a) => Number(a) < target).join(" "));
