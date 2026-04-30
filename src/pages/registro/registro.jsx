import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../components/ui/Modal";
import { registro } from "../../service/authService";
import "./registro.css";

const Registro = () => {

    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [erros, setErros] = useState({});
    const [sucesso, setSucesso] = useState(false);

    const fazerRegistro = async (event) => {
        event.preventDefault();

        //Já acusa diretamente dentro do próprio React..
        if(senha !== confirmarSenha ){
            setErros({dados: "Senhas estão diferentes, corrija."});
            return;
        }

        try {
            //A API faz verificações de senhas diferentes, mas ainda precisa de um DTO completo com o confirmarSenha.
            const resposta = await registro(nome, email, senha, confirmarSenha);
            setSucesso(true);//Mostrar uma mensagem de sucesso...
            navigate('/auth/login')

        } catch (erro) {
            const status = erro.response?.status;
            if(status === 400){
                setErros({dados: "Dados incorretos, cheque e preencha novamente."});
            }
            else if(status === 500){
               setErros({servidor: "Erro interno de servidor."}); 
            }
           else{
               setErros({geral: "Erro ao cadastrar usuário - Contate o suporte."});
            }
        }

    };

   //if (sucesso) return <p className="p-sucesso">Registrado, redirecionando para login...</p>

   //useEffect para validar e aparecer um Modal quando um usuário se registra corretamente...

   useEffect(() => {
    if(sucesso){
        const timer = setTimetout(() => navigate('/auth/login', 400));
        return () => clearTimeout(timer); //Fechar o componente se ele for quebrado antes..
    }
   })

    return (
        <>
        <Modal 
        isOpen={sucesso}
        onClose={null}
        titulo="Registro feito com sucesso"
        children="Seu registro foi concluído e agora será redirecionado para página de login"
        >
        </Modal>
        
        <div className="container">
            <form className="register-form" onSubmit={fazerRegistro}>
                <h2>Cadastro de usuário</h2>
                <p className="subtitle">Crie sua conta para continuar</p>
                {erros.geral && <div className="erro-mensagem">{erros.geral}</div>}
                <div className="form-group">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        placeholder="Seu primeiro nome"
                        className="form-input"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        placeholder="seu.email@gmail.com"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Senha</label>
                    <input
                        type="password"
                        placeholder="Crie uma senha forte (Ex: Typing9876@)"
                        className="form-input"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Confirmar Senha</label>
                    <input
                        type="password"
                        placeholder="Repita a senha"
                        className="form-input"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-primario" onClick={fazerRegistro} disabled={sucesso} >{sucesso ? "Cadastrando...": "Cadastrar"}</button>
            </form>
            <div className="links-uteis">
                <Link to="/auth/login">Já possui conta? Clique aqui</Link>
            </div>
        </div>
        </>
    )
}
export default Registro;