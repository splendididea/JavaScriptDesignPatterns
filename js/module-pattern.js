/**
 * 모듈 패턴은 여러개의 패턴을 조합해서 사용한다. 
 * - 네임스페이스 패턴
 * - 즉시 실행 함수
 * - 비공개 멤버와 특권 멤버
 * - 의존 관계 선언 
 * 
 */

var MYAPP = MYAPP || {};

MYAPP.namespace = function(ns_string) {
    var parts = ns_string.split('.'),
        parent = MYAPP,
        i;
    // 처음 중복되는 전역 객체명은 제외한다. 
    if(parts[0] === 'MYAPP') {
        parts = parts.slice(1);
    }

    console.log(parts);
    for(i =0 ; i < parts.length ; i += 1)  {
        if(typeof parent[parts[i]] === 'undefined'){
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
}

console.dir(module2 = 'module2'); 
var module2 = MYAPP.namespace('MYAPP.modules.module2');
console.log(module2 === MYAPP.modules.module2) ;


// 의존 관계 선언 패턴 
/**
 * 의존 관계 선언 패턴 장점 
 * 1. 명시적으로 선언되어있기 때문에 반드시 포함해야 하는 파일이 무엇인지 알 수 있다. 
 * 2. 함수 첫머리에 의존 관계가 명시되어있기 때문에 찾아내고 이해하기 쉽다. 
 * 3. dom과 같은 지역변수는 전역변수인 YAHOO 보다 빠르고 YAHOO의 중첩 프로퍼티와 비교하면 굉장히 빠르다. 
 */
var myFunction = function() {
    var event = MYAPP.module.module2,
        dom = YAHOO.util.dom;

    // event 와 dom을 사용한다.    

}

// 비공개 프로퍼티와 메서드 
// 
// 아래와 같이 하면 모두 공개된다. 
var myobj = {
    myprop: 1, 
    getProp: function(){
        return this.myprop
    }
}
var Gadget= function (){
    this.name = 'ipad';
    this.stretch = function() {
        return this.name;
    }
}

var myObj = (function(){
    var name = 'myname';
    return  {
        callMyName: function(){
            return name;
        }
    }
}());
console.log( myObj = function() {
    return 'heyhey'
});
console.log( myObj.callMyName() );

