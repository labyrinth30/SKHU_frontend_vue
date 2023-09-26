const MAX = 1000, MIN = 1;
let count = {};
for (let i = 0; i < 100; ++i) {
  let a = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  count[a] = count[a] ? count[a] + 1 : 1; // if문을 삼항연산자로 간단하게 구현함
}
for (let key in count)
  if (count[key] >= 2) console.log("%d %d", key, count[key]);
console.log("length = ", Object.keys(count).length);
