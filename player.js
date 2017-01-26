class Player {
  constructor (color) {
    this.color = color;
    if (!(this.color === 'BLACK' || this.color === 'WHITE')) {
      throw 'Expected color input to take the form \'BLACK\' or \'WHITE\'.';
    }
  }
}

module.exports = Player;
