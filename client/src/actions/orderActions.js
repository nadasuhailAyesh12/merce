import axios from "../api/axios";

export const createOrder = (orderData) => async (dispatch) => {
    try {
        dispatch({ type: "ORDERAPI_REQUEST" });
        const response = await axios.post("/order", orderData);
        dispatch({ type: "ORDER_SUCCESS", payload: response.data.order });
        return response.data.order;
    } catch (error) {
        dispatch({ type: "ORDERAPI_FAILURE" });
        throw error;
    }
};

export const getLoginUserOrders = () => async (dispatch) => {
    try {
        dispatch({ type: "ORDERAPI_REQUEST" });
        const response = await axios.get("/order/me");
        dispatch({
            type: "GETlOGINUSERORDERS_SUCCESS",
            payload: response.data.orders,
        });
        return response.data.orders;
    } catch (error) {
        dispatch({ type: "ORDERAPI_FAILURE" });
        throw error; //give error to the caller to handle it
    }
};

export const getOrderDetails = (orderID) => async (dispatch) => {
    try {
        dispatch({ type: "ORDERAPI_REQUEST" });
        const response = await axios.get(`/order/${orderID}`);
        dispatch({ type: "ORDER_SUCCESS", payload: response.data.order });
    } catch (error) {
        dispatch({ type: "ORDERAPI_FAILURE" });
        throw error; //give error to the caller to handle it
    }
};
