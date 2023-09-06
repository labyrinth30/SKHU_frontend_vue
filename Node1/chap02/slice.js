let a = [0, 1, 2, 3];
console.log(a.slice(0, 1));
console.log(a.slice(0, 2));
console.log(a.slice(1, 2));
console.log(a.slice(1, 3));
console.log(a.slice(1, a.length));
console.log(a.slice(0));

let b  = a.slice(0);
let c = [...a];

// 배열 복제