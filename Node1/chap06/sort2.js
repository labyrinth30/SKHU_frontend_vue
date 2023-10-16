let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
  ];
  
  persons.sort((p1, p2) => p1.name.localeCompare(p2.name));
  console.log(persons);
  
// localeCompare() 메소드는, 문자열을 비교해서, 정렬 순서를 리턴한다.
// sort() 메소드는, 배열의 원소를 정렬한다.  