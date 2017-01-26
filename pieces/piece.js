class Piece {
  constructor ({ color, type }, currentPosition) {
    this.color = color;
    this.type = type;
    this.currentPosition = currentPosition;
    if (!(this.color === 'BLACK' || this.color === 'WHITE')) {
      throw 'Expected color input to take the form \'BLACK\' or \'WHITE\'.';
    }
  }

  calculateStepMoves (board) {
    return this.moveOffsets.reduce((moves, offset) => {
      const destination = this.getDestination(this.currentPosition, offset);

      if (board.valid(destination, this.color)) {
        const capture = board.isCapture(destination, this.color);
        moves.push(this.formatMove(destination, capture));
      }
      return moves;
    }, []);
  }

  calculateSlideMoves (board) {
    return this.moveDirections.reduce((moves, direction) => {
      let destination = this.getDestination(this.currentPosition, direction);

      while (board.valid(destination, this.color)) {
        const capture = board.isCapture(destination, this.color);
        moves.push(this.formatMove(destination, capture));
        if (capture) { break; }
        destination = this.getDestination(destination, direction);
      }
      return moves;
    }, []);
  }

  formatMove (destination, capture) {
    return {
      type: this.type,
      destination,
      capture
    };
  }

  getDestination ({ x, y }, offset) {
    return {
      x: offset[0] + x,
      y: offset[1] + y
    };
  }
}

module.exports = Piece;
