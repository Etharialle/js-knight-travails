# js-knight-travails
Find the shortest path for a knight on a chess board to move from a selected start to a selected end position.


# Plan

- Graph connections could be created with a 64x64 2-D array (number of squares on a chess board)

- rows and colums, with 0,0 being in the upper left
- rows is an array [0-7] and columns is an array [0-7]
- Possible moves for a knight (r, c)
  - 1) (-1, -2)
  - 2) (-1, 2)
  - 3) (-2, 1)
  - 4) (-2, -1)
  - 5) (1, 2)
  - 6) (1, -2)
  - 7) (2, 1)
  - 8) (2, -1
   
- Generate legal moves
  ```
  function generateLegalMoves(currentPosition)
    legalMoves = []
    moveList = [use above]
    for move in moveList:
        newPosition = [currentPosition[0]+move[0], currentPosition[1]+move[1]]
        if newPosition.some(element => element > 7) || newPosition(element => element <0)
```

Just a change to test git stuff