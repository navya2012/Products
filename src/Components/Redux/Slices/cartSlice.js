import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    cartData : [],
    totalQuantity:0
 }

 const cartSlice = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
      cartList: (state,action) =>  {
        console.log('reducer',state , action.payload, state.cartData)   
        const newState = action.payload;
        const index = state.cartData?.findIndex(item => item.productId === newState.productId);
        if (index === -1) {
            state.cartData.push({ ...newState, quantity: 1 });
        } else {
          state.cartData[index].quantity += 1;
        }
        console.log('Updated cart data reducer:', state.cartData);
        // return { ...state, cartData: state.cartData };
      },

      incrementQuantity: (state,action) => {  
        return {
          ...state,
          cartData :  state.cartData.map((cartId) => {
            //console.log(cartId.productId, action.payload)
            if (cartId.productId === action.payload) {
                return { ...cartId, quantity: cartId.quantity + 1 }
            };
            return cartId;
        })
        }

      },

      decrementQuantity: (state,action) => { 
        return{
          ...state,
          cartData :  state.cartData.map((cartId) => {
            //console.log(cartId.productId, action.payload)
            if (cartId.productId === action.payload) {
                return { ...cartId, quantity: cartId.quantity - 1 }
            };
            return cartId;
        })
        } 
      },

      removeProduct: (state,action) => {  
        return{
          ...state,
          cartData: state.cartData.filter((item) => item.productId !== action.payload)
        }          
      },

      totalQuantity : (state,action) => {
        return{
            ...state,
            totalQuantity: state.cartData.reduce((total,num) => {
               return total + (num.quantity)
            },0)
        }
      }

    },
  })

  export const {cartList,incrementQuantity,removeProduct, decrementQuantity, totalQuantity} = cartSlice.actions

  export default cartSlice.reducer