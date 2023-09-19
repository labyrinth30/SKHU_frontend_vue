function createPerson() {
    return { name: "홍길동", age: 16 }
    }
    let person1 = createPerson()
    let person2 = createPerson()

    person1.name = "임꺽정"
    person2.age = 20
    
    console.log(person1)
    console.log(person2)

// createPerson 함수는 호출될 때 마다 새 객체를 생성해서 리턴한다.
// 그래서 person1 변수와 person2 변수가 참조하는 객체는 서로 다른 두 객체이다