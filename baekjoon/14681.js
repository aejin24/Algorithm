function solution(input) {
  const x = Number(input[0]);
  const y = Number(input[1]);

  if (x > 0) y > 0 ? console.log("1") : console.log("4");
  if (x < 0) y > 0 ? console.log("2") : console.log("3");
}

const test1 = `12
5`;

console.log("*** result ***");
solution(test1.split("\n"));

const test2 = `9
-13`;

console.log("*** result ***");
solution(test2.split("\n"));
