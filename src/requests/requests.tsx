

import axios from "axios"
import useFetch from "../components/hooks/useFetch";

// LOGIN
export function send_login_request(credentials: any) {
    const res = axios.post("http://localhost:8800/server/auth/login", credentials)
    return res
}