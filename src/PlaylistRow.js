import React from "react";

const Row = ({item}) => {
    console.log('li item:',item);
    return(
        <li>https://www.youtube.com/watch?v={item}</li>
    )
}

export default Row;