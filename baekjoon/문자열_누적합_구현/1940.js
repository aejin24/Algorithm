const fs = require("fs");
const input = fs
  .readFileSync("../input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const list = input[2].split(" ").map(Number);

let count = 0;

for (let i = 0; i < N; i++) {
  if (list.includes(M - list[i]) && list[i] !== M - list[i]) {
    count++;
    list[i] = false;
  }
}

console.log(count);
