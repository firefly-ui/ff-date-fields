import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ff-date-calendar-day', 'Integration | Component | ff date calendar day', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ff-date-calendar-day}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ff-date-calendar-day}}
      template block text
    {{/ff-date-calendar-day}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
