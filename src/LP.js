import React from "react";

const LP = ({itemArr, lpImg, musicUrl}) => {
    return (
        <>
            <div className="circle">
                <div className="inner__circle" style={{backgroundImage:`url(${lpImg})`}}></div>
            </div>
            <embed src={musicUrl} loop="true" autostart="true" width="2" height="0" />
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