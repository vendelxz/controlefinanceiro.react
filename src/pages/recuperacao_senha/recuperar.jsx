import { useState } from "react";
import { recuperaSenha } from "../../service/authService";
import { useTokenExtractor } from "../../hooks/useTokenExtractor";
import { useNavigate } from "react-router-dom";
import './recuperar.css';

const RecuperarSenha = () => {

    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState(''); //Apenas para ver se digitou corretamente, não irá para a requisição...
    const token = useTokenExtractor(window.location.search); //Hook ficará responsável por preencher...
    const [erro, setErro] = useState({});
    const [sucesso, setSucesso] = useState(false);
    const navigate = useNavigate();


    const handleRecuperacao = async (event) => {
        event.preventDefault();

        try{
            checarSenhasDiferentes();

            const resposta = await recuperaSenha(token, novaSenha);
            setSucesso(true);
            navigate('/auth/login');

        }catch(erro){
            const status = erro.response?.status;
        }
    }

    function checarSenhasDiferentes(){
        if(novaSenha != confirmarSenha){
            setErro({ dados: "As senhas digitadas não coincidem." });
        }
    }

//No modal para tratar o erro, só dará um isOpen se clicar em recuperar e o token estiver nulo
//Pois caso abra se apenas tiver o token de parâmetro, o usuário pode ter entrado em um link ou endpoint errado.
//É um caso de uso meio específico, mas para evitar estresse depois...

    return(<></>);
    export default RecuperarSenha;
}