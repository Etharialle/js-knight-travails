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
    for (let j = 0; j < legalMoves.length; j++) {
        let newQueueItem = [currentPosition, legalMoves[j], cost];
        graphQueue.push([currentPosition,legalMoves[j],cost]);
    }
}

function addPathToMatrix(graphQueue, targetPosition) {
    let k = 0;
    while (graphQueue.length > 0 && !(targetPosition.toString() in adjacencyMatrix)) {
        console.log(Object.keys(adjacencyMatrix));
        console.log(targetPosition);
        console.log(targetPosition.toString());
        if (!(graphQueue[0][1] in Object.keys(adjacencyMatrix))) {
            let newKey = graphQueue.shift();
            adjacencyMatrix[newKey[1].toString()] = [newKey[0], newKey[2]];
            let newLegalMoves = generateLegalMoves(newKey[1]);
            let newCost = newKey[2] + 1;
            addMovesToQueue(newKey[1], newLegalMoves,newCost)
        }
        console.log(graphQueue);
        console.log(adjacencyMatrix);
        k++;
    }
    
}

let graphQueue = []; // parent, next, cost
let cost = 1;
const currentPosition = [0,0];
const targetPosition = [3,3];
let pathArray = [currentPosition];
let costArray = [0];
let adjacencyMatrix = {};


let legalMoves = generateLegalMoves(currentPosition);
console.log(legalMoves);
addMovesToQueue(currentPosition, legalMoves, cost);
console.log(graphQueue);
addPathToMatrix(graphQueue, targetPosition);
console.log(adjacencyMatrix);

// create array of positions from final to start
function getShortestPath(adjacencyMatrix, targetPosition, currentPosition) {
    let pointer = targetPosition;
    while (pointer != currentPosition) {
        shortestPath.push(pointer);
        pointer = adjacencyMatrix[pointer.toString()][0];
        console.log(pointer);
    }
    shortestPath.push(currentPosition);
}

let shortestPath = [];
getShortestPath(adjacencyMatrix, targetPosition, currentPosition);
const shortestPathReversed = shortestPath.reverse();
console.log(shortestPathReversed)
shortestPathReversed.forEach(element => {
    console.log(element);
});
module.exports = sumNumbers;