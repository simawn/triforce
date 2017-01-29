var facebook = require('./facebook');

facebook.searchFB('Mchacks', function(res){
    console.log(res[0].name);
});