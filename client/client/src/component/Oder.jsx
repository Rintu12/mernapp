
import React, { useState } from 'react'
 import  styled from 'styled-components'
 import {MaterialInput}  from "../Pages/order/meterialInput"
 import {USER_REQUEST} from "../requestMethod" 
 import { store } from "../redux/store";
import { useLocation } from 'react-router-dom';
 
const Main = styled.div`
   display:flex;
    justify-content:center;
    align-iteam:center;
    margin-top:40px;

  `;
  const FormBody  = styled.div`
  ${'' /* background:blue; */}  
   height:600px;
    ${'' /* background-color:green; */}
    box-shadow: -4px 3px 15px 10px rgba(0,0,0,0.75);
-webkit-box-shadow: -4px 3px 15px 10px
 rgba(0,0,0,0.75);
-moz-box-shadow: -4px 3px 15px 10px rgba(0,0,0,0.75);
  `
  const FormFlex = styled.div`
  display:flex;
  flex-direction:row;


  `
  const InputContainer = styled.div`
    margin-left:20px;
   width:"40%"
  `
  
  const Select = styled.div`
     display:flex;

  `
  // const Option =  styled.div`
  

  // `
  const OrderConfirm = styled.div`
    margin-top:30px;
    display:flex;
    flex:row;
     justify-content:space-between
  `
  const Button =  styled.button`
  width:130px;
  padding: 15px;
  border: 2px solid white;
  color:white;
  background-color: green;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #fb641b;
  }
  `;
  const Price = styled.div`
    display:flex;
    justify-content:center;
    align-iteam:center;
  `

  const PriceContainer = styled.div`
   width:60%;
   height:200px;
   border:4px solid #fb641b;
   display:flex;
   justify-content:center;
   align-iteam:center;

  
  `
   
   
   
export default function Order () {
     const location = useLocation();


    let id= location.state.id;
    let quantity = location.state.quantity;

    let totalPrice  = location.state.totalPrice;
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState( "");
    const [pinCode, setPinCode] = useState("");
    const [locality, setLocality] = useState("");  
    const [address, setAddress] = useState( "");
    const [alternetaddress, setaltrenetAddress] = useState("");
    const [cityDistrictTown, setCityDistrictTown] = useState( "");
    const [state, setState] = useState("");
    const [landmark, setLandmark] = useState("");
    const [alternatePhone, setAlternatePhone] = useState( "");
    const [addressType, setAddressType] = useState("");
    
    //make api request
    function ComfirmOrder(){
      // check all input field is 
      const payload = {
        address:{
        name ,
        mobileNumber,
        pinCode,
        locality,
        address,
        alternatePhone,
        alternetaddress,
        cityDistrictTown,
        state,               
        landmark,
        addressType
        },
         items:{
         productId:id,
         payablePrice:totalPrice,
         purchasedQty:quantity
  
         }
  
      }
       const {authenticate} = store.getState().user;
        if(authenticate === true){
           
            USER_REQUEST.post("/order/user/addorder" , payload)
        }
    }
   
    
  return (
    <div>
     <Main>
        <FormBody className='input_body'>
          <FormFlex>
          <InputContainer className='input_filed'  >
          <MaterialInput
              label="Name"
              value={name}
              onChange={(e) => `${setName(e.target.value)} ` }
            />
            </InputContainer>
            <InputContainer className='input_filed' >
          <MaterialInput
              label="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            </InputContainer>
          </FormFlex>
          <FormFlex>
          <InputContainer  className='input_filed' >
          <MaterialInput
              label="mobilenumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            </InputContainer>
            <InputContainer  className='input_filed' >
          <MaterialInput
              label="alternetphone"
              value={alternatePhone}
              onChange={(e) => setAlternatePhone(e.target.value)}
            />
            </InputContainer>
          </FormFlex>
          <FormFlex>
          <InputContainer  className='input_filed' >
          <MaterialInput
              label="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            </InputContainer>
            <InputContainer  className='input_filed' >
          <MaterialInput
              label="landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
            </InputContainer>
          </FormFlex>
          <FormFlex>
          <InputContainer  className='input_filed'>
          <MaterialInput
              label="pincode"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
            </InputContainer>
            <InputContainer  className='input_filed' >
          <MaterialInput
              label="locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            />
            </InputContainer>
          </FormFlex>
          <FormFlex>
          <InputContainer  className='input_filed' >
          <MaterialInput
              label="city"
              value={cityDistrictTown}
              onChange={(e) => setCityDistrictTown(e.target.value)}
            />
            </InputContainer>
            <InputContainer  className='input_filed' >
          <MaterialInput
              label="alternetaddress"
              value={alternetaddress}
              onChange={(e) => setaltrenetAddress(e.target.value)}
            />
            </InputContainer>
          </FormFlex>
             <OrderConfirm>

            <label>Address Type</label>
            <Select>
            <input
                type="radio"
                onClick={() => setAddressType("home")}
                name="addressType"
                value="home"
              />
              <span>Home</span>
             <input 
                type="radio" 
                onClick={() => setAddressType("work")}  
                name="addressType" 
                value="work"
              />
              <span>Work</span>
            </Select>
             <Button 
             className='onclick'
             onClick={ComfirmOrder}
              >
             COMFIRM
             </Button>
            </OrderConfirm>
            <Price>
             <PriceContainer>
             <div style={{
               marginTop:"70px"
             }}>
             <p style={{
               fontSize:"20px"
             }}>Total price: {totalPrice}</p>
             </div>
             </PriceContainer> 
            </Price>
         </FormBody>
        </Main>
    </div>
  )
}