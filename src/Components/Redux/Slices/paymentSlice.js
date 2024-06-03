import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    addresses: [],
    selectedAddress: null
 }

 const paymentSlice = createSlice({
    name: 'payments',
    initialState,
    reducers: {
        addAddress: (state, action) => {
            if (!state.addresses) {
                state.addresses = [];
              }
              state.addresses.push(action.payload);
          },
          selectAddress: (state, action) => {
            state.selectedAddress = action.payload;
          },

    },
  })

  export const {addAddress, selectAddress} = paymentSlice.actions

  export default paymentSlice.reducer