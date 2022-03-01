// Question
// There are 3 rules for strings : 
// Adding one character,
// Removing one character,
// Nothing changed
// There are 2 strings to be compared, 
// And only one character change is accepted 
// Depending on all 3 rules above 
// Find the result is whether true or false 

// Examples : 
//pale, ple -> true
//pales, pale -> true
//pale, bale -> true
//pale, bake -> false

const STR_1 = "pales";
const STR_2 = "ples";

showResult();

/* Handling Functions */

function showResult() {
    const result = doOperation(STR_1, STR_2);

    console.log(`Result Comparing "${STR_1}", "${STR_2}" is : ${result}`);
}

function doOperation(str1, str2) {
    const nonSpaceStr1 = str1.replaceAll(new RegExp('\\s', 'g'), '');
    const nonSpaceStr2 = str2.replaceAll(new RegExp('\\s', 'g'), '');

    const str1CharArr = nonSpaceStr1.split('');
    const str2CharArr = nonSpaceStr2.split('');

    let result = null;

    if (nonSpaceStr1 === nonSpaceStr2) {
        result = true;
    } else if (str1CharArr.length === 0 || str2CharArr === 0) {
        result = false;
    } else {
        const biggestLengthCharArr = str1CharArr.length >= str2CharArr.length ? str1CharArr : str2CharArr;
        const lowestLengthCharArr = str1CharArr.length >= str2CharArr.length ? str2CharArr : str1CharArr;

        const lengthDiff = Math.abs(biggestLengthCharArr.length - lowestLengthCharArr.length);

        if (lengthDiff == 0 || lengthDiff == 1) {
            result = checkCharArrays(biggestLengthCharArr, lowestLengthCharArr);
        } else {
            result = false;
        }
    }

    return result;
}

function checkCharArrays(charArr, compareCharArr) {
    let count = 0;
    const areLengthEquals = charArr.length === compareCharArr.length;

    for (let i = 0; i < compareCharArr.length; i++) {
        if (count > 1) break;
        const char = compareCharArr[i];
        if (areLengthEquals) {
            if (charArr[i] === char) continue;
        } else {
            if (charArr[i + count] === char) continue;
        }
        count++;
    }

    return count <= 1;
}