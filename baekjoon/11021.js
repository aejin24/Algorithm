const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .split("\n");

const loop = Number(input[0]);

for (let i = 1; i <= loop; i++) {
  const [first, last] = input[i].split(" ");

  console.log(`Case #${i}: ${Number(first) + Number(last)}`);
}
