import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

const { RSVP } = Ember;

module('Acceptance | index', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
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
        assert.equal(Ember.$('.ath-viewport').length, 1, 'Add to home screen popup is displayed');
        resolve();
      }, 3000);
    });
  });

});
