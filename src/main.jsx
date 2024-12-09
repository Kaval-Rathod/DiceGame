import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Create router with future flags enabled
const router = createBrowserRouter(
  createRoutesFromElements(<App />),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
