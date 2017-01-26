const Piece = require('./piece');

class Pawn extends Piece {
  constructor ({ color, type }, currentPosition) {
    super({ color, type }, currentPosition);
    if (color === 'BLACK') {
      this.moveOffset = [0, 1];
      this.secondMoveOffset = [0, 2];
      this.captureOffsets = [[1, 1], [-1, 1]];
    } else if (color === 'WHITE') {
      this.moveOffset = [0, -1];
      this.secondMoveOffset = [0, -2];
      this.captureOffsets = [[1, -1], [-1, -1]];
    }
  }

  getValidMoves (board) {
    const moves = [];

    const firstMove = this.getFirstMove(board);
    if (firstMove) {
      moves.push(firstMove);

      const secondMove = this.getSecondMove(board);
      if (secondMove) { moves.push(secondMove); }
    }

    return moves.concat(this.getCaptures(board));
  }

  getFirstMove (board) {
    const dest = super.getDestination(this.currentPosition, this.moveOffset);
    if (board.valid(dest, this.color) &&
        !board.isCapture(dest, this.color)) {
      return super.formatMove(dest, false);
    }
  }

  getSecondMove (board) {
    let dest = super.getDestination(this.currentPosition, this.secondMoveOffset);
    if ((this.currentPosition.y === 1 && this.color === 'BLACK') ||
        (this.currentPosition.y === 6 && this.color === 'WHITE')) {
      if (board.valid(dest, this.color) &&
          !board.isCapture(dest, this.color)) {
        return super.formatMove(dest, false);
      }
    }
  }

  getCaptures (board) {
    return this.captureOffsets.reduce((captures, offset) => {
      const dest = super.getDestination(this.currentPosition, offset);
      if (board.valid(dest, this.color) &&
          board.isCapture(dest, this.color)) {
        captures.push(super.formatMove(dest, true));
      }
      return captures;
    }, []);
  }
}

module.exports = Pawn;
