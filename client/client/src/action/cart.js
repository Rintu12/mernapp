import {  store} from "../redux/store";
import  {USER_REQUEST} from '../requestMethod'
// import{Addproduct} from "../redux/cartredux"
// add to cart function
export const addtocart= (_id , quentity )=>{

   const state  = store.getState();
   
     if(state.user.authenticate === true){
        
       const payload = {
         products:[
           {
             productId:_id,
             quentity:quentity,
             
           },

         ]
       }
          USER_REQUEST.post("cart/user/addCart",payload);  
    }
     
     }
     
  










