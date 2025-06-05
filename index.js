function generateLegalMoves(currentPosition) {
    const legalMoves = [];
    const moveList = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
    for (let i = 0; i < moveList.length; i++) {
        let newPosition = [currentPosition[0]+moveList[i][0], currentPosition[1]+moveList[i][1]];
        if (newPosition.every(element => element <= 7) && newPosition.every(element => element >= 0)) {
            legalMoves.push(newPosition);
        }
    }
    return legalMoves
}

function addMovesToQueue(currentPosition, legalMoves, cost, graphQueue) {
    for (let j = 0; j < legalMoves.length; j++) {
        let newQueueItem = [currentPosition, legalMoves[j], cost];
        graphQueue.push([currentPosition,legalMoves[j],cost]);
    }
}

function addPathToMatrix(graphQueue, targetPosition, adjacencyMatrix) {
    while (graphQueue.length > 0 && !(targetPosition.toString() in adjacencyMatrix)) {
        let newKey = graphQueue.shift();
        if (!Object.keys(adjacencyMatrix).includes(JSON.stringify(newKey[1]))) {
            let testNewKey = JSON.stringify(newKey[1]);
            //adjacencyMatrix[newKey[1].toString()] = [newKey[0], newKey[2]];
            adjacencyMatrix[JSON.stringify(newKey[1])] = [newKey[0], newKey[2]];
            let newLegalMoves = generateLegalMoves(newKey[1]);
            let newCost = newKey[2] + 1;
            addMovesToQueue(newKey[1], newLegalMoves, newCost, graphQueue)
        }

    }    
}

function getShortestPath(adjacencyMatrix, targetPosition, currentPosition) {
    let shortestPath = [];
    let pointer = targetPosition;
    while (pointer != currentPosition) {
        shortestPath.push(pointer);
        //pointer = adjacencyMatrix[pointer.toString()][0];
        pointer = adjacencyMatrix[JSON.stringify(pointer)][0];
    }
    shortestPath.push(currentPosition);
    shortestPath.reverse();
    return shortestPath;
}

function isPositionValid(position) {
    if ((position[0] >= 0 && position[0] < 8) && (position[1] >= 0 && position[1] < 8)) {
        return true;
    } else {
        return false;
    }
}

function knightMoves(startingPosition, targetPosition) {
    // check for valid start and end positions
    let graphQueue = []; // parent, next, cost
    let adjacencyMatrix = {};
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
    
    addMovesToQueue(startingPosition, firstMoves, 1, graphQueue);  
    addPathToMatrix(graphQueue, targetPosition, adjacencyMatrix); // Breadth First Search

    const pathArray = getShortestPath(adjacencyMatrix, targetPosition, startingPosition);
    //const finalCost = adjacencyMatrix[targetPosition.toString()][1];
    const finalCost = adjacencyMatrix[JSON.stringify(targetPosition)][1];
    console.log(graphQueue);
    console.log(adjacencyMatrix);
    
    console.log(`=> You made it in ${finalCost} moves! Here's your path:`)

    pathArray.forEach(element => {
        console.log(element);
    });

    return 0;
}

knightMoves([0,0],[7,7]);

function sum(a, b) {
  return a + b;
}

module.exports = { isPositionValid, knightMoves };