const initialState = {
    order: null,
    orders: [],
    loading: false,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ORDERAPI_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "ORDERAPI_FAILURE":
            return {
                ...state,
                loading: false,
            };
        case "CREATEORDER_SUCCESS":
            return {
                ...state,
                order: action.payload,
                loading: false,
            };
        case "GETlOGINUSERORDERS_SUCCESS":
            return {
                ...state,
                orders: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default orderReducer;
