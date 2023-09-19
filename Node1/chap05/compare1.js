let person1 = { name: "홍길동", age: 16 };
let person2 = { name: "홍길동", age: 16 };

let p = person1;

console.log(person1 == person2);
console.log(person1 == p);

// 참조 비교 (== 연산자)
// 참조형인 객체를 == 연산자로 비교하면, 객체 내부 값을 비교하지 않고,
// 두 참조를 비교한다. (두 참조가 동일한 객체를 참조하는지 비교한다.)

// 참조를 비교하는 것은 identity를 비교하는 것이다.
// 내부 값을 비교하는 것은 equality를 비교하는 것이다.