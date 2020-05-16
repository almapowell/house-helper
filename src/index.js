import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
      <Routes />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);