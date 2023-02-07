const chessSet = [1, 1, 2, 2, 2, 8];

function solution(input) {
  input = input.split(" ");

  let answer = [];

  input.forEach((i, idx) => {
    answer.push(chessSet[idx] - Number(i));
  });

  answer = answer.join(" ");

  console.log(answer);
}

console.log("*** result ***");
solution("0 1 2 2 2 7");

console.log("*** result ***");
solution("2 1 2 1 2 1");
