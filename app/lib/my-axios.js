import axios from "axios";

const myAxios = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 10000,
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    withCredentials: true // Include cookies in requests
});

export default myAxios;