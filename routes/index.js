var express = require('express');
var standupCtrl = require('../controllers/standup.server.controller');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/newnote', function(req,res){
  return standupCtrl.get(req,res);
});

router.post('/newnote', function(req,res){
  return standupCtrl.create(req,res);
});

module.exports = router;
