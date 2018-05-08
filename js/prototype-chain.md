# 코드 재사용 패턴 클래스 방식의 상속 패턴 
## 1. 기본 패턴
가장 널리 쓰이는 기본적인 방법은 Parent() 생성자를 사용해 객체를 생성한 후, 이 객체를 Child()의 프로토타입을 할당 하는 것이다.
상속 함수 inherit()의 예제는 다음과 같다.
```javascript
function inherit(C, P) {
    C.prototype = P.prototype;
}
```

prototype 프로퍼티가 함수가 아닌 객체를 가리키는것이 중요하다. 즉 프로토타입이 부모 생성자 함수 자체가 아니라 
부모 생성자 함수로 생성한 객체 인스턴스를 가리켜야 한다.  
  
### 프로토 타입 체인 추적
이 패턴을 사용하면 부모 객체의 프로토타입의 프로퍼티와 메서드를 모두 물려받게 된다.
> 메서드의 경우는 자식 객체에 없는 경우 부모를 거슬러 올라가 찾지만 property의 경우는 자식 객체에서 새로 생성한다. 
만약 delete 함수로 삭제시 부모에 있는 property를 찾는다. 

### 기본 패턴의 단점 
1. 부모 객체의 this에 추가된 객체 자신이 프로퍼티와 프로토타입 프로퍼티를 모두 물려받게 된다는 점. 대부분의 경우 객체 자신의 프로퍼티는
특정 인스턴스에 한정되어 재사용 할 수 없기 때문에 필요없다. 

> 재사용 가능한 멤버는 프로토타입에 추가해야 한다는 것이 구성 요소를 만드는 일반 원칙.

 2. 자식 인자 처리의 문제 
```javascript
var s = new Child('Seth');
s.say();
```
자식 객체에 인자를 넣어도 부모는 받을 수 없다. 

## 2. 생성자 빌려쓰기 
자식 객체의 인자를 받지 못하던 문제를 해결한다. 이 패턴은 부모 생성자 함수 this에 자식 객체를 바인딩한 다음, 자식 생성자가 받은 인자를 모두 넘겨준다. 
```javascript
function Child(a, b, c, d) {
  Parent.apply(this, arguments);
}
```


```javascript
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
```
blog 객체는 tags를 자기 자신의 프로퍼티로 가진것이 아니라 프로토타입을 통해 접근하기 때문에 
hasOwnProperty()로 확인하면 false가 반환, 반면에 생성자만 빌려쓰는 방식으로 상속받은 page는 부모의 tags에 대한 
참조를 얻는것이 아니라 복사본을 얻기 때문에 자신의 tags를 갖는다 그래서 true 

```javascript
blog.tags.push('html');
page.tags.push('php');

console.log(article.tags.join(', ')); // js, css, html
console.log(page.tags.join(', ')); // js, css, php
```

> 생성자 빌려쓰기 패턴의 장단점
프로토 타입이 전혀 상속되지 않는다는 점은 분명히 이 패턴의 한계다. 반면 부모 생성자 자신의 멤버에 대한 복사본을 가져올 수 있다는것은 장점이다. 
덕분에 자식이 부모의 프로퍼티를 덮어쓰는 위험을 방지 할 수 있다. 

## 3. 생성자 빌려쓰고 프로토타입 지정
```javascript
function Child(a, b, c, d) {
  Parent.apply(this, arguments);
}
Child.prototype = new Parent();
```

위와 같이 하면 자식 객체는 부모가 가진 자신만의 프로퍼티의 복사본을 가지게 되는 동시에, 부모의 프로토타입 멤버로 구현된 재사용가능한 기능들에 대한 참조 또한 물려받게 된다. 
자식이 부모 생성자에 인자를 넘길 수도 있다. 부모가 가진 모든 것을 상속하는 동시에, 부모의 프로퍼티를 덮어쓸 위험 없이 자신만의 프로퍼를 마음놓고 변경 할 수 있다. 

부모 생성자를 두번 호출하는것은 비효율적이다. 
















