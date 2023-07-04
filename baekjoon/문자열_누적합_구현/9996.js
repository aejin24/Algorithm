const fs = require("fs");
const input = fs
  .readFileSync("../input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [prefix, postfix] = input[1].split("*");
const prefixLength = prefix.length;
const postfixLength = postfix.length;

const checkList = input.slice(2);
for (const item of checkList) {
  const itemLength = item.length;
  const firstStr = item.slice(0, prefixLength);
  const lastStr = item.slice(-1 * postfixLength, itemLength);

  /**
   * 1. 문자열 앞뒤 패턴이 일치하고
   * 2. 최소한 문자열 길이가 *을 제외한 문자열 길이보다 크거나 같아야 함 (문자열이 중복되면 안됨)
   */
  if (
    `${prefix} ${postfix}` === `${firstStr} ${lastStr}` &&
    itemLength >= prefixLength + postfixLength
  ) {
    console.log("DA");
  } else {
    console.log("NE");
  }
}
