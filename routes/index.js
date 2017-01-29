var express = require('express');
var router = express.Router();
var masterSearch = require('../masterSearch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test/:id', function(req, res, next){
  masterSearch.showResult(req.params.id, function(results){
      res.render('test', {output: req.params.id,
        thisresult: results
      });

  });
});

router.post('/test/submit', function(req, res, next){
  var id = req.body.id;
  res.redirect('/test/' + id);
});

module.exports = router;
