var constant = (function () {
    var constants = {},
        ownProp = Object.prototype.hasOwnProperty,
        allowed = {
            string: 1,
            number: 1,
            boolean: 1
        },
        prefix = (Math.random() + "_").slice(2);

    return {
        set: function (name, value) {
            if (this.isDefined(name)){
                return false;
            }
            if (!ownProp.call(allowed, typeof value)) {
                return false;
            }
            console.log('prefix :: ' , prefix);
            constants[prefix + name] = value;
            return true;
        }, 
        isDefined: function (name) {
            return ownProp.call(constants, prefix + name);
        },
        get: function (name) {
            if (this.isDefined(name)){
                return constants[prefix + name];
            }
            return null;
        }
    }
}());



// 이미 정의가 되어있는지 확인
console.log( constant.isDefined('maxwidth') );
constant.set('maxwidth', 480);
console.log( constant.set('maxwidth', 450));
console.log( constant.isDefined('maxwidth') );
console.log(constant.get('maxwidth'));


var MAX_WIDTH = constant.get("maxwidth");

console.log(MAX_WIDTH);

MAX_WIDTH = '2222';
console.log(MAX_WIDTH);