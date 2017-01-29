var FacebookSearch = require('facebook-search');

var fb = new FacebookSearch('1043308529114270', '3f7b56707c2cccb424bb5e12e4f66488');
var searchPage = {
    type: 'page',
    q: 'Mchacks'

};

fb.search(searchPage, function(err, res) {
    console.log(err ? err : res);

    fb.next(function(err, res) {
        console.log(err ? err : res);
    });
});

