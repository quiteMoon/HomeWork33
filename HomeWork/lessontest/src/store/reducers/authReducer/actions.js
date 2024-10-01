import { jwtDecode } from "jwt-decode";

export const signIn = (values) => (dispatch) => {
    const json = JSON.stringify(values);
    localStorage.setItem("auth", json);

    dispatch({ type: "SIGN_IN", payload: values });
};

export const loginByLocalStorage = () => (dispatch) => {
    const auth = localStorage.getItem("auth");
    if (auth != null) {
        const user = JSON.parse(auth);
        dispatch({ type: "SIGN_IN", payload: user });
    }
};

export const googleLogin = (token) => (dispatch) => {
    try {
        localStorage.setItem("oauth", token);
        const data = jwtDecode(token);
        const user = {
            email: data.email,
            firstName: data.given_name,
            lastName: data.family_name,
            image: data.picture,
        };
        dispatch({ type: "SIGN_IN", payload: user });
    } catch (error) {
        localStorage.removeItem("oauth");
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("auth");
    dispatch({ type: "LOGOUT" });
};
