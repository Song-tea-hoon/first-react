let circleArea = (pi, r) => pi * r * r;

// 위는 함수 표현식이다. 익명함수 부분을 애로우 펑션으로 바꾸시오
// 한줄이면 {}, return문 생략 가능
// JSON을 리턴 하려면  ({....})

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"

// currying function
// let res = ( a, b ) => a + b;
let res = a => b => a+b;

console.log(res(1)(2));