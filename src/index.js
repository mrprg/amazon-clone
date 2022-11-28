import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './context/Stateprovider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StateProvider initialState={iniinitialState} reducer={reducer} >
        <App />  
      </StateProvider>
  </React.StrictMode>
);


reportWebVitals();
