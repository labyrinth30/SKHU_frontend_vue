function outterFunc() {
    print("hello")
    function print(msg) {
    console.log(msg)
    }
    }
    outterFunc()
    // print("world") 여기서 호출할 수 없다.


    // outterFunc 함수 내부에 print 함수가 선언되었다.
    // print 함수는 outterFunc 함수 내부에서만 호출 할 수 있고, 외부에서는 호출할 수 없다.