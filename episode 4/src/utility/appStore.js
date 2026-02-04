

import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

// add slices to it 
const appStore =  configureStore({
    reducer:{
        cart: cartReducer,
    // here you add the different reducer of your slices
    //user : userResducer
    }
}); 


export default appStore;  