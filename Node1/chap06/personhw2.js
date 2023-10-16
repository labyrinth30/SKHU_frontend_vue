// 위 persons 배열에서 age 최대값 사람을 찾아서 출력하는 코드를 구현하라.
// reduce 메소드를 사용하여 구현하라.
let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
    ];

    let max = persons.reduce((result, i)  => i.age > result.age ? i : result);
    console.log(max);

// 만약 reduce() 메소드에서 두 번째 파라미터에 초기값을 주지 않으면, 배열의 첫번째 원소가 초기값이 된다.
// 그러므로 위 코드에서 result에는 persons[0]이 전달된다.

// i에는 persons[1]이 전달된다.

// i.age > result.age ? i : result가 true를 리턴하면, result에는 persons[1]이 전달된다.

// i에는 persons[2]가 전달된다.

// i.age > result.age ? i : result가 true를 리턴하면, result에는 persons[2]가 전달된다.