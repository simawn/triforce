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
  var id = req.body.id.trim(); //Remove whitespace from front and end of string

    //Not the greatest solution for now. user should still be able to search by hashtags

  if(id.indexOf(' ') > -1){ //If theres still a space inside the string
      //only take the first word, before space
      //then remove all special characters
      id = id.substring(0, id.indexOf(' ')).replace(/\W/g,'');
  } else { //there's no space inside the string, so its only 1 term
      //remove all special characters
      id = id.replace(/\W/g,'');
  }

  console.log(id);
  res.redirect('/search/' + id);
});

module.exports = router;
