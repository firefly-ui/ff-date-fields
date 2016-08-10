import Ember from 'ember';

export default Ember.Controller.extend({
  today: new Date(),

  todayRange: {
    start: new Date(),
    end: new Date()
  }
});
