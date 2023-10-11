var fullJustify = function (words, maxWidth) {
    const result = [];
    let line = [];
    let lineLength = 0;

    for (const word of words) {
        if (lineLength + line.length + word.length > maxWidth) {
            const totalSpaces = maxWidth - lineLength;
            const extraSpaces =
                line.length > 1 ? totalSpaces % (line.length - 1) : 0;
            const spaceBetweenWords =
                line.length > 1
                    ? Math.floor(totalSpaces / (line.length - 1))
                    : totalSpaces;

            let justifiedLine = "";
            for (let i = 0; i < line.length; i++) {
                justifiedLine += line[i];
                if (i < line.length - 1 || line.length === 1) {
                    const spaces =
                        i < extraSpaces
                            ? spaceBetweenWords + 1
                            : spaceBetweenWords;
                    justifiedLine += " ".repeat(spaces);
                }
            }

            result.push(justifiedLine);

            line = [];
            lineLength = 0;
        }

        line.push(word);
        lineLength += word.length;
    }

    result.push(
        line.join(" ") + " ".repeat(maxWidth - lineLength - line.length + 1)
    );

    return result;
};

const words1 = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth1 = 16;
console.log(fullJustify(words1, maxWidth1));

const words2 = ["What", "must", "be", "acknowledgment", "shall", "be"];
const maxWidth2 = 16;
console.log(fullJustify(words2, maxWidth2));

const words3 = [
    "Science",
    "is",
    "what",
    "we",
    "understand",
    "well",
    "enough",
    "to",
    "explain",
    "to",
    "a",
    "computer.",
    "Art",
    "is",
    "everything",
    "else",
    "we",
    "do",
];
const maxWidth3 = 20;
console.log(fullJustify(words3, maxWidth3));
