function add(a, b) {
    return a + b;
    }
    let a = add(3, 4);
    console.log(a);
    let f = add;
    console.log(typeof f);
    let b = f(3, 4);
    console.log(b);

    // let a = add(3, 4);
    // 변수 a 에는 add(3, 4) 함수의 리턴값 7이 대입된다.
    // let f = add;d
    // 변수 f 에 대입되는 값은 add 함수이다.
    // typeof f
    // 변수 f 에 대입된 값은 함수이고, 그 값의 자료형은 function 이다.
    // let b = f(3, 4);
    // 변수 f의 값인 함수를 호출한다. 즉 add 함수가 호출된다.
    // 이 함수의 리턴값 7이 변수 b에 대입된다.