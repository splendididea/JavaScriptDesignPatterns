function Parent(name) {
    this.name = name || 'Adam';
}

Parent.prototype.say = function () {
    return this.name;
};

function Child() {
    this.name = 'Patrick';
}

inherit(Child, Parent);

function inherit(C, P) {
    C.prototype = new P();
}

var kid = new Child();
console.log(kid.say());
delete kid.name;
console.log(kid.say());


// Parent Constructor
function Article() {
    this.tags = ['js', 'css'];
}

var article = new Article();

// 클래스 방식의 패턴 1을 사용해 article 객체를 생성하는 blog 객체 생성 
function BlogPost() {
    
}

BlogPost.prototype = article;
var blog = new BlogPost();
// 이미 인스턴스가 존재하므로 new Article()을 사용하지 않는다.

function StaticPage() {
    Article.call(this);
}

var page = new StaticPage();

console.log(article.hasOwnProperty("tags"));    // true
console.log(blog.hasOwnProperty("tags"));       // false
console.log(page.hasOwnProperty("tags"));       // true


console.log(blog.tags[0]);
blog.tags.push('html');
page.tags.push('php');

console.log(article.tags.join(', '));
console.log(page.tags.join(', '));

// Parent Constructor 
function Parent2(name) {
    this.name = name || 'Adam';
}

Parent2.prototype.say = function () {
    return this.name;
};

function Child2() {
    Parent2.apply(this, arguments);
}

var kid2 = new Child2('Patrick');
console.log( kid2.name );
delete kid2.name;
console.log( 'kid2.name :: ' , kid2.name );
console.log( typeof kid2.say );

function Cat() {
    this.legs = 4;
    this.say = function () {
        return "meaowww";
    }
}

function Bird() {
    this.wings = 2;
    this.fly = true;
}

function CatWings() {
    Cat.apply(this);
    Bird.apply(this);
}

var jane = new CatWings();
console.dir(jane);


function Child3(a, c, b, d) {
    Parent.apply(this, arguments);
}