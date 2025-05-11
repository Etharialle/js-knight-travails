function sumNumbers(num1, num2) {
    return num1 + num2;
}

function generateLegalMoves(currentPosition) {
    const legalMoves = [];
    const moveList = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
    for (let i = 0; i < moveList.length; i++) {
        //let x = currentPosition[0];
        //let newX = moveList[i][0];
        //const newRow = currentPosition[0] + moveList[i][0];
        //const newColumn = currentPosition[1] + moveList[i][1];
        let newPosition = [currentPosition[0]+moveList[i][0], currentPosition[1]+moveList[i][1]];
        if (newPosition.every(element => element < 7) && newPosition.every(element => element > 0)) {
            legalMoves.push(newPosition);
        }
    }
    return legalMoves
}

const currentPosition = [0,0];

console.log(generateLegalMoves(currentPosition))

module.exports = sumNumbers;