const fs = require("fs");
const input = fs
  .readFileSync("../input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [count, solutionCount] = input[0].split(" ").map(Number);

const nameToNum = new Map();
const numToName = new Map();

for (let i = 1; i <= count; i++) {
  nameToNum.set(input[i], i);
  numToName.set(i, input[i]);
}

for (let i = count + 1; i <= count + solutionCount; i++) {
  if (/[0-9]/.test(input[i])) {
    console.log(numToName.get(Number(input[i])));
  } else {
    console.log(nameToNum.get(input[i]));
  }
}

/**
 * 원래 코드
 *
 * const [count, solutionCount] = input[0].split(" ").map(Number);
 * for (let i = count + 1; i <= count + solutionCount; i++) {
 *  if (/[0-9]/.test(input[i])) {
 *    console.log(input[Number(input[i])]);
 *  } else {
 *    console.log(input.indexOf(input[i]));
 *  }
 * }
 *
 * 이렇게 풀면 시간 초과 발생
 * why? indexOf()의 시간 복잡도는 O(n) 인데, for 문으로 한 번 더 감쌌으니 위 코드의 시간 복잡도는 O(n^2) 이다.
 * 그래서 해시맵을 사용하면 시간 복잡도를 O(n)으로 줄일 수 있다.
 * 해시맵의 복잡도는 O(1)
 */
