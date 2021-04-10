import React, {useEffect, useState} from "react";
import LP from "./LP";
import Playlist from "./Playlist";
import Descbox from "./Descbox";

function App() {
    let [bgUrl, setBgUrl] = useState("");
    let [titleText, setTitleText] = useState("");
    let [musicUrl, setMusicUrl] = useState("");
    const [itemArr, setItemArr] = useState("");
    const getData = async () => {
        await fetch('http://localhost:3030/api').then((res) => {
            res.json().then((data) => {
                setItemArr(data);
                setBgUrl(data[0].thumbnail);
                setTitleText(data[0].title);
                setMusicUrl(`https://youtube.com/watch?v=${data[0].id}`)
            });
        });
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <div className="bgBox" style={{backgroundImage:`url(${bgUrl})`}}></div>
            <Playlist itemArr={itemArr} onClickRow={(url) => setBgUrl(url)} onClickTitle={(title) => setTitleText(title)} onClickUrl={(id) => setMusicUrl(`https://youtube.com/watch?v=${id}`)} />
            <LP itemArr={itemArr} lpImg={bgUrl} musicUrl={musicUrl} />
            <Descbox itemArr={itemArr} title={titleText} />
        </div>
    );
}

export default App;
