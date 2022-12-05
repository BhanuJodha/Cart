import React from "react";
import Item from "./Item";
import "./List.css";

const List = (props) => {
    return (
        <div className="list">
            <div className="list-header">
                <h4>Shopping Cart</h4>
                <span>Price</span>
                <span>Quantity</span>
            </div>
            {props.loading && <h4 style={{textAlign: "center"}}>Loading...</h4>}
            {props.products.map((product) => {
                return (<Item product={product} deleteHandler={props.deleteHandler} changeQuantity={props.changeQuantity} key={product.key} />)
            })}
        </div>
    );
}

export default List;