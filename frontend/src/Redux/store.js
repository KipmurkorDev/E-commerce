import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Reducers/ProductSlice'
import cartReducer from'./Reducers/CartSlice'
import userReducer from './Reducers/userSlice'




const store = configureStore({
      reducer:{
        products:productReducer,
        carts:cartReducer,
        users:userReducer
    }

})

export default store;