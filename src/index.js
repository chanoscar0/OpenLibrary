import reactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './client/store/store';


reactDOM.render(
<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));