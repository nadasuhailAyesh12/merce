import axios from "../api/axios";

export const clearNonInputErrors = () => {
    return {
        type: "CLEAR_NONINPUTERRORS",
    };
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "API_REQUEST" });
        const response = await axios.post("/auth/login", { email, password }, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        dispatch({ type: "API_SUCCESS", payload: response.data.user });
        return response;
    } catch (error) {
        dispatch({
            type: "API_FAILURE",
            payload: error,
        });
        throw error; //give the error to caller to handle it
    }
};

export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "API_REQUEST" });
        const response = await axios.post("/auth/signup", userData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        dispatch({ type: "API_SUCCESS", payload: response.data.user });
        return response;
    } catch (error) {
        dispatch({
            type: "API_FAILURE",
            payload: error,
        });
        throw error; //give the error to caller to handle it
    }
};
