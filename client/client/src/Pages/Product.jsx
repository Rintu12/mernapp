import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../component/AnnouncentMent";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Newsletter from "../component/Newsletter";
import { mobile } from "../responsive";
import { PUBLIC_REQUEST} from "../requestMethod";
import { useState , useEffect} from "react";
import { useLocation } from "react-router-dom"
import {addtocart} from "../action/cart"
import  {  MaterialButton} from "./order/meterialInput";
import { Link } from "react-router-dom";
// import { addToCart } from "../action/cartaction";
const Container = styled.div`
z-index:-1;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const Location = useLocation();
   const _id = Location.pathname.split("/")[2];
   const [product , setproducts] = useState({});
   const [quentity,setquentity]  = useState(1);
   const [size,setsize]  = useState("");
   // fetch the products   from the db 
   useEffect(() => {
            
      const getproducts = async () =>{

        try{
          const res = await PUBLIC_REQUEST.get("/products/find/"+_id);
          setproducts(res.data);
          // console.log(res)


        }catch(err){
         

         };
      }
      getproducts();

    //  console.log(getproducts())
     
   }, [_id])

 // ffuntion to the quentit  to  this product
 const  quentityhowmouch =  (type) =>{
  
 // check if the type is desc
 if(type  === "dese"){
     
   quentity > 1 && setquentity(quentity-1);
 }else {
    setquentity(quentity+1)
 }
 };
 
 // handel cart product  click tha cart buttton to add quentity to the cart  badge
  function handelCart(){
     
      addtocart(_id , quentity )
     
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
           {product.desc}
          </Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle >Color</FilterTitle>
              {product.color?.map((c) =>(      /// map   throw all color to set this color to this products
                <FilterColor color={c}  key={c}/>
              ))}
              
            </Filter> 
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) =>  setsize(e.target.value ) }>
              {product.size?.map((s) =>(         // map throw all size to set  this size
                <FilterSizeOption key={s}>{s}</FilterSizeOption>

              ))}
              
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => quentityhowmouch("dese")} />
              <Amount>{quentity}</Amount>
              <Add onClick={() => quentityhowmouch("ase")} />
            </AmountContainer>
            <Button onClick={()=> handelCart()}>ADD TO CART</Button>
             <Link to={{pathname:"/order" ,
              state:{id:_id , quantity:quentity, totalPrice:quentity * product.price}}}><MaterialButton
             style={{
              marginLeft:"20px"

             }}
              title="BUY :)"/> </Link>
          </AddContainer>
          </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;