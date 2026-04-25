import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {Modal} from '../../components/Modal'
import "./login.css";
import { login } from "../../service/authService";
import api from "../../service/api.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({});
    const [entrando, setEntrando] = useState(false);
    const navigate = useNavigate();

    const fazerLogin = async (event) => {
        event.preventDefault(); 
        console.log("Entrando em fazerLogin"); //Para fins de debug e erros...
        
        try {

            const resposta = await login(email, senha);
            localStorage.setItem('token', resposta.token);
            setEntrando(true)
            navigate('/home');
            

        } catch (erro) {
            const status = erro.response?.status;
            console.log("Erro ao fazer login:", erro); //Para fins de debug e erros...

            if(status === 400){
                setErros({dados: "E-mail ou senha incorretos."});
            }
            else if(status === 500){
                setErros({servidor: "Erro interno de servidor."});
            }
            else{
                setErros({geral: "Erro ao processar login - Contate o suporte."})
            }
        }
    };

    //Talvez eu use ou não...
   const showEntrando = () =>   {
    
    if(entrando){
        return <div className="entrando-mensagem">Entrando...</div>
    }
    return ""
}

    return (
    <div className="container">
        <form className="login-form" onSubmit={fazerLogin}>
            <h2>Bem-vindo de volta</h2>
            <p className="subtitle">Insira seus dados para acessar o sistema</p>
            {erros.geral && <div className="erro-mensagem">{erros.geral}</div>}
            {erros.dados && <div className="erro-mensagem">{erros.dados}</div>}
            {erros.servidor && <div className="erro-mensagem">{erros.servidor}</div>}
            <div className="form-group">
                <label className="form-label">E-mail</label>
                <input 
                    type="email" 
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>

            <div className="form-group">
                <label className="form-label">Senha</label>
                <input 
                    type="password" 
                    placeholder="••••••••"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)} 
                />
            </div>
            <button type="submit" className="btn-primario">Entrar na conta</button>
        </form>
            <div className="links-uteis">
              <Link to="/auth/solicitar">Esqueceu sua senha?</Link>
              <Link to="/auth/registro">Não tem uma conta? Cadastre-se</Link>
            </div>
    </div>
);
};

export default Login;