import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
const myAxios = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    withCredentials: true // Include cookies in requests
});

export default myAxios;