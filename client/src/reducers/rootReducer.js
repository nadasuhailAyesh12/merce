import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import cartReducer from "./CartReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
});

export default rootReducer;
