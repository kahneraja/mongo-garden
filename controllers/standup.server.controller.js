var Standup = require('../models/standup.server.model.js');

exports.list = function(req, res){
  var q = Standup.find();
  q.exec(function(err, results){
    res.render('index', { notes: results });
  });
};

exports.get = function(req, res){
  res.render('newnote', { title: 'Standup - New Note'});
};

exports.create = function(req, res){
  var s = new Standup(req.body);

  s.save();

  res.redirect(301,'/');
};
