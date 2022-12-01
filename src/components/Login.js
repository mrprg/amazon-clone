import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img 
        className='login__logo'
        src='https://api.freelogodesign.org/assets/blog/img/20180911090509731amazon_logo_RGB.jpg'
        alt='logo'
        />
      </Link>

    </div>
  )
}

export default Login;