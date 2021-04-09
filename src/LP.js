import React from "react";

const LP = ({itemArr, lpImg}) => {
    return (
        <>
            <div className="circle">
                <div className="inner__circle" style={{backgroundImage:`url(${lpImg})`}}></div>
            </div>
            <span>LP Component</span>
        </>
    )
}

export default LP;