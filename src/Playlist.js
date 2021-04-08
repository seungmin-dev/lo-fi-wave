import React, {useState} from "react";
import Row from "./PlaylistRow";

const Playlist = ({itemArr}) => {
    const [bgUrl, setBgUrl] = useState("");
    console.log('itemArr:',itemArr);
    let idArr = itemArr.idArr;
    let titleArr = itemArr.titleArr;
    let thumbnailsArr = itemArr.thumbnailsArr;

    const onClickRow = () => {
        console.log('bgUrl:',bgUrl);
    }
    return (
        <>
            <div className="playListBg" style={{backgroundImage:`url(${bgUrl})`, backgroundSize:'100% auto', backgroundPosition:'center center', backgroundRepeat:'no-repeat', backgroundColor:'transparent 0.5%'}}>
                <span>Playlist</span>
                <ul>    
                    {itemArr && itemArr.map(item => <Row key={item.thumbnail} item={item} onClick={() => {setBgUrl(item.thumbnail); onClickRow();}}/>)}
                </ul>
            </div>
        </>
    )
}

export default Playlist;