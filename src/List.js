import React from "react";
import Item from "./Item";
import "./List.css";

class List extends React.Component{
    render(){
        return (
            <div className="list">
                <div className="list-header">
                    <h4>Shopping Cart</h4>
                    <span>Price</span>
                    <span>Quantity</span>
                </div>
                <Item/>
                <Item/>
            </div>
        );
    }
}

export default List;