import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import { auth } from "./firebase/firebase";
import { useStateValue } from './context/Stateprovider';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser)

      if (authUser) {
        // the user just logged in / hte user was logged in
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      } else {
          // the user is logged out 
        dispatch ({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>  
      <div className="App">
        <Routes>
          
          <Route path='/checkout' element={[<Header />,<Checkout />]} />
          <Route path='/login' element={[<Login />]}/>
          <Route path='/payment' element={[<Header />, <Payment />]} />
          <Route path='/' element={[<Header />,<Home />]} />
        
        </Routes>
      </div>
    </Router>
  )
}

export default App