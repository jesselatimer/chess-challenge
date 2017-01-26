# Chess Challenge

This was a small project I built for a coding challenge. The goal was to take in the current state of a chess game and a player color, and return a list of all possible moves for that player.

## Input

To get a list of valid moves, call `Chess.getMoves(board, playerColor)`.

`board` is expected to be a 2D matrix of arrays, subarrays representing columns, with pieces represented as objects with the form `{type: 'PAWN', color: 'BLACK'}`.

Sample input board:
``` javascript
[
  [ // Column 'h'
    {type: 'ROOK', color: 'BLACK'}, // Row 8
    {type: 'PAWN', color: 'BLACK'}, // Row 7
    null,                           // Row 6
    null,                           // Row 5
    null,                           // Row 4
    null,                           // Row 3
    {type: 'PAWN', color: 'WHITE'}, // Row 2
    {type: 'ROOK', color: 'WHITE'}  // Row 1
  ],
  [ // Column 'g'
    {type: 'BISHOP', color: 'BLACK'}, // Row 8
    {type: 'PAWN', color: 'BLACK'},   // Row 7
    null,                             // Row 6
    null,                             // Row 5
    null,                             // Row 4
    null,                             // Row 3
    {type: 'PAWN', color: 'WHITE'},   // Row 2
    {type: 'BISHOP', color: 'WHITE'}  // Row 1
  ],
  // etc.
]
```

`playerColor` is expected to be a string, either 'WHITE' or 'BLACK'.

## Output

Return value of `Chess.getMoves()` will be an array of possible moves, with each move represented in [algebraic notation](https://en.wikipedia.org/wiki/Algebraic_notation_%28chess%29), e.g.  `'Be5'` (Bishop to e5). For the sake of simplicity, we will only output simple notation and capture notation (`'Bxe5'`), and won't worry about move disambiguation, pawn promotion, etc.

## How to Run

Running `node chess.js` in the terminal will return the initial movement possibilities for the black player. Feel free to modify the values in `initial-board` to see other move lists.

## Features not Implemented

- [ ] En passant
- [ ] Castling
- [ ] Avoiding check
- [ ] Advanced algebraic notation
