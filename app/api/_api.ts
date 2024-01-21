import axios from "axios";

export const SendMails = axios.create({
    baseURL: '/api/sendmail'
})

export const ProjetosApi = axios.create({
    baseURL: 'http://localhost:8000'
    // baseURL: 'https://backend-portvnici.fly.dev'
})