const rowLength = 9;
const columnLength = 9;
const quadrantPerRowLength = 3;

const sudokuQuadrants = [
    "(1,2,3,4,5,6,7,8,9)",
    "(x,x,x,x,x,x,x,x,x)",
    "(6,x,5,x,3,x,x,4,x)",
    "(2,x,1,1,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,x)",
    "(x,x,x,x,x,x,x,x,9)"
];

const sudokuQuadrantValues = getSudokuQuadrantValues(sudokuQuadrants);
const reverseSudokuQuadrantValues = getReverseSudokuQuadrantValues(sudokuQuadrants, rowLength, columnLength);
const partialSudokuQuadrantValues = getPartialSudokuQuadrantValues(sudokuQuadrants, rowLength, columnLength, quadrantPerRowLength);

let result = [];

result.push(checkQuadrant(sudokuQuadrantValues, rowLength, columnLength, 'horizontal'));
result.push(checkQuadrant(reverseSudokuQuadrantValues, columnLength, rowLength, 'vertical'));
result.push(checkQuadrant(partialSudokuQuadrantValues, columnLength, rowLength, 'all'));

console.log(sudokuQuadrants);
console.log("Error Quadrants :",[...new Set(result.flat())].sort());

function checkQuadrant(numericSudokuQuadrants, rowLength, columnLength, type) {
    let quadrants = [];

    for (let i = 0; i < rowLength; i++) {
        const nums = numericSudokuQuadrants[i];

        for (let j = 0; j < columnLength; j++) {
            const checkNum = numericSudokuQuadrants[i][j];

            if (checkNum === 'x') continue;

            if (nums.split(checkNum).length - 1 > 1) {
                if (type === 'horizontal') {
                    quadrants.push(getQuadrantLocation(i, j));
                } else if (type === 'vertical') {
                    quadrants.push(getQuadrantLocation(j, i));
                } else if (type === 'all') {
                    quadrants.push(getQuadrantLocation(i, j));
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

function getPartialSudokuQuadrantValues(sudokuQuadrants, rowLength, columnLength, quadrantLength) {
    const sudokuQuadrantValues = getSudokuQuadrantValues(sudokuQuadrants);
    const partialSudokuQuadrants = [];

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            const quadrantLocation = getQuadrantLocation(i, j) - 1;
            if (!partialSudokuQuadrants[quadrantLocation]) {
                partialSudokuQuadrants.push(sudokuQuadrantValues[i][j]);
            } else {
                partialSudokuQuadrants[quadrantLocation] += sudokuQuadrantValues[i][j];
            }
        }
    }

    return partialSudokuQuadrants;
}

function getQuadrantLocation(row, column) {
    if (row < 3) {
        if (column < 3) return 1;
        else if (column < 6) return 2;
        else return 3;
    } else if (row < 6) {
        if (column < 3) return 4;
        else if (column < 6) return 5;
        else return 6;
    } else {
        if (column < 3) return 7;
        else if (column < 6) return 8;
        else return 9;
    }
}