import { formatarMoeda, formatarData } from "../utils/formatador";

export function TransactionRow({ transacao, onDeletar }) {
  return (
    <tr>
      <td>{formatarData(transacao.dataTransacao)}</td>
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
        <button className="btn-delete" onClick={onDeletar}>Excluir</button>
      </td>
    </tr>
  );
}