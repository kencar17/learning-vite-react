import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Landing } from './routes/landing.tsx'
import { Settings } from './routes/settings.tsx'
import { LoginForm } from './routes/login.tsx'
import { Dashboard } from './routes/dashboard.tsx';
import { Products } from './routes/products.tsx';
import { EditProduct } from './routes/edit_product.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/edit-product",
    element: <EditProduct />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
