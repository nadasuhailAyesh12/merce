import axios from "../api/axios";

export const createOrder = (orderData) => async (dispatch) => {
    try {
        dispatch({ type: "orderAPI_REQUEST" });
        const response = await axios.post("/order", orderData);
        dispatch({ type: "orderAPI_SUCCESS", payload: response.data.order });
        return response.data.message || "operation success";
    } catch (error) {
        dispatch({ type: "orderAPI_FAILURE" });
        throw error;
    }
};
