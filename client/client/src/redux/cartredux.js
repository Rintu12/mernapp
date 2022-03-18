import {createSlice} from  "@reduxjs/toolkit";
// create a cart slice 
const cartslice  = createSlice({
 name:"cart",
 initialState:{
   quentity:0,
   totalprice:0,
 },
 
   reducers:{
     Addproduct:(state , action) =>{
       state.quentity = action.payload.length;
      //  calculate the total price to the action payload
        function  totalprice (array) {
       if(array.length < 1) return 0;
       let price_array = [];
        for(let i= 0 ; i < array.length ; i++){

       while( i < array.length){

          price_array.push(array[i].price);
          i++
       }
        
        }
         let intial_price = 0;
         let total_product_price = price_array.reduce((total_price , curre_price) => total_price + curre_price , intial_price);
          return total_product_price;
          
        }
      state.totalprice = totalprice(action.payload);

     },
     logoutUserCart:(state) =>{

     state.products = null;
     

     }
    
    },
 } )
export const {Addproduct , logoutUserCart} =  cartslice.actions;

export default cartslice.reducer;











