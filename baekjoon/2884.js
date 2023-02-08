function solution(hour, minute) {
  if (minute < 45) {
    console.log(`${hour > 0 ? hour - 1 : 23} ${minute + 15}`);
  } else {
    console.log(`${hour} ${minute - 45}`);
  }
}

console.log("*** result1 ***");
solution(Number("10"), Number("10"));

console.log("*** result2 ***");
solution(Number("0"), Number("30"));

console.log("*** result3 ***");
solution(Number("23"), Number("40"));
