var FacebookSearch = require('facebook-search');

var fb = new FacebookSearch('1043308529114270', '3f7b56707c2cccb424bb5e12e4f66488');



var obj;

function searchFB(context, callback) {

    var searchPage = {
        type: 'page',
        q: context
    };
    fb.search(searchPage, function (err, res) {
        //console.log(err ? err : res)
        obj = res;
        for (i = 0; i < obj.length; i++) {
            obj[i].id = "https://www.facebook.com/pages/"
                + res[i].name + "/" + res[i].id;
        }
        console.log(obj);

        callback(obj);

        // console.log(obj[0].name);
        // console.log(obj.length);

        // obj.forEach(function(eachName,index){
        //     console.log(index+1 + eachName);
        // });


        // fb.next(function(err, res) {
        //     console.log(err ? err : res);
        // });
    });
}

module.exports.searchFB = searchFB;