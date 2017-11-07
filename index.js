/* eslint-env node */
'use strict';
const path = require('path');
const fs = require('fs');

const Funnel = require('broccoli-funnel');
const map = require('broccoli-stew').map;
const debug = require('broccoli-stew').debug;
const mergeTrees = require('broccoli-merge-trees');

const A2H_ASSET_PATH = path.join(__dirname, 'node_modules', 'add-to-homescreen');
const A2H_JS_PATH = A2H_ASSET_PATH;
const A2H_CSS_PATH = path.join(A2H_ASSET_PATH, 'dist', 'style');

const A2H_JS_FILES = ['addtohomescreen.js'];
const A2H_CSS_FILES = ['addtohomescreen.css'];

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
    if (fs.existsSync(A2H_ASSET_PATH)) {
      let browserHomeScreenJS = notInFastboot(new Funnel(A2H_JS_PATH, { files: A2H_JS_FILES }));
      let browserHomeScreenCSS = new Funnel(A2H_CSS_PATH, { files: A2H_CSS_FILES });
      return debug(new mergeTrees([defaultTree, browserHomeScreenJS, browserHomeScreenCSS]), { name: 'foo' });
    } else {
      throw new Error('add-to-homescreen was not found at ' + A2H_ASSET_PATH);
    }
  }
};