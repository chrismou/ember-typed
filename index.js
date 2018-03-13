/* jshint node: true */
'use strict';

var MergeTrees = require('broccoli-merge-trees');
var Funnel     = require('broccoli-funnel');
var map        = require('broccoli-stew').map;

module.exports = {
  name: 'ember-typed',

  included: (app) => {
      app.import('vendor/typed.js');
  },

  treeForVendor(vendorTree) {
    let typedTree = new Funnel('bower_components/typed.js/lib', {
      files: ['typed.js']
    });

    typedTree = map(typedTree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return new MergeTrees([vendorTree, typedTree]);
  },
};
