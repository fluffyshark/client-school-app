import React, { createContext, useEffect, useReducer, ReactNode, Dispatch } from "react";


type User = {
    // define the user object type here
}

type State = {
    user: User | null,
    loading: boolean,
    error: string | null,
}

type Action =
    | { type: "LOGIN_START" }
    | { type: "LOGIN_SUCCESS", payload: User }
    | { type: "LOGIN_FAILURE", payload: string }
    | { type: "LOGOUT" };

const INITIAL_STATE: State = {
    user: JSON.parse(localStorage.getItem("user") || "null"),
    loading: false,
    error: null,
};

type AuthContextType = {
    state: State;
    dispatch: Dispatch<Action>;
}

export const AuthContext = createContext<AuthContextType>({ state: INITIAL_STATE, dispatch: () => null });

const AuthReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

type Props = {
    children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));

    }, [state.user]);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
