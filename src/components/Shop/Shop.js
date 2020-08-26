import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0,100);
    const [products, setProducts] = useState(first10);
    const [cart , setCart] = useState([]);

    const handleAddProduct =(product) =>{
        console.log("product add click" , product);
    const newCart = [...cart, product];
            setCart(newCart);
    }
    return (
        <div className ="shop-container">
            <div className="products-container">
                {
                 products.map(pd => <Products
                    handleAddProduct ={handleAddProduct}
                     product ={pd}> </Products> )
                }
            </div>
            <div className="card-container">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;