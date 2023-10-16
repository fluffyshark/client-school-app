import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../components/context/authContext"
import { send_login_request } from '../../requests/requests';


interface FormData {
    username: string;
}

interface Props {
    getUserCredentials: (credentials: { username: string }) => void;
}

const Login: React.FC<Props> = ({ getUserCredentials }) => {

    const [credentials, setCredentials] = useState<FormData>({ username: '' });
    const [paramUsername, setParamUsername] = useState<string | undefined>("")

    const { paramusername } = useParams()

    useEffect(() => {
        setParamUsername(paramusername)
    }, [paramusername])




    useEffect(() => {
        console.log("paramUsername", paramUsername);
        // When paramUsername changes, update the input field value
        if (paramUsername !== undefined) {
            setCredentials({ username: paramUsername });
            getUserCredentials({ username: paramUsername });
        }
    }, [paramUsername]);



    const { state, dispatch } = useContext(AuthContext);

    const { loading } = state;

    const navigate = useNavigate()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        // Send credentials to use for fetching user from database
        setCredentials(prev => ({ ...prev, [id]: value.toUpperCase() }))
        // Send credentials to App.js to be used in QuizView
        getUserCredentials({ ...credentials, [id]: value.toUpperCase() });
    }


    const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()

        const buttonBox = document.getElementById("buttonBox") as HTMLFormElement;

        buttonBox.classList.add("clicked");
        setTimeout(() => {
            buttonBox.classList.remove("clicked");
        }, 1000);


        dispatch({ type: "LOGIN_START" })
        try {

            const res = await send_login_request(credentials)

            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })

            console.log("LOGGED IN")
            navigate("/quiz")

        } catch (err: any) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }
    }

    return (
        <div className='login'>
            <div className="background"></div>
            {/* <img src={background_frame} alt="" /> */}
            <p>Login</p>
            <div className="inputbox">
                <input
                    id="username"
                    type="text"
                    placeholder="XXX XXX XXX"
                    value={credentials.username} // Set the input field value from credentials
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <div id='buttonBox' className="buttonBox" onClick={handleClick}><p>Enter</p></div>
        </div>
    )
}

export default Login;
