var MYAPP = MYAPP || {};

MYAPP.namespace = function(ns_str){
    var parts = ns_str.split('.') ,
        parent = MYAPP,
        i = 0;

    if( parts[0] === 'MYAPP' ) {
        parts = parts.slice(1);
    }

    for(; i < parts.length; i += 1 ){
        if(parent[parts[i]] === 'undefiend') {
            parts[i] = {}
        }
        parent[parts[i]] = parts[i];
    }
};

MYAPP.namespace('MYAPP.utilites.array');
MYAPP.namespace('utilites.lang');
MYAPP.namespace('utilites.object');
MYAPP.utilites.array = function () {
    // 의존 관계 선언
    var uobj = MYAPP.utilites.object,
        ulang = MYAPP.utilites.lang,

        // 비공개 프로퍼티
        arr_str = '[object Array]',
        toString = Object.prototype.toString,

    // 비공개 메서드
    isArray = function (arr) {
        return toString.call(arr) === arr_str;
    }

    // 필요하면 일회성 초기화 절차 실행
    return {
        // isArray: function (arr) {
        //     return arr.call(toString) === arr_str;
        // }
        isArray: isArray
    }
}();
// console.log(MYAPP.utilites.array.isArray([12,3]));

MYAPP.utilites.Array = (function () {
    // 의존 관계 선언
    var uobj = MYAPP.utilites.object,
        ulang = MYAPP.utilites.lang,
        // 비공개 프로퍼티, 메소드 선언
        Constr;
    // 공개 API 프로토 타입
    Constr = function (o) {
        this.elements = this.toArray(o);
    };
    Constr.prototype = {
        constructor: this,
        version: '2.0.0',
        toArray: function (obj) {
            for (var i = 0,a = [], len = obj.length; i < len ; i += 1 ) {
                a[i] = obj[i];
            }
            return a;
        }
    };
    return Constr;
}());

var arr = new MYAPP.utilites.Array({a: 1,b: 2});
