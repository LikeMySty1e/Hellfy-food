import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});

const httpClientHelper = {
    async post(url, data) {
        const response = await $host.post(url, {
            ...data
        });
        return response;
    },

    async get(url) {
        const response = await $host.get(url);
        return response;
    }
}

export default httpClientHelper;