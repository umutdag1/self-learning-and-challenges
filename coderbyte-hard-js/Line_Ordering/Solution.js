// Test Case 1
//const RULES = ["J>B", "B<S", "D>J"];
// Test Case 2
//const RULES = ["J>B", "B<S", "A>B", "B>C", "A<D"];
// Test Case 3
//const RULES = ["A>B", "B>C", "A<D"];
// Test Case 4
//const RULES = ["A>B", "A<C", "C<Z"];
// Test Case 5
// const RULES = ["A>B", "B<R", "R<G"];
// High Result Case
const RULES = ["J>B", "Z<S", "D>K", "U>I", "L<M"];

const letters = getUniqueArr(
    getLetters()
);

console.log("Given Letters : ", letters);
console.log("Given Letters Rules : ", RULES);

const result = doLineOrdering(letters);

console.log("Result : ", result);

function doLineOrdering(letters) {
    const lettersRules = getLettersRules();

    const lettersOfRules = Object.keys(lettersRules);

    if(lettersOfRules.length === 0) {
        factorial = num => num == 1 || num == 0 ? 1 : factorial(num-1) * num;
        return factorial(letters.length);
    }

    const independentLetters = letters.filter(
        letter => !lettersOfRules.includes(letter)
    );

    let totalLineOrdering = 0;

    independentLetters.forEach(independentLetter => {
        totalLineOrdering += countLineOrdering(letters, independentLetter, getCopyObject(lettersRules));
    });

    return totalLineOrdering;
}

function countLineOrdering(letters, notIncludedLetter, lettersRules) {
    let totalCount = 0;

    const lettersOfRules = Object.keys(lettersRules);

    for (const lettersOfRule of lettersOfRules) {
        const rulesOfLetter = lettersRules[lettersOfRule];

        if (rulesOfLetter.includes(notIncludedLetter)) {
            const removedLetterIndex = rulesOfLetter.findIndex(
                ruleOfLetter => ruleOfLetter === notIncludedLetter
            );
            if (removedLetterIndex !== -1) {
                rulesOfLetter.splice(removedLetterIndex, 1);
                break;
            }
        }
    }

    const newLetters = letters.filter(
        letter => letter !== notIncludedLetter
    );

    if (newLetters.length == 0) {
        return 1;
    }

    for (const newLetter of newLetters) {
        if (lettersOfRules.includes(newLetter)) {
            if (lettersRules[newLetter].length === 0) {
                delete lettersRules[newLetter];
            } else {
                continue;
            }
        }

        totalCount += countLineOrdering(newLetters, newLetter, getCopyObject(lettersRules));
    }

    return totalCount;
}

function getCopyObject(object) {
    return JSON.parse(JSON.stringify(object));
}

function getLettersRules() {
    return RULES.reduce(
        (firstObj, rule) => {
            const separator = rule[1];
            const letters = rule.split(separator);

            const letterIndex = separator === '<' ? 0 : 1;
            const ruleIndex = separator === '<' ? 1 : 0;

            const letterRules = firstObj[letters[letterIndex]];
            if (letterRules) {
                letterRules.push(letters[ruleIndex]);
            } else {
                firstObj[letters[letterIndex]] = [letters[ruleIndex]];
            }

            return firstObj;
        },
        {}
    );
}

function getLetters() {
    return RULES.reduce((firstArr, rule) => {
        const separator = rule[1];
        const letters = rule.split(separator);
        return [...firstArr, ...letters];
    }, []);
}

function getUniqueArr(duplicatedArr) {
    return [...new Set(duplicatedArr)];
}