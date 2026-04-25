import { useState } from 'react';

const CATEGORIAS = ['ALIMENTACAO', 'LAZER', 'CONTAS', 'SALARIO', 'OUTROS'];
const TIPOS = ['RECEITA', 'DESPESA'];
const PAGAMENTOS = ['PIX', 'DINHEIRO', 'CARTAO_CREDITO', 'CARTAO_DEBITO', 'CHEQUE'];

export function AddTransaction({ onSalvar, onFechar }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [categoria, setCategoria] = useState('CONTAS');
  const [tipo, setTipo] = useState('RECEITA');
  const [pagamento, setPagamento] = useState('PIX');

  const dadosTransacao =  {
    valor: Math.abs(Number(valor)),
    tipo,
    descricao,
    categoria,
    dataTransacao: data,
    metodoPagamento: pagamento
  }

  const handleSalvar = async (e) => {
    e.preventDefault();
    onSalvar(dadosTransacao);
  };

  return (
    <div className="add-transaction-form">
    
      <input type="text" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
      <input type="number" placeholder="Valor" min="0.01" step="0.01"  value={valor} onChange={e => setValor(e.target.value)} />
      <input type="date" value={data} onChange={e => setData(e.target.value)} />

      <select value={categoria} placeholder="Escolha a categoria" onChange={e => setCategoria(e.target.value)}>
        {CATEGORIAS.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <select value={tipo} placeholder="Escolha o tipo" onChange={e => setTipo(e.target.value)}>
        {TIPOS.map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      <select value={pagamento} placeholder="Escolha o método de pagamento" onChange={e => setPagamento(e.target.value)}>
        {PAGAMENTOS.map(p => <option key={p} value={p}>{p}</option>)}
      </select>

      <div className="form-acoes">
        <button onClick={onFechar}>Cancelar</button>
        <button onClick={handleSalvar}>Salvar</button>
      </div>
    </div>
  );
}