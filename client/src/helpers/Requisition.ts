import axios from "axios";

export const requisition = axios.create({
    baseURL: "http://localhost:8081/",
    headers: {
        Authorization: ""
    }
})