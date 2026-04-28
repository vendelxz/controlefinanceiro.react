import '../css/Topbar.css'
import { Link } from 'react-router-dom';


export function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 id="titulo-pagina">Análise do Mês</h1>
      </div>
      
      <div className="topbar-actions">
        <button className="btn-tema"> Dark Mode</button>
        <div className="user-info">
          <p>Bem vindo</p>
        </div>
      </div>
    </header>
  );
}