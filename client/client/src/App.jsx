import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductsList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import  RenderAddressForm from "./Pages/address";
import Order  from "./component/Oder"
 import About from './Pages/About'

import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";

 import { useSelector } from "react-redux";
 
 

  const App = () => {
    

    // let id = location.state._id;
    // const Navigate = useNavigate();
    const user = useSelector(state => state.user.currentuser);
    // const resister = useSelector(state => state.user.isregister);
    // const resister = useSelector(state => state.Register.RegisterUser);
   
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
       
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}  </Route>
        <Route path="/register" >
          <Register/>
         </Route>
         <Route path= "/order" >
         <RenderAddressForm >
          <Order/>
         </RenderAddressForm>
         </Route>
            <Route path="/About">
           <About/>
            </Route>
      </Switch>
         
     </Router>
    </>
  );
};
 export default App;
