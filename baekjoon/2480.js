const fs = require("fs");
const [first, middle, last] = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .split(" ")
  .map((v) => Number(v));

if (first === middle && first === last && middle === last) {
  console.log(first * 1000 + 10000);
}

if (first !== middle && first !== last && middle !== last) {
  console.log(Math.max(first, middle, last) * 100);
}

if (
  (first === middle && first !== last && middle !== last) ||
  (first !== middle && first === last && middle !== last)
) {
  console.log(first * 100 + 1000);
}

if (first !== middle && first !== last && middle === last) {
  console.log(middle * 100 + 1000);
}
