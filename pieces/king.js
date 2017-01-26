const Piece = require('./piece');

class King extends Piece {
  constructor ({ color, type }, currentPosition) {
    super({ color, type }, currentPosition);
    this.moveOffsets = [
      [-1, -1],
      [-1,  0],
      [-1,  1],
      [ 0, -1],
      [ 0,  1],
      [ 1, -1],
      [ 1,  0],
      [ 1,  1]
    ];
  }

  getValidMoves (board) {
    return super.calculateStepMoves(board);
  }
}

module.exports = King;
