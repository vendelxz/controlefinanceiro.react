export class GraphicsUtils {
  static CORES_SISTEMA = {
    lavanda: '#967bb6',
    vermelhoPastel: '#f87171',
    verdePastel: '#34d399',
    grafiteBorda: '#25242a',
    fundoCard: '#18181c',
    textoClaro: '#f3f4f6',
    textoMuted: '#9ca3af'
  };

  static PALETA_SEQUENCIAL = [
    '#967bb6',
    '#34d399',
    '#f87171',
    '#60a5fa',
    '#fbbf24'
  ];

  static calcularTotalPorTipo(transacoes, tipo) {
    if (!Array.isArray(transacoes)) return 0;
    return transacoes
      .filter(t => t.tipo === tipo)
      .reduce((sum, t) => sum + (t.valor || 0), 0);
  }

  static obterDadosComparativos(transacoes) {
    const receitas = this.calcularTotalPorTipo(transacoes, 'RECEITA');
    const despesas = this.calcularTotalPorTipo(transacoes, 'DESEPESA');

    return [
      {
        name: 'Balanço Geral',
        Receitas: receitas,
        Despesas: despesas
      }
    ];
  }
}