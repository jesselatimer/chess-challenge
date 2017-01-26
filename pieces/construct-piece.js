const Pawn = require('./pawn');
const Knight = require('./knight');
const Bishop = require('./bishop');
const Rook = require('./rook');
const Queen = require('./queen');
const King = require('./king');

class ConstructPiece {
  constructor (piece, currentPosition) {
    switch (piece.type) {
      case 'PAWN':
        return new Pawn(piece, currentPosition);
      case 'KNIGHT':
        return new Knight(piece, currentPosition);
      case 'BISHOP':
        return new Bishop(piece, currentPosition);
      case 'ROOK':
         return new Rook(piece, currentPosition);
      case 'QUEEN':
        return new Queen(piece, currentPosition);
      case 'KING':
        return new King(piece, currentPosition);
      default:
        throw 'Invalid piece type.';
    }
  }
}

module.exports = ConstructPiece;
