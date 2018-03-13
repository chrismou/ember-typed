module.exports = {
  description: 'Add bower dependencies for typed.js library',

  normalizeEntityName: function() {

  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'typed.js', target: '^2.0.6' }
    ]);
  }
};
