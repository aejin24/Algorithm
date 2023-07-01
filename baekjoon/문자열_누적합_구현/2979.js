const fs = require("fs");
const input = fs
  .readFileSync("../input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let price = [];
const arrive = [];
const leave = [];

input.forEach((i, idx) => {
  if (idx === 0) {
    price = i.split(" ").map(Number);
  } else {
    const [x, y] = i.split(" ").map(Number);
    arrive.push(x);
    leave.push(y);
  }
});

const max = Math.max(...arrive, ...leave);
const total = Array(max).fill(0);

for (let i = 0; i < 3; i++) {
  for (let j = arrive[i]; j < leave[i]; j++) {
    total[j]++;
  }
}

const sum = total.reduce(
  (acc, current) => acc + current * (current ? price[current - 1] : 0),
  0
);

console.log(sum);
