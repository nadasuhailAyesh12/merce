const initialState = {
    order: null,
    loading: false,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "orderAPI_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "orderAPI_FAILURE":
            return {
                ...state,
                loading: false,
            };
        case "orderAPI_SUCCESS":
            return {
                ...state,
                order: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default orderReducer;
