var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var standupSchema = new Schema({
  name: String,
  project: String,
  yesterday: String,
  today: String,
  blockers: String,
  createdOn: { type: Date, default: Date.now }
});

// export model
module.exports = mongoose.model('Standup', standupSchema);
