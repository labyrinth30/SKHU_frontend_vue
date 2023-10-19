let persons = [
    {name: '홍길동', age:16},
    {name: '임꺽정', age:17},
    {name: '전우치', age:18},
    {name: '성춘향', age:19},
];
// 나이가 홀수인 사람만 들어있는 a1 배열 생성, filter() 함수 사용
let a1 = persons.filter((item) => item.age % 2 === 1); // 나이가 홀수인 사람만 들어있는 a1 배열 생성

// 나이가 짝수인 사람만 들어있는 a2 배열 생성
let a2 = persons.filter((item) => item.age % 2 === 0); // 나이가 짝수인 사람만 들어있는 a2 배열 생성

console.log(a1);
console.log(a2);

// 출력
// [ { name: '임꺽정', age: 17 }, { name: '성춘향', age: 19 } ]
// [ { name: '홍길동', age: 16 }, { name: '전우치', age: 18 } ]
// 반복문을 사용하지 않고 filter() 함수를 사용하여 구현