// https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript

// k: 사과의 최고 점수, m: 한 박스에 들어있는 사과 수 score: 사과 배열
function solution(k, m, score) {
  let benefit = 0;

  score = score.sort((a, b) => b - a);

  let arr = [];

  for (let i = 0, scoreSize = score.length; i < scoreSize; i += m) {
    arr.push(score.slice(i, i + m));
  }

  for (const a of arr) {
    if (a.length !== m) continue;

    benefit += a[m - 1] * m;
  }

  return benefit;
}

console.log("*** result 1 ***");
console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));

console.log("*** result 2 ***");
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
