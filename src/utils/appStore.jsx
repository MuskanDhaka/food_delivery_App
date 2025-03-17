import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
    reducer: {
        // responsible for modifying the app store 
        //for each slice we will have a different reduceer 
        cart : cartReducer,
    }
});
export default appStore;