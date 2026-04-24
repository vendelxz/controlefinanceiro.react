import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";
import api from "../../service/api";
import { useNavigate } from "react-router-dom";
import { solicitarRecuperacao } from "../../service/authService";
import "./solicitar.css";

function Solicitar() {

    let [contarCliques, setContarCliques] = useState(0);
    const [email, setEmail] = useState("");
    const [erros, setErros] = useState({});
    const [sucesso, setSucesso] = useState(false);
    const origem = window.location.origin;//Para montar o e-mail com o link correto...
    const navigate = useNavigate();

    async function mandarSolicitacao(event) {
        event.preventDefault();

        try {
            //Mesmo sendo um void a API retorna um build com o status 200 pra confirmar que o e-mail foi envidado...
            const resposta = await solicitarRecuperacao(email, origem);
            setSucesso(true);
            setContarCliques(prev => prev + 1);

        } catch (erro) {
            const status = erro.response?.status;
            //Não terá erro de badRequest pois a API envia 200 independente do e-mail existir ou não. Para previnir vazamentos...
            if (status === 500) {
                setErros({ servidor: "Erro interno de servidor." });
            }
            else {
                setErros({ geral: "Erro ao enviar e-mail de recuperação." });
            }
        }
    }


    //Para renderizar o modal de cliques execedidos e redirecionar para login...
    useEffect(() => {
        if (contarCliques >= 4) {
            const timer = setTimeout(() => navigate('/auth/login'), 5000);
            return () => clearTimeout(timer);
        }
    }, [contarCliques]);

    //Ao invés de retornar ifs ao final do código, passar tudo dentro de um Modal deixa mais organizado dentro do return...
    //Como ele só abre em situações específicas, não atrapalha a UX/UI...
    return (

        <>
            <Modal
                isOpen={contarCliques >= 4}
                onClose={null}
                titulo="Muitas tentativas"
                children="Você excedeu o número de tentativas. Redirecionando para login..."
            />
            <Modal
                isOpen={sucesso && contarCliques < 4}
                onClose={() => setSucesso(false)}
                titulo="Solicitação enviada"
                children="Se o e-mail existir em nosso sistema, você receberá instruções para recuperar sua senha. Verfique sua caixa de entrada e spam."
            />

            <div className="container">
                <form className="solicitar-form">
                    <h2 className="h2">Recuperação de senha</h2>
                    <p className="subtitle">Insira seu email para receber instruções de recuperação de senha.</p>
                    {erros.geral && <div className="erro-mensagem">{erros.geral}</div>}
                    <input type="email" placeholder="Digite seu email" required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="enviar"
                        onClick={mandarSolicitacao}
                    >Enviar</button>
                </form>
                <div className="links-uteis">
                    <Link to="/auth/login">Faça login aqui</Link>
                </div>
            </div>
        </>
    )

}

export default Solicitar;