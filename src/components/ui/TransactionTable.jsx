import { TransactionRow } from "./TransactionRow";

export function TransactionTable({ listaTransacoes, onDeletar }) {
  return (
    <div className="tabela-container">
      <table className="tabela-financeira">
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Forma de Pagamento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaTransacoes.length > 0 ? (
            listaTransacoes.map((t) => (
             <TransactionRow key={t.id} transacao={t} onDeletar={() => onDeletar(t.id)} />
            )
          )
            
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>
                Nenhuma transação encontrada para este período.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}