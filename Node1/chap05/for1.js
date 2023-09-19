let person = { id: 101, name: "홍길동", age: 16 };
for (let key in person) {
    let value = person[key];
    console.log("%s: %s", key, value);
}

// person 객체의 멤버 변수 각각에 대해서, 그 이름이 key 변수에 대입되고 반복문이 실행된다.
// person 객체의 멤버 변수는 3개 이므로, 위 for 문은 3번 반복한다.

// 첫째 반복에서 key 변수에 "id" 문자열이 대입된다.
// 둘째 반복에서 key 변수에 "name" 문자열이 대입된다.
// 셋째 반복에서 key 변수에 "age" 문자열이 대입된다.