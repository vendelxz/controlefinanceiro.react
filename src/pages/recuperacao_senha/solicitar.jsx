import { useState } from "react";
import "./solicitar.css";

function Solicitar() {

let [contarCliques, setContarCliques] = useState(0);

function mandarSolicitacao() {
    setContarCliques(contarCliques + 1);
    console.log("Solicitação enviada! Total de cliques: " + contarCliques);
}//Apenas pare testar por enquanto 

return(
    <div className="container">
        <form className="solicitar-form">
            <h2 className="h2">Recuperação de senha</h2>
            <p className="subtitle">Insira seu email para receber instruções de recuperação de senha.</p>
            <input type="email" placeholder="Digite seu email" required />
            <button type="submit" className="enviar"
            onClick={() => mandarSolicitacao}
            >Enviar</button>
        </form>
         <div className="links-uteis">
                <a href="/auth/login">Faça login aqui</a>
            </div>
    </div>
)

}

export default Solicitar;