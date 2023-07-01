const fs = require("fs");
const input = fs
  .readFileSync("../input.txt") // "/dev/stdin"
  .toString()
  .trim();

const strLength = input.length;
const max = parseInt(strLength / 2);

let checked = 0;
for (let i = 0; i < max; i++) {
  if (input[i] === input[strLength - 1 - i]) {
    checked++;
  }
}

if (checked === max) {
  console.log(1);
} else {
  console.log(0);
}

// 다른 사람 풀이
console.log(input.split("").reverse().join("") === input ? 1 : 0);
