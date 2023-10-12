/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const charCount = new Map();
    let requiredChars = t.length;
    let left = 0;
    let minLen = Infinity;
    let minWindowStart = 0;
    let right = 0;

    for (const char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    while (right < s.length) {
        const rightChar = s[right];

        if (charCount.has(rightChar)) {
            charCount.set(rightChar, charCount.get(rightChar) - 1);
            if (charCount.get(rightChar) >= 0) {
                requiredChars--;
            }
        }

        while (requiredChars === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minWindowStart = left;
            }

            const leftChar = s[left];

            if (charCount.has(leftChar)) {
                charCount.set(leftChar, charCount.get(leftChar) + 1);
                if (charCount.get(leftChar) > 0) {
                    requiredChars++;
                }
            }

            left++;
        }

        right++;
    }

    return minLen === Infinity
        ? ""
        : s.slice(minWindowStart, minWindowStart + minLen + 1);
};

const s1 = "ADOBECODEBANC";
const t1 = "ABC";
console.log(minWindow(s1, t1));

const s2 = "a";
const t2 = "a";
console.log(minWindow(s2, t2));

const s3 = "a";
const t3 = "aa";
console.log(minWindow(s3, t3));
