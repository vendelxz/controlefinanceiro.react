import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";
import "./solicitar.css";

function Solicitar() {

let [contarCliques, setContarCliques] = useState(0);
const [email, setEmail] = useState("");
const [erros, setErros] = useState({});

 async function mandarSolicitacao(event){
    event.preventDefault();

    try{
        //Mesmo sendo um void a API retorna um build com o status 200 pra confirmar que o e-mail foi envidado...
        const resposta = await api.post('/auth/solicitar-recuperacao', {email})

    }catch(erro ){
        const status = erro.response?.status;
        //Não terá erro de badRequest pois a API envia 200 independente do e-mail existir ou não. Para previnir vazamentos...
         if(status === 500){
            setErros({servidor: "Erro interno de servidor."});
        }
        else{
            setErros({geral: "Erro ao enviar e-mail de recuperação."});
        }
    }
}

return(
    <div className="container">
        <form className="solicitar-form">
            <h2 className="h2">Recuperação de senha</h2>
            <p className="subtitle">Insira seu email para receber instruções de recuperação de senha.</p>
             {erros.geral && <div className="erro-mensagem">{erros.geral}</div>}
            <input type="email" placeholder="Digite seu email" required />
            <button type="submit" className="enviar"
            onClick={mandarSolicitacao}
            >Enviar</button>
        </form>
         <div className="links-uteis">
                <Link to="/auth/login">Faça login aqui</Link>
            </div>
    </div>
)

}

export default Solicitar;