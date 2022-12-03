import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const signIn = e => {
    e.preventDefault();
  }

  const register = (e) => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
          console.log(auth)
        })
        .catch(error => alert(error.message)) 

        
  }
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
          <input type='text' value={email} onChange= 
          {e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange=
          {e => setPassword(e.target.value)} />

          <button type='submit' className='login__signInButton' onClick={signIn}>Sign in</button>
        </form>
        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>Create your Amazon Acount</button>
      </div>

    </div>
  )
}

export default Login;