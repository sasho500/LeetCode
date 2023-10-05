/**
 * @param {number[]} nums - An array of numbers
 * @param {number} target - The target sum
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target
 */
var twoSum = function (nums, target) {
  // Create an empty object to act as a hashmap
  const hashmap = {};

  // Iterate through the input array 'nums'
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement (the number needed to reach the target)
    const complement = target - nums[i];

    // Check if the complement exists in the hashmap
    if (complement in hashmap) {
      // If it does, return an array with the index of the complement and the current index 'i'
      // These two numbers add up to the target
      return [hashmap[complement], i];
    }

    // If the complement is not in the hashmap, store the current number 'nums[i]' in the hashmap
    // The key is the number itself, and the value is its index 'i'
    hashmap[nums[i]] = i;
  }

  // If no solution is found, return an empty array
  return [];
};

// Example input values
const nums = [2, 7, 11, 15];
const target = 9;

// Call the 'twoSum' function and log the result to the console
console.log(twoSum(nums, target));