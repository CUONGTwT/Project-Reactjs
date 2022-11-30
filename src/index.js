import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './sass/index.scss'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import Layout from './components/Layout.jsx';
// import scrollHeader from './assets/Js/Scroll'

ReactDOM.render(

  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);
// scrollHeader();

reportWebVitals();
