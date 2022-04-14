function singleNumber(nums) {
  let arr = [];
  for (let i of nums) {
    if (!arr.includes(i)) {
      arr.push(i);
    } else {
      arr.splice(arr.indexOf(i), 1);
    }
  }
  return arr[0];
}

const nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums)); // 4
