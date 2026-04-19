
//Centralizar a lógica de algumas ações do usuário.


export const logout = () => {

    const token = localStorage.getItem('token');

    if (token === null) {
        return;
    }

    localStorage.removeItem(token);
    window.location.href('/auth/login');

}

//Login
export const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
}

export const registro = async (nome, email, senha, confirmarSenha) => {
    const response = await api.post('auth/registrar', {nome, email, senha, confirmarSenha});
    return response.data;
}

export const solicitarRecuperacao = async (email, origin) => {
    const response = await api.post('/auth/esqueci-senha', {email, origin});//Passando a origem do site para montar o e-mail.
    return response.data;
}

export const recuperaSenha = async (token, novaSenha, confirmarSenha) => {} //Não implementado por enquanto, para cuidar da lógica de extração do token depois na página...
