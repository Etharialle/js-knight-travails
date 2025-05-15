function generateLegalMoves(currentPosition) {
    const legalMoves = [];
    const moveList = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
    for (let i = 0; i < moveList.length; i++) {
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
    while (graphQueue.length > 0 && !(targetPosition.toString() in adjacencyMatrix)) {
        if (!(graphQueue[0][1] in Object.keys(adjacencyMatrix))) {
            let newKey = graphQueue.shift();
            adjacencyMatrix[newKey[1].toString()] = [newKey[0], newKey[2]];
            let newLegalMoves = generateLegalMoves(newKey[1]);
            let newCost = newKey[2] + 1;
            addMovesToQueue(newKey[1], newLegalMoves,newCost)
        }

    }    
}

function getShortestPath(adjacencyMatrix, targetPosition, currentPosition) {
    let shortestPath = [];
    let pointer = targetPosition;
    while (pointer != currentPosition) {
        shortestPath.push(pointer);
        pointer = adjacencyMatrix[pointer.toString()][0];
        // console.log(pointer);
    }
    shortestPath.push(currentPosition);
    shortestPath.reverse();
    return shortestPath;
}

//let shortestPath = [];
//getShortestPath(adjacencyMatrix, targetPosition, currentPosition);
//const shortestPathReversed = shortestPath.reverse();
//console.log(shortestPathReversed)
//shortestPathReversed.forEach(element => {
//    console.log(element);
//});

function isPositionValid(position) {
    if ((position[0] >= 0 && position[0] < 8) && (position[1] >= 0 && position[1] < 8)) {
        return true;
    } else {
        return false;
    }
}

let graphQueue = []; // parent, next, cost
let adjacencyMatrix = {};

function knightMoves(startingPosition, targetPosition) {
    // check for valid start and end positions
    
    if (!isPositionValid(startingPosition)) {
        console.log("Starting Position is not valid");
        return 1;
    }
    if (!isPositionValid(targetPosition)) {
        console.log("Ending Position is not valid");
        return 2;
    }
    if ((startingPosition.length === targetPosition.length) && startingPosition.every((value, index) => value === targetPosition[index])) {
        console.log("Ending position cannot be the same as the starting position");
        return 3;
    }
    

    let firstMoves = generateLegalMoves(startingPosition);
    
    addMovesToQueue(startingPosition, firstMoves, 1);
    
    addPathToMatrix(graphQueue, targetPosition); // Breadth First Search

    const pathArray = getShortestPath(adjacencyMatrix, targetPosition, startingPosition);
    const finalCost = adjacencyMatrix[targetPosition.toString()][1];
    console.log(graphQueue);
    console.log(adjacencyMatrix);
    
    console.log(`=> You made it in ${finalCost} moves! Here's your path:`)

    pathArray.forEach(element => {
        console.log(element);
    });

    return 0;
}

knightMoves([3,3],[4,3]);

module.exports = { isPositionValid, knightMoves };