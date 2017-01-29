var facebook = require('./facebook');

facebook.searchFace('Mchacks', function(res){
    console.log(res[0].name);
});