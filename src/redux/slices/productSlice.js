import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  productcount: 0,
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProductToCart: (state, action) => {
      state.cart = action.payload
    },
    setProductCount: (state, action) => {
      state.productcount = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProductToCart, setProductCount } = productSlice.actions

export const productReducer = productSlice.reducer