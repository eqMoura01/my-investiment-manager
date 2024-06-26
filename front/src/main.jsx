import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/login-screen/Login.jsx';
import Home from './pages/home/Home.jsx';
import StockPurchase from './pages/stock-purchase/StockPurchase.jsx';
import UserPage from './pages/user-page/UserPageConfig.jsx';



// Importa o react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
    path: "/stock-purchase",
    element: <StockPurchase />,
  }, 
  {
    path: "/stock-purchase/:id",
    element: <StockPurchase />,
  },
  {
    path: "/user-page",
    element: <UserPage />,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
