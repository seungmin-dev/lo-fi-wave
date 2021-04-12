import React from "react";

const LP = ({itemArr, lpImg, musicUrl}) => {
    const getId = (url) => {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
    
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }
    let myId = getId(musicUrl);
    console.log('myId : ',myId);
    return (
        <>
            <div className="circle">
                <div className="inner__circle" style={{backgroundImage:`url(${lpImg})`}}></div>
            </div>
            <iframe className="iframe" width="560" height="315" src={`https://www.youtube.com/embed/${myId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="console">
                <button className="prev"></button>
                <button className="pause"></button>
                <button className="next"></button>
            </div>
            <span>LP Component</span>
        </>
    )
}

export default LP;