import React from 'react';
import Product from './Product';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg' alt='amazone' />
        <div className='home__row'>
        <Product
          id="111346" 
          title='the lean startup'
          price={29.99}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
          rating={5}
        />
                   
        <Product
          title='kenwood kMix stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hook and Whisk, 5Litre Glass Bowl'
          id="128726" 
          price={239}
          rating={4}
          image="https://www.220-electronics.com/media/catalog/product/cache/06e563bb4bf8bb99ff5c3485d61b5ba4/k/e/kenwood-kmix-kmx51-mixer.jpg"
        />
                
        </div>
        <div className='home__row'>
        <Product
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          id="112358" 
          price={98.99}
          rating={5}
          image="https://target.scene7.com/is/image/Target/GUEST_6e76b79f-a6b6-4bbd-bf0c-33f2a6a6c22f?wid=488&hei=488&fmt=pjpeg"
        />
        <Product
          title="Samsung LC49RG98SSUXEN 49' Curved LED Gaming Monitor"
          id="998346" 
          price={199.99}
          rating={5}
          image="https://crowshopping.com/wp-content/uploads/2021/01/81Zt42ioCgL._AC_SX679_.jpg"
        />
        <Product
          title="New Apple iPad Pro (12.9 inch, Wi-Fi. 128GB) - Silver (4th Generation)"
          id="123478" 
          price={589.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
        </div>
        <div className='home__row'>
        <Product
          id="123465" 
          title="New Xbox Series X"
          price={499.99}
          rating={5}
          image="https://www.officedepot.co.il/wp-content/uploads/2020/10/199fb6110183f85b25df9fde71ff5a65.jpg"
        />
        <Product
          title="New PlayStation 5"
          id="128665" 
          price={499.99}
          rating={5}
          image="https://media.direct.playstation.com/is/image/sierialto/PS5-front-with-dualsense"
        />          
        </div>
      </div>
    </div>
  )
}

export default Home