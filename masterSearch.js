
function showResult(term, callback) {


    var instagram = require('./insta');
    var twitter = require('./twitter');
    var facebook = require('./facebook');


    var igObjects = [];
    var twObjects = [];
    var fbObjects = [];

    instagram.searchInsta(term, function (instaArray) {

        instaArray.sort(function (a, b) {

            return parseFloat(b.likes) - parseFloat(a.likes);
        })

        instaArray.forEach(function (igItem) {

            igObjects.push(igItem);
        })

        console.log(igObjects);

        twitter.searchTwit(term, function (twitArray) {

            twitArray.sort(function (a, b) {

                return (b.retweets + b.favorites) - (a.retweets + a.favorites);
            })

            twitArray.forEach(function (twitItem) {

                twObjects.push(twitItem);
            })

            console.log(twObjects);

            facebook.searchFace(term, function (faceArray) {

                faceArray.forEach(function (faceItem) {

                    fbObjects.push(faceItem);
                })

                console.log(fbObjects);

                callback(igObjects, twObjects, fbObjects);
            });
        });
    });






}

module.exports.showResult = showResult;

/*
function showResult(term, callback) {


    var instagram = require('./insta');
    var twitter = require('./twitter');
    var facebook = require('./facebook');


    var igObjects = [];
    var twObjects = [];
    var fbObjects = [];

    instagram.searchInsta(term, function (instaArray) {

        instaArray.sort(function (a, b) {

            return parseFloat(b.likes) - parseFloat(a.likes);
        })

        instaArray.forEach(function (igItem) {

            igObjects.push(igItem);
        })

        console.log(igObjects);
    });

    twitter.searchTwit(term, function (twitArray) {

        twitArray.sort(function (a, b) {

            return (b.retweets + b.favorites) - (a.retweets + a.favorites);
        })

        twitArray.forEach(function (twitItem) {

            twObjects.push(twitItem);
        })

        console.log(twObjects);
    });

    facebook.searchFace(term, function (faceArray) {

        faceArray.forEach(function (faceItem) {

            fbObjects.push(faceItem);
        })

        console.log(fbObjects);
    });

    callback(igObjects, twObjects, fbObjects);
}

module.exports.showResult = showResult;

 */