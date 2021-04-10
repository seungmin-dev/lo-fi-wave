import React, {useState, useEffect, useRef} from "react";
import Row from "./PlaylistRow";

const Playlist = ({itemArr, onClickRow, onClickTitle, onClickUrl}) => {
    return (
        <>
            <span>Playlist</span>
            <div className="playListBox">
                <ul className="inner__playListBox">    
                    {itemArr && itemArr.map(item => <Row key={item.thumbnail} item={item} onClick={() => {onClickRow(item.thumbnail); onClickTitle(item.title); onClickUrl(item.id); }}/>)}
                </ul>
            </div>
        </>
    )
}

export default Playlist;