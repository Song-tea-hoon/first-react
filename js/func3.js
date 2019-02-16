function Animal(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function() {
    console.log(this === myCat);
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}
var myCat = new Animal('Cat', 4);

// 리터럴 객체로 Animal 객체를 적으시오.
// 실행결과를 적으시오. function 안에 this는 무엇을 가르키는가?
myCat.logInfo(); // 객체 안에서의 함수는 객체(부모)를 가리킨다. (리터럴에서 함수 선언과 같다)
console.log(myCat);

// 실행결과를 적으시오. this는 무엇을 가르키는가?
setTimeout(myCat.logInfo, 1000); // 객체의 맴버로써 호출이 되지 않으면 global에서 호출이 된다.