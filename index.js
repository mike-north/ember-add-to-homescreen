/* eslint-env node */
'use strict';
var path = require('path');
var fs = require('fs');

var Funnel = require('broccoli-funnel');
var map = require('broccoli-stew').map;
var debug = require('broccoli-stew').debug;
var mergeTrees = require('broccoli-merge-trees');

var A2H_ASSET_PATH = path.join(require.resolve('add-to-homescreen'), '..', '..');
var A2H_JS_PATH = A2H_ASSET_PATH;
var A2H_CSS_PATH = path.join(A2H_ASSET_PATH, 'dist', 'style');

var A2H_JS_FILES = ['addtohomescreen.js'];
var A2H_CSS_FILES = ['addtohomescreen.css'];

function notInFastboot(tree) {
  return map(tree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);
}

module.exports = {
  name: 'ember-add-to-homescreen',

  included: function (app) {
    this._super.included(app);
    app.import('vendor/addtohomescreen.js');
    app.import('vendor/addtohomescreen.css');
  },

  treeForVendor: function (defaultTree) {
    var trees = defaultTree ? [defaultTree] : [];
    if (fs.existsSync(A2H_ASSET_PATH)) {
      var browserHomeScreenJS = notInFastboot(new Funnel(A2H_JS_PATH, { files: A2H_JS_FILES }));
      var browserHomeScreenCSS = new Funnel(A2H_CSS_PATH, { files: A2H_CSS_FILES });
      trees = trees.concat([browserHomeScreenJS, browserHomeScreenCSS]);
      return debug(new mergeTrees(trees), { name: 'foo' });
    } else {
      throw new Error('add-to-homescreen was not found at ' + A2H_ASSET_PATH);
    }
  }
};