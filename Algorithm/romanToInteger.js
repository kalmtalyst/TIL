function romanToInteger(s) {
  // 두수를 비교해 앞의 자리 수가 크면 더하기
  // 뒤의 자리 수가 더 크면 (뒤의 자리 수 - 앞의 자리)
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = s.split("");
  let res = 0;

  arr.forEach((e, i) => {
    console.log(symbols[arr[i + 1]]);
    if (symbols[e] < symbols[arr[i + 1]]) {
      return (res -= symbols[e]);
    } else {
      return (res += symbols[e]);
    }
  });
  return res;
}

const s = "LVIII";

let answer = romanToInteger(s);

console.log(answer); // 58
