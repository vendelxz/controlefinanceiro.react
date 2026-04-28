import { NavLink } from 'react-router-dom';
import '../css/Sidebar.css'; 
import { logout } from '../../service/authService';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Finance Control</h2>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/home/visao-geral" className={({ isActive }) => isActive ? "nav-btn ativo" : "nav-btn"}>
          <img 
            src="https://cdn-icons-png.flaticon.com/128/3917/3917033.png" 
            alt="Home" 
            className="nav-icon" 
          />
          Visão Geral
        </NavLink>

        <NavLink to="/home/transacoes" className={({ isActive }) => isActive ? "nav-btn ativo" : "nav-btn"}>
          <img 
            src="https://cdn-icons-png.flaticon.com/128/3917/3917361.png" 
            alt="Transações" 
            className="nav-icon" 
          />
          Transações
        </NavLink>

        <NavLink to="/home/relatorios" className={({ isActive }) => isActive ? "nav-btn ativo" : "nav-btn"}>
          <img 
            src="https://cdn-icons-png.flaticon.com/128/3916/3916631.png" 
            alt="Relatórios" 
            className="nav-icon" 
          />
          Relatórios
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <button className="nav-btn btn-sair" onClick={logout}>SAIR</button>
      </div>
    </aside>
  );
}