
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items: ["burger", "pizza"],
    },
    reducers : {
        // actions - small APIs
        addItem : (state, action) => { 
            state.items.push(action.payload);
        }, 
        removeItem : (state, action) =>{
            state.items.pop();
              
        },
        clearCart : (state, action)=>{
            state.items.length = 0; // [] -> empty array
            // why not ? state = []
        }
    }
});


export const  {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;