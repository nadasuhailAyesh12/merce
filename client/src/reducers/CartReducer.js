import { Cart_ACTIONS_CONSTANTS } from "../constants/actionTypes";

const initialState = {
    cartItems: [],
    error: "",
    totalPrice: 0,
    shippingInfo: {
        address: "",
        city: "",
        phoneNo: "",
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
            if (state.cartItems.find((item) => item._id == action.payload.id)) {
                return {
                    ...state,
                    error: "product already added to cart",
                };
            }
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                totalPrice: state.totalPrice + action.payload.price,
                error: null,
            };
        }

        case Cart_ACTIONS_CONSTANTS.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item._id !== action.payload._id
                ),
                totalPrice:
                    state.totalPrice - action.payload.price * action.payload.quantity,
            };

        case Cart_ACTIONS_CONSTANTS.UPDATE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item._id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
                totalPrice: state.cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                ),
            };

        case Cart_ACTIONS_CONSTANTS.CLEAR_Error:
            return {
                ...state,
                error: null,
            };
        case Cart_ACTIONS_CONSTANTS.UPDATE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: {
                    ...state.shippingInfo,
                    ...action.payload,
                },
            };
        case Cart_ACTIONS_CONSTANTS.UPDATE_CART_TOTALS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
};

export default cartReducer;
