let a = "list.jsp?pg=324&sz=15".match(/pg=[0-9]+/)
console.log(a[0]); // 정규식에 일치하는 문자열
console.log(a.index); // 일치하는 문자열의 위치


