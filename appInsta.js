var insta = require('./insta.js');

var igObjects = [];

insta.instaSearch('mchacks', function(instaArray) {

    instaArray.sort(function(a, b) {

        return parseFloat(b.likes) - parseFloat(a.likes);
    })

    instaArray.forEach(function(igItem) {

        igObjects.push(igItem);
    })

    console.log(igObjects);
});