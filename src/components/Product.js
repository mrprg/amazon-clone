import React from 'react';
import '../styles/Product.css';
import { useStateValue } from '../context/Stateprovider';


function Product({ id,image,title,price,rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch item to data layer
    dispatch ({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }
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
        <button onClick={addToBasket}>add to basket</button>
    </div>
    );
};

export default Product;