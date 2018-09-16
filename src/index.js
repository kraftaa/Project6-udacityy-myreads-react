import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
//need to wrap the App into BrowserRouter, so we don't need to use in in Main and App.js
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'))
