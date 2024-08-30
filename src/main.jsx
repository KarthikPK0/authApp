import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="113788101533-1cc9ovvbu7napch61skhtv1593ndq5bf.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>;
    
    </BrowserRouter>
  </StrictMode>,
)
