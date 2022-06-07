import React from 'react';
import cart_image from "../../assets/images/cart.svg"
import "../../assets/css/index.css"
import {Link} from "react-router-dom";


function Cart({orderCount})
{

    const counterStyle = orderCount === 0 ? "d-none": "cart-counter-wrapper"
    return (
        <Link exact to={"/cart"}>
            <div className="cart">
                <div className="cart-image">
                    <img src={cart_image} alt="Корзина" style={{width: "32px", height: "32px"}}/>
                </div>

                <p className={counterStyle}>{orderCount}</p>


            </div>
        </Link>
    );
}


export default Cart;

