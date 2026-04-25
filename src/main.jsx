import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProtectedRoute } from './routes/ProtectedRoute'
import './index.css'
import './pages/login/login.css'
import './pages/registro/registro.css'
import './pages/home/home.css'
import './pages/recuperacao_senha/solicitar.css'
import Home from '../src/pages/home/Home.jsx'
import Transacoes from './pages/transacoes/transacoes.jsx'
import Login from '../src/pages/login/login.jsx'
import Registro from '../src/pages/registro/registro.jsx'
import Solicitar from '../src/pages/recuperacao_senha/solicitar.jsx'
import {MainLayout} from './components/layout/MainLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/solicitar" element={<Solicitar />} />
        <Route path="/auth/registro" element={<Registro />} />
        <Route path="/home" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
        <Route index element={<Navigate to="/home/visao-geral" replace />} />
          <Route path="visao-geral" element={<Home />} />
          <Route path="transacoes" element={<Transacoes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
