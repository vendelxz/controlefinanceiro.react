import './css/Topbar.css'


export function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 id="titulo-pagina">Análise do Mês</h1>
      </div>
      
      <div className="topbar-actions">
        <button className="btn-tema"> Dark Mode</button>
        <div className="user-info">
          <span>Olá, Bem vindo!</span>
        </div>
      </div>
    </header>
  );
}