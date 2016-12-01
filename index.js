/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-add-to-homescreen',
  included: function(app) {
    this._super.included(app);

    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {
      app.import(app.bowerDirectory + '/add-to-homescreen/src/addtohomescreen.js');
    }
    app.import(app.bowerDirectory + '/add-to-homescreen/style/addtohomescreen.css');

  }
};
