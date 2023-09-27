let name = "홍길동";
let age = 16;
let scores = { english: 90, math: 85, history: 95 };
let person1 = { name, age, scores };
console.log(person1);
let person2 = { name, age, ...scores };
console.log(person2);


//  받는 쪽의 ...는 모아서 받겠다
//  주는 쪽의 ...는 분해해서 주겠다. 그래서 {} 해제됨.