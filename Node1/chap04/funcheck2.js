function add(a, b) {
    if (!b) b = 0;
    return a + b;
    }
    console.log(add(3, 4))
    console.log(add(3));


    // 변수 b 값이 undefined 이면,
    // if (b) 조건식은 false 이고, if (!b) 조건식은 true 이다.
    // if (b == undefine) 대신에 if (!b) 를 사용할 수 있다.