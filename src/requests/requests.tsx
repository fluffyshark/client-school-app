

import axios from "axios"
import useFetch from "../components/hooks/useFetch";

// LOGIN
export function send_login_request(credentials: any) {
    const res = axios.post("https://server-school-test.onrender.com/server/auth/login", credentials)
    // const res = axios.post("http://localhost:8800/server/auth/login", credentials)
    return res
}

export function getAllUsers() {
    const res = axios.get("https://server-school-test.onrender.com/server/users")
    // const res = axios.get("http://localhost:8800/server/users")
    return res;
}