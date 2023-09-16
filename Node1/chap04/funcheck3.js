function add(a, b) {
    return a + (b || 0);
    }
    console.log(add(3, 4))
    console.log(add(3));

    // (b || 0) 표현식의 값
    // b 값이 숫자이면, 이 표현식의 값은 b 값이 된다.
    // b 값이 undefined 이면, 이 표현식의 값은 0 이다.
    // (e1 || e2) 의 값은
    // e1 표현식의 값이 true 에 해당하는 값이면, 결과는 e1 값이고,
    // e1 표현식의 값이 false 에 해당하는 값이면, 결과는 e2 값이다.