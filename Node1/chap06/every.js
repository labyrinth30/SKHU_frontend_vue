let a1 = [1, 2, 3, 4];
let a2 = [0, 2, 4, 6];
let isEven = (i) => i % 2 == 0;
console.log(a1.every(isEven));
console.log(a2.every(isEven));

// every 메소드의 파라미터는 콜백 함수이다.
// every 메소드는 배열의 각 원소에 대해서 이 콜백 함수를 호출한다.
// 콜백 함수 호출이 모두 true를 리턴하면, every 메소드도 true를 리턴한다.
// 콜백 함수 호출이 하나라도 false를 리턴하면, every 메소드는 false를 리턴한다.