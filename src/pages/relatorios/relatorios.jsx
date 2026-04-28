import { CardRelatorio } from "../../components/ui/CardRelatorio";
import { SeletorPeriodo } from "../../components/ui/SeletorPeriodo";
import { Modal } from "../../components/ui/Modal";
import { getRelatorioDownload, enviarRelatorioEmail } from "../../service/relatorioService";
import  IconePDF from '../../assets/download.svg';
import  IconeEmail from '../../assets/envelope.svg';
import { useTransacoes } from "../../hooks/useTransacoes";
import { useState } from "react";
import './relatorios.css';

function Relatorios() {

    const [mes, setMes] = useState();
    const [ano, setAno] = useState();
    const [erro, setErro] = useState({});
    const [sucesso, setSucesso] = useState(false);

    //Chamar o hook de transações aqui, faz com ele mande um fetch toda hora.
    //Quando o método é chamado na API ele já checa as transações para fazer o relatório de acordo com o mês selecionado
    //Aumentar o número de fetchs aqui é excesso de chamdadas desnecessárias... a API vai lidar com os dados com o mês e ano de parâmetros...

    const handleDowload = async (event) => {
        event.preventDefault();

        try {

            const blob = await getRelatorioDownload(mes, ano);
            
            setSucesso(true);

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Relatorio_${mes}_${ano}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);



        } catch (erro) {
            const status = erro.response?.status;
            console.log(erro);
            if (status === 404) {
                setErro({ dados: "Não há transações registradas para o período informado." });
            }
            else {
                setErro({ geral: "Ocorreu um erro ao gerar o relatório. Tente novamente mais tarde." });
            }

        }
    }

    const handleEnviarEmail = async (event) => {
        event.preventDefault();

        try {

            await enviarRelatorioEmail(mes, ano);
            setSucesso(true);

        } catch (erro) {
            const status = erro.response?.status;
            
            if(status === 404){
                setErro({dados: "Não há transações registradas para o período informado."});
            }
            else{
                setErro({geral: "Ocorreu um erro ao gerar o relatório. Tente novamente mais tarde."});
            }
        }
    }


    return (<>
        <Modal isOpen={sucesso}
            onClose={() => setSucesso(false)}
            titulo="Relatório gerado com sucesso!"
            children="Seu relatório foi gerado com sucesso. Agora ele será baixado ou enviado para seu e-mail."
        ></Modal>

        <Modal
            isOpen={erro.geral}
            onClose={() => setErro({})}
            titulo="Erro ao gerar relatório"
            children={erro.geral}
        ></Modal>

        <Modal
            isOpen={erro.dados}
            onClose={() => setErro({})}
            titulo="Erro ao gerar relatório"
            children={erro.dados}
        ></Modal>


        <div className="relatorios-container">
            <h1>Relatórios</h1>

            <p>Selecione o período para gerar o relatório:</p>

            <SeletorPeriodo
                mes={mes}
                onMesChange={setMes}
                ano={ano}
                onAnoChange={setAno}
            />
            <div className="relatorios-cards">
                <CardRelatorio
                    icone={<img src={IconePDF} alt="PDF" width={22} height={22} />}
                    titulo="Download PDF"
                    descricao="Faça um download em PDF do seu relatório direto no site."
                    textoBotao="Baixar relatório"
                    onClick={handleDowload}
                >
                </CardRelatorio>

                <CardRelatorio
                    icone={<img src={IconeEmail} alt="E-mail" width={22} height={22} />}
                    titulo="Enviar por e-mail"
                    descricao="Envie o seu relatório financeiro mensal para seu e-mail cadastrado."
                    textoBotao="Enviar por email"
                    onClick={handleEnviarEmail}
                >
                </CardRelatorio>
            </div>
        </div>

    </>)


}

export default Relatorios;