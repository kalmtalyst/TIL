// evenOrOdd 함수는 정수 num을 매개변수로 받는다.
// num은 1이상의 정수이며, num이 음수인 경우는 없다.
// num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd 함수를 완성하라.

// 단, if문을 사용한 답과 삼항 조건 연산자를 사용한 답 두가지를 제시하여야 한다.

// if 문
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(5)); // Odd
console.log(evenOrOdd(8)); // Even

// 삼항 조건 연산자
const evenOrOdd2 = (num) => (num % 2 ? "Odd" : "Even");

console.log(evenOrOdd2(9)); // Odd
console.log(evenOrOdd2(20)); // Even
