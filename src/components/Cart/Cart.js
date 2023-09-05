import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const { img, name } = cart;

    console.log(name)
    // for(singleCart of cart)

    return (
        <div className='cart'>
            <div id="cart-product-clicked-details">
                {/* consolel.log('clicked') */}
                <div className="cart-img">
                    <img src={img} alt="" />
                </div>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Cart;