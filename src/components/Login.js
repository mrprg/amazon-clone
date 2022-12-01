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

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text' />

          <h5>Password</h5>
          <input type='password' />

          <button className='login__signInButton'>Sign in</button>
        </form>
        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-based Ads Notice.
        </p>

        <button className='login__registerButton'>Create your Amazon Acount</button>
      </div>

    </div>
  )
}

export default Login;