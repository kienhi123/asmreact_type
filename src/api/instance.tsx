import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:2227/api"
})
export default instance;