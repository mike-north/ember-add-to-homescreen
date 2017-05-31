/* jshint node: true */
'use strict';
const path = require('path');
const fs = require('fs');

const Funnel = require('broccoli-funnel');
const map = require('broccoli-stew').map;
const mergeTrees = require('broccoli-merge-trees');


module.exports = {
  name: 'ember-add-to-homescreen',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/addtohomescreen.js');
    app.import(app.bowerDirectory + '/add-to-homescreen/style/addtohomescreen.css');

  },
  treeForVendor: function(defaultTree) {
    const app = this._findHost();
    const assetPath =path.join(__dirname, app.bowerDirectory, 'add-to-homescreen/src');
    if (fs.existsSync(assetPath)) {
      let browserHomeScreenJS = new Funnel(assetPath, {
        files: ['addtohomescreen.js']});
      browserHomeScreenJS = map(browserHomeScreenJS,
        (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);
      return new mergeTrees([defaultTree, browserHomeScreenJS]);
    } else {
      return defaultTree;
    }
  }
};
