import { combineReducers } from 'redux'
import productReducer from './ProductReducer'
import cartReducer from './CartReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    auth: authReducer
})

export default rootReducer