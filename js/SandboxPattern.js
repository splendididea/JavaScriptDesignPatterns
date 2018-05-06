function Sandbox() {
    // argument를 배열로 바꾼다.
    var args = Array.prototype.slice.call(arguments),
    // 마지막 인자는 콜백 함수
        callback = args.pop(),
        // 모듈은 배열로 전달될 수도 있고 개별 인자로 전달될 수도 있다.
        modules = (args[0] && typeof args[0] === "string" ? args : args[0]),
        i;
    // 함수가 생성자로 호출되도록 보장한다.
    // new 없이 함수가 호출되었다면 함수를 생성자로 호출한다.
    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    // this에 필요한 프로퍼티들을 추가한다.
    this.a = 1;
    this.b = 2;

    // 코어 this객체에 모듈을 추가한다.
    // 모듈이 없거나 "*" 이면 사용 가느안 모들 모듈을 사용한다는 의미이다.
    if (!modules || modules == '' || modules[0] === "*") {
        modules = [];
        for (i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)){
                modules.push(i);
            }
        }
    }

    // 필요한 모듈들을 초기화한다.
    for (i = 0; i <modules.length; i += 1){
        Sandbox.modules[modules[i]](this);
    }

    // 콜백함수를 호출
    callback(this);
}
Sandbox.modules = {};

Sandbox.prototype = {
    name: "My appilication",
    version: '1.0.0',
    getName: function () {
        return this.name;
    }
};

Sandbox.modules.dom = function (box) {
    box.getElement = function () {
        
    };
    
    box.getStyle = function () {
        
    };

    box.foo = "bar";
};

Sandbox.modules.event = function (box) {
    // 필요에 따라서는 Sandbox에 prototype으로 접근할 수 있다.
    box.constructor.prototype.modules = 'mmm';
    box.attachfile = function () {
        
    };
    box.detachfile = function () {
        
    };
    
};
Sandbox.modules.ajax = function (box) {
    box.makeRequest = function () {
        
    };
    box.getResponse = function () {
        
    }
};

function callArugment(a, b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return Array.from(arguments);
}

console.log( callArugment(1,2).toString() );


