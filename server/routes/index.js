var express = require('express');
var fetch = require("node-fetch");
var router = express.Router();
var youtubeApiKey = require("../../src/apiKey");

router.get('/', function(req, res) {
    var idArr = [];
    var titleArr = [];
    var thumbnailsArr = [];

    const getData = () => {
        return new Promise(function(resolve, reject) {
            const getYoutubeApi = async () => {
                await fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&part=snippet&q=lofimusic&maxResults=50`).then((res) => {
                    res.json().then((data) => {
                        resolve(data);
                    })
                });
            }
            getYoutubeApi();
        });
    }
    getData().then(function(data) {
        var items = data.items;
        for (let index = 0; index < items.length; index++) {
            let id = items[index].id.videoId;
            idArr.push(id);
            let title = items[index].snippet.title;
            titleArr.push(title);
            let thumbnail = items[index].snippet.thumbnails.high.url;
            thumbnailsArr.push(thumbnail);
        }
        res.send({idArr:idArr, titleArr:titleArr, thumbnailsArr:thumbnailsArr});
    });
});

module.exports = router;