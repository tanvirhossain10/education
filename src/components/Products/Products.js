import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const productBtnDetail = (id) => {
        console.log(id)
    }
    return (
        <div className='products'>
            <div className="product">

                {
                    products.map(product => <Product key={product.id} products={product} btnHandeler={productBtnDetail} ></Product>)
                }
            </div>
            <div className="cart">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Products;