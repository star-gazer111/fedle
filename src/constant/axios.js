import axios from 'axios';

const instance = axios.create({
    baseURL:"https://github.com"
})

export default instance;