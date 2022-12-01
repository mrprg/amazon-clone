import React from 'react';
import '../styles/checkoutproduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className='checkoutproduct'>
        <img className='checkoutProduct__image' src={image} alt='this is a image'  />

        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>
            {title}
          </p>
          <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='checkoutProduct__rating'>
            {Array(rating).fill().map(( _ , i) => { return <p>⭐</p> })}
          </div>
          <button>Remove from Basket</button>
        </div>
    </div>
  )
};

export default CheckoutProduct;