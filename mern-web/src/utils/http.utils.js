import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
});


export const get = (url) => instance.get(url);

export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const destroy = (url) => instance.delete(url);
