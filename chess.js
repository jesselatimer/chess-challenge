const Player = require('./player');
const Board = require('./board');
const Notation = require('./notation');
const initialBoard = require('./initial-board');

class Chess {
  static getMoves(currentBoard, playerColor) {
    const board = new Board(currentBoard);
    const player = new Player(playerColor);
    return Notation.notate(board.getMoves(player));
  }
}

console.log("Initial Board, Black Player");
console.log(Chess.getMoves(initialBoard, 'BLACK'));
