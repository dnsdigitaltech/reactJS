import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.soscriancasdesaparecidas.rj.gov.br/consulta_publica/'
})

export default api