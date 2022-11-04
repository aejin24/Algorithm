// https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript

const case1 = ["aya", "yee", "u", "maa"];
const case2 = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];

function solution(babbling) {
  let count = 0;

  for (const b of babbling) {
    if (b.match(/(aya){2,}|(ye){2,}|(woo){2,}|(ma){2,}/g)) continue;

    let tmp = b.match(/aya|ye|woo|ma/g)?.join("") || "";

    if (tmp.length === b.length) count++;
  }

  return count;
}

const result1 = solution(case1);
const result2 = solution(case2);

console.log("*** result1 ***");
console.log(result1);

console.log("*** result2 ***");
console.log(result2);
