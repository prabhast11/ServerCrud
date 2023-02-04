import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import './custom.scss'
import $ from 'jquery';


$(document).on('ready', function () {

  $("#source").on('change', function () {
      var el = $(this);
      if (el.val() === "ONLINE") {
          $("#status").append("<option>SHIPPED</option>");
      } else if (el.val() === "MANUAL") {
          $("#status option:last-child").remove();
      }
  });

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
