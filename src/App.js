import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>  
      <div className="App">
        <Header />
        <Routes>
          
          <Route path='/checkout' element={[<Checkout/>]} />
          
          <Route path='/' element={[<Home />]} />
        
        </Routes>
      </div>
    </Router>
  )
}

export default App