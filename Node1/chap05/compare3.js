let person1 = { name: "홍길동", age: 16 };
let person2 = { name: "홍길동", age: 16 };

function equals(p1, p2) {
return p1.name == p2.name &&
p1.age == p2.age;
}

console.log(equals(person1, person2));

// 객체의 내부 값을 비교하려면, 위와 같은 비교 함수를 구현해야 한다.
// java에서는 이름이 같은 메소드가 여러 개일 수 있다. (method overloading)
// javscript에서는 이름이 같은 함수가 여러 개일 수 없다.