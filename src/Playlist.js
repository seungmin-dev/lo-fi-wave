import React from "react";

const Playlist = ({idArr}) => {
    return (
        <>
            <span>Playlist</span>
            <p>{idArr.map(id => `${id}\n`)}</p>
        </>
    )
}

export default Playlist;