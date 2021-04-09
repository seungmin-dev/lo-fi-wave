import React, {useState} from "react";
import Row from "./PlaylistRow";

const Playlist = ({itemArr, onClickRow}) => {
    const [bgUrl, setBgUrl] = useState("");

    return (
        <>
            <span>Playlist</span>
            <div className="playListBox">
                <ul className="inner__playListBox">    
                    {itemArr && itemArr.map(item => <Row key={item.thumbnail} item={item} onClick={() => {setBgUrl(item.thumbnail); onClickRow(item.thumbnail); }}/>)}
                </ul>
            </div>
        </>
    )
}

export default Playlist;