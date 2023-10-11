var searchRange = function (nums, target) {
    let start = findStart(nums, target);
    let end = findEnd(nums, target);

    return [start, end];
};

function findStart(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let start = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            start = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return start;
}

function findEnd(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let end = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            end = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return end;
}

const nums1 = [5, 7, 7, 8, 8, 10];
const target1 = 8;
console.log(searchRange(nums1, target1));

const nums2 = [5, 7, 7, 8, 8, 10];
const target2 = 6;
console.log(searchRange(nums2, target2));

const nums3 = [];
const target3 = 0;
console.log(searchRange(nums3, target3));
