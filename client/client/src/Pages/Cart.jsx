import { Add, Remove } from "@material-ui/icons";
import { useSelector , useDispatch  } from "react-redux";
import styled from "styled-components";
import Announcement from "../component/AnnouncentMent";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import {USER_REQUEST} from "../requestMethod";
import { store } from "../redux/store";
import {Addproduct} from "../redux/cartredux"
import axios  from "axios";
const Container = styled.div`
  z-index:-1;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgba(82,4,6,10);
  color: white;
  font-weight: 600;
  cursor:pointer;
`;
const Cart = (props) => {
   

   const cart = useSelector(state => state.cart);
      const dispatch = useDispatch();

       const [Cartproducts , setcartproducts] = useState([]);
       useEffect(() =>{
        const canceltoken = axios.CancelToken;
        const source = canceltoken.source();
           
          const getcartproducts = async ()=>{
            const {authenticate} = store.getState().user;
            if(authenticate === true){
          const res = await USER_REQUEST.post("cart/getuserCart" , {cancelToken:source.token});
          //  const {authenticate} = store.getState().user;
          //  if(authenticate === true){
            // if response status code is 200 then set response data 
           if(res.status === 200){
              setcartproducts(res.data.products); 
           }
           
          }
       }
        
       getcartproducts()
       //  this is  the cleanup function;
          return ()=>{
           
          source.cancel();
          }
        
       },[cart.products]);

       useEffect(() =>{
        
        dispatch(Addproduct(Cartproducts))

       })
   //****************************************
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton >CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>

              {Cartproducts.flatMap(( iteam) =>(
             
          
<Product  key={iteam._id}>

  <ProductDetail>
    <Image src={iteam.img} />
    <Details>
      <ProductName>
        <b>Product:</b> {iteam.title}
      </ProductName>
      <ProductId>
        <b>ID:</b> {iteam._id}
      </ProductId>
      <ProductColor color={iteam.color} />
      <ProductSize>
        <b>Size:</b> {iteam.size}
      </ProductSize>
    </Details>
  </ProductDetail>
  <PriceDetail>
    <ProductAmountContainer>
      <Add />
     
      <ProductAmount>{iteam.quentity}</ProductAmount>
      <Remove />
    </ProductAmountContainer>
    <ProductPrice>{iteam.price}</ProductPrice>
  </PriceDetail>
</Product>
              

              ))}
           
            <Hr />
            
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.totalprice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.totalprice} </SummaryItemPrice>
            </SummaryItem>
            {/* <StripeCheckout
              name="D&S."
              billingAddress
              shippingAddress
              description={`your total ${cart.totalprice}`}
              amount={cart.totalprice*100}
              token={onToken}
              stripeKey={stripetoken}
              > */}
              
            <Button >CHECKOUT NOW</Button> 
          
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;