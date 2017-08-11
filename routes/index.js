var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JWPlayer App' });
});

router.get('/video', function(req, res, next) {
  res.render('video', { title: 'JWPlayer Demo' });
});

router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { title: 'Robert Luisi' });
});

router.get('/jwplayer', function(req, res, next) {
  //res.render('aboutMe', { title: 'Robert Luisi' });
  res.sendfile(path.resolve('public/stylesheets/style.css'));
});

router.get('/AssessmentPlayer', function(req, res, next) {
  //res.render('aboutMe', { title: 'Robert Luisi' });
  res.render('AssessmentPlayer', { title: 'Assesment Player' });
});

router.get('/Test', function(req, res, next) {
  //res.render('aboutMe', { title: 'Robert Luisi' });
  res.render('Test', { title: 'Test' });
});

module.exports = router;
