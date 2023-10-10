

import axios from "axios"
import useFetch from "../components/hooks/useFetch";

// LOGIN
export function send_login_request(credentials: any) {
    const res = axios.post("https://server-school-test.onrender.com/server/auth/login", credentials)
    return res
}