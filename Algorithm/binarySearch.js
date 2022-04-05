function binarySearch(nums, value) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === value) {
      return mid;
    } else if (nums[mid] <= value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let nums = [-1, 0, 3, 5, 9, 12];
let value = 9;

let result = binarySearch(nums, value);

console.log(result); // 4 (value 9의 index 값)
