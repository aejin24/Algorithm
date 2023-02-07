function solution(input) {
  input = parseInt(input.split(" "), 10);

  if (input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0)) {
    console.log("1");
    return;
  }

  console.log("0");
}

console.log("*** result ***");
solution("2000");

console.log("*** result ***");
solution("1999");
