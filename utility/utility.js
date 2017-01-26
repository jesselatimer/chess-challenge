const Utility = {
  flatten (arr) {
    return arr.reduce((a, b) => {
      return a.concat(Array.isArray(b) ? this.flatten(b) : b);
    }, []);
  }
};

module.exports = Utility;
