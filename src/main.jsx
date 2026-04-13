import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './pages/login/login.css'
import Home from '../src/pages/home/Home.jsx'
import Login from '../src/pages/login/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
