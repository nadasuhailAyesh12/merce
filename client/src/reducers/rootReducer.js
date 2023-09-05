import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import cartReducer from "./CartReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
    order: orderReducer
});

export default rootReducer;
