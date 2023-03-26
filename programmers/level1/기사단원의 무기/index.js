// https://school.programmers.co.kr/learn/courses/30/lessons/136798?language=javascript

function solution(number, limit, power) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    let count = getDivisorCount(i);
    if (count > limit) {
      result += power;
    } else {
      result += count;
    }
  }

  return result;
}

// 약수 개수 구하는 알고리즘 sqrt 로 해결할 필요가 있어보임 원리는 아직 파악 불가
function getDivisorCount(number) {
  let count = 1;

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      ++count;
    }
  }

  return count;
}

console.log("*** result1 ***");
console.log(solution(5, 3, 2));

console.log("*** result2 ***");
console.log(solution(10, 3, 2));
