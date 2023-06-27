const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim();

const alpa = [];
for (let i = 0; i < 26; i++) {
  alpa.push(0);
}

for (let i = 0, max = input.length; i < max; i++) {
  alpa[input.charCodeAt(i) - 97] += 1;
}

console.log(alpa.join(" "));
