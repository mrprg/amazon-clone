import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../context/Stateprovider';
import '../styles/Payment.css';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className='payment__container'>
                <div className='payment__section'>
                        <div className='paymen__titile'>
                            <h3>Delivery Address</h3>
                        </div>
                        <div className='payment__address'>
                              <p>{user?.email}</p>
                              <p>123 React Lane</p>
                              <p>Los Angeles, CA</p>
                        </div>
                </div>
                
                <div className='payment__section'>
                        <div className='payment__title'>
                            <h3>Review items and Delivery</h3>
                        </div>
                        <div className='payment__items'>
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
                
                <div className='payment__section'>
                      <div className='payment__title'>
                            <h3>Payment Method</h3>
                      </div>
                      <div className='payment__details'>
                        
                      </div>
                </div>
        </div> 
    </div>
  )
}
;
export default Payment;