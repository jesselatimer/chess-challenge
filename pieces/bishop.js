const Piece = require('./piece');

class Bishop extends Piece {
  constructor ({ color, type }, currentPosition) {
    super({ color, type }, currentPosition);
    this.moveDirections = [
      [-1, -1],
      [-1,  1],
      [ 1, -1],
      [ 1,  1]
    ];
  }

  getValidMoves (board) {
    return super.calculateSlideMoves(board);
  }
}

module.exports = Bishop;
