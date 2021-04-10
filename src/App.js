import React, {useEffect, useState} from "react";
import LP from "./LP";
import Playlist from "./Playlist";
import Descbox from "./Descbox";

function App() {
    let [bgUrl, setBgUrl] = useState("");
    let [titleText, setTitleText] = useState("");
    const [itemArr, setItemArr] = useState("");
    const getData = async () => {
        await fetch('http://localhost:3030/api').then((res) => {
            res.json().then((data) => {
                setItemArr(data);
                setBgUrl(data[0].thumbnail);
                setTitleText(data[0].title);
            });
        });
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <div className="bgBox" style={{backgroundImage:`url(${bgUrl})`}}></div>
            <Playlist itemArr={itemArr} onClickRow={(url) => setBgUrl(url)} onClickTitle={(title) => setTitleText(title)} />
            <LP itemArr={itemArr} lpImg={bgUrl} />
            <Descbox itemArr={itemArr} title={titleText} />
        </div>
    );
}

export default App;
