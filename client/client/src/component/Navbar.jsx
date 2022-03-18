/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react';

import styled from "styled-components";
import { Badge, makeStyles} from "@material-ui/core";
import {    ShoppingCartOutlined } from "@material-ui/icons";
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
 import { Link } from "react-router-dom";
 import {logoutuser} from  "../redux/userReducer";
 

//  import {PUBLIC_REQUEST} from "../requestMethod"
//  import { useState ,useEffect} from 'react';
 



const Container = styled.div`
  
  width:100%;z
  height:100px;
  background-color:black;
  top:0px;
  opacity:.90;
  display:inline-block;
   position:stickey;
  box-shadow: -3px 11px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: -3px 11px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: -3px 11px 5px 0px rgba(0,0,0,0.75);

  

`;
const Left = styled.div`
  flex:3; 
  display:flex;
  padding:6px;

`;
const Wraper = styled.div`
margin-top:15px;
  display:flex;
 
`;

 const SearchContainer = styled.div`
  ${'' /* width:100%;
 display: flex;
 align-items: center;
 margin-left:13px;
 ${'' /* margin-left: 25px; */}
padding:4px;
cursor:pointer;

 Input{
   
     outline:none;
      width:170%;
    height:30px;
    border-radius:10px;


  } 

`;
const Input = styled.input `
 border:none;
`;
const Center = styled.div`

 
 
  flex:1; 
 
  padding:0 15px;
   ${'' /* align-iteam:center;
   justify-content:center; */}

`;
const Right = styled.div`
max-width:100%;
 display:flex;
 flex:2;
 justify-content:space-between;
   padding:1.2rem;
`; 
const Logo = styled.div`
font-weight: 800;
font-size:40px;
color:white;
margin-right:40px;

`;
  const    MenuItem = styled.div`
    font-weight:500;
    cursor:pointer;
    color:white;
  `;
   
  const useStyles = makeStyles((theme)=>({
     mobile:{
      
        
     [theme.breakpoints.down('sm')]:{
         height:"50px",
         width:"100%",
         backgroundColor:"yellow",
         display:"flex",
        
        //  flexIteam:"flex-start"
         
      
     },
    },
     Wraper:{

       
      [theme.breakpoints.down('sm')]:{
        display:"flex",
         padding:"0px",
         margin:"0px"
         

        


      },

    },
    Left:{

       [theme.breakpoints.down('sm')]:{

         display:"flex"
       }


    },
    right:{
   
        [theme.breakpoints.down('sm')]:{

            display:"none"
        }

    },
    Center:{
        [theme.breakpoints.down('sm')]:{
            display:"none"

        }


    },
    

  }));
 const Navbar = () => {
   const quentity = useSelector(state => state.cart.quentity); // to use store  from the redux configuertion
    const dispatch  = useDispatch()
  
    const classes = useStyles();
    
   const Logoutuser = () =>{     // logout user and then reload the initial page
    
    window.localStorage.clear();
    // window.location.href = "/login";
     dispatch(logoutuser());
      

  };
  
    return (
        <div>
         
        <Container className={classes.mobile}>
         <Wraper  className={classes.Wraper}>
         <Left className={classes.Left}>
         
        <p style={{color:"white",marginTop:"10px",cursor:"pointer"}} onClick={Logoutuser} >LOGOUT</p>
           
           <SearchContainer>
            <Input placeholder="Search" />
             {/* <Search /> */}
          </SearchContainer>
          
         </Left>
        
        
         <Center className={classes.Center}>

          <Logo> D&S.</Logo>


         </Center>
         <Right className={classes.right}>
         <Link to={"/About"}>
         <MenuItem>ABOUT</MenuItem>
         </Link>
          <Link to={"/register"}>
         <MenuItem>REGISTER</MenuItem>
         </Link>
         <Link to={"/login"}>
          <MenuItem  style={{}}>SIGN IN</MenuItem>,
          </Link>
          <Link to={"/cart"}>
          <MenuItem>
            <Badge badgeContent={quentity} color="primary">
              <ShoppingCartOutlined />+
            </Badge>
          </MenuItem>
          </Link>
         </Right>
       
        </Wraper>

        </Container>

        </div>

        
    );
};

 
export default Navbar;