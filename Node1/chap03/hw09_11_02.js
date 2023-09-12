// 2) 공백 제거
// 위 문제의 문자열에서 공백을 모두 제거한 새 문자열을 만들고,
// 그 문자열을 출력하시오.

let a = 'When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.';
console.log(a.replace(/ /g,''));



// 다 바꾸고 싶다면 첫번째 인수로 정규식 쓰기
// 정규식/g
// g는, 일치하는 부분 문자열들을 전부 치환하라는 옵션이다.