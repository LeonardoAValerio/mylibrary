import axios from "axios";
import { getCookie } from "./Cookies";

export const authToken = "authToken";

export const requisition = axios.create({
    baseURL: "http://localhost:8081/",
    headers: {
        Authorization: getCookie(authToken)
    }
})