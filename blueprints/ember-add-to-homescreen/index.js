module.exports = {
  description: 'Installs ember-add-to-homescreen dependencies',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('add-to-homescreen');
  }
};
