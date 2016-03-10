module.exports = {
  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'typed.js', target: '^1.1.1' }
    ]);
  },
};
