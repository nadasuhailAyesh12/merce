const initialState = {
    product: null,
    loading: false,
};

const productDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getProductDetails_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "getProductDetails_SUCCESS":
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case "getProductDetails_FAILURE":
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
};

export default productDetailsReducer;
