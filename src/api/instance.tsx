import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:2224/api"
})
export default instance;