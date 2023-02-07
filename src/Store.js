import {configureStore , createSlice} from '@reduxjs/toolkit'




export const ItemNo = createSlice({

    name:'itemNo',
    initialState:{
        value:{
            listNo:null,
            pNo:null
        }
    },
    reducers:{
        PassNo:(state,action)=>{
            state.value=action.payload;
        }
    }

})

export const CartItems = createSlice({

    name:'cartItem',
    initialState:{
        value:[]
    },
    reducers:{
        updateCart:(state,action)=>{
            state.value=[...state.value,action.payload];
        }
    }

})






export const Store = configureStore ( {
    reducer:{
         itemNo:ItemNo.reducer,
         cartItem:CartItems.reducer
    }
})