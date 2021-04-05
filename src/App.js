import React, {useEffect, useState} from "react";

function App() {
  const [username, setUsername] = useState("");
  const getData = async () => {
    const data = await fetch('http://localhost:3030/api')
    .then(res=>res.json().then(data=>setUsername(data.username)));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {username ? `Hello ${username}` : 'Hello world'}
    </div>
  );
}

export default App;
