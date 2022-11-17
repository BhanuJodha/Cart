import React from "react";
import List from "./List";
import Total from "./Total";
import "./Body.css";

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <List />
                <Total />
            </div>
        )
    }
}

export default Body;