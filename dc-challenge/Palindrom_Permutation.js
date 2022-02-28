const WORD = "Coo Coo"; // You Can Change This

const onlyCheckOne = true; // You Can Change This
// NOTE : If you set onlyCheckOne as false, you may get results lately

showResult(onlyCheckOne);

/* Handling Word Functions */

function showResult(onlyCheckOne) {
    const palindromPermutations = doOperation(onlyCheckOne);

    if (onlyCheckOne) {
        const status = palindromPermutations.length === 1 ? 'Yes' : 'No';
        console.log(`Result of "${WORD}" palindrome permutation : `);
        console.log(`Status : ${status}, Result : "${palindromPermutations[0] ? palindromPermutations[0] : ''}"`);
    } else {
        console.log(`Result of "${WORD}" palindrome permutations : `);
        console.log(`Count : ${palindromPermutations.length}, Result Array :`, palindromPermutations);
    }
}

function doOperation(onlyCheckOne) {
    const charArrOfWord = getCharArray('', WORD); // Don't Touch
    const charSpaceIndexArrOfWord = getIndexOfSearchStrInArray(' ', charArrOfWord); // Don't Touch
    const nonSpacesCharArrOfWord = getCharArray('', getNonSpacesStr(WORD)); // Don't Touch

    const palindromPermutations = getPalindromPermutationsOfWord(
        nonSpacesCharArrOfWord,
        charSpaceIndexArrOfWord,
        "",
        [],
        onlyCheckOne
    ); // Don't Touch

    return palindromPermutations;
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

function checkPalindrom(charArr) {
    let isPalindrom = true;

    for (let i = 0, j = charArr.length - 1; i < charArr.length; i++, j--) {
        if (charArr[i] !== charArr[j]) {
            isPalindrom = false;
            break;
        }
    }

    return isPalindrom;
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