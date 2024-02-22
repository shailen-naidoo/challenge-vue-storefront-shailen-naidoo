import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '../router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <nav className="bg-gray-800">
      <section className="container mx-auto px-4 py-2 flex justify-between items-center">
        <router-link to="/" class="font-bold text-white text-2xl">DVT Vue Storefront</router-link>
        <ul className="hidden md:flex space-x-4 text-white">
          <li></li>
        </ul>
      </section>
    </nav>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
