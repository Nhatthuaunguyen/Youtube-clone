import React from 'react'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' 
import ReactDOM from 'react-dom/client'

{/*react router in app component */}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)

{/* after create react router, back to app.jsx file, and after <Navbar/> create the routes */ }
