function Person() {
  // {} 밴객체가 this에 할당
  this.arms = 2;
  this.legs = 2;
  // return이 없으면 암묵적으로 this가 리턴
}

// 자바스크립트에서 객체를 생성하는 2가지 방법은 무엇인가? 아래는 어떤 방법인가?
var person = new Person();

// 실행 결과는 무엇인가? 실행결과에 대해서 설명하시오.
console.log(person); // Person객체

// literal 객체로  person 객체를 생성하시오.
// let person = {
//   arms: 2,
//   legs: 2
// }

// 실행 결과는 무엇인가? 여기서 사용된 this는 무엇인가?
console.log(arms); // ReferenceError : undefined error

// 만일 this.arms, this.legs가 없다면 new Person()의 결과는 무엇인가?
// Person객체