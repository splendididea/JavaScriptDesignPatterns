/**
 * 일급 객체로 사용하는 예 
 * 1. 새로운 프로퍼티 추가 가능 
 * 2. 메서드로 사용 가능 
 * 3. 함수 객체에 새로운 변수 할당 된다. 
 */


var scareMe = function() {
    console.log("BOO!!!!");
    scareMe = function(){
        console.log("Double BOOO!!!!");
    };
};

scareMe();
scareMe();

scareMe.property = "properly";

console.log(scareMe.property);
var prank = scareMe;
console.log(prank.property);

var spooky = {
    boo: scareMe
}
prank();
prank();
spooky.boo();
spooky.boo();

console.log(spooky.boo.property);
console.log(scareMe.property);


var result = (function(){
    return 1 + 1;
}())

console.log(result);

var getResults = (function(){
    var res = 2 + 2;
    return function(){
        return res;
    }
}());

console.log(getResults());

// 클로저 
/**
 * 클로저는 함수의 변수가 해석되는 유효범위를 뜻한다. 
 */


var uniqueInteger = (function(){
    var counter = 10;
    return function() { return counter++; }
}());

console.log( uniqueInteger());
console.log( uniqueInteger());
console.log( uniqueInteger().counter);

var counter = function() {
    var n = 0;
    return {
        count: function() { return n++; },
        reset: function() { return n = 0;}
    }
}

var c = counter(), d = counter();
console.log( d.count() );
console.log( d.count() );

// function counter2(n) {
//     return{
//         get count(){ return n++; }
//         set count(m) { n = m; }
//     }
// }

// var cc = counter2(1000);

/**
 * 
 * @param {Object} o 
 * @param {Name} name 
 * @param {*} predicate 
 */
var addPrivateProperty = function(o, name, predicate) {
    var value;
    o["get" + name] = function() {return value;}
    o["set" + name] = function(v) {
        if(predicate && !predicate(v)) {
            throw Error("set" + name + ": invald value " + v);
        } else {
            value = v;
        }
    }
}

var o = {};
addPrivateProperty(o, "Name", function(x) { return typeof x === "string";});
o.setName("Frank");
console.log(o.getName());


var o = {
    name: 'Jay',
    sayName: function(){
        console.log(this.name)
    }
};

var f = {
    name: 'tiger'
//    var name = 'tiger';
    //console.log(name);
}
o.sayName.call(f);
// o.f;

var myFunc = function(param) {
    if(!myFunc.cache[param]){
        var result = {};
        myFunc.cache[param] = result;
    }
}

var sayHello = function(name) {
    if(this.name){
        name = this.name;
    }
    return "hello " + (name ? name : "") + "!!";
}

var alien = {
    name: 'alien',
}
console.log(sayHello());
console.log(sayHello("world"));

console.log( sayHello.apply(null, ["hello!!"]) );
console.log(sayHello.call(alien));

function addCurry(x, y){
    var oldx = x, oldy = y;
    if( typeof oldy === 'undefined'){
        return function(newy){
            return oldx + newy;
        }
    }
    return oldx + oldy;
}

console.log( addCurry(5));
console.log(addCurry(3,4));
console.log(addCurry(3)(4)); // 책에는 7 하자미나 실행되지 않는다. 

var add2000 = addCurry(2000);
console.log( add2000(50) );
/**
 * 
 * @param {function} fn 
 */
function schonfinkelize(fn) {
    var slice = Array.prototype.slice,
                stored_args = slice.call(arguments, 1);
                return function(){
                    var new_args = slice.call(arguments),

                }
}