function isPalindrome(x) {
  const str = String(x);
  const y = str.split("").reverse().join("");
  if (str === y) {
    return true;
  } else {
    return false;
  }
}

const x = 121;
console.log(isPalindrome(x));
