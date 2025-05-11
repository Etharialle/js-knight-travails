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

function addMovesToQueue(currentPosition, legalMoves, cost) {
    for (let i = 0; i < legalMoves.length; i++) {
        let newQueueItem = [currentPosition, legalMoves[i], cost];
        graphQueue.push([currentPosition,legalMoves[i],cost]);
    }
}

function addPathToMatrix(graphQueue) {
    while (graphQueue.length > 0) {
        if (!(graphQueue[0][1] in Object.keys(adjacencyMatrix))) {
            let newKey = graphQueue.shift();
            adjacencyMatrix[newKey[1]] = [newKey[0], newKey[2]];
        }
        console.log(graphQueue);
    }
    
}

let graphQueue = []; // parent, next, cost
let cost = 1;
const currentPosition = [0,0];
const targetPositionn = [3,3];
let pathArray = [currentPosition];
let costArray = [0];
let adjacencyMatrix = {};


let legalMoves = generateLegalMoves(currentPosition);
console.log(legalMoves);
addMovesToQueue(currentPosition, legalMoves, cost);
console.log(graphQueue);
addPathToMatrix(graphQueue);
console.log(adjacencyMatrix);

module.exports = sumNumbers;