const fs = require("fs");
const input = fs
  .readFileSync("../input.txt") // "/dev/stdin"
  .toString();

let result = "";

for (const str of input) {
  let code = str.charCodeAt(0);

  if (/[a-zA-Z]/.test(str)) {
    code += 13;

    if (code > 122 && /[a-z]/.test(str)) {
      // 소문자
      code = 97 + (code - 123);
    }

    if (code > 90 && /[A-Z]/.test(str)) {
      // 대문자
      code = 65 + (code - 91);
    }
  }

  result += String.fromCharCode(code);
}

console.log(result);
