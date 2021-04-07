import React from "react";
import Row from "./PlaylistRow";

const Playlist = ({itemArr}) => {
    console.log('itemArr:',itemArr);
    let idArr = itemArr.idArr;
    let titleArr = itemArr.titleArr;
    let thumbnailsArr = itemArr.thumbnailsArr;

    return (
        <>
            <span>Playlist</span>
            <ul>    
                {itemArr && itemArr.map(item => <Row key={item} item={item} />)}
            </ul>
        </>
    )
}

export default Playlist;