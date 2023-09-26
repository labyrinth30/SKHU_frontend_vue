let a = ["one", "two", "three", "four"];
for (let s of a) // 배열의 원소가 하나씩 꺼내지며 반복한다
  console.log(s);
let person = { name: "홍길동", age: 16, 1: "도술", 0: "호형호제" };
for (let k in person) // 객체의 속성명이 하나씩 꺼내지며 반복한다
  console.log(k); // 객체는 of 연산자로 탐색할 수 없다.
