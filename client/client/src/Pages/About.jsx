import React, { Fragment } from 'react';
 import Navbar from '../component/Navbar';
 import Footer from '../component/Footer';
 import Accordian from '../component/about/Accordian';
 const About = () =>{

   return(
    <>
       <Navbar/>
       <Fragment>
       <Accordian  title="what is D&S ?" content=" React (also known as React.js or ReactJS) is a free and open-source <p>front-end JavaScript library[3] for building user interfaces<p/> based on UI components. It is maintained by Meta (formerly Facebook) and a <p>community of individual developers and companies.[4][5][6] React can be used as a base in th<p/>"/>
       <Accordian  title='what product store?' content='React (also known as React.js or ReactJS) is a fre'/>
       <Accordian  title="special offer!" content=" yes ! JavaScript library[3] for building user interfaces<p> based on UI components. It is maintained by Meta (formerly Facebook)<p/> and a <p>community of individual developers and companies.[4][5][6] React can be used as a base in <p/>" />
       <Accordian title="home delivery ?" content="yes !!!!!! " />
       <Accordian  title= "about D&S." content="for building user interfaces<p> based on UI components. "/>
       <Accordian  title="store address " content=" demo a free and open-source <p>front-end JavaScript library[3] for building user"/>
       
       </Fragment>
       <Footer/>
    </>
   )
 }
 
 export default About