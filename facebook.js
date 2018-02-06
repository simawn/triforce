var FacebookSearch = require('facebook-search');

var fb = new FacebookSearch('', '');

var obj;

function searchFace(context, callback) {

    var searchPage = {
        type: 'page',
        q: context
    };

    fb.search(searchPage, function (err, res) {
        //console.log(err ? err : res)
        obj = res;

        for (i = 0; i < obj.length; i++) {

            var pageName = res[i].name;

            obj[i].id = "https://www.facebook.com/pages/" + pageName.replace(/\s/g,'-') + "/" + res[i].id;

            res[i].platform = 'fb';
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

module.exports.searchFace = searchFace;
