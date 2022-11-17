import React from "react";

const Total = (props) => {
    return (
        <div style={style.total}>
            <span style={style.text}>Subtotal (1 item): <span style={{color:"#b12704"}}>$999.99</span></span>
            <ul style={style.list}>
                <li>This order contains a gift</li>
            </ul>
            <button style={style.button}>Proceed to checkout</button>
        </div>
    )
}

const style = {
    total: {
        width: "20%",
        backgroundColor: "#f3f3f3",
        display: "flex",
        flexDirection: "column",
        padding: "1rem"
    },
    text: {
        fontSize: "1.5rem",
        fontWeight: "600"
    },
    list: {
        listStyleType: "square",
        listStylePosition: "inside",
        margin: ".5rem 0"
    },
    button: {
        fontSize: "1em",
        padding: ".6rem",
        background: "linear-gradient(to top, #d4a749, #f1ddb4)",
        border: "1px solid #d4a749",
        cursor: "pointer"
    }
}

export default Total;