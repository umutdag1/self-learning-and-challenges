// Test Case 1
// const length = 4;
// const quadrantRules = [
//     [2, 2], [2, 4],
//     [4, 2], [4, 4],
// ];
// const sudokuQuadrants = [
//     "(1,1,x,x)",
//     "(1,x,1,x)",
//     "(x,x,x,x)",
//     "(x,2,2,x)",
// ];

// Test Case 2
// const length = 9;
// const quadrantRules = [
//     [3, 3], [3, 6], [3, 9],
//     [6, 3], [6, 6], [6, 9],
//     [9, 3], [9, 6], [9, 9]
// ];
// const sudokuQuadrants = [
//     "(1,2,3,4,5,6,7,8,9)",
//     "(x,x,x,x,x,x,x,x,x)",
//     "(6,x,5,x,3,x,x,4,x)",
//     "(2,x,1,1,x,x,x,x,x)",
//     "(x,x,x,x,x,x,x,x,x)",
//     "(x,x,x,x,x,x,x,x,x)",
//     "(x,x,x,x,x,x,x,x,x)",
//     "(x,x,x,x,x,x,x,x,x)",
//     "(x,x,x,x,x,x,x,x,9)"
// ];

// Test Case 3
const length = 9;
const quadrantRules = [
    [3, 3], [3, 6], [3, 9],
    [6, 3], [6, 6], [6, 9],
    [9, 3], [9, 6], [9, 9]
];
const sudokuQuadrants = [
    "(1,2,3,4,5,6,7,8,1)",
    "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)"
];

const sudokuQuadrantValues = getSudokuQuadrantValues(sudokuQuadrants);
const reverseSudokuQuadrantValues = getReverseSudokuQuadrantValues(sudokuQuadrants, length, length);
const partialSudokuQuadrantValues = getPartialSudokuQuadrantValues(sudokuQuadrants, quadrantRules, length, length);

let result = [];

result.push(checkQuadrant(sudokuQuadrantValues, quadrantRules, length, length, 'horizontal'));
result.push(checkQuadrant(reverseSudokuQuadrantValues, quadrantRules, length, length, 'vertical'));
result.push(checkQuadrant(partialSudokuQuadrantValues, quadrantRules, length, length, 'all'));

console.log(sudokuQuadrants);
console.log("Error Quadrants :", [...new Set(result.flat())].sort());

function checkQuadrant(numericSudokuQuadrants, rules, rowLength, columnLength, type) {
    let quadrants = [];

    for (let i = 0; i < rowLength; i++) {
        const nums = numericSudokuQuadrants[i];

        for (let j = 0; j < columnLength; j++) {
            const checkNum = numericSudokuQuadrants[i][j];

            if (checkNum === 'x') continue;

            if (nums.split(checkNum).length - 1 > 1) {
                if (type === 'horizontal') {
                    quadrants.push(getQuadrantLocation(i, j, rules));
                } else if (type === 'vertical') {
                    quadrants.push(getQuadrantLocation(j, i, rules));
                } else if (type === 'all') {
                    quadrants.push(i + 1);
                }
            }
        }
    }
    return quadrants;
}

function getSudokuQuadrantValues(sudokuQuadrants) {
    return sudokuQuadrants.map(
        rowStr => rowStr.replaceAll(new RegExp('[(),]', 'g'), '')
    );
}

function getReverseSudokuQuadrantValues(sudokuQuadrants, rowLength, columnLength) {
    const sudokuQuadrantValues = getSudokuQuadrantValues(sudokuQuadrants);
    const reverseSudokuQuadrants = [];

    for (let i = 0; i < rowLength; i++) {
        let reverseRowStr = "";

        for (let j = 0; j < columnLength; j++) {
            reverseRowStr += sudokuQuadrantValues[j][i];
        }

        reverseSudokuQuadrants.push(reverseRowStr);
    }

    return reverseSudokuQuadrants;
}

function getPartialSudokuQuadrantValues(sudokuQuadrants, quadrantRules, rowLength, columnLength) {
    const sudokuQuadrantValues = getSudokuQuadrantValues(sudokuQuadrants);
    const partialSudokuQuadrants = [];

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {

            const quadrantLocation = getQuadrantLocation(i, j, quadrantRules) - 1;

            if (!partialSudokuQuadrants[quadrantLocation]) {
                partialSudokuQuadrants.push(sudokuQuadrantValues[i][j]);
            } else {
                partialSudokuQuadrants[quadrantLocation] += sudokuQuadrantValues[i][j];
            }
        }
    }

    return partialSudokuQuadrants;
}

function getQuadrantLocation(row, column, rules) {
    for (let i = 0; i < rules.length; i++) {
        if (row < rules[i][0] && column < rules[i][1]) {
            return i + 1;
        }
    }
}