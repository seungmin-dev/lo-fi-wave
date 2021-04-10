import React from "react";

const Row = ({item, onClick}) => {
    return(
        <li>
            {/* <a href="https://www.youtube.com/watch"
            onclick="location.href=this.href+'?v='+item;return false;" target="_blank">
                {item.title}
            </a> */}
            <p onClick={onClick}>{item.title}</p>
        </li>
    )
}

export default Row;