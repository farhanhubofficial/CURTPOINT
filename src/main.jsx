import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalState from './Context/Index.jsx'
import { Provider } from 'react-redux'
import store from './Components/Store/Index.js'
ReactDOM.createRoot(document.getElementById('root')).render(

   <Provider store={store}>
<BrowserRouter>
  <React.StrictMode>
    <GlobalState>
       <App/>
    </GlobalState>
   
  </React.StrictMode>,
  </BrowserRouter>
   </Provider>

)
