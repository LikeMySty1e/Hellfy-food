import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});

const getConfig = (token = ``) => {
    return { headers: { authorization: `Bearer ${token}` } };
}

const httpClientHelper = {
    async post(url, body, token) {
        const { data, status } = await $host.post(url, { ...body }, { ...getConfig(token) });

        return data || {};
    },

    async get(url, token) {
        const { data, status } = await $host.get(url, { ...getConfig(token) });

        return data || {};
    }
}

export default httpClientHelper;