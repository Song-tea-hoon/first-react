// 아래 실행결과를 예측하고 map과 forEach의 차이점을 설명하시오.
var items = ['1', '2', '3', '4', '5'];
var newItems = items.map(item => parseInt(item));
console.log(newItems); // [1,2,3,4,5]

var newItems2 = items.forEach(item => parseInt(item));
console.log(newItems2); // undefined - 배열 순회만하고 return 값이 없다.

// https://cafe.naver.com/ng2spring
// 과제 개시판 -> [1주차 과제] - javascript1
//                [3주차 과제] - javascript2
// 풀어보기