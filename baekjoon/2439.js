const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString();

for (let i = 1, max = Number(input); i <= max; i++) {
  console.log(" ".repeat(max - i) + "*".repeat(i));
}
