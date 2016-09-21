import React from 'react';
import ReactDOM from 'react-dom';


import store from './store';
import { Provider } from 'react-redux';

const myStore = configureStore();

ReactDOM.render(<Provider store={ myStore }><Index /></Provider>,
  document.getElementById('app'));