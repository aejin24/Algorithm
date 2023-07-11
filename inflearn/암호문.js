// https://jsalgo.co.kr/?page=2# (정규표현식)

function solution(data) {
  const filterStr = data.match(/(r|e|v)(10|[0-9])/g);

  const sum = filterStr
    .reduce((acc, current) => acc + Number(current.substring(1)), 0)
    .toString();

  console.log(`${sum[0]}월 ${sum[1]}일`);
}

solution("a10b9r10ce33uab8wc918v2cv11v9");
