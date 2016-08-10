import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ff-date-button', 'Integration | Component | ff date button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ff-date-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ff-date-button}}
      template block text
    {{/ff-date-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
