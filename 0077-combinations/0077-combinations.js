/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    
    function backtrack(start, currentCombination) {
        if (currentCombination.length === k) {
            result.push([...currentCombination]);
            return;
        }
        
        for (let i = start; i <= n; i++) {
            currentCombination.push(i);
            backtrack(i + 1, currentCombination);
            currentCombination.pop();
        }
    }
    
    backtrack(1, []);
    return result;
};
const n = 4;
const k = 2;
console.log(combine(n, k));