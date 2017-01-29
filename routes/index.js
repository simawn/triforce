var express = require('express');
var router = express.Router();
var masterSearch = require('../masterSearch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search/:id', function(req, res, next){
  masterSearch.showResult(req.params.id, function(ig,tw,fb){
      res.render('search', {output: req.params.id,
        insta: ig,
          twitter: tw,
          facebook: fb
      });

  });
});

router.post('/search/submit', function(req, res, next){
  var id = req.body.id;
  res.redirect('/search/' + id);
});

module.exports = router;
