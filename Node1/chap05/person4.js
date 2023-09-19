function createPerson(s, i) {
    return { name: s, age: i }; // 객체 생성하는 함수
    }
    
    let person1 = createPerson("홍길동", 16);
    let person2 = createPerson("임꺽정", 18);
    console.log(person1);
    console.log(person2);

    // createPerson 함수는 객체를 생성하여 리턴한다.
    // 그 객체 내부에는 name 멤버 변수와 age 멤버 변수가 만들어진다.
    // name 멤버 변수에 s 파라미터 변수의 값이 대입되고,
    // age 멤버 변수에 i 파라미터 변수의 값이 대입된다.