import { combineReducers } from "redux";
import cartReducer from './CartSlice';
import authReducer from './AuthSlice';

const reducer = combineReducers({
    cart: cartReducer,
    user: authReducer,
})

export default reducer;