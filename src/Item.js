import React from "react";
import "./Item.css";

class Item extends React.Component{

    render(){
        const {product: state, changeQuantity, deleteHandler} = this.props;

        return (
            <div className="item">
                <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png" />
                <div className="info">
                    <div>
                        <span className="title">{state.title}</span>
                        <span className="provider">By {state.provider}</span>
                    </div>
                    {/* Check stock */}
                    {state.inStock ? <span className="in-stock">In Stock</span> : <span className="out-stock">Out of Stock</span>}

                    {/* Check for free shipping */}
                    <span className="free-shipping">{state.freeD ? "Elegible" : "Not elegible"} for FREE shipping</span>
                    <div>
                        <span className="delete" onClick={(e) => deleteHandler(state)}>Delete</span>
                    </div>
                </div>
                <span className="price">${state.price}</span>
                <div className="quantity">
                    <select name="quantity" onChange={(e)=>changeQuantity(state, e.currentTarget.value)} className="quantity-select" value={state.quanitity}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Item;