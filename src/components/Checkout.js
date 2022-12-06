import React from 'react';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../context/Stateprovider';
import '../styles/Checkout.css';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div>
        <div className='checkout'>
      
      <div className='checkout__left'>
          <img className='checkout__ad' src='https://s3.amazonaws.com/responsive-landing/amazon/amazon_easier.jpg' alt='' />
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className='checkout__title'>Your shopping Basket</h2>
            {basket.map(item => (
              <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
              />
            ))}
          </div>
      </div>
      
      <div className='checkout__right'>
          <h2><Subtotal /></h2>
      </div>
    </div>
    </div>
  )
}

export default Checkout