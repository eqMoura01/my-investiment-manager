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
import Home from './pages/home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/StockForm",
    element: <StockForm />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
