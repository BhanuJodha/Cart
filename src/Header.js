import React from "react";
import "./Header.css"

class Header extends React.Component {
    render() {
        return (
            <nav className="header">
                <span>Amazon</span>
                <span className="material-symbols-outlined">
                    shopping_cart
                    <span className="cart-count">
                        2
                    </span>
                </span>
            </nav>
        )
    }
}

export default Header;