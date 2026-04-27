import '../css/CardRelatorio.css';

export function CardRelatorio({icone, titulo, descricao, textoBotao, onClick, loading}){
    return (
        <div className="card-relatorio">
            <div className="card-relatorio__icone">
                {icone}
            </div>

            <div className="card-relatorio__texto">
                <p className="card-relatorio__titulo">{titulo}</p>
                <p className="card-relatorio__descricao">{descricao}</p>
            </div>

            <button
                className="card-relatorio__botao"
                onClick={onClick}
                disabled={loading}
            >
                {loading ? "Aguarde..." : textoBotao}
            </button>
        </div>
    );
}