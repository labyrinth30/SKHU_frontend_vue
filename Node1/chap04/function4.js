function add(a, b) {
    return a + b;
    }
    console.log(add(3, 4))
    console.log(add(3));

    // 파라미터 값이 한 개만 전달되기 때문에,
    // 파라미터 변수 a의 값은 3 이고, 파라미터 변수 b의 값은 undefined 가 된다.
    // 3 + undefined 표현식의 값은, 계산할 수 없으므로, NaN 이다.