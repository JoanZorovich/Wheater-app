import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(//La <App> se mete en un higher-order component HOC, para que adentro de ella podamos utilizar el router y de forma dinamica intercambiar componentes
    <BrowserRouter> 
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );