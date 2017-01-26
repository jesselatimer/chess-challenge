const Piece = require('./piece');

class Queen extends Piece {
  constructor ({ color, type }, currentPosition) {
    super({ color, type }, currentPosition);
    this.moveDirections = [
      [-1,  0],
      [ 1,  0],
      [ 0, -1],
      [ 0,  1],
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

module.exports = Queen;
