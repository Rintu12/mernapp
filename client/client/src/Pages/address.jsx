  import  React from 'react'
 
import Navbar from "../component/Navbar";
import Footer from  "../component/Footer";
  const   RenderAddressForm = ({children}) => {
    return (
      // add order and save the order to the database
        <>
        <Navbar/>
         <div>{children}</div>
        <Footer/>

        </>
      
    );
  };
export default RenderAddressForm;

