const fs = require("fs");
let input = fs
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .split("\n")
  .map((v) => v.split(" "));

function solution(hour, minute, time) {
  minute += time;

  if (minute > 59) {
    let tmp = parseInt(minute / 60, 10);
    hour += tmp;
    minute -= 60 * tmp;
  }

  if (hour > 23) {
    hour -= 24;
  }

  console.log(`${hour} ${minute}`);
}

solution(Number(input[0][0]), Number(input[0][1]), Number(input[1][0]));
