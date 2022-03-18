import { useState } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import {useDispatch, useSelector} from "react-redux"
import { login } from "../apiCalls";
import { Link } from "react-router-dom";


 const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://coreldrawdesign.com/resources/previews/preview-winter-sale-banner-fashion-free-vector-design--1607009989.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

 const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
 `;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

 const Form = styled.form`
  display: flex;
  flex-direction: column;
 `;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color:green;
    cursor:not-allowed;
  }
`;

const Linkd = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color:green;
`;
const Error = styled.span`
color:red;

`

const Login = () => {

  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const {isfetching,error}  = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function handelClic(e){
  e.preventDefault();
  login(dispatch,{username,password});
  // window.location.reload()
  };
  return (
     <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
         <Form>
           <Input placeholder="username" 
            onChange={(e) => setusername(e.target.value)}
           />
           <Input placeholder="password"
           type="password"
           onChange={(e) => setpassword(e.target.value)}
           />
           <Button onClick={handelClic} disabled = {isfetching} >LOGIN</Button>
           {error && <Error>something went wrong</Error>}
           <Link style={{color:"red"}} to={"/"}>DO NOT YOU REMEMBER THE PASSWORD?</Link>
           <Link to={"/register"}>
           <Linkd>CREATE A NEW ACCOUNT</Linkd>
           </Link>
           </Form>
      </Wrapper>
     </Container>
  );
};

export default Login;





