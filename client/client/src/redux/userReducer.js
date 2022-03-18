import {createSlice} from  "@reduxjs/toolkit";
// create user slice 
const userSlice = createSlice({

  name:"user",
  initialState:{
  currentuser:null,
  authenticate : false,
  isfetching:false,
  isregister:false,
  error:false,
  Email:false,
  isemailused:false

  },
  reducers:{
      loginstart:(state) => {
        state.isfetching = true;
      },
      loginsucces:(state,action)=>{
           state.isfetching = false;
           state.currentuser = action.payload;
           state.authenticate = true;
           state.error = false;
           state.Email = false;
           state.isemailused = false;
      },
      loginfaliour:(state) => {
          state.isfetching = false;
          state.error = true;
      },
      resisterstart:(state) =>{
        state.isregister = true;

      },
      registersucces:(state) =>{
        state.isregister = false;
        state.currentuser  = false;
        state.error  = false;
        state.Email = false;
        state.isemailused = false;
      },
      logoutuser:(state) =>{
         
         state.currentuser = null;
          state.authenticate = false;

      },
      registerfail:(state) =>{
        state.isregister = false;
        state.error = true;
      },
      emailfail:(state) =>{
         state.isregister = false;
         state.Email = true;
      },
      isemailused:(state) =>{

          state.isregister = false;
          state.isemailused = true;
      }
     
  },



})
export const {loginstart,loginsucces,loginfaliour,resisterstart,registersucces,registerfail,logoutuser,emailfail, isemailused} = userSlice.actions;
export default userSlice.reducer;