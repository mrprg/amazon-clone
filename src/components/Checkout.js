import React from 'react';
import '../styles/Checkout.css';

function Checkout() {
  return (
    <div>
        <div className='checkout'>
      
      <div className='checkout__left'>
          <img className='checkout__ad' src='https://s3.amazonaws.com/responsive-landing/amazon/amazon_easier.jpg' alt='' />
          <div>
            <h2 className='checkout__title'>Your shopping Basket</h2>
          </div>
      </div>
      
      <div className='checkout__right'>
          <h2>Subtotoal</h2>
      </div>
    </div>
    </div>
  )
}

export default Checkout