const fs = require("fs");
const input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .split("\n");

const receiptPrice = Number(input[0]);
const itemCount = Number(input[1]);

let predictPrice = 0;
for (let i = 2, max = 2 + itemCount; i < max; i++) {
  const price = Number(input[i].split(" ")[0]);
  const count = Number(input[i].split(" ")[1]);

  predictPrice += price * count;
}

// 이거 아닌가?
// const predictPrice = input
//   .filter((_, index) => index > 1)
//   .reduce((acc, current) => {
//     const price = Number(current.split(" ")[0]);
//     const count = Number(current.split(" ")[1]);

//     return acc + price * count;
//   }, 0);

console.log(receiptPrice === predictPrice ? "Yes" : "No");
