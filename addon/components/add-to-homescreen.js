import Ember from 'ember';
import layout from '../templates/components/add-to-homescreen';

const { Component } = Ember;

export default Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);
    window.addToHomescreen({ debug: false });
  }
});
