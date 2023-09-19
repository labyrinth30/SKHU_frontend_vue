let rectangle = {
    width: 5,
    height: 7
};

rectangle.area = function () {
    return this.width * this.height;
}
console.log(rectangle.area());


// rectangle.area = function () {
// return this.width * this.height;
// }
// reactangle 객체에 area 멤버 변수가 있다면, 그 멤버 변수에 함수를 대입한다.
// area 멤버 변수가 없다면 만들고, 그 멤버 변수에 함수를 대입한다.
// 객체의 멤버 변수에 대입된 함수는, 그 객체의 메소드가 된다.