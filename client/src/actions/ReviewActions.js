import axios from "../api/axios";

export const addProductReview = (reviewData, productID) => async (dispatch) => {
    try {
        dispatch({ type: "REVIEW_API_REQUEST" });
        const response = await axios.put(`/review/${productID}`, reviewData);
        dispatch({ type: "REVIEW_API_SUCCESS", payload: reviewData });
        return response.data.message || "operation success";
    } catch (error) {
        dispatch({ type: "REVIEW_API_FAILURE" });
        throw error;
    }
};

export const getProductReviews = (productID) => async (dispatch) => {
    try {
        dispatch({ type: "REVIEW_API_REQUEST" });
        const response = await axios.get(`/review/${productID}`);
        dispatch({ type: "getReviews_SUCCESS", payload: response.data.reviews });
    } catch (error) {
        dispatch({ type: "REVIEW_API_FAILURE" });
        throw error;
    }
};
