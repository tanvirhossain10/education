import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopLock, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Product = ({ products }) => {
    console.log(products)
    const { name, price, img } = products
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p>Name:{name}</p>
                <p>Price:{price}</p>
            </div>
            <button><p>Add hungry cart</p> <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;