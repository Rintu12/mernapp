//  request method 
import axios from "axios";
import { store } from "./redux/store";

// import  {persistor} from "../src/redux/store";
const BASE_URL  = "https://dipankargirimodejs.herokuapp.com/api";

 
const user =JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user);
// console.log(user)
//   const {currentuser}  = store.getState().user;
//  if(currentUser === true)
 const currentUser = user.currentuser;
  //  console.log(current)
   const TOKEN = currentUser?.accestoken;
//  const TOKEN = ""
// made all public request from the server to this end point
 export const PUBLIC_REQUEST = axios.create({ 
  baseURL:BASE_URL,
 });
 export const   USER_REQUEST = axios.create({
 baseURL:BASE_URL,
 headers:{token:`Bearer ${TOKEN}`}
 })
 USER_REQUEST.interceptors.request.use((req) => {
    const { currentuser } = store.getState().user;
    
    if (currentuser.accestoken) {
      req.headers.Authorization = `Bearer ${currentuser.accestoken}`;
    }
    return req;
  });
  USER_REQUEST.interceptors.response.use(
  (res) => {
   return res;
    // console.log(res.data.products)
  },
  (error) => {
    console.log(error.response);
  }
);
