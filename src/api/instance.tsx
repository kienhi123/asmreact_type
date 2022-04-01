import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:2222/api"
})
export default instance;