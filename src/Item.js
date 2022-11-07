import React from "react";
import "./Item.css";

class Item extends React.Component{
    render(){
        return (
            <div className="item">
                <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png" />
                <div className="info">
                    <div>
                        <span className="title">Laptop</span>
                        <span className="provider">By logitech</span>
                    </div>
                    <span className="in-stock">In Stock</span>
                    <span className="free-shipping">Elegible for FREE shipping</span>
                    <div>
                        <span className="delete">Delete</span>
                    </div>
                </div>
                <span className="price">$999.99</span>
                <div className="quantity">
                    <select name="quantity" className="quantity-select" id="">
                        <option value="1">1</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Item;