import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './sections/Home.tsx'
import AboutMe from './sections/AboutMe.tsx'
import Experience from './sections/Experience.tsx'
import Projects from './sections/Projects.tsx'
import Contact from './sections/Contact.tsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/home', element: <Home />},
  {path: '/about', element: <AboutMe />},
  {path: '/experience', element: <Experience />},
  {path: '/projects', element: <Projects />},
  {path: '/contact', element: <Contact />},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
