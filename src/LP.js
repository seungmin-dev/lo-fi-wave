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
    const onClickPrev = () => {
        console.log('onCLickprev');
    }
    const onClickPause = () => {
        console.log('onCLickPause');
    }
    const onClickNext = () => {
        console.log('onClickNext');
    }
    let myId = getId(musicUrl);
    console.log('myId : ',myId);
    return (
        <>
            <div className="circle">
                <div className="inner__circle" style={{backgroundImage:`url(${lpImg})`}}></div>
            </div>
            <iframe className="iframe" id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${myId}?autoplay=1&origin=http://youtube.com`}
            frameborder="0"></iframe>
            <div className="console">
                <button className="conBtn" id="prev" onClick={onClickPrev}></button>
                <button className="conBtn" id="pause" onClick={onClickPause}></button>
                <button className="conBtn" id="next" onClick={onClickNext}></button>
            </div>
            <span>LP Component</span>
        </>
    )
}

export default LP;