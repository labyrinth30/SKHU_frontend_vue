function add(a, b) {
    if (b == undefined) b = 0;
    return a + b;
    }
    console.log(add(3, 4))
    console.log(add(3));

    // if (b == undefined) b = 0;
    // 두 번째 파라미터가 전달되지 않은 경우에, b 변수 값은 undefined 이고,
    // 이 if 문이 true 가 된다.