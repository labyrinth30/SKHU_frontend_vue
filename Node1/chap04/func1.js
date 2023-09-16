function outterFunc() {
    function print(msg) {
    console.log(msg)
    }
    print("hello")
    }
    outterFunc()


//     outterFunc 함수 내부에 print 함수가 선언되었다.
// print 함수 선언 위치와 print 함수 호출 위치의 순서는 상관없다.