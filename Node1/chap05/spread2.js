let person = { id: 3, name: "홍길동", age: 16, english: 90, math: 85, history: 95 };
let { name, age, ...scores } = person;
console.log("%s %d", name, age);
console.log(scores);

// name, age, scores 지역 변수가 생성된다.
//  name 지역 변수에 person.name 값이 대입되고,
//  age 지역 변수에 person.age 값이 대입된다.
// scores 지역 변수에 객체가 대입된다.
//  person 객체의 속성 중에서, name 속성과 age 속성을 제외한 나머지 속성들이 scores 객체에 복사된다.