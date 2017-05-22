import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

const { RSVP, run, $ } = Ember;

module('Acceptance | index', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    run(this.application, 'destroy');
  }
});

test('visiting /', function(assert) {
  window.localStorage.clear('org.cubiq.addtohome');
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  }).then(() => {
    return new RSVP.Promise((resolve) => {
      setTimeout(() => {
        assert.equal($('.ath-viewport').length, 1, 'Add to home screen popup is displayed');
        resolve();
      }, 3000);
    });
  });

});
