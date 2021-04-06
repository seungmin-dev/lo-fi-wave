const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const fetch = require("node-fetch");
const youtubeApiKey = require("./api");

var resultList = [];
var cnt = 0;
let data = "";

const delay = (ms) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    });
}
const getHTML = (url) => {
    return new Promise(resolve => {
        delay(300).then(function() {
            axios.get(url).then(function(data) {
                resolve(data);
            });
        });
    });
}

const main = () => {
    const getData = () => {
        return new Promise(function(resolve, reject) {
            const getYoutubeApi = async () => {
                let response = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${youtubeApiKey}&part=contentDetails&chart=mostPopular&maxResults=2`);
                data = await response.text();
                resolve(data);
            }
            getYoutubeApi();
        });
    }
    getData().then(function(data) {
        //var items = data.items;
        console.log(data)
    });

    // var itemArr = [];
    // for (let index = 0; index < items.length; index++) {
    //     const element = array[index];
        
    // }
    // var list = allText.split('\n');
    //var list = items.split(',');
    // var result = [];
    // for (let i = 0; i < list.length-1; i++) {
    //     result.push(list[i].split('^')[4]);
    // }
    // for (let j = 0; j < result.length; j++) {
    //     getHTML(result[j]).then(html => {
    //         let result = {};
    //         const $ = cheerio.load(html.data);
    //         result['title'] = $("body").find(".search_tit").text();
    //         return result;
    //     }).then(res => {
    //         cnt++;
    //         resultList.push(res);
    //         if(result.length == cnt) {
    //             fs.writeFile('youtube_result.txt', JSON.stringify(resultList), 'utf8', function(error) {
    //                 console.log('write end');
    //             });
    //         }
    //     });
    // }
}
main();