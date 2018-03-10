var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Movie App',
    intro: 'Watch your favourite movies'
   });
});

router.get('/video', function(req, res, next) {
  res.render('video', {
    title: 'Movie App',
    intro: 'Watch your favourite movies'
   });
});

router.get('/video2', function(req, res, next) {
  res.render('video2', {
    title: 'Movie App',
    intro: 'Watch your favourite movies'
   });
});


module.exports = router;
