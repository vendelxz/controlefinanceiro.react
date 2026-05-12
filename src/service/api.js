import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_URL_BASE,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token && token !== 'null') { //Auth não pode ser bloqueada pois precisa setar o token para fazer o fetch assim que entra na home 
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (resposta) => resposta,
    (erro) => {
        const status = erro.response?.status;
        const isAuthPage = ['/auth/login', '/auth/registro'].some(p =>
            window.location.pathname.includes(p)
        );

        if ((status === 401 || status === 403)) {
            localStorage.removeItem('token');
            if (!isAuthPage) {
                window.location.href = '/auth/login';
            }
        }

        return Promise.reject(erro);
    }
);

export default api;