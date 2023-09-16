function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; ++i)
    result += arguments[i];
    return result;
    }
    console.log(sum(1, 2, 3, 4));
    console.log(sum(4));
    console.log(sum());


//     ES6 이전 옛날 문법에서는, arguments 키워드를 이용해서 구현해야 한다.
// arguments 키워드는 모든 함수에서 사용할 수 있다.
// arguments 키워드의 값은, 함수를 호출할 때 전달된 파라미터 값 목록이 배열로 만들어진 것이다