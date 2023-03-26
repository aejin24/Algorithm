const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const loop = input.length;

for (let i = 0; i < loop; i++) {
  const [first, last] = input[i].split(" ");

  console.log(Number(first) + Number(last));
}
