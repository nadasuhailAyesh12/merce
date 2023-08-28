import axios from "../api/axios";

export const clearNonInputErrors = () => {
    return {
        type: "CLEAR_NONINPUTERRORS",
    };
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "API_REQUEST" });
        const response = await axios.post(
            "/auth/login",
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({ type: "API_SUCCESS", payload: response.data.user });
        return response.data.message || "operation success";
    } catch (error) {
        dispatch({
            type: "API_FAILURE",
            payload: error,
        });
        throw error; //give the error to caller to handle it
    }
};

export const signup = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "API_REQUEST" });
        const response = await axios.post("/auth/signup", userData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        dispatch({ type: "API_SUCCESS", payload: response.data.user });
        return response.data.message || "operation success";
    } catch (error) {
        dispatch({
            type: "API_FAILURE",
            payload: error,
        });
        throw error; //give the error to caller to handle it
    }
};

export const forgetPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: "API_REQUEST" });
        const response = await axios.post(
            "/auth/forgetPassword",
            { email }
            // {
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // }
        );
        dispatch({ type: "API_SUCCESS" });
        return response.data.message || "operation success";
    } catch (error) {
        dispatch({
            type: "API_FAILURE",
            payload: error,
        });
        throw error; //give the error to caller to handle it
    }
};

export const resetPassword = (passwords, token) => async (dispatch) => {
    try {
        dispatch({ type: "API_REQUEST" });
        const response = await axios.put(
            `/auth/resetPassword/${token}`,
            passwords
            // {
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // }
        );
        dispatch({ type: "API_SUCCESS" });
        return response.data.message || "operation success";
    } catch (error) {
        dispatch({
            type: "API_FAILURE",
            payload: error,
        });
        throw error; //give the error to caller to handle it
    }
};

export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: "API_REQUEST" });
        const response = await axios.put(
            `/auth/updatePassword`,
            passwords
            // {
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // }
        );
        dispatch({ type: "API_SUCCESS" });
        return response.data.message || "operation success";
    } catch (error) {
        dispatch({
            type: "API_FAILURE",
            payload: error,
        });
        throw error; //give the error to caller to handle it
    }
};
