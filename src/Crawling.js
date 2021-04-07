import React from "react";
const fetch = require("node-fetch");


const Crawling = () => {
    const getData = () => {
        return new Promise(function(resolve, reject) {
            const getYoutubeApi = async () => {
                await fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&part=snippet&q=lofimusic&maxResults=2`).then((res) => {
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
        var idArr = [];
        var titleArr = [];
        var thumbnailsArr = [];
        for (let index = 0; index < items.length; index++) {
            let id = items[index].id.videoId;
            idArr.push(id);
            let title = items[index].snippet.title;
            titleArr.push(title);
            let thumbnail = items[index].snippet.thumbnails.high.url;
            thumbnailsArr.push(thumbnail);
        }
        return (idArr, titleArr, thumbnailsArr);
    });
}

export default Crawling;
