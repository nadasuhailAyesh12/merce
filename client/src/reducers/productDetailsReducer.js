const initialState = {
    product: null,
    loading: false,
};

const productDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getProductDetails_REQUEST":
        case "getProductDetails_SUCCESS":
        case "getProductDetails_FAILURE":
        default:
            return state;
    }
};

export default productDetailsReducer;
