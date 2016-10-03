import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId()
  },
});

Template.task.events({
  'click .toggle-checked'(){
    // toggle the checked property to the opposite of it's current state
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .toggle-important'(){
    // toggle the important flag on an item
    Meteor.call('tasks.setImportant', this._id, !this.important);
  },
  'click .delete'(){
    Meteor.call('tasks.remove', this._id);
  },
  'click .toggle-private'(){
    Meteor.call('tasks.setPrivate', this._id, !this.private);
  },
});
