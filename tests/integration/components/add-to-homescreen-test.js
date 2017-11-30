import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-to-homescreen', 'Integration | Component | add to homescreen', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{add-to-homescreen}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders in block form', function(assert) {
  this.render(hbs`
    {{#add-to-homescreen}}
      template block text
    {{/add-to-homescreen}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
