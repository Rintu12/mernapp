import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resister} from "../apiCalls";
 



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
   text-align:center;
  font-size: 24px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
display:absolute;
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-left:8rem;
`;
const Error = styled.span`

//display:none;
 display:relative;
color:red;
width: 100%;
transition: all 1s ease-Out;
bottom: 0;
`;

const Succes  = styled.span`

align-iteam:center;
color:green;
`;
  
const Register = () => {
  const [username , setusername] = useState("");
  const [email , setemail] = useState("");
  const [password , setpassword] = useState("");
  const dispatch = useDispatch();
  const { error , Email } = useSelector(state => state.user);
  // check  input filed
    function checkInput(){
     const inputs =  [...document.querySelectorAll("Input")];
      inputs.every(input => input.reportValidity())
    }
  const handelSubmit = (e)=>{
  
   e.preventDefault();
   checkInput();
   resister(dispatch,{username,email,password});
  
  }; 
  return ( 
    
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
         <Form>
         
          <Input placeholder="username" onChange={(e) => setusername(e.target.value)} required />
          <Input placeholder="email" onChange={(e) => setemail(e.target.value)} required />
          {
             Email ?<Error > email is invalid </Error> : null 
          }
          
          <Input placeholder="password" onChange={(e) => setpassword(e.target.value)} required />
          <Input placeholder="confirm password" />                          
           {
            error ? <Error > opps!! you are not SUCCESFULLY resiter</Error>
           :   <Succes> SUCCESFULLY REGISTER </Succes> 
           
           }
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <Link to={"/#"}>PRIVACY POLICY</Link>
          </Agreement>
          <Button onClick={handelSubmit}> CREATE</Button>
         </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;