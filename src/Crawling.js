// import React from "react";
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// const Crawling = () => {
    
//   return 
// }

var resultList = [];
var cnt = 0;

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
    fs.readFile('sample.txt', 'utf8', function(err, data) {
        var allText = data;
        var list = allText.split('\n');
        var result = [];
        for (let i = 0; i < list.length-1; i++) {
            result.push(list[i].split('^')[4]);
        }
        for (let j = 0; j < result.length; j++) {
            getHTML(result[j]).then(html => {
                let result = {};
                const $ = cheerio.load(html.data);
                result['title'] = $("body").find(".search_tit").text();
                return result;
            }).then(res => {
                cnt++;
                resultList.push(res);
                if(result.length == cnt) {
                    fs.writeFile('result_json.txt', JSON.stringify(resultList), 'utf8', function(error) {
                        console.log('write end');
                    });
                }
            })
                
        }
    });
}

main();