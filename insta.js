/**
 * Created by kwreen on 2017-01-28.
 */

var ig = require('instagram-tagscrape');

function instaSearch(hashtag, callback) {

    var initialArray = [];
    var finalArray = [];

    ig.scrapeTagPage(hashtag).then(function (result) {

        // console.dir(result);


        result.media.forEach(function (item) {

            //console.log(images.caption);
            //console.log();

            initialArray.push(item);

            var object = {
                preview: item.display_src,
                caption: item.caption,
                likes: item.likes.count,
                platform: 'ig'
            }

            finalArray.push(object);

            })

            callback(finalArray);
        });
}

module.exports.instaSearch = instaSearch;