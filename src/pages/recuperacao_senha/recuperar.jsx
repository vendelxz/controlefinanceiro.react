import { useState, useEffect } from "react";
import { recuperaSenha } from "../../service/authService";
import { useTokenExtractor } from "../../hooks/useTokenExtractor";
import { useNavigate } from "react-router-dom";
import {Modal} from "../../components/ui/Modal";
import './recuperar.css';

const RecuperarSenha = () => {

    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState(''); //Apenas para ver se digitou corretamente, não irá para a requisição...
    const {token, erro: erroToken} = useTokenExtractor(window.location.search); //Hook ficará responsável por preencher...
    const [erro, setErro] = useState({});
    const [sucesso, setSucesso] = useState(false);
    const navigate = useNavigate();


    const handleRecuperacao = async (event) => {
        event.preventDefault();
        
        if(novaSenhaSenha !== confirmarSenha){
            setErro({ dados: "As senhas não coincidem. Por favor, verifique e tente novamente." });
            return;
        }

        if(erroToken.dados) return; //Se tiver erro com o token ele retorna e sai...

        try{

            const resposta = await recuperaSenha(token, novaSenha);
            setSucesso(true);
            navigate('/auth/login');

        }catch(erro){
            const status = erro.response?.status;
        }
    }

    
    
    //useEffect de redirecionar...
    useEffect(() => {
        if(sucesso){
            const timer = setTimeout(() => {
                navigate('/auth/login');
            }, 4000); //Redireciona após 4 segundos

            return () => clearTimeout(timer); //Limpa o timer se o componente for desmontado antes do redirecionamento
        }

    }, [sucesso]);
    


//Pois caso abra se apenas tiver o token de parâmetro, o usuário pode ter entrado em um link ou endpoint errado.
//É um caso de uso meio específico, mas para evitar estresse depois...

//onClose do Modal é null pois não será fechado pois o usuário indepentedente de qualquer acão será redirecionado...

    return(<>
            <Modal isOpen={sucesso} onClose={null} 
            titulo="Senha Redefinida" children="Sua senha foi redefinida com sucesso, redirecionando para o login..."></Modal>

         <div className="container">
            <form className="recuperar-form" onSubmit={handleRecuperacao}>

                <h2>Nova Senha</h2>
                <p className="subtitle">Digite e confirme sua nova senha para continuar.</p>

                {erro.dados && (
                    <div className="erro-mensagem">{erro.dados}</div>
                )}

                {erroToken.dados && (
                    <div className="erro-mensagem">{erroToken.dados}</div>
                )}

                <div className="form-group">
                    <label className="form-label" htmlFor="novaSenha">Nova senha</label>
                    <input
                        id="novaSenha"
                        type="password"
                        placeholder="Digite sua nova senha"
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="confirmarSenha">Confirmar senha</label>
                    <input
                        id="confirmarSenha"
                        type="password"
                        placeholder="Confirme sua nova senha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        required
                    />
                </div>

                <button className="btn-primario" type="submit">
                    Redefinir senha
                </button>

            </form>
                <div className="links-uteis">
                    <a href="/auth/login">Voltar para o login</a>
                </div>

        </div>
        </>
    );
}

 export default RecuperarSenha;