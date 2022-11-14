import React from "react";
import Item from "./Item";
import "./List.css";

class List extends React.Component{
    constructor(){
        super();

        this.state = {
            products: [
                {
                    basePrice: 999.78,
                    price: 999.78,
                    title: "Mobile Phone (iPhone)",
                    provider: "Apple",
                    inStock: true,
                    freeD: true,
                    quanitity: 1,
                    key: 1
                },
                {
                    basePrice: 56.00,
                    price: 56.60,
                    title: "Speakers",
                    provider: "Sony",
                    inStock: true,
                    freeD: false,
                    quanitity: 1,
                    key: 2
                },
                {
                    basePrice: 1200.00,
                    price: 1200.00,
                    title: "Laptop (Macbook air)",
                    provider: "Apple",
                    inStock: false,
                    freeD: true,
                    quanitity: 1,
                    key: 3
                }
            ]
        }
    }

    changeQuantity = (productRef, value) => {
        productRef.price = productRef.basePrice * value;
        productRef.quanitity = value;
        this.setState({
            products: this.state.products
        });
    }

    render(){
        return (
            <div className="list">
                <div className="list-header">
                    <h4>Shopping Cart</h4>
                    <span>Price</span>
                    <span>Quantity</span>
                </div>
                {this.state.products.map((product) => {
                    return (<Item product={product} changeQuantity={this.changeQuantity} key={product.key}/>)
                })}
            </div>
        );
    }
}

export default List;