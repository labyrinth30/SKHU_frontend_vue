function callback(result, i) { 
    console.log(result + ", " + i); 
    return result + i; 
  }
  
  let a1 = [10, 20, 30, 40, 50];
  let sum = a1.reduce(callback, 0);
  console.log(sum);
  
//   a1 배열의 원소 각각에 대해서 callback 콜백함수를 호출한다.
//   function callback(result, i)
//   callback 함수가 호출될 때, a1 배열의 각각의 원소가 i 파라미터 변수에 전달된다
//   콜백 함수를 처음 호출할 때, result에는 최초값이 전달된다.
//   그 다음 부터 result에 전달되는 값은, 직전에 callback 함수가 리턴한 값이다.
  