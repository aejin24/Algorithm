const fs = require("fs");
const input = fs
  .readFileSync("../input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const people = {};

input.shift();

input.forEach((i) => {
  if (Object.keys(people).includes(i[0])) {
    people[i[0]]++;
  } else {
    people[i[0]] = 1;
  }
});

let result = "";

for (const [key, value] of Object.entries(people)) {
  if (value >= 5) {
    result += key;
  }
}

console.log(result.length ? result.split("").sort().join("") : "PREDAJA");
