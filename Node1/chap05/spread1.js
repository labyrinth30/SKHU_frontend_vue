let person = { name: "홍길동", age: 16 };
let { name, age } = person;
console.log("%s %d", name, age);

// name, age 지역 변수가 생성된다.
//  name 지역 변수에 person.name 값이 대입되고,
//  age 지역 변수에 person.age 값이 대입된다.
// 지역 변수의 순서는 중요하지 않다. 지역 변수 이름이 객체의 속성명과 같아야 한다.