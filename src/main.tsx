import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LandingPage } from './components/LandingPage/index.tsx';

const router = createBrowserRouter([
  {
    path: "/to-do",
    element: <App />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },

]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
