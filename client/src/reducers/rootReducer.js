import { combineReducers } from 'redux'
import productReducer from './ProductReducer'
import cartReducer from './CartReducer'

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
})

export default rootReducer