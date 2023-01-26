// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript

const case1 = [1, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1];
const case2 = [1, 3, 2, 1, 2, 1, 3, 1, 2];

function solution(ingredient) {
  let count = 0;
  let arr = [];

  for (let i = 0, max = ingredient.length; i < max; i++) {
    arr.push(ingredient[i]);

    if (i >= 3) {
      const tmp = arr.slice(-4).join("");
      if (tmp === "1231") {
        ++count;

        arr.splice(-4, 4);
      }
    }
  }

  return count;
}

const result1 = solution(case1);
const result2 = solution(case2);

console.log("*** result1 ***");
console.log(result1);

console.log("*** result2 ***");
console.log(result2);
