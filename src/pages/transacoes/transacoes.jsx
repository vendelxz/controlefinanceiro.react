import { useState } from 'react';
import { TransactionTable } from '../../components/TransactionTable';
import './transacoes.css'; 
function Transacoes() {

    //Para testar apenas...
  const [transacoes, setTransacoes] = useState([]);

  return (
    <div className="transacoes-container">
      <div className="header-pagina">
        <h2 className='.h2-transactions'>Histórico de Transações</h2>
        <button className="btn-transacao">Adicionar </button>
      </div>

      <div className="filtros-section">
        {/* Selects de Mês e Ano */}
        <p>Filtros em breve...</p>
      </div>

      <TransactionTable listaTransacoes={transacoes} />
    </div>
  );
}

export default Transacoes;