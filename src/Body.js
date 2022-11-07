import React from "react";
import List from "./List";
import "./Body.css";

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <List />
            </div>
        )
    }
}

export default Body;