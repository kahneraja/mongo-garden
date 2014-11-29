var Standup = require('../models/standup.server.model.js');

exports.get = function(req, res){
  res.render('newnote', { title: 'Standup - New Note'});
};

exports.create = function(req, res){
  var s = new Standup(req.body);

  s.save();

  res.redirect(301,'/');
};
