export class GraphicsTransactionsUtils {
  static TIPOS = ['RECEITA', 'DESPESA'];

  static CATEGORIAS = ['ALIMENTACAO', 'LAZER', 'CONTAS', 'SALARIO', 'OUTROS'];

  static PAGAMENTOS = ['PIX', 'DINHEIRO', 'CARTAO_CREDITO', 'CARTAO_DEBITO', 'CHEQUE'];

  static obterOpcoesTipos() {
    return ['GERAL', ...this.TIPOS];
  }

  static obterOpcoesCategorias() {
    return ['GERAL', ...this.CATEGORIAS];
  }

  static obterOpcoesPagamentos() {
    return ['GERAL', ...this.PAGAMENTOS];
  }

  static formatarTexto(valor) {
    if (!valor) return '';
    if (valor === 'GERAL') return 'Todos';
    
    return valor
      .replace(/_/g, ' ')
      .toLowerCase()
      .replace(/\b\w/g, l => l.toUpperCase());
  }
}