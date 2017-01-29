var twitter = require('./twitter');

twitter.searchTwit('#mchacks', function(result){
    console.log(result[0].text);
});