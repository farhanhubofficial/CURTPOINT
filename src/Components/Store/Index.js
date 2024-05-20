import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/Cart-slice'
const store = configureStore({
    reducer:{
        cart: cartReducer
    }
})
export default store