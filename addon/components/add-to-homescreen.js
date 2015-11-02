import Ember from 'ember';
import layout from '../templates/components/add-to-homescreen';

export default Ember.Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);
    window.addToHomescreen({debug: false});
  }
});
