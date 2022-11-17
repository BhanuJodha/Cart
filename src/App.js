import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./App.css"

class App extends React.Component {
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
                    basePrice: 56.60,
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
        productRef.price = productRef.basePrice * parseInt(value);
        productRef.quanitity = parseInt(value);
        this.setState({
            products: this.state.products
        });
    }

    deleteHandler = (productRef) => {
        this.setState({
            products: this.state.products.filter((e) => e !== productRef)
        })
    }

	totalItem = () => {
		let count = 0;
		this.state.products.forEach((e) => {
			count += e.quanitity;
		})
		return count;
	}

	totalPrice = () => {
		let price = 0;
		this.state.products.forEach((e) => {
			price += e.price;
		})
		return price.toFixed(2);
	}

	render() {
		return (
			<div className="App">
				<Header totalItem={this.totalItem}/>
				<Body products={this.state.products} changeQuantity={this.changeQuantity} deleteHandler={this.deleteHandler} totalItem={this.totalItem} totalPrice={this.totalPrice}/>
			</div>
		);
	}
}

export default App;
