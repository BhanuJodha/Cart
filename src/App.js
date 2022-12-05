import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./App.css";
import { getFirestore, collection, getDocs } from "firebase/firestore";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            products: [],
            loading: true
        }
    }

    // getting data from firebase
    componentDidMount() {
        const db = getFirestore(this.props.firebaseApp);
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((docSnap) => {
            // getting products array
            const products = docSnap.docs.map(doc => {
                const data = doc.data();
                data.key = doc.id;
                return data;
            });
            
            this.setState({
                products,
                loading: false
            })
        }).catch((err) => console.log(err))
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
                <Header totalItem={this.totalItem} />
                <Body loading={this.state.loading} products={this.state.products} changeQuantity={this.changeQuantity} deleteHandler={this.deleteHandler} totalItem={this.totalItem} totalPrice={this.totalPrice} />
            </div>
        );
    }
}

export default App;
