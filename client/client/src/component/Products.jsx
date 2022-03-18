
import styled from "styled-components";

import Product from "./Product";
import axios  from "axios";
import { useEffect, useState } from "react";
const Container = styled.div`
z-index:1;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;



const Products = ({cat,sort,Filter})  => {

  const [product , setproducts] = useState([]);    // store all the  categories iteam products
  const [filterproducts, setfilterproducts] = useState([]);
  // FETCH THE PRODUCTS FROM API
  useEffect(() =>{

    const canceltoken = axios.CancelToken;
     const source = canceltoken.source();
    
   const getproducts =  async () =>{          // get products from the api
  
     
      try{
        const res =  await axios.get( cat ? 
                                     `https://dipankargirimodejs.herokuapp.com/api/products?category=${cat}`:
                                      "https://dipankargirimodejs.herokuapp.com/api/products",
                                      {cancelToken:source.token}
                                     );
          // setproducts(res.data);
          setproducts(res.data);
      }catch(err){
        if(axios.isCancel(err)){
          console.log("succesfull aborted")
        }
         
      }

   };
     
       getproducts();
       return () =>{
            source.cancel();
       };
       

  },[cat]);
  // filter selected categories 
     useEffect(() =>{
   cat && setfilterproducts(
     
    product.filter(item =>
    Object.entries(Filter).every(([key,value]) =>
    
    item[key].includes(value)

     )
        )
    );
     },[product,cat,Filter]);
 // sort seleted categories
 useEffect(() =>{
   
   if(( sort === "newest")){
     setfilterproducts((prev) =>
      [...prev].sort((a,b) => a.createdAt  - b.createdAt)
     );

   } else if((sort === "asc")){

    setfilterproducts((prev) =>
     [...prev].sort((a,b) => a.price - b.price)
    );
   } else {
     setfilterproducts((prev) =>
       [...prev].sort((a,b) => a.price - b.price)
     );
   }
 },[sort]);

  return (
    <Container>
      { cat ?                    // if any categories this is running
      filterproducts.map((item) => (
        <Product item={item} key={item._id} />
      )) : product         // visible the home page  some products 
          .slice(0,10)
         .map((item) => (
         <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;