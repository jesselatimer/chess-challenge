const Notation = require('./notation');
const ConstructPiece = require('./pieces/construct-piece');
const Utility = require('./utility/utility');

class Board {
  constructor (currentBoard) {
    this.board = Board.constructBoard(currentBoard);
  }

  getMoves (player) {
    return Utility.flatten(this.board).reduce((moves, piece) => {
        if (piece && piece.color === player.color) {
          moves.push(...piece.getValidMoves(this));
        }
        return moves;
    }, []);
  }

  valid ({ x, y }, color) {
    return this.onBoard({ x, y }) && !this.blocked({ x, y }, color);
  }

  onBoard ({ x, y }) {
    return x >= 0 && x < 8 &&
           y >= 0 && y < 8;
  }

  blocked ({ x, y }, color) {
    return this.board[x][y] && this.board[x][y].color === color;
  }

  isCapture ({ x, y }, color) {
    return this.board[x][y] && this.board[x][y].color !== color;
  }

  static constructBoard (currentBoard) {
    return currentBoard.map((row, x) => {
      return row.map((piece, y) => {
        return (piece === null) ? null : new ConstructPiece(piece, {x, y});
      });
    });
  }
}

module.exports = Board;
