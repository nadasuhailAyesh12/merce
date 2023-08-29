import axios from "../api/axios";

export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "UPDATE_PROFILE_REQUEST" });
        const response = await axios.put("/user/me/update", userData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        dispatch({ type: "UPDATE_PROFILE_SUCCESS" });
        return response.data.message || "operation success";
    } catch (error) {
        dispatch({ type: "UPDATE_PROFILE_FAILURE ", payload: error });
        throw error;
    }
};
