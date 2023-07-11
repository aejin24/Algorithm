// https://jsalgo.co.kr/?page=1# (요구사항 구현)
// 10진수 2진수 변환(parseInt(숫자문자열, 진수)), 아스키코드 문자열 변환 (String.fromCharCode(문자열))
function solution(data) {
  const convertData = data
    .map((d) => d.replace(/\s/g, "").replace(/\+/g, 1).replace(/\-/g, 0))
    .map((d2) => parseInt(d2, 2))
    .map((d3) => String.fromCharCode(d3));

  return convertData.join("");
}

solution([" + - - + - + - ", " + + + - + - + ", " + + - + + + - "]);
solution([
  " + + + - - + + ",
  " + + + - + - - ",
  "++----+",
  "+++ --+ -",
  "+++-+ - -",
]);
solution([" + + - - - - + ", " + + - + + - - ", "+ +-- +++ ", " ++- ++++"]);
