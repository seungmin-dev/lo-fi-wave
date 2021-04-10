import React, {useEffect, useRef} from "react";

const Row = ({item, onClick}) => {
    // console.log('item : ',item);
    const pTag = useRef();
    useEffect(() => {
    }, []);
    return(
        <li>
            {/* <a href="https://www.youtube.com/watch"
            onclick="location.href=this.href+'?v='+item;return false;" target="_blank">
                {item.title}
            </a> */}
            <p ref={pTag} onClick={onClick}>{item.title}</p>
        </li>
    )
}

export default Row;