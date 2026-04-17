
//Centralizar a lógica de algumas ações do usuário.
//As requisições o api.js já cuida, aqui é para operações mais relacionadas ao próprio usuário
//Por exemplo o logout e a remoção do token ao clicar no botão...

export const logout = () => {

const token = localStorage.getItem('token');

if(token === null){
    return;
}

localStorage.removeItem(token);
window.location.href('/auth/login');

}