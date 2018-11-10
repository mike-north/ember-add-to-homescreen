import layout from '../templates/components/add-to-homescreen';
import Component from '@ember/component';
window.addToHomescreen.isMobileChrome = true;
export default Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);

    window.addToHomescreen({ debug: false });
  }
});
