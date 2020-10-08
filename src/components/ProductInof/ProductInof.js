import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductInof = () => {
    document.title ="Product Information";
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h1>Your Product Information.</h1>
            <Products showAddtoCart ={false} product ={product}></Products>
        </div>
    );
};

export default ProductInof;