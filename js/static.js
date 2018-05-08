// var Gadget = function () {
//
// };
//
// Gadget.isShiny = function () {
//     return "your bet";
// };
//
// Gadget.prototype.setPrice = function (price) {
//     this.price = price;
// };

// static 변수 호출
// console.log(Gadget.isShiny());
// var gadget = new Gadget();
// console.log(gadget.setPrice('2222'));

// 인스턴스 메서드를 스태틱 메서드 호출하듯 하면 호출 되지 않는다.
// console.log(Gadget.setPrice('eeeee'));
// 마찬가지로 인스턴스에서 스태틱메서드를 호출되지 않는다.

// Gadget.prototype.isShiny = Gadget.isShiny;
// console.log(gadget.isShiny());

// 생성자
var Gadget = function (price) {
    this.price = price;
};

// 스태틱 메서드
Gadget.isShiny = function () {
    // 항상 실행된다.
    var msg = "you bet";
    if (this instanceof Gadget){
        // static 하지 않은 호출의 경우만 동작한다.
        msg += ', it cost $ ' + this.price + '!!';
    }
    return msg;
};

Gadget.prototype.isShiny = Gadget.isShiny();

Gadget.prototype.isShiny2 = function () {
    return Gadget.isShiny.call(this);
};

console.log( Gadget.isShiny() );
var gadget2 = new Gadget('22222');
console.log(gadget2.isShiny);
console.log(gadget2.isShiny2());