const Piece = require('./piece');

class Knight extends Piece {
  constructor ({ color, type }, currentPosition) {
    super({ color, type }, currentPosition);
    this.moveOffsets = [
      [ 2, -1],
      [ 2,  1],
      [ 1, -2],
      [ 1,  2],
      [-1, -2],
      [-1,  2],
      [-2, -1],
      [-2,  1]
    ];
  }

  getValidMoves (board) {
    return super.calculateStepMoves(board);
  }
}

module.exports = Knight;
