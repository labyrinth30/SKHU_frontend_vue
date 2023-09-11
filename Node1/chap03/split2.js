let s = "one, two,three four";
let a = s.split(/[\t ,]+/);
for (let i = 0; i < a.length; ++i)
console.log(a[i]);

// 구분 문자열에 정규식 사용 가능함.