import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SummaryCard } from '../../components/ui/SummaryCard'
import { useTransacoes } from '../../hooks/useTransacoes.js'
import Transacoes from '../transacoes/transacoes.jsx'
import { ANOS, MESES } from '../../utils/filtroDados';
import './home.css'

function Home() {
   const hoje = new Date();
   const [mes, setMes] = useState(hoje.getMonth() + 1);
   const [ano, setAno] = useState(hoje.getFullYear());

  const { transacoes } = useTransacoes(mes, ano);


  //Para testar apenas...
  //Lógica de valor dos cards...
  const receitas = transacoes
    .filter(t => t.tipo === 'RECEITA')
    .reduce((acc, t) => acc + t.valor, 0);

  const despesas = transacoes
    .filter(t => t.tipo === 'DESPESA')
    .reduce((acc, t) => acc + t.valor, 0);

  const saldo = receitas - despesas;

  //Pensar depois em uma refatoração para cada card de acordo com a aba (Receitas, despesas...) ter uma cor personalizada.
  return (
   <div className="home-content">
     <div className="filtros-section">
                <select className='card-select' value={mes} onChange={e => setMes(Number(e.target.value))}>
                  {MESES.map(m => <option key={m.valor} value={m.valor}>{m.label}</option>)}
                </select>

                <select className='card-select' value={ano} onChange={e => setAno(Number(e.target.value))}>
                  {ANOS.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
            </div>
      {/* Seção de Cards */}
      <section className="summary-grid">
        <SummaryCard titulo="Receitas" valor={receitas} tipo="positivo" />
        <SummaryCard titulo="Despesas" valor={despesas} tipo="negativo" />
        <SummaryCard titulo="Saldo Atual" valor={saldo} tipo={saldo >= 0 ? 'destaque' : 'negativo'} />
    </section>
    </div>
  )
}

export default Home
