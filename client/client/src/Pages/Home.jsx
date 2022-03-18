
import React from "react";                    
//import styled from "styled-components";
// import Announcement from "../component/AnnouncentMent";
import Categories from "../component/Categories";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import Products from "../component/Products";
import Slider from "../component/Slider";
import './Home.css';
// import HumbergurModel from "../component/humbergurModel";
 
const Home = () => {
   
  return (
    <div>
      <Navbar/>
      {/* <HumbergurModel/> */}
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;