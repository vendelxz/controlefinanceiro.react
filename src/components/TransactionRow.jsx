import { formatarMoeda, formatarData } from "../utils/formatador";

export function TransactionRow({ transacao }) {
  return (
    <tr>
      <td>{formatarData(transacao.data)}</td>
      <td>{transacao.descricao}</td>
      <td>
        <span className={`tag-categoria ${transacao.categoria.toLowerCase()}`}>
          {transacao.categoria}
        </span>
      </td>
      <td className={transacao.tipo === 'RECEITA' ? 'positivo' : 'negativo'}>
        {transacao.tipo === 'RECEITA' ? '+ ' : '- '}
        {formatarMoeda(transacao.valor)}
      </td>
      <td>
        <button className="btn-edit">✏️</button>
        <button className="btn-delete">🗑️</button>
      </td>
    </tr>
  );
}