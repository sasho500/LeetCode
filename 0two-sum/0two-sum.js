/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in hashmap) {
      return [hashmap[complement], i];
    }
    hashmap[nums[i]] = i;
  }

  return [];
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
