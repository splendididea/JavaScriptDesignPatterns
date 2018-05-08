/**
 * private static member
 * 동일한 생성자 함수로 생성된 객체들이 고유하는 멤버
 * 생성자 외부에서는 접근 불가
 * */

var Gadget = (function () {
    // static variable / properties
    var counter = 0;
    // 생성자의 새로운 버전을 반환
    return function () {
        console.log(counter += 1);
    }
}());

// var garget = new Gadget();
// var garget2 = new Gadget();
// var garget3 = new Gadget();

// 특권 메소드를 사용한 예제
var Gadget2 = (function () {
    var counter = 0,
        NewGarget;
    NewGarget = function () {
        counter += 1;
    };
    NewGarget.prototype.getLastId = function () {
        return counter;
    };
    return NewGarget;
}());

var iphone = new Gadget2();
console.log( iphone.getLastId() );