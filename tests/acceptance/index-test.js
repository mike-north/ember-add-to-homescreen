import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

function timeout(n) {
  return new Promise(res => {
    setTimeout(res, n);
  });
}

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  hooks.beforeEach(() => {
    window.localStorage.clear('org.cubiq.addtohome');
  });

  test('visiting /index', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    await timeout(5000);
    assert.equal(
      document.querySelectorAll('.ath-viewport').length,
      1,
      'Add to home screen popup is displayed'
    );
  });
});
