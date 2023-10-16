let a1 = [7, 3, 8, 6, 9, 5, 1, 4];
let max = a1.reduce((result, i) => i > result ? i : result, 0);
console.log(max);

// 배열의 최댓값을 구하는 방법
// 처음 result에는 0이 전달된다.