/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [3, 2, 3];
let target = 6;

function twoSum(nums, target) {
    let numbersIndex = [];

    for (let i = 0; i, i <= nums.length - 1; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            // console.log(j);
            if (nums[i] + nums[j] === target) {
                numbersIndex.push(i);
                numbersIndex.push(j);
            }
        }
    }
    return numbersIndex;
}

let result = twoSum(nums, target);
console.log(result);