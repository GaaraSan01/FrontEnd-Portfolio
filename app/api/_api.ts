import axios from "axios";

export const SendMails = axios.create({
    baseURL: '/'
})

export const ProjetosApi = axios.create({
    baseURL: 'http://localhost:8000'
})