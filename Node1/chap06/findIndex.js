let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
    ];
    let index = persons.findIndex(p => p.age == 18);
    console.log(index);

    // findIndex 메소드의 파라미터는 콜백 함수이다.
    // findIndex 메소드는 배열의 각 원소에 대해서 이 콜백 함수를 호출한다.
    // findIndex 메소드는, 이 콜백 함수가 true를 리턴하는 첫번째 원소의 index를 리턴한다.