import { formatarMoeda } from "../../utils/formatador";

export function SummaryCard({ titulo, valor, tipo }) {
  // Define a classe de cor baseada no tipo (positivo, negativo ou destaque)
  const obterClasseValor = () => {
    if (tipo === 'positivo') return 'valor positivo';
    if (tipo === 'negativo') return 'valor negativo';
    return 'valor destaque';
  };

  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p className={obterClasseValor()}>
        {formatarMoeda(valor)}
      </p>
    </div>
  );
}