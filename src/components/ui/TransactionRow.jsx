import { formatarMoeda, formatarData } from "../../utils/formatador";
import '../css/TransactionRow.css';

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
         {formatarMoeda(transacao.valor)}
      </td>
      <td className="metodo-pagamento">
        {transacao.metodoPagamento}
      </td>
      <td>
        <button className="btn-delete" onClick={onDeletar}>Excluir</button>
      </td>
    </tr>
  );
}