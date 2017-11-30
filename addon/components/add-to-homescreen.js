import Ember from 'ember';
import layout from '../templates/components/add-to-homescreen';

const { Component } = Ember;

export default Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);
    const config = Object.assign({debug: false}, this.get('attrs'));
    window.addToHomescreen(config);
  }
});
