import React from "react";
import Row from "./PlaylistRow";

const Playlist = ({idArr}) => {
    console.log('idArr:',idArr);
    return (
        <>
            <span>Playlist</span>
            <ul>
                {idArr.map(item => <Row key={item} item={item} />)}
            </ul>
        </>
    )
}

export default Playlist;