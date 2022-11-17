import React from "react";
import List from "./List";
import Total from "./Total";
import "./Body.css";

const Body = (props) => {
    return (
        <div className="body">
            <List {...props}/>
            <Total {...props}/>
        </div>
    )
}

export default Body;