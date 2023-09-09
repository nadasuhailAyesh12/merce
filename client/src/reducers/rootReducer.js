import { combineReducers } from "redux";
import productListReducer from "./productListReducer";
import cartReducer from "./CartReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import productDetailsReducer from "./productDetailsReducer";

const rootReducer = combineReducers({
    products: productListReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
    order: orderReducer,
    product: productDetailsReducer,
});

export default rootReducer;
