// 4) 경로명
// let a = ["c:/temp/guide.hwp",
//  "c:/pj/frontend/chap05/substring1.js",
//  "homework.docx"]
// a 배열의 경로명들 각각에 대해서,
// 아래 부분들을 추출해서 출력하는 코드를 구현하시오.

// 파일 확장자 출력하기
// .hwp
// .js
// .docx

// 파일명 출력하기
// guide.hwp
// substring1.js
// homework.docx

let a = ["c:/temp/guide.hwp",
 "c:/pj/frontend/chap05/substring1.js",
 "homework.docx"]
 for(var i=0; i<a.length; ++i){
    let file = a[i];
    let fileExtension = file.split('.').pop();
    let fileName = file.split('/').pop();
    console.log(`.${fileExtension}`);
    console.log(fileName);
 }