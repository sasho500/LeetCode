var groupAnagrams = function (strs) {
    const anagramMap = new Map();

    for (const str of strs) {
        const sortedStr = str.split("").sort().join("");

        if (anagramMap.has(sortedStr)) {
            anagramMap.get(sortedStr).push(str);
        } else {
            anagramMap.set(sortedStr, [str]);
        }
    }

    const result = Array.from(anagramMap.values());

    return result;
};

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1));

const strs2 = [""];
console.log(groupAnagrams(strs2));

const strs3 = ["a"];
console.log(groupAnagrams(strs3));
