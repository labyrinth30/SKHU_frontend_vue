let person1 = { name: "홍길동", age: 16 };
console.log(person1);

let name = "홍길동";
let age = 16;

let person2 = { name: name, age: age };
console.log(person2);

let person3 = { name, age };
console.log(person3);

// 속성명과 지역변수 명이 같을 때 사용 가능함.

// let person2 = { name: name, age: age };
// person2 지역 변수에 객체가 대입된다.
// 이 객체에는 name 속성과 age 속성이 만들어진다. (위 코드에서 name: 부분과 age: 부분은 속성의 이름이다)
// 이 속성들의 값은 각각 name, age 지역 변수의 값이다.