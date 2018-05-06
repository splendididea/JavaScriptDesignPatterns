var MYAPP = MYAPP || {};

MYAPP.namespace = function(ns_space){
    var parts = ns_space.split('.'),
        parent = MYAPP, 
        i;

    // 처음 중복되는 전역객체 제거
    if(parts[0] === 'MYAPP'){
        parts = parts.slice(1);
    }

    for(i = 0; i < parts.length; i += 1) {
        // 프로퍼티가 없으면 생성한다. 
        if( typeof parent[parts[i]] === 'undefined' ) {
            parent[parts[i]] = {};
        }

        parent = parent[parts[i]];
    }
    return parent;
}

var module2 = MYAPP.namespace('MYAPP.modules.module2');
module2 = MYAPP.modules.module2;

console.log(MYAPP);

MYAPP.namespace('modules.module51');

console.log(MYAPP);


// 의존관계 선언 
// 의존을 맺는 라이브러리들을 지역변수에 참조해 놓고 사용하면 
// 속도에서 상당히 이점을 만들 수 있다. 
function test1(){
    console.log(MYAPP.modules.module2);
    console.log(MYAPP.modules.module51);
}

function test2(){
    var modules = MYAPP.modules;
    console.log(modules.module2);
    console.log(modules.module51);
}

// 비공개 프로퍼티와 메서드 
// javascript는 객체의 모든 멤버는 public이다. 
var myobj = {
    myprop: 1,
    getProp: function(){
        return this.myprop;
    }
}

console.log(myobj.myprop);
console.log(myobj.getProp());

// 생성자 역시 마찾가지
function Gadget(){
    this.name = 'ipad';
    this.stretch = function(){
        return 'iPad';
    };
};
var toy = new Gadget();
console.log(toy.stretch());
console.log(toy.name);

// 비공개 멤버(private) 
// 클로저를 사용하면 생성 가능 
function Gadget2(){
    var name = 'ipad';
    this.getName = function(){
        return name;
    }
}

var toy2 = new Gadget2();
console.log(toy2.getName());
console.log(toy2.name);

// 비공개 멤버의 허점 
/**
 * 특권 메서드에서 비공개 변수의 값을 바로 반환할 경우 이 변수가 객체나 배열
 * 이라면 값이 아닌 참조가 반환되기 때문에 외부 코드에서 비공개 변수 값을 수정 할 수 있다. 
 */

function Gadget3() {
    var specs = {
        screen_width: 300,
        screen_height: 480, 
        color: 'white'
    };

    // 공개 함수
    this.getSpecs = function(){
        return specs;
    }
};

var toy3 = new Gadget3(), 
    specs = toy3.getSpecs();

specs.color = 'black';
specs.price = 'freeee';

console.dir(toy3.getSpecs());

var myObj2 = (function(){
    var name = 'my, oh my private Member';
    return{
        getName: function(){
            return name;
        }
    }
})();

console.log( myObj2.getName() );


var Gadget4 = (function(){
    var privateName = 'Theodor';
    return {
        getMyName: function(){
            return privateName;
        }
    }
}())

console.log( Gadget4.getMyName() );

// 비공개 함수를 공개 메서드로 노출시키는 방법 
var myarray;

(function(){
    var astr = "[object Array]", 
        toString = Object.prototype.toString;

    function isArray(a) {
        return toString.call(a) === astr;
    }

    function indexOf(haystack, needle){
        var i = 0, 
            max = haystack.length;
        for(; i < max; i += 1){

        }
    }
}());
