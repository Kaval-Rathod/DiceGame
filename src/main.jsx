import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Create router with future flags enabled
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
