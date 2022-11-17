import React from "react";
import "./Header.css"

const Header = (props) => {
    return (
        <nav className="header">
            <span>Amazon</span>
            <span className="material-symbols-outlined">
                shopping_cart
                <span className="cart-count">
                    {props.totalItem()}
                </span>
            </span>
        </nav>
    )
}

export default Header;