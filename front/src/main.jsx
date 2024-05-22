import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login-screen/Login.jsx';
import './index.css';

// Importa o react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import StockForm from './pages/StockForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Login/>,
  },
  {
    path: "/StockForm",
    element: <StockForm/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
