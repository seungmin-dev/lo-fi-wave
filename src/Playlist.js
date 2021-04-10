import React, {useState, useEffect, useRef} from "react";
import Row from "./PlaylistRow";

const Playlist = ({itemArr, onClickRow, onClickTitle}) => {
    const [bgUrl, setBgUrl] = useState("");
    const [title, setTitle] = useState("");
    return (
        <>
            <span>Playlist</span>
            <div className="playListBox">
                <ul className="inner__playListBox">    
                    {itemArr && itemArr.map(item => <Row key={item.thumbnail} item={item} onClick={() => {setBgUrl(item.thumbnail); onClickRow(item.thumbnail); onClickTitle(item.title) }}/>)}
                </ul>
            </div>
        </>
    )
}

export default Playlist;