let rectangle = {
    width: 5,
    height: 7,
    area : function() { return this.width * this.height; }
    };
console.log(rectangle.area());

// java 메소드에서 this는 생략 가능하다.
// javascript 메소드에서 this는 생략할 수 없다.