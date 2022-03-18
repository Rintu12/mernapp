 import React ,{useState , useRef} from 'react';
 import Chevron from './chevron';
 import './accodian.css'
 const Accordian = ({title , content })=>{
    const [activeState , setactive]  = useState("");
    const [hightState  , sethightState] = useState('0px');
    const [Roted , setroted] = useState("accordian_roted");
    const Content = useRef(null); // declear  useRef hooks 
   // this is  the main body  to  this body in this componet
    function tooglebutton(){
      setactive(activeState === ""  ? "active": "");
     sethightState(activeState === "active" ? "0px": `${Content.current.scrollHeight}px `) // this  is the setheight usestate to calculate the total hight
      setroted(activeState === 'active' ? `${"accordian_roted " }` : "accordian_roted roted")
    //  console.log(hightState)
    }
      return(

        <>
       <button className={`accordian-button ${activeState} `} onClick = {tooglebutton}>
       <p className='accordian-title'>{ title}</p>
        <Chevron className= {`${Roted}`} width={10} fill={'#777'}  />
       </button> 
       <div ref={Content}  style={{ maxHeight:`${hightState}`}} className= 'accodian-content' >
       <div  className='accordian-text'
        dangerouslySetInnerHTML={{__html:content}}
       />
       </div>
        </>

      )
  }
  export default Accordian;




