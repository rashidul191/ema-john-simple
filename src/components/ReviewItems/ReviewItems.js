import React from 'react';
import './ReviewItems.css';
const ReviewItems = (props) => {
    const {name, img, quantity, key, price} = props.product;
    return (
        <div className="review-item">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Quantity: {quantity}</p>
                <p>${price}</p>
                <button 
                className="add-to-order-btn"
                    onClick={ () => props.removeProduct(key)}
                    >Remove</button>
            </div>
        </div>
    );
};

export default ReviewItems;