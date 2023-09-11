let s = "one two three four";
let a = s.split(" ");
for (let i = 0; i < a.length; ++i)
console.log(a[i]);

// 문자열.split(구분_문자열)
// 문자열을 구분_문자열을 기준으로 잘라서, 배열을 만들어서 리턴한다.
// 원본 문자열은 변경되지 않는다.