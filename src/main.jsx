import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Contactenos from './features/Contactenos';
import ProductosBiodegradables from './features/ProductosBiodegradables';
import Home from './features/Home'; // Importa Home si lo defines
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Productos from "./features/Productos";

// Define las rutas
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />,
  },
  {
    path: "/productos-biodegradables", 
    element: <ProductosBiodegradables />,
  },
  {
    path: "/contactenos", 
    element: <Contactenos />,
  },
  {
    path: "/productos",
    element: <Productos />,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
