let person = { name: "홍길동", age: 16 }
person["age"] = 20
person[0] = "호형호제" // 속성명으로 숫자를 줄 수 있다.
person[1] = "도술"
console.log(person)
console.log(person.age);
console.log(person["age"]);
console.log(person[0])
console.log(person.length)