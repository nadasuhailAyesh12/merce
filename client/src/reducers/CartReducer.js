import { Cart_ACTIONS_CONSTANTS } from "../constants/actionTypes";

const initialState = {
    cartItems: [],
    totalPrice: 0,
    shippingInfo: {
        address: "",
        city: "",
        phoneNumber: "",
        postalcode: "",
        country: "",
    },
    subTotal: 0,
    tax: 0,
    shippingCost: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Cart_ACTIONS_CONSTANTS.ADD_TO_CART: {
            return {
                ...state,
                cartItems: action.payload.cartItems,
                subTotal: action.payload.price,
            };
        }

        case Cart_ACTIONS_CONSTANTS.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                subTotal: action.payload.price,
            };

        case Cart_ACTIONS_CONSTANTS.UPDATE_QUANTITY:
            return {
                ...state,
                cartItems: action.payload.cartItems,
                subTotal: action.payload.subTotal,
            };
        case Cart_ACTIONS_CONSTANTS.UPDATE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload,
            };
        case Cart_ACTIONS_CONSTANTS.UPDATE_CART_TOTALS:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export default cartReducer;
