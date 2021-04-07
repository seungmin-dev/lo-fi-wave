import React, {useEffect, useState} from "react";

function App() {
  const [idArr, setIdArr] = useState("");
  const [titleArr, setTitleArr] = useState("");
  const [thumbnailsArr, setThumbnailsArr] = useState("");
  const getData = async () => {
    await fetch('http://localhost:3030/api').then((res) => {
      res.json().then((data) => {
        setIdArr(data.idArr);
        setTitleArr(data.titleArr);
        setThumbnailsArr(data.thumbnailsArr);
      });
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <span>{idArr}</span>
      <span>{titleArr}</span>
      <span>{thumbnailsArr}</span>
    </div>
  );
}

export default App;
