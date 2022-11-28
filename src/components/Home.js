import React from 'react';
import Product from './Product';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg' alt='amazone' />
        <div className='home__row'>
        <Product />
                   
        <Product />
                
        </div>
        <div className='home__row'>
        <Product />
        <Product />
        <Product />
        </div>
        <div className='home__row'>
        <Product />
        <Product />          
        </div>
      </div>
    </div>
  )
}

export default Home