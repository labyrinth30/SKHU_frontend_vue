// 1) 모음 위치
// "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."
// 위 문자열에서 모음(aeiou)들의 위치를 출력하는 코드를 구현하시오.

// let a = 'When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.';

// let arr = ['a', 'e', 'i', 'o', 'u'];
// while (arr.length > 0) {
//     let vowel = arr.pop();
//  

let a = 'When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.';

let vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < vowels.length; i++) {
    let vowel = vowels[i];
    let position = a.indexOf(vowel);
    console.log(`모음 '${vowel}'의 위치: ${position}`);
}
