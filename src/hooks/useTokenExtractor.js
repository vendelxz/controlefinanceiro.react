import { useEffect } from "react";

//useEffect para extrair o token diretamente da URL...
//Para omitir o queryParam da URL, ainda verei as melhores opções...
export function useTokenExtractor(url) {

    const [token, setToken] = useState('');
    const [erro, setErro] = useState({});

    useEffect(() => {
        const params = new URLSearchParams(url);
        const tokenDaURL = params.get('token');

        //Verficação para dar um throw para o JSX se tiver vazio, nulo ou o que seja...
        if( tokenDaURL === null || tokenDaURL === '' || tokenDaURL === undefined){
            setErro({ dados: "Token inválido ou ausente na URL." });
        }

        setToken(tokenDaURL);

    }, [url]);
    
    return token;
}