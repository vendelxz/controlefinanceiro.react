import '../css/Topbar.css'
import { Link } from 'react-router-dom';


export function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 id="titulo-pagina">Análise e gerenciamento de finanças</h1>
      </div>
      
      <div className="topbar-actions">
        <div className="user-info">
          <p>Bem vindo</p>
        </div>
      </div>
    </header>
  );
}