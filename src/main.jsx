import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './pages/login/login.css'
import './pages/registro/registro.css'
import './pages/home/home.css'
import './pages/recuperacao_senha/solicitar.css'
import Home from '../src/pages/home/Home.jsx'
import Login from '../src/pages/login/login.jsx'
import Registro from '../src/pages/registro/registro.jsx'
import Solicitar from '../src/pages/recuperacao_senha/solicitar.jsx'
import {MainLayout} from './components/MainLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/solicitar" element={<Solicitar />} />
        <Route path="/auth/registro" element={<Registro />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
