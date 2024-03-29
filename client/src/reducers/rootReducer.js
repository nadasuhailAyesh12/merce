import { combineReducers } from "redux";
import productListReducer from "./productListReducer";
import cartReducer from "./CartReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import productDetailsReducer from "./productDetailsReducer";
import reviewReducer from "./reviewReducer";

const rootReducer = combineReducers({
    products: productListReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
    order: orderReducer,
    product: productDetailsReducer,
    review: reviewReducer
});

export default rootReducer;
