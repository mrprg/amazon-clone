import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../styles/Subtotal.css';
import { useStateValue } from '../context/Stateprovider';
import { getBasketTotal } from '../context/reducer';

function Subtotal() {
    const [{ basket }] = useStateValue();
  return (
    <div>
        <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>    
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' />
                        This order contains a gift    
                    </small>  
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <button>Proceed to Checkout</button>
    </div>
    </div>
  )
}

export default Subtotal