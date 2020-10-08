import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
// import Products from '../Products/Products';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {
    document.title ="Review";
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory()

    const handleProceedCheckout =() => {
        history.push('/shipment');
    }

    const removeProduct = (productKes) => {
        const newCart = cart.filter(pd=> pd.key !== productKes);
        setCart (newCart);
        removeFromDatabaseCart(productKes);
    }

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
           const product = fakeData.find(pd => pd.key === key);
           product.quantity = savedCart[key];
           return product;
        });
        setCart(cartProducts);
    },[])

    let thankyou;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt=""/>
    }
    return (
        <div className="twin-container"> 
            <div className="products-container">
                {
                    cart.map(pd =><ReviewItems 
                        removeProduct = {removeProduct}
                        key = {pd.key}
                        product={pd} >
                        </ReviewItems>)
                }
                {
                   thankyou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="add-to-order-btn" onClick={handleProceedCheckout}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;