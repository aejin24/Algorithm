const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .split("\n");

for (let i = 0, max = input.length; i < max; i++) {
  const a = Number(input[i].split(" ")[0]);
  const b = Number(input[i].split(" ")[1]);

  if (!a && !b) break;

  console.log(a + b);
}
