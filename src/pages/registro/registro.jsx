import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ApiRequest } from "../../service/api.js";
import "./registro.css";

const Registro = () => {

    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");
    const [erros, setErros] = useState({});

    const fazerRegistro = async (event) => {
        event.preventDefault();

        try {
            console.log("Apenas testando");
        } catch (erro) {
            setErros({ geral: "Ocorreu um erro ao tentar fazer o registro." });
        }

    };


    return (
        <div className="container">
            <form className="register-form" onSubmit={fazerRegistro}>
                <h2>Cadastro de usuário</h2>
                <p className="subtitle">Crie sua conta para continuar</p>
                {erros.geral && <div className="erro-mensagem">{erros.geral}</div>}
                <div className="form-group">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        placeholder="Primeiro nome"
                        className="form-input"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        placeholder="teste@gmail.com"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Senha</label>
                    <input
                        type="password"
                        placeholder=" >= 8, Maiúscula, Número e Símbolo"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Confirmar Senha</label>
                    <input
                        type="password"
                        placeholder=" >= 8, Maiúscula, Número e Símbolo"
                        className="form-input"
                        value={confirmarPassword}
                        onChange={(e) => setConfirmarPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-primario">Cadastrar</button>
            </form>
            <div className="links-uteis">
                <Link to="/auth/login">Já possui conta? Clique aqui</Link>
            </div>
        </div>
    )
}
export default Registro;