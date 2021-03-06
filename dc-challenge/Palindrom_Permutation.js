const WORD = "Tact Coa"; // You Can Change This
const onlyCheckOne = true; // You Can Change This
const onlyStatus = true; // You Can Change This
// NOTE : The fastest way to get result quickly is to set true both onlyCheckOne and onlyStatus
/****************************************/
// onlyCheckOne = true && onlyStatus = 
// true --> Getting Only Count of Result (Fast)
// onlyCheckOne = true && onlyStatus = 
// false --> Getting Only For One Record For Both Count and Result Word (Getting Slow as Size Increase)
// onlyCheckOne = false && onlyStatus = 
// false --> Getting Both Count and Result Words in Array (Getting Slow as Size Increase)
/****************************************/
showResult(onlyCheckOne, onlyStatus);

/* Handling Functions */

function showResult(onlyCheckOne, onlyStatus) {
    if (!onlyCheckOne) {
        onlyStatus = false;
    }

    const palindromPermutations = doOperation(onlyCheckOne, onlyStatus);

    if (onlyCheckOne) {
        if (onlyStatus) {
            const status = palindromPermutations ? 'Yes' : 'No';
            console.log(`Result of "${WORD}" palindrome permutation : `);
            console.log(`Status : ${status}`);
        } else {
            const status = palindromPermutations.length === 1 ? 'Yes' : 'No';
            console.log(`Result of "${WORD}" palindrome permutation : `);
            console.log(`Status : ${status}, Result : "${palindromPermutations[0] ? palindromPermutations[0] : ''}"`);
        }
    } else {
        console.log(`Result of "${WORD}" palindrome permutations : `);
        console.log(`Count : ${palindromPermutations.length}, Result Array :`, palindromPermutations);
    }
}

function doOperation(onlyCheckOne, onlyStatus) {
    const nonCaseSensitiveWord = getStrLowerOrUpperCase(WORD);
    const charArrOfWord = getCharArray('', nonCaseSensitiveWord); // Don't Touch
    const charSpaceIndexArrOfWord = getIndexOfSearchStrInArray(' ', charArrOfWord); // Don't Touch
    const nonSpacesCharArrOfWord = getCharArray('', getNonSpacesStr(nonCaseSensitiveWord)); // Don't Touch

    let result = null;

    if (onlyStatus) {
        result = getPalindromPermutationsOfWordStatus(
            nonSpacesCharArrOfWord
        );
    } else {
        result = getPalindromPermutationsOfWord(
            nonSpacesCharArrOfWord,
            charSpaceIndexArrOfWord,
            "",
            [],
            onlyCheckOne
        ); // Don't Touch
    }

    return result;
}

function getPalindromPermutationsOfWordStatus(charArr) {
    const charArrLength = charArr.length;
    const isArrLengthOdd = charArrLength % 2 !== 0;

    const countCharObj = getCountOfChar(charArr);
    const newCharArrCounts = Object.values(countCharObj);

    const oddCounts = newCharArrCounts.filter(count => count % 2 !== 0);
    if (isArrLengthOdd) {
        return oddCounts.length === 1 ? true : false;
    } else {
        return oddCounts.length === 0 ? true : false;
    }
}

function getPalindromPermutationsOfWord(charArr, charSpaceIndexArr, str, palindromPermutations, onlyCheckOne) {
    if (charArr.length === 0) {
        if (!palindromPermutations.includes(str)) {
            if (checkPalindrom(getCharArray('', str))) {
                palindromPermutations.push(str);
            }
        }

        return;
    }

    const previousStr = str;

    for (let i = 0; i < charArr.length; i++) {
        str += charArr[i];
        if (charSpaceIndexArr.includes(str.length)) {
            str += " ";
        }
        const newCharArr = charArr.filter((_, index) => index !== i);
        getPalindromPermutationsOfWord(newCharArr, charSpaceIndexArr, str, palindromPermutations, onlyCheckOne);
        if (onlyCheckOne && palindromPermutations.length === 1) {
            break;
        }
        str = previousStr;
    }

    return palindromPermutations;
}

function getCountOfChar(charArr) {
    return charArr.reduce((newObj, char) => {
        if (!isNaN(newObj[char])) {
            newObj[char]++;
        } else {
            newObj[char] = 1;
        }
        return newObj;
    }, {});
}

function checkPalindrom(charArr) {
    let isPalindrom = true;

    const nonSpaceCharArr = charArr.filter(char => char !== ' ');

    for (let i = 0, j = nonSpaceCharArr.length - 1; i < nonSpaceCharArr.length; i++, j--) {
        if (nonSpaceCharArr[i] !== nonSpaceCharArr[j]) {
            isPalindrom = false;
            break;
        }
    }

    return isPalindrom;
}

function getStrLowerOrUpperCase(str, caseType = 'lower') {
    if (caseType === 'upper') {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

function getCharArray(separator, str) {
    return str.split(separator);
}

function getIndexOfSearchStrInArray(search, arr) {
    return arr.reduce((newArr, str, index) => {
        if (str === search) {
            newArr.push(index);
        }
        return newArr;
    }, []
    )
}

function getNonSpacesStr(str) {
    return getCharArray(new RegExp("\\s"), str).join("");
}