import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Importa o react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/LoginScreen/Login.jsx';

// Aqui configura o roteamento de paginas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
