// 조합 알고리즘

const fs = require("fs");
const input = fs
  .readFileSync("../input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const list = input.filter((i) => isNaN(i)).map((i) => i.split(" "));
const clothGroup = input.filter((i) => !isNaN(i));
const loop = clothGroup.shift();

for (let i = 0; i < loop; i++) {
  const clothMap = new Map();

  list.splice(0, Number(clothGroup[i])).map((l) => {
    const [_, category] = l;
    const categoryCount = clothMap.get(category) ?? 0;

    clothMap.set(category, categoryCount + 1);
  });

  let count = 1;
  for (let value of clothMap.values()) {
    count *= ++value;
  }

  console.log(--count);
}
