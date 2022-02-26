const UNSORTED_NUMBER_ARR = [9, 1, 8];

const count = countSort(true);

console.log("Result : ", count);

function countSort(showStep) {
    let count = 0;

    for (let index1 = 0; index1 < UNSORTED_NUMBER_ARR.length - 1; index1++) {
        const currentNumber = UNSORTED_NUMBER_ARR[index1];
        const restArray = UNSORTED_NUMBER_ARR.slice(index1 + 1);
        const lowestNumber = Math.min(...restArray);
        const lowestNumberIndex = restArray.findIndex(
            num => num === lowestNumber
        ) + (index1 + 1);

        if (lowestNumberIndex === -1) continue;
        if (lowestNumber > currentNumber) continue;

        if (showStep) showArraySteps(index1 + 1, "(Before Switch) ");
        switchArrayElems(UNSORTED_NUMBER_ARR, index1, lowestNumberIndex);
        if (showStep) showArraySteps(index1 + 1, "(After Switch) ");
        count++;
    }
    return count;
}

function switchArrayElems(array, index1, index2) {
    array[index1] += array[index2];
    array[index2] = array[index1] - array[index2];
    array[index1] -= array[index2];
}

function showArraySteps(step, msg = '',) {
    console.log(`${msg}step ${step} : `, UNSORTED_NUMBER_ARR);
}

