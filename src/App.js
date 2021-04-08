import React, {useEffect, useState} from "react";
import LP from "./LP";
import Playlist from "./Playlist";
import Descbox from "./Descbox";

function App() {
    const [idArr, setIdArr] = useState("");
    const [titleArr, setTitleArr] = useState("");
    const [thumbnailsArr, setThumbnailsArr] = useState("");

    const [itemArr, setItemArr] = useState("");
    const getData = async () => {
        await fetch('http://localhost:3030/api').then((res) => {
            res.json().then((data) => {
                // setIdArr(data.idArr);
                // setTitleArr(data.titleArr);
                // setThumbnailsArr(data.thumbnailsArr);

                setItemArr(data);
            });
        });
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <Playlist itemArr={itemArr} />
            {/* <LP thumbnailsArr={thumbnailsArr} />
            <Descbox titleArr={titleArr} /> */}
        </div>
    );
}

export default App;
