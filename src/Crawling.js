const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const fetch = require("node-fetch");

var resultList = [];
var cnt = 0;
var data = "";

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
    const getYoutubeApi = async () => {
        // function json(url) {
        //     return fetch(url).then(data1 => console.log('data1:', data1));
        // }
        await fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDo7xXJzyiBhVMmpLh5y6PDRPvVAy3a9iE&part=contentDetails&chart=mostPopular&maxResults=50`)
        .then(data => {data.json(); console.log('data:',data);})
        .catch(error => console.error('Error:', error));
    }
    getYoutubeApi();

    // /https://developers.google.com/youtube/v3/docs/search/list?hl=ko#javascript

    // var items = data.items;
    // console.log('items:',items);
    // var itemArr = [];
    // for (let index = 0; index < items.length; index++) {
    //     const element = array[index];
        
    // }
    // var list = allText.split('\n');
    //var list = items.split(',');
    var result = [];
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