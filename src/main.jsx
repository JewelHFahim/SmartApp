import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import ThemContext from './Context/ThemContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemContext>
      <App />
    </ThemContext>
  </React.StrictMode>,
)
