import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ApiRequest } from "../../service/api";
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erros, setErros] = useState({});
    const navigate = useNavigate();

    const fazerLogin = async (event) => {
        event.preventDefault(); 
        
        try {
            const resposta = await ApiRequest('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password })
            });

            localStorage.setItem('token', resposta.token);
            navigate('/home');

        } catch (erro) {
            setErros({ geral: "Ocorreu um erro ao tentar fazer login." });
        }
    };

    return (
    <div className="container">
        <form className="login-form" onSubmit={fazerLogin}>
            <h2>Bem-vindo de volta</h2>
            <p className="subtitle">Insira seus dados para acessar o sistema</p>
            
            {erros.geral && <div className="erro-mensagem">{erros.geral}</div>}

            <div className="form-group">
                <label className="form-label">E-mail</label>
                <input 
                    type="email" 
                    placeholder="exemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>

            <div className="form-group">
                <label className="form-label">Senha</label>
                <input 
                    type="password" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
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