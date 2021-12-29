import axios from 'axios';
import getConfig from 'next/config';

const { siteConfig } = getConfig();

export const api = axios.create({
    baseURL: siteConfig.apiPath,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});