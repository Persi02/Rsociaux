import React from 'react'
import '../style.scss'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Connexion from './pages/connexion/Connexion.jsx';
import Inscription from './pages/inscription/Inscription.jsx';
import { Toaster } from 'react-hot-toast';

//creation de l'object BrowserRouter 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/connexion",
    element: <Connexion />
  },
  {
    path: "/inscription",
    element: <Inscription />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
