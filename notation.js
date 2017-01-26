class Notation {
  static piece(type) {
    switch (type) {
      case 'PAWN':
        return '';
      case 'KNIGHT':
        return 'N';
      case 'BISHOP':
        return 'B';
      case 'ROOK':
        return 'R';
      case 'QUEEN':
        return 'Q';
      case 'KING':
        return 'K';
      default:
        return '';
    }
  }

  static position({ x, y }) {
    const columns = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];
    return columns[x] + rows[y];
  }

  static capture() {
    return 'x';
  }

  static notate(moves) {
    return moves.map(({ type, destination, capture }) => {
      let string = Notation.piece(type);
      if (capture) { string += this.capture(); }
      return string + Notation.position(destination);
    });
  }
}

module.exports = Notation;
