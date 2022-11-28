import React from 'react';
import '../styles/Product.css';

function Product({ id,image,title,price,rating }) {
    return (
        <div className='product'>
        <div className='product__info'>
            <p classname='title'>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map(( _ , i) => { return <p>⭐</p> })}
            </div> 
        </div>
        <img src={image} alt='' />
        <button>add to basket</button>
    </div>
    );
};

export default Product;