/// api calls from  api use redux
import {loginstart,loginsucces,loginfaliour,resisterstart,registersucces,registerfail,emailfail,isemailused} from "./redux/userReducer";

import {PUBLIC_REQUEST} from "./requestMethod"
// create a login function to export this function to create login 
export const login = async (dispatch,user) =>{
  dispatch(loginstart());

 try{
   // make api request to login the user 
     const res = await PUBLIC_REQUEST.post("/auth/login",user);
     dispatch(loginsucces(res.data));
 }catch(error){
 dispatch(loginfaliour(error));
 }
};
export const resister = async (dispatch,user) =>{
  dispatch(resisterstart());
  try{

     const res = await PUBLIC_REQUEST.post("/auth/resister",user);
     dispatch(registersucces(res.data));
  }catch(error){
    if(error.response && error.response.data.errors[0].msg === 'Invalid email' ){
     dispatch(emailfail())
    }
    if(error.response && error.response.data.errors[0].msg === 'email alredy  use' ){
       dispatch(isemailused());
    }
   dispatch(registerfail(error));
  }
}