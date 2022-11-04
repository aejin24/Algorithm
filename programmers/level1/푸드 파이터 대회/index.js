// https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript

const case1 = [1, 3, 4, 6];
const case2 = [1, 7, 1, 2];

function solution(food) {
  const count = [];

  for (let i = 1, max = food.length; i < max; i++) {
    count.push(String(i).repeat(parseInt(food[i] / 2)));
  }

  return `${count.join("")}0${count.reverse().join("")}`;
}

const result1 = solution(case1);
const result2 = solution(case2);

console.log("*** result1 ***");
console.log(result1);

console.log("*** result2 ***");
console.log(result2);
