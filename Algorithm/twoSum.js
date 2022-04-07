// 이중 for 문으로 해결
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i++; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        } else {
          return [];
        }
      }
    }
  }
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));

// 맨처음 '인덱스 값 반환' 때문에 이런 시도를 했음
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] + nums[i + 1] === target) {
//       let fstIndex = nums[i];
//       let sndIndex = nums[i + 1];
//       let str1 = fstIndex.toString();
//       let str2 = sndIndex.toString();
//       return (result = [str1.indexOf(), str2.indexOf()]);
//     } else {
//       return [];
//     }
//   }
// }
